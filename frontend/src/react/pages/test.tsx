import BottomBar from "../../widgets/bottom_bar/bottom_bar.tsx";

function DebugPage(){

    return(
        <>
            <div className="title">
            <h1 className='comming_soon_title'>{"It's just a test page"}</h1>
            </div>

            <BottomBar text={"to home"} link={"/"}/>

            <img className='background' src="https://i.pinimg.com/originals/43/2d/44/432d441351cf372afa7e25020b784bdb.gif"/>
        </>
    )
}

export default DebugPage;