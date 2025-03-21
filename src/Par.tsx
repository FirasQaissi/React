type ParProps = {
    color: string;
};
const Par = (props: ParProps) => {
    const textColor = `text-${props.color}`;
    return (
        <p className={`text-2xl ${textColor}`}>
            {"Lorem Ipsum is now worth for everbody can hear US ".repeat(5)}
        </p>
    );
};
export default Par;