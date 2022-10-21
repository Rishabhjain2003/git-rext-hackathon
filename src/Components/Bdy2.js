import './Bdy2.css'
function Bdy2() {
    return(
        <div className="Bdy2">
            <div className="container py-5">
                <div>
                    <h2>Taking Risk With</h2>
                    <h1 className='highlight'>Equity Mutual Funds</h1>
                    <h2 className='highlight2'>Is necessary and essential for good portfolio</h2>
                </div>
                <div className='row'>
                    <div className='col-md-4 align-items-center my-5 py-5 '>
                        <img src="https://www.meraportfolio.com/images/eq_icon1.png" height='150vh' className='img-hov'/>
                        <h3 className='img-hov-txt py-3' >Large Cap Fund</h3>
                    </div>
                    <div className='col-md-4 align-items-center my-5 py-5 '>
                        <img src="https://www.meraportfolio.com/images/eq_icon2.png" height='150vh' className='img-hov'/>
                        <h3 className='img-hov-txt py-3' >Mid & Small cap Fund</h3>
                    </div>
                    <div className='col-md-4 align-items-center my-5 py-5 '>
                        <img src="https://www.meraportfolio.com/images/eq_icon3.png" height='150vh' className='img-hov'/>
                        <h3 className='img-hov-txt py-3' >Balanced Fund</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bdy2;