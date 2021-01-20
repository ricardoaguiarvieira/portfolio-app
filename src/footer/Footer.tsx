import "./FooterStyles.css"
import { ReactComponent as Insta } from "../icons/instagram.svg"
import { ReactComponent as Twitter } from "../icons/twitter.svg"
import { ReactComponent as Whats } from "../icons/whatsapp.svg"
import { SiTiktok } from 'react-icons/si';
function Footer() {

    return (    
        <div className="row footer-bar">
            <div className="col">
                <div className="links">
                    <a href="https://www.instagram.com/tatyaraujo9/?hl=pt-br" target="_blank" rel="noreferrer">
                        <Insta />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5561994419212"  target="_blank" rel="noreferrer">
                        <Whats />
                    </a>
                    <a href="https://www.tiktok.com/@tatycuesta?lang=pt-BR"  target="_blank" rel="noreferrer">
                        <SiTiktok />
                    </a>
                    <a href="https://twitter.com/Tatirodrigues9_?s=09"  target="_blank" rel="noreferrer">
                        <Twitter />
                    </a>
                </div>
                <div className="contact">
                    <span>tatyarauj5@gmail.com</span>
                </div>
                <div className="creat">
                    <span> create by: <a href="https://www.instagram.com/ricardoaguiarfbc" target="_blank" rel="noreferrer">
                        Ricardo Aguiar <Insta /></a>
                    </span>
                </div>
            </div>
        </div>
    );
    
}
export default Footer;