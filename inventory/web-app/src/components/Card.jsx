function Card({
    className,
    title, pic,
    alt, text,
}) {
    return (
        <div className={className}>
            <h3 className={`${className}--title`}>{title}</h3>
            <img
                className={`${className}--img`}
                src={pic}
                alt={alt}
            />
            <p className={`${className}--text`}>
                {text}
            </p>
        </div>
    );
}

export default Card;