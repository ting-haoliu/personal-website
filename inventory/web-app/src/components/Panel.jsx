function Panel({
    className,
    pic,
    alt,
    text1,
    text2
}) {
    return (
        <div className={className}>
            <img className={`${className}--img`}
                src={pic}
                alt={alt}
            />
            <div className={`${className}--textContainer`}>
                <p className={`${className}--text`}>
                    {text1}
                </p>
                <p className={`${className}--text`}>
                    {text2}
                </p>
            </div>
        </div>
    );
}

export default Panel;