import { Link } from "react-router-dom";
import links from "@data/navLinks.json";

function FastLinks() {
    return (
        <ul className="fast-links flex items-center gap-3 max-md:order-1 flex-wrap">
            {
                links.map((link, index) => (<li key={index}>
                    <Link
                        to={'/'}
                        className="font-semibold text-lg"
                    >{link.label}</Link>
                </li>))
            }
        </ul>
    )
}

export default FastLinks;