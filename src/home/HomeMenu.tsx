import Profile from "../profile.jpeg";
import "./home-styles.css";
import About from "./About"
import Detail from "./Detail"
import Partner from "./Partner"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";

function Home() {
    
    return(

    <>
     <Router>
        <div className="row">
          <div className="col-sm-2 home-nav">
            <img src={Profile} className="home-profile" alt="profile" />
            <div className="gn-scroller">
              <ul className="gn-menu">
                <li>
                  <Link to="/"><strong>Sobre</strong></Link>
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
          <div className="col-sm-6">
            <div className="conteiner">
              <Switch>
                <Route exact path="/" component={About} />
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
export default Home;