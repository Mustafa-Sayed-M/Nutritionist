const contactInfo = [
    {
        iconClassName: "envelope",
        label: "mustafa@gmail.com",
        href: "mailto:mustafacoder9@gmail.com"
    },
    {
        iconClassName: "phone",
        label: "+20 1122124968",
        href: "tel:+20 1122124968"
    },
    {
        iconClassName: "location-dot",
        label: "Kafr Hamza - Qalyubia - Egypt",
        href: "https://www.google.com/maps/place/Kafr+Hamza,+Al+Khankah,+Al-Qalyubia+Governorate/@30.2297981,31.3233489,16z/data=!3m1!4b1!4m6!3m5!1s0x1458124769fc74f9:0xd26dba9c8fbbb476!8m2!3d30.2324261!4d31.3270841!16s%2Fg%2F1v0bvxz6?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D"
    }
];

function Copyright() {
    return (
        <div className="copyright p-5 bg-dark-green-20 border border-dark-green-25 rounded-md flex lg:items-center justify-between max-lg:flex-col gap-y-5">
            {/* Contact Info */}
            <ul className="contact-info flex md:items-center gap-3 max-md:flex-col">
                {
                    contactInfo.map((link, index) => (<li key={index}>
                        <a
                            href={link.href}
                            className="block py-2 px-4 rounded-md border font-semibold border-dark-green-25 [&>i]:text-green-70 [&>i]:transition transition sm:hover:bg-green-70 sm:hover:text-dark-green-15 sm:hover:[&>i]:text-dark-green-15"
                        >
                            <i className={`fa-solid fa-${link.iconClassName} fa-fw`}></i>
                            <span className="ms-2">{link.label}</span>
                        </a>
                    </li>))
                }
            </ul>
            {/* Copyright Text */}
            <p className="!text-white text-center">© 2025 Nutritionist. All rights reserved.</p>
        </div>
    )
}

export default Copyright;