import {useEffect, useState} from "react";
import {get_images_list} from "../features/api/files_worker.ts";
import {API_URL} from "../features/api/Public.ts";

export default function RandomBackground(){

    useEffect(() => {
        (async () => {
            const boards = await get_images_list();
            set_bg_array(boards);
        })();
    }, [])

    const [bg_array, set_bg_array] = useState([]);

    function getRandomInt(max:number) {
        return Math.floor(Math.random() * Number(max));
    }

    return (
        <img className='background' src={`${API_URL}f/get/img/${bg_array[getRandomInt(bg_array.length)]}`}/>
    )
}