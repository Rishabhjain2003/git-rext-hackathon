import './Footer.css'

function Footer(){
    return(
        <div className='Footer'>
            <div className='row'>
                <div className='col-md-6 text-center footer-left py-5'>
                    <div className='container py-5'>
                        <h1>We are here to help you</h1>
                        <h5 className='footer-left-tagline'>Call us or write your queries, we will get back to you as soon as possible.</h5>
                        <div className='footer-left-table px-5'>
                            <p className='px-5'>
                                <span className='px-2'>Address :</span> 308,4th floor West CIty B.N.Road Luck-226001 U.P<br/>
                                <span className='px-2'>Ph. Num:</span> +91 1233454567<br/>
                                <span className='px-2'>E-Mail Id:</span><span className='e-mail'> abc_123@gmail.com</span>
                            </p>
                        </div>
                        <div className='icon-container'>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                            <a href="#" className='icon'><i class="fab fa-facebook"></i></a>
                            <a href="#" className='icon'><i class="fab fa-instagram"></i></a>
                            <a href="#" className='icon'><i class="fab fa-linkedin"></i></a>
                            <a href="#" className='icon'><i class="fab fa-twitter"></i></a>
                            <a href="#" className='icon'><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 text-center py-5 px-5 footer-right'>
                    <div className='container py-5 px-5 footer-right-container'>
                    <form className='px-5 py-5'>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <input type="text" className="form-control" id="inputEmail4" placeholder="Name"/>
                            </div>
                            <div className="form-group col-md-12">
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-12">
                                <input type="text" className="form-control" id="inputPassword4" placeholder="Message"/>
                            </div>
                            <div className="form-group col-md-12">
                                <input type="text" className="form-control" id="inputPassword4" placeholder="Phone Number"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger">Get Call Back</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-light text-center ending">
                <div className="text-center p-3 end">
                    © 2020 Copyright :
                    <a className="text-light" href="#"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;