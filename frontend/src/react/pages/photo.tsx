import {useState, useEffect} from "react";

function PhotoPage() {

    const [ bg, setBG ] = useState<string>();

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * Number(max));
    }

    useEffect(() => {
        const bg_array = [
            'https://sun9-69.userapi.com/impg/yal98wCo7YRrL1FB2h1Mp7l5hUq05AOCId2sPw/GwhjP95U1Ts.jpg?size=499x725&quality=96&sign=8ec705c5d671832b9ccc21cc97bdc3b1&type=album',
            "https://sun9-17.userapi.com/impg/m5o--1xm37B9G8Ha36kUUd_UqlduHg-erb-M9A/CT88oTl6zS8.jpg?size=1080x1920&quality=96&sign=34267cfe17df9b7fb5007172438487e7&type=album",
            "https://sun9-14.userapi.com/impg/DWjA60D4SOrwoFGCIcHhAsnopzq6UfxhVN5d9g/P_efPXkkfDQ.jpg?size=1080x1920&quality=96&sign=224567626010eca206a7a8630ab38798&type=album",
            "https://sun9-66.userapi.com/impg/cTLtzma4ikKY6cv_LNq9_0X-uj3aQIWuC5SVnQ/cFO9toCUXYs.jpg?size=1080x1920&quality=96&sign=06f6b93b70c6a552fc6c273a0aa92b43&type=album"
        ]

        const img = bg_array[getRandomInt(bg_array.length)];

        setBG(img);
    }, []);


    return (
        <>
            <div className="title">
                <img className='photo' src={bg}/>
            </div>

            <img className='background' src={bg}/>
        </>
    )
}

export default PhotoPage;