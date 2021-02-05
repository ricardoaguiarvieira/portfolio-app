import Profile from "../profile.jpeg";
import "./home-styles.css";
import About from "./About"
import Detail from "./Detail"
import Partner from "./Partner"
import Home from "./Home"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import { FcCellPhone } from "react-icons/fc";
import { IoLocationSharp } from "react-icons/io5";

function Body() {
    
    return(

    <>
     <Router>
        <div className="row">
          <div className="col-md-2 home-nav">
            <img src={Profile} className="home-profile" alt="profile" />

            <div>
              <ul className="pf-menu">
                <li className='pf-menu-name'>
                  <span>Tatiane Rodrigues</span>
                </li>
                <li>
                  <IoLocationSharp />
                  <span>Brasilia - DF</span>
                </li>
                <li>
                  <IoLocationSharp />
                  <span>Águas Lindas - GO</span>
                </li>
                <li>
                  <span>
                    <FcCellPhone />
                  </span>
                  <span>Assessoria: </span>
                    <a href="https://www.instagram.com/tatyassessoria"  target="_blank" rel="noreferrer">
                        <span>@tatyassessoria</span>
                    </a>
                </li>
              </ul>
           </div>
           <br/>

            <div className="gn-scroller">
              <ul className="gn-menu">
                <li>
                  <Link to="/"><strong>Sobre</strong></Link>
                </li>
                <li>
                  <Link to="/home"><strong>Destaques</strong></Link>
                </li>
                <li>
                  <Link to="/detalhes"><strong>Detalhes</strong></Link>
                </li>
                <li>
                  <Link to="/parcerias"><strong>Parcerias</strong></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 bod-ctt">
            <div className="conteiner">
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/detalhes" component={Detail} />
                <Route exact path="/parcerias" component={Partner} />
                <Route path="*" component={About}/>
              </Switch>
            </div>
          </div>
        </div>
     </Router> 
     
    </>
    )
}
export default Body;