import AppLogo from "@components/UI/AppLogo";
import FastLinks from "./Components/FastLinks";
import GoTop from "./Components/GoTop";
import Copyright from "./Components/Copyright";

function Footer() {
    return (
        <footer className="py-10 text-white bg-dark-green-15">
            <div className="container">
                {/* Header */}
                <div className="footer-header flex items-center justify-between mb-10 flex-wrap gap-5">
                    {/* App Logo */}
                    <AppLogo />
                    {/* Fast Links */}
                    <FastLinks />
                    {/* Btn Go Top */}
                    <GoTop />
                </div>
                {/* Copyright */}
                <Copyright />
            </div>
        </footer>
    )
}

export default Footer;