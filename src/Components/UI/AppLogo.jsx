import { Link } from "react-router-dom";

function AppLogo({ className = "" }) {
    return (
        <Link
            to={'/'}
            className={`app-logo ${className}`}
        >
            <picture>
                <source
                    srcSet="/assets/images/logo-mobile.png"
                    media="(max-width: 768px)"
                />
                <source
                    srcSet="/assets/images/logo-laptop.png"
                    media="(max-width: 1024px)"
                />
                <img
                    src="/assets/images/logo-desktop.png"
                    alt="App Logo"
                />
            </picture>
        </Link>
    )
}

export default AppLogo;