export default bookthatapp;
export type TGetBlocks = {
    external_id: number;
    start: string;
    finish: string;
    resource_ids?: number[];
    location_ids?: number[];
    interval?: number;
};
export type TGetReservation = (data: {
    [x: string]: any;
    id: number;
}) => Promise<any>;
/**
 * Root Object that holds methods to expose for API consumption
 */
export type TBTA = {
    init: (t: string, config?: any) => TBTA;
    makeRequest: Function;
    configure: Function;
    getConfig: Function;
    headers: Function;
    auth: Function;
    setToken: Function;
    getShop: Function;
    getReservations: Function;
    getReservation: TGetReservation;
    createReservation: Function;
    confirmReservation: Function;
    updateReservation: Function;
    deleteReservation: Function;
    getBookings: Function;
    getBooking: Function;
    createBooking: Function;
    updateBooking: Function;
    deleteBooking: Function;
    getBlackouts: Function;
    getBlackout: Function;
    createBlackout: Function;
    updateBlackout: Function;
    deleteBlackout: Function;
    getProducts: Function;
    getProduct: Function;
    getFrames: Function;
    getCourseFrames: Function;
    getBlocks: (data: TGetBlocks) => Promise<any>;
    search: Function;
    getLocationInventories: Function;
    updateLocationInventories: Function;
    getLocations: Function;
};
/**
 * @type {TBTA}
 */
declare const bookthatapp: TBTA;
