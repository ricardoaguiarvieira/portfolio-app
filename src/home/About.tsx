import Graf from "./img/graf.jpeg";
import "./home-styles.css";

function About() {
    
    return(
          <div className='row'>
            <div className='col-md-12'>
                <div>
                    <h1>Sobre mim</h1>
                </div>
            </div>
            <div className='col-md-12'>
              <div className="abt-ctt">
                <h2>Digital influence(Blogueira)</h2>
                <br/>
                <p>
                  Olá meu nome é Tatiane Rodrigues, tenho 17 anos nasci em 
                  Brasília distrito Federal. Atualmente 
                  trabalho com Instagram como digital influênce há pouco
                  tempo, por volta de 1 ano. Moro em Águas Lindas de Goiás, Venho fazendo alguns 
                  trabalhos(divulgação, parcerias, patrocínio, Sorteios, Dicas e 
                  etc).
                </p>
              </div>
              <div className="abt-ctt">
                <h2 >Competências e conhecimentos</h2>
                <img src={Graf} className="Home-graf" alt="graf" />
              </div>
              <div className="abt-ctt">
                <p>
                  Tenho uma assessoria de comunicação para
                  empresas(lojas), tirarem suas dúvidas de como fechar
                  parcerias, no momento estou trabalhando somente com
                  Instagram, pretendo trabalhar em outras áreas mais nunca
                  deixar de ser uma digital. 
                </p>
              </div>
              <div className="abt-ftr">
                  <strong><span>Conte comigo com o que precisar! </span></strong>
                  <br/>
              </div>
            </div>
            <br/>
          </div>
    )
}
export default About;