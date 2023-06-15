/**
 * @typedef {{
 * external_id: number
 * start: string
 * finish: string
 * resource_ids?: number[]
 * location_ids?: number[]
 * interval?: number
 * }} TGetBlocks
 */

/**
 * @typedef {(data: { id: number, [x: string]: any }) => Promise<any>} TGetReservation
 */

/**
 * Root Object that holds methods to expose for API consumption
 * @typedef {{
 * init: (t:string, config?:Object) => TBTA
 * makeRequest: Function
 * configure: Function
 * getConfig: Function
 * headers: Function
 * auth: Function
 * setToken: Function
 * getShop: Function
 * getReservations: Function
 * getReservation: TGetReservation
 * createReservation: (data: TBtaCreateReservationRequest) => Promise<any>
 * confirmReservation: Function
 * updateReservation: Function
 * deleteReservation: Function
 * getBookings: Function
 * getBooking: Function
 * createBooking: Function
 * updateBooking: Function
 * deleteBooking: Function
 * getBlackouts: Function
 * getBlackout: Function
 * createBlackout: Function
 * updateBlackout: Function
 * deleteBlackout: Function
 * getProducts: Function
 * getProduct: Function
 * getFrames: Function
 * getCourseFrames: Function
 * getBlocks: (data: TGetBlocks) => Promise<any>
 * search: Function
 * getLocationInventories: Function
 * updateLocationInventories: Function
 * getLocations: Function
 * getCustomers: (data: { [x: string]: any }) => Promise<any>
 * getCustomer: (data: { id: number, [x: string]: any }) => Promise<any>
 * createCustomer: (data: TBtaCreateCustomerRequest) => Promise<TBtaCustomer>
 * }} TBTA
 */

/**
 * @typedef {{
 * first_name: string
 * last_name?: string
 * email: string
 * phone?: string
 * }} TBtaCreateCustomerRequest
 */

/**
 * @typedef {{
 * id: number
 * shop_id: number
 * external_id: number
 * first_name: string
 * last_name?: string
 * email: string
 * phone?: string
 * note?: string
 * bookings_count?: number
 * created_at: string
 * updated_at: string
 * external_signature: string
 * }} TBtaCustomer
 */

/**
 * @typedef {{
 * guests: [{
 * first_name?: string
 * last_name?: string
 * email: string
 * phone?: string
 * }]
 * items: [{
 * external_id: number;
 * variant_id: number;
 * quantity: number;
 * start: string;
 * }]
 * }} TBtaCreateReservationRequest
 */

export {};
