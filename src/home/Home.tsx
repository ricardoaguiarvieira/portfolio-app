import Img01 from "./img/home/img01.jpeg";
import Img02 from "./img/home/img02.jpeg";
import Img03 from "./img/home/img03.jpeg";
import Img04 from "./img/home/img04.jpeg";
import Img05 from "./img/home/img05.jpeg";
import Img06 from "./img/home/img06.jpeg";
import "./home-styles.css";

function Home() {
    
    return(
          <div className='row'>
            <div className='col-md-12'>
                <h1>Destaques</h1>
            </div>
            <div className="hm-ctt">
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={Img01} className='hm-img' alt="Img01"/>
                    </div>
                    <div className='col-md-4'>
                        <img src={Img02} className='hm-img' alt="Img02"/>
                    </div>
                    <div className='col-md-4'>
                        <img src={Img03} className='hm-img' alt="Img02"/>
                    </div>
                    <div className='col-md-4'>
                        <img src={Img04} className='hm-img' alt="Img02"/>
                    </div>
                    <div className='col-md-4'>
                        <img src={Img05} className='hm-img' alt="Img02"/>
                    </div>
                    <div className='col-md-4'>
                        <img src={Img06} className='hm-img' alt="Img02"/>
                    </div>
                </div>
            </div>
          </div>
    )
}
export default Home;