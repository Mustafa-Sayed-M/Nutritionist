import { NavLink } from "react-router-dom";

function ContactLink({ className = "" }) {
    return (
        <NavLink
            to={'/contact'}
            className={`block py-2 px-4 rounded-md bg-green-70 text-grey-15 font-semibold text-nowrap ${className}`}
        >
            Contact Us
        </NavLink>
    )
}

export default ContactLink;