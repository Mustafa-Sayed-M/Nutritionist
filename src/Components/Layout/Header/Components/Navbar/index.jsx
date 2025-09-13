import AppLogo from "@components/UI/AppLogo";
import NavLinks from "./Components/NavLinks";
import NavUtilities from "./Components/NavUtilities";

function Navbar() {
    return (
        <nav className="py-5 relative">
            <div className="container flex items-center justify-between">
                {/* App Logo */}
                <AppLogo />
                {/* Nav Links */}
                <NavLinks />
                {/* Nav Utilities */}
                <NavUtilities />
            </div>
        </nav>
    )
}

export default Navbar;