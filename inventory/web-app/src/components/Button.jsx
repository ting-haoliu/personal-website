function Button({
    children,
    className,
    disabled = false,
    onClick,
    type = "button",
    visual = "button",
}) {
    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}
            type={type}
            visual={visual}
        >
            {children}
        </button>
    );
}

export default Button;