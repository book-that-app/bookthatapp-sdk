export default bookthatapp;
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
    getReservation: Function;
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
    getBlocks: Function;
    search: Function;
    getLocationInventories: Function;
    updateLocationInventories: Function;
    getLocations: Function;
};
/**
 * @type {TBTA}
 */
declare const bookthatapp: TBTA;
