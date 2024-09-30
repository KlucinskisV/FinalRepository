import { root_url } from "./rootUrl"

const send_discount_url = root_url + '/sale/send'
const send_order_url = root_url + '/order/send'

export const send_discount_request = (phone) => {
    fetch(send_discount_url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(phone)
    })
        .then(res => res.json())
        .then(data => console.log('Request sent', data))
        .catch(error => console.error('Error: ', error.message))
}

export const send_order = (phone) => {
    fetch(send_order_url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(phone)
    })
        .then(res => res.json())
        .then(data => console.log('Request sent', data))
        .catch(error => console.error('Error: ', error))
}