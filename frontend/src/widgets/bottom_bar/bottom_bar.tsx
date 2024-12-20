function BottomBar(props: {
    text: string,
    link: string,
}) {

    return (

        <div className="sub">
            <h4 className='subtitle'>{"b: ade6eb"}</h4>

            <h4 className='subtitle'>{"/"}</h4>
            <h4 className='subtitle'>{"in-dev"}</h4>

            <h4 className='subtitle'>{"/"}</h4>
            <a className='subtitle' href={props.link}>{props.text}</a>
        </div>
    )
}

export default BottomBar;