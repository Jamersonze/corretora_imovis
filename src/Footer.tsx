import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center mx-auto bg-black text-white">
            <h1>Footer</h1>
            <section className="flex flex-row items-center gap-x-2">
                <FaCopyright />
                <p>2023</p>
                <p>Todos os direitos reservados</p>

                <a href="#">Politica de privacidade</a>
                <a href="#">Termos de uso</a>
                <a href="#">Cookies</a>

                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
            </section>
        </footer>
    )
}