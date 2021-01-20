import { ReactComponent as Insta } from "../icons/instagram.svg";
import { ReactComponent as Whats } from "../icons/whatsapp.svg";
import  Vanessa_cunha  from "./img/vanessa_cunha.jpeg";
import  Jeniffer  from "./img/jeniffer.jpeg";
function Partner() {
    return(
        <div>
            <h1><strong>Parcerias</strong></h1>
            <ul className="ptn">
                <li>
                    <div className="row">
                        <div className="col">
                            <header>
                                <img src={Vanessa_cunha} alt="img" />
                                <h3>Vanessa Cunha</h3>
                            </header>
                            <div>
                                <span className="ptn-dpt">Saúde/beleza, Especialista em loiros, Micropigmentação, Make, 
                                Massoterapia, Depilação, Cortes em geral, Nails desing, Águas Lindas de Goiás.</span>
                            </div>
                            <div>
                                <a href="https://api.whatsapp.com/send?phone=5561991348802" className="ptn-ctt" target="_blank" rel="noreferrer">
                                    <Whats /> (61) 99134-8802</a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/studio_vanessacunha/" className="ptn-ctt" target="_blank" rel="noreferrer">
                                    <Insta /> @studio_vanessacunha</a>
                            </div>
                            
                        </div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div className="col">
                            <header>
                                <img src={Jeniffer} alt="img" />
                                <h3>Jeniffer Rodrigues</h3>
                            </header>
                            <div>
                                <span className="ptn-dpt">Nails desing, Alongamento de cílios com durabilidade, 
                                qualidade e naturalidade, Curso alongamento de unhas, Águas Lindas de Goiás</span>
                            </div>
                            <div>
                                <a href="https://api.whatsapp.com/send?phone=5561994195702" className="ptn-ctt" target="_blank" rel="noreferrer">
                                    <Whats /> (61) 994195702</a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/jeniffer.rodrigue.designers/" className="ptn-ctt" target="_blank" rel="noreferrer">
                                    <Insta /> @jeniffer.rodrigue.designers</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <br />
            <br />
            <strong><span >Para Parcerias entre em contato por qualquer umas das minhas redes sociais.</span></strong>
            <br />
            <br />
            <br />
        </div>
    )
}
export default Partner;