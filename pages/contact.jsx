import Hero from "../components/hero";
import ContactForm from "../components/contactForm";

const contact = () => {
    return (
        <div>
            <Hero heading='Contact' message='Submit the form below for more work and quotes.'/>
            <ContactForm/>
        </div>
    );
}

export default contact;