import React from "react";
import { sendEmail } from "../services/email.js";

const CustomContactForm =  () => {
    return (
        <form className="contact-form" onSubmit={(e) => {
            const { name, message } = e.target.elements;
            sendEmail(name.value, email.value, message.value).then(() => {
                console.log("Formulario submetido com sucesso!");
            });
        }}>
                <label htmlFor="name">Nome</label>
                <input 
                    type="text" 
                    placeholder="Seu nome completo"
                    id="name"
                    name="name"
                    required
                />

                <label htmlFor="email">Endereço de email</label>
                 <input 
                    type="email"
                    placeholder="seuemail@provedor.com"
                    id="email"
                    name="email"
                    required 
                />

                <label htmlFor="message">Mensagem</label>
                <textarea name="message" id="message" placeholder="Diga-nos o que precisa..."></textarea>

                <button type="submit">Enviar</button>
        </form>
    )
}

export default CustomContactForm;