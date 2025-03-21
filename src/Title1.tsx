

type theTitle = {
    text: string,
    color: string
}

function First(props: theTitle) {
    const titleColor1 = `text-${props.color}`

    return (
        <div className="" >
            <h1 className={`text-5xl ${titleColor1} `} > {props.text} </h1>
        </div>
    )
}


export default First
