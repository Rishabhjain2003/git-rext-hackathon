import './MutualFundsBdy.css'

function Body() {
    return(
        <div>
            <div className="mf-bdy py-5">
                <div className="container">
                    <div className='text-center text-white'>
                        <h2>Investing in Mutual Fund can be rewarding, if you choose the Right Product & Right Method</h2>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='mf-content pt-5'>
                    <p>Investment is time, energy, or matter spent in the hope of future benefits actualized within a specified date or time frame. Investment has a different meaning in finance from that in economics. In finance, investment is buying or creating an asset with the expectation of capital appreciation, dividends (profit), interest earnings, rents, or some combination of these returns.</p>
                </div>
            </div>
            <div className='container text-left mf-services'>
                <div className='mf-services-cards row px-5'>
                    <div className="card col-md-3 mx-3 my-3">
                        <img className="card-img-top" src="https://nordsip.com/wp-content/uploads/2019/12/shutterstock_737564698.jpg" alt="Card image cap"/>
                        <div className='hue text-white'>Fund Selector Tools</div>
                    </div>
                    <div className="card col-md-3 mx-3 my-3">
                        <img className="card-img-top" src="https://forefrontwealthplanning.com/wp-content/uploads/2020/05/financial-plan.jpg" alt="Card image cap"/>
                        <div className='hue text-white'>Financial Planning</div>
                    </div>
                    <div className="card col-md-3 mx-3 my-3">
                        <img className="card-img-top" src="https://toptenzilla.com/wp-content/uploads/2018/09/best-sectors-to-invest-in-now.jpeg" alt="Card image cap"/>
                        <div className='hue text-white'>Readymade Basket</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;