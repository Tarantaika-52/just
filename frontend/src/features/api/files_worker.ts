import {API_URL} from "./Public.ts";

export async function get_images_list() {
    const _response = await fetch(API_URL  + "f/get/img/ls");
    const data = await _response.json();

    return data;
}