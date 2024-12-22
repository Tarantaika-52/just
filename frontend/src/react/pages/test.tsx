import BottomBar from "../../widgets/bottom_bar/bottom_bar.tsx";
import RandomBackground from "../../widgets/random_background.tsx";
import {get_random_quote} from "../../features/api/text_worker.ts";
import {useEffect, useState} from "react";

function DebugPage(){

    useEffect(() => {
        (async () => {
            const q = await get_random_quote();
            set_quote(q);
        })();
    },[]);

    const [quote, set_quote] = useState("");

    return(
        <>
            <div className="title">
            <h1 className='comming_soon_title'>{String(quote)}</h1>
            </div>

            <BottomBar text={"to home"} link={"/"}/>

            <RandomBackground />
        </>
    )
}

export default DebugPage;