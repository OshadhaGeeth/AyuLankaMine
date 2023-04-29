import axios from 'axios';
const BASE_URL = `http://localhost:3003/order`

export const createOrder = async (paymentPayload) => {
    console.log(">>>>>", paymentPayload);
    try {
        const response = await axios.post(BASE_URL + '/addOrder', paymentPayload);
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const createDilerveryForOrderService = async (paymentPayload) => {

    try {
        const response = await axios.post(BASE_URL + '/addDelivery', paymentPayload);
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const viewOrderService = async () => {

    try {
        let response = await axios.get(BASE_URL + '/view');

        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const updateOrderService = async (payload) => {

    try {
        let response = await axios.put(BASE_URL + '/updateOrder', payload);

        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const deleteOrderService = async (payload) => {
    console.log("pay>>", payload)
    try {
        let response = await axios.post(BASE_URL + '/deleteOrder', payload);

        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}