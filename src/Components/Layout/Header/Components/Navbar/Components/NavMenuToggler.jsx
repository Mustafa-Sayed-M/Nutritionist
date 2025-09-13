import { useAppContext } from "@contexts/AppContext";

function NavMenuToggler() {

    const { navbarMenuIsOpen, setNavbarMenuIsOpen } = useAppContext();

    return (
        <button
            type="button"
            aria-label="Navbar Menu Toggler"
            onClick={e => {
                e.stopPropagation();
                setNavbarMenuIsOpen(prev => !prev);
            }}
            className={`nav-menu-toggler text-4xl lg:hidden transition ${navbarMenuIsOpen ? "text-green-70" : ""}`}
        >
            <i className={`fa-solid fa-${navbarMenuIsOpen ? "xmark" : "bars"} fa-fw`}></i>
        </button>
    )
}

export default NavMenuToggler;