import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

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