import { Link } from "react-router-dom";

/**
 * @typedef {"primary" | "secondary" | "ghost"} ButtonVariant
 */

/**
 * @param {Object} props
 * @param {string} [props.to]
 * @param {string} [props.className]
 * @param {ButtonVariant} [props.variant]
 */

function Button({ to = "", className = "", variant = "primary", children, ...props }) {

    const buttonVariant = {
        primary: `bg-green-70`,
        secondary: `bg-dark-green-20`,
        ghost: `bg-transparent`
    };

    const finalClassName = `py-3 px-5 rounded-md font-semibold ${className} ${buttonVariant[variant]}`;

    return (
        to ? (
            <Link
                to={to}
                {...props}
                className={finalClassName}
            >
                {children}
            </Link>
        ) : (
            <button
                {...props}
                type={props.type || "button"}
                className={finalClassName}
            >
                {children}
            </button>
        )
    )
}

export default Button;