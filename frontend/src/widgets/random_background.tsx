import {useEffect, useState} from "react";
import {get_images_list} from "../features/api/files_worker.ts";
import {API_URL} from "../features/api/Public.ts";

export default function RandomBackground(){

    const [isLoading, setIsLoading] = useState(true);
    const [bg_array, set_bg_array] = useState([]);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const imgs = await get_images_list();

            console.log(imgs);

            set_bg_array(imgs);
            setIsLoading(false);
        })();
    }, [])

    function getRandomInt(max:number) {
        return Math.floor(Math.random() * Number(max));
    }

    if (isLoading) {
        return <></>;
    }

    return (
        <>
            {!imageLoaded && <></>}
            <img
                className='background'
                src={`${API_URL}f/get/img/${bg_array[getRandomInt(bg_array.length)]}`}
                alt="Random Background"
                onLoad={() => setImageLoaded(true)}
                style={{ display: imageLoaded ? 'block' : 'none' }}
            />
        </>
    );
}