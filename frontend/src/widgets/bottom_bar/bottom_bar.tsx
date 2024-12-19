function BottomBar(props: {
    text: string,
    link: string,
}) {

    return (

        <div className="sub">
            <a className='subtitle' href='https://github.com/Tarantaika-52/just'>{"github"}</a>
            <h4 className='subtitle'>{"/"}</h4>
            <h4 className='subtitle'>{"80d8e5"}</h4>
            <h4 className='subtitle'>{"/"}</h4>
            <a className='subtitle' href={props.link}>{props.text}</a>
            <h4 className='subtitle'>{"/"}</h4>
            <a className='subtitle' href={"/api"}>{"api"}</a>
        </div>
    )
}

export default BottomBar;