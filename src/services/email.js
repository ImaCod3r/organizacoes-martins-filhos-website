import emailjs from '@emailjs/browser';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;

emailjs.init(PUBLIC_KEY);

export async function sendEmail(name, message) {
    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            name,
            message
        })
    } catch(error) {
        alert("Não foi possivel enviar formulário.")
    }
}