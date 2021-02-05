import Img01 from "./img/detail/img01.jpeg"
import Img02 from "./img/detail/img02.jpeg"
import Img03 from "./img/detail/img03.jpeg"
import Img04 from "./img/detail/img04.jpeg"

function Detail() {
    return(
        <div className='row'>
            <div className='col-md-12'>
                <div className='dtl-ttl'>
                    <h1>Detalhes do instagram</h1>
                </div>
            </div>
            <br/>
            <br/>
            <div className='col-md-12'>
                <div className='dtl-grp'>
                    <h5><strong>Visao Geral</strong></h5>
                    <div className='row dtl-vlr'>
                        <div className='col-sm-7'>
                            <span>Contas Alcançadas: </span>
                        </div>
                        <div className='col-sm-5'>
                            <span>10,1 mil</span>
                        </div>
                    </div>
                    <div className='row dtl-vlr'>
                        <div className='col-sm-7'>
                            <span>Total de Seguidores: </span>
                        </div>
                        <div className='col-sm-5'>
                            <span>8,237</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-12'>
                <div className='dtl-grp'>
                    <h5><strong>Atividade da conta</strong></h5>
                    <div className='row dtl-vlr'>
                        <div className='col-sm-7'>
                            <span>Impressões:</span>
                        </div>
                        <div className='col-sm-5'>
                            <span>167.037</span>
                        </div>
                    </div>
                    <div className='row dtl-vlr'>
                        <div className='col-sm-7'>
                            <span>Visitas ao perfil:</span>
                        </div>
                        <div className='col-sm-5'>
                            <span>3.218</span>
                        </div>
                    </div>
                    <div className='row dtl-vlr'>
                        <div className='col-sm-7'>
                            <span>Toques no site:</span>
                        </div>
                        <div className='col-sm-5'>
                            <span>20</span>
                        </div>
                    </div>
                </div>  
            </div>
            <div className='col-md-12'>
                <img src={Img01} className="dtl-img" alt="Img01" />
                <img src={Img02} className="dtl-img" alt="Img02" />
                <img src={Img03} className="dtl-img" alt="Img03" />
                <img src={Img04} className="dtl-img" alt="Img04" />
            </div>
        </div>
    )
}
export default Detail;