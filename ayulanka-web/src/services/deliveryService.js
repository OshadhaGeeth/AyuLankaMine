import axios from 'axios';
const BASE_URL_DEL = `http://localhost:3003/delivery`

export const viewDeliveryService = async () => {

    try {
        let response = await axios.get(BASE_URL_DEL + '/view');

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

export const updateDeliveryService = async (payload) => {

    try {
        let response = await axios.put(BASE_URL_DEL + '/updateDelivery', payload);

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

export const deleteDeliveryService = async (payload) => {
    console.log("pay>>", payload)
    try {
        let response = await axios.post(BASE_URL_DEL + '/deleteDelivery', payload);

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