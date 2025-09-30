import AppLogo from "@components/ui/AppLogo";
import NavLinks from "./components/NavLinks";
import NavUtilities from "./components/NavUtilities";

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