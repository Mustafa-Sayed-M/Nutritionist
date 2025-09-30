import CTA from "@components/common/CTA";
import HeaderInfo from "@components/common/HeaderInfo";
import ContactForm from "@components/sections/ContactForm";
import ContactInfo from "@components/sections/ContactInfo";

function ContactPage() {
    return (
        <div className="contact-page">
            {/* Header Info */}
            <HeaderInfo
                title="Contact Us"
                description="We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods"
            />
            {/* Contact Info */}
            <ContactInfo />
            {/* Contact Form */}
            <ContactForm />
            {/* CTA */}
            <CTA />
        </div>
    )
}

export default ContactPage;