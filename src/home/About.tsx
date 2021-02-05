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
                  Olá meu nome é Tatiane Rodrigues, conhecida como Taty na cidade onde 
                  moro e nas redes sociais, nasci no Distrito Federal mais atualmente vivo 
                  em Águas Lindas(GO). Sempre fui uma pessoa super comunicativa gosto de dar 
                  boas dicas e compartilhar meu dia a dia, por isso entrei nesse mundo de influenciadora digital.
                </p>
                <p>
                  Meu instablog tem 2 anos, nova nesse mundo digital mais isso não importa o mais importante 
                  para mim é poder ser verdadeira, transparente e influenciar as pessoas do meu jeito, cada pessoa 
                  é única e isso é uma coisa que deve ser mostrada.
                </p>
                <p>
                  Influenciar as pessoas a jamais desistir daquilo que elas realmente quer fazer, todos tem um 
                  sonho e se correr atrás todos alcança.
                </p>
              </div>
              <div className="abt-ctt">
                <h2>Publicidade</h2>
                <h5>Faço visita no estabelecimento</h5>
                <ul>
                  <li>
                    <span>Provador  </span>
                  </li>
                  <li>
                    <span>Fotografias</span>
                  </li>
                  <li>
                    <span>Mostro produtos</span>
                  </li>
                  <li>
                    <span>Faço divulgações</span>
                  </li>
                </ul>
              </div>
              <div className="abt-ctt">
                <h2 >Competências e conhecimentos</h2>
                <img src={Graf} className="Home-graf" alt="graf" />
              </div>
              <div className="abt-ctt">
                <p>
                  Assessoria de comunicação para fechar parcerias, me conhecer mais e conhecer meus trabalhos, divulgações, 
                  Patrocínio, sorteios. Qualquer dúvida podem entrar em contato comigo!
                </p>
              </div>
              <div className="abt-ftr">
                  <strong><span>Desde já Agradeço ❤️ </span></strong>
                  <span>(Contatos abaixo)</span>
              </div>
            </div>
            <br/>
          </div>
    )
}
export default About;