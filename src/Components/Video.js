import VideoBg from './VideoBg.mp4'
function Video () {
    return(
        <section className="video-case">
            <div className="video-container">
                <video src={VideoBg} autoPlay muted loop />
            </div>
            <div className="video-txt"> 
                <h1 className='head1'>Get dual benefits of Tax saving by</h1>
                <h1 className='head2'>Investing in ELSS schemes</h1>
            </div>
        </section>
    )
}



export default Video;