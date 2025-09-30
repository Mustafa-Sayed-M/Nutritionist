import { useAppContext } from "@contexts/AppContext";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import ContactLink from "./ContactLink";
import links from "@data/navLinks.json";

function NavLinks() {

    const { navbarMenuIsOpen, setNavbarMenuIsOpen } = useAppContext();
    const navLinksRef = useRef(null);

    useEffect(() => { // Handle User Click Outdoor Navbar Menu:
        const handleClickOutdoor = () => {
            setNavbarMenuIsOpen(false);
        }

        document.addEventListener("click", handleClickOutdoor);
        return () => document.removeEventListener("click", handleClickOutdoor);

    }, [setNavbarMenuIsOpen]);

    useEffect(() => { // Handle Animation Transition When User Resize Window:
        const handleResizeWind = () => {
            if (navLinksRef.current) {
                if (window.innerWidth >= 1024) {
                    navLinksRef.current.classList.remove("transition")
                } else {
                    navLinksRef.current.classList.add("transition")
                }
            }
        }

        window.addEventListener("resize", handleResizeWind);
        return () => window.removeEventListener("resize", handleResizeWind);
    }, []);

    return (
        <div
            ref={navLinksRef}
            className={`nav-links max-lg:absolute max-lg:left-0 max-lg:w-full max-lg:top-full max-lg:mt-3 max-lg:z-50 transition ${navbarMenuIsOpen ? "" : "max-lg:pointer-events-none max-lg:opacity-0 max-lg:-translate-y-2"}`}
        >
            <div className="max-lg:container">
                <ul className="flex lg:items-center gap-2 max-lg:flex-col max-lg:bg-dark-green-15 max-lg:p-3 max-lg:rounded-md">
                    {
                        links.map((link, index) => (<li key={index}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) => `transition block p-2 rounded-md font-semibold ${isActive ? "text-green-70 max-lg:bg-dark-green-25" : "sm:hover:text-green-70 max-lg:sm:hover:bg-dark-green-25"}`}
                            >{link.label}</NavLink>
                        </li>))
                    }
                    {/* Contact Link */}
                    <li className="sm:hidden">
                        <ContactLink />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavLinks;