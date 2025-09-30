import NavMenuToggler from "./NavMenuToggler";
import ContactLink from "./ContactLink";

function NavUtilities() {
    return (
        <div className="nav-utilities flex items-center gap-3">
            {/* Contact Link */}
            <ContactLink
                className="max-sm:hidden"
            />
            {/* Nav Menu Toggler */}
            <NavMenuToggler />
        </div>
    )
}

export default NavUtilities;