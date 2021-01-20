import Graf from "./img/graf.jpeg";
import "./home-styles.css";

function About() {
    
    return(
          <div>
            <header >
              <h1 ><strong>Digital influence(Blogueira)</strong></h1>
            </header>
            <div className="conteiner">
              <h2 >Sobre mim</h2>
              <p>
                Olá meu nome é Tatiane Rodrigues, tenho 17 anos nasci em 
                Brasília distrito Federal. Atualmente 
                trabalho com Instagram como digital influênce há pouco
                tempo, por volta de 1 ano. Moro em Águas Lindas de Goiás, Venho fazendo alguns 
                trabalhos(divulgação, parcerias, patrocínio, Sorteios, Dicas e 
                etc).
              </p>
            </div>
            <div className="conteiner">
              <h2 >Competências e conhecimentos</h2>
              <img src={Graf} className="Home-graf" alt="graf" />
            </div>
            <div className="conteiner">
            <p>
                Tenho uma assessoria de comunicação para
                empresas(lojas), tirarem suas dúvidas de como fechar
                parcerias, no momento estou trabalhando somente com
                Instagram, pretendo trabalhar em outras áreas mais nunca
                deixar de ser uma digital. 
              </p>
            </div>
            <div className="conteiner">
              <strong>
                <span>Conte comigo com o que precisar! </span>
              </strong>
            </div>
            <br/><br/><br/>
          </div>
    )
}
export default About;