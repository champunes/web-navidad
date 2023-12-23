import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./correo.css";

function ContactForm() {
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jbtgd4y', 'template_f3rgmee', e.target, 'nDOEzAyJt5q0PRxmE')
            .then((result) => {
                console.log(result.text);
                showResult(true);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Nombre</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Mensaje</label>
                <textarea name="message" />
                <input type="submit" value="Enviar" />
            </form>
            {result && <p>Gracias por contactar con el servicio Papa Noel 2.0. Te responderemos lo más pronto posible con tu regalo.</p>}
        </div>
    );
}

export default ContactForm;
