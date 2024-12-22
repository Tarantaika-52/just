import {VERSION_HASH} from "../../features/api/Public.ts";

function BottomBar(props: {
    text: string,
    link: string,
}) {

    return (

        <div className="sub">
            <h4 className='subtitle'>{`b: ${VERSION_HASH}`}</h4>

            <h4 className='subtitle'>{"/"}</h4>
            <a className='subtitle' href={props.link}>{props.text}</a>
        </div>
    )
}

export default BottomBar;