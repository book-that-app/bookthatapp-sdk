'use strict';
/*!
 * BookThatApp JavaScript SDK
 * Version: 1.0
 * http://www.bookthatapp.com
 *
 * Copyright 2017 Zetya, Inc.
 */

require('es6-promise').polyfill();
import axios from 'axios'
import base64 from 'base-64'

function BookThatApp() {
    /**
     * Auth variables for login gated API methods
     *
     * @type {String}
     */
    var token = '';
    var includes = [];
    var headers = {};

    /**
     * Default config
     *
     * @type {Object}
     */
    var config = {
        apiBaseUrl: 'https://api.bookthatapp.com/',
        apiVersion: 'v1'
    };

    /**
     * Make absolute URL for API call
     *
     * @type {Function}
     * @return {String}
     */
    var makeUrl = function (endpoint) {
        return [config.apiBaseUrl, config.apiVersion, endpoint].join('');
    };

    /**
     * Root Object that holds methods to expose for API consumption
     *
     * @type {Object}
     */
    var BTA = {};

    /**
     * Initialize library with a token
     *
     * @type {Object}
     * @return {Promise}
     */
    BTA.init = function (t, config) {
        token = t;
        BTA.configure(config);
        return BTA;
    };

    /**
     * Prepare and make HTTP request to API
     *
     * @type {Object}
     * @return {Promise}
     */
    BTA.makeRequest = function(args) {
        // construct URL with base, version and endpoint
        args.url = makeUrl(args.url);

        // add http headers if applicable
        args.headers = args.headers || headers || {};

        if (token) {
            args.headers['Authorization'] = 'Bearer ' + token;
        }

        args.headers['Content-Type'] = 'application/json';

        // reset headers
        if (Object.keys(headers).length > 0) {
            headers = {};
        }

        // register response interceptor for data manipulation
        var interceptor = axios.interceptors.response.use(function (response) {
            if (response.data && response.data.data) {
                response.data = response.data.data;
            }
            return response;
        }, function (error) {
            return Promise.reject(error);
        });

        // execute request!
        var request = axios(args);

        // deregister response interceptor
        axios.interceptors.response.eject(interceptor);

        return request;
    };

    /**
     * Overwrite default config with supplied settings
     *
     * @type {Function}
     * @return {Object}
     */
    BTA.configure = function (custom) {
        for (var attr in custom) {
            config[attr] = custom[attr];
        }

        return config;
    };

    /**
     * Returns the current config
     *
     * @type {Function}
     * @return {Object}
     */
    BTA.getConfig = function () {
        return config;
    };

    /**
     * Add supplied headers to the next request (fluent/chainable return)
     *
     * @type {Function}
     * @return {Object}
     */
    BTA.headers = function(data) {
        for (var attr in data) {
            headers[attr] = data[attr];
        }

        return this;
    };

    /**
     * Authenticate to retrieve token for future calls.
     *
     * Pass in api key and api secret: <code>{key: '123', password: '321'}</code>
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.auth = function(data) {
        var r = BTA.makeRequest({
            url: '/auth/',
            method: 'post',
            data: {auth: data}
        });

        r.then(function (response) {
            var token = response.data.jwt;
            BTA.setToken(token);
        }).catch(function (e) {
            BTA.setToken('');
        });

        return r;
    };

    /**
     * Set the active token manually (happens automatically on auth())
     *
     * @type {Function}
     */
    BTA.setToken = function (jwt) {
        token = jwt;
    };

    /**
     * Returns the current active shop
     *
     * @type {Function}
     * @return {Object}
     */
    BTA.getShop = function () {
        if (token == '') return '';

        var payload = JSON.parse(base64.decode(token.split('.')[1]));
        return payload.shop;
    };

    /**
     * Get list of reservations
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.getReservations = function(data) {
        return BTA.makeRequest({
            url: '/reservations/',
            method: 'get',
            params: data
        });
    };

    /**
     * Get specific reservation
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.getReservation = function(data) {
        return BTA.makeRequest({
            url: '/reservations/' + data.id,
            method: 'get',
            params: data
        });
    };

    /**
     * Create a new reservation
     * @type {Function}
     * @return {Promise}
     */
    BTA.createReservation = function(data) {
        return BTA.makeRequest({
            url: '/reservations',
            method: 'post',
            data: data
        });
    };

    /**
     * Confirm a reservation. If successful it returns an array of bookings.
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.confirmReservation = function(data) {
        return BTA.makeRequest({
            url: '/reservations/' + data.id + '/confirm',
            method: 'put',
            data: data
        });
    };

    /**
     * Update settings for a specific reservation
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.updateReservation = function(data) {
        var slug = data.id;
        delete data.id;

        return BTA.makeRequest({
            url: '/reservations/' + slug,
            method: 'put',
            data: data
        });
    };

    /**
     * Delete a reservation
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.deleteReservation = function(data) {
        var slug = data.id;
        delete data.id;

        return BTA.makeRequest({
            url: '/reservations/' + data.slug,
            method: 'delete'
        });
    };

    /**
     * Get list of bookings
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.getBookings = function(data) {
        return BTA.makeRequest({
            url: '/bookings/',
            method: 'get',
            params: data
        });
    };

    /**
     * Get specific booking
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.getBooking = function(data) {
        return BTA.makeRequest({
            url: '/bookings/' + data.id,
            method: 'get',
            params: data
        });
    };

    /**
     * Create a new booking
     * @type {Function}
     * @return {Promise}
     */
    BTA.createBooking = function(data) {
        return BTA.makeRequest({
            url: '/bookings/new',
            method: 'post',
            data: data
        });
    };

    /**
     * Update a booking
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.updateBooking = function(data) {
        var slug = data.id;
        delete data.id;

        return BTA.makeRequest({
            url: '/bookings/' + slug,
            method: 'put',
            data: data
        });
    };

    /**
     * Delete a booking
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.deleteBooking = function(data) {
        var slug = data.id;
        delete data.id;

        return BTA.makeRequest({
            url: '/bookings/' + data.slug,
            method: 'delete'
        });
    };

    /**
     * Get list of blackouts
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.getBlackouts = function(data) {
        return BTA.makeRequest({
            url: '/blackouts/',
            method: 'get',
            params: data
        });
    };

    /**
     * Get specific blackout
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.getBlackout = function(data) {
        return BTA.makeRequest({
            url: '/blackout/' + data.id,
            method: 'get',
            params: data
        });
    };

    /**
     * Create a new blackout
     * @type {Function}
     * @return {Promise}
     */
    BTA.createBlackout = function(data) {
        return BTA.makeRequest({
            url: '/blackout/new',
            method: 'post',
            data: data
        });
    };

    /**
     * Update a blackout
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.updateBlackout = function(data) {
        var slug = data.id;
        delete data.id;

        return BTA.makeRequest({
            url: '/blackout/' + slug,
            method: 'put',
            data: data
        });
    };

    /**
     * Delete a blackout
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.deleteBlackout = function(data) {
        var slug = data.id;
        delete data.id;

        return BTA.makeRequest({
            url: '/blackout/' + data.slug,
            method: 'delete'
        });
    };

    /**
     * Get list of products
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.getProducts = function(data) {
        return BTA.makeRequest({
            url: '/products',
            method: 'get',
            params: data
        });
    };

    /**
     * Get specific product
     *
     * @type {Function}
     * @return {Promise}
     */
    BTA.getProduct = function(data) {
        return BTA.makeRequest({
            url: '/products/' + data.id,
            method: 'get',
            params: data
        });
    };

    BTA.getFrames = function(data) {
        return BTA.makeRequest({
            url: '/frames/',
            method: 'get',
            params: data
        });
    };

    BTA.search = function(data) {
        return BTA.makeRequest({
            url: '/search/',
            method: 'get',
            params: data
        });
    }

    BTA.getProductInfor = function (data) {
        return BTA.makeRequest({
            url: '/frames/appointment_timeslot',
            method: 'get',
            params: data
        });
    }

    return BTA;
}

export default new BookThatApp();
