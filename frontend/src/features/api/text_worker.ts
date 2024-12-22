import {API_URL} from "./Public.ts";

export async function get_random_quote() {
    const _response = await fetch(API_URL  + "t/get/quote/random");
    const data = await _response.json();

    return data;
}