type options = {
    text: string,
    className?: string;
}

function F1(props: options) {
    return (
        <>
            <h1 className={props.className}  >{props.text}</h1>
        </>
    )
}

export default F1