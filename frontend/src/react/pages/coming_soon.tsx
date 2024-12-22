import BottomBar from "../../widgets/bottom_bar/bottom_bar.tsx";
import {useEffect} from "react";
import RandomBackground from "../../widgets/random_background.tsx";

function ComingSoonPage(){

    useEffect(() => {
        console.log("<3");
    },[]);

    // const bg_array = [
    //     'https://i.pinimg.com/originals/11/f3/f3/11f3f352a9fc8c297f02cfc993fe06b3.gif',
    //     "https://i.pinimg.com/originals/50/53/5c/50535c6c1c6c76f3719d975a272945c7.gif",
    //     "https://i.pinimg.com/originals/d3/5c/cd/d35ccd51f367825006f3534751e87154.gif",
    //     "https://i.pinimg.com/originals/66/e8/49/66e8498d24c8e5b03ffd6647cd8e6076.gif"
    // ]

    return(
        <>
            <div className="title">
                <h1 className='comming_soon_title'>{"Coming soon..."}</h1>
            </div>

            <BottomBar text={"to quotes"} link={"/quote"}/>
            <RandomBackground/>
        </>
    )
}

export default ComingSoonPage;