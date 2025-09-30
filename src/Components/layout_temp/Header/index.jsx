import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";

function Header() {
    return (
        <header className="bg-dark-green-15 text-white">
            {/* Topbar */}
            <Topbar />
            {/* Navbar */}
            <Navbar />
        </header>
    )
}

export default Header;