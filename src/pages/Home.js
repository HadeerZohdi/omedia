import "./Home.css"
import logo from "../assets/Full Logo-02.png"

function Home(){

    return  (
        <div className="container">
            <div className="home-box">
                <img src={logo} alt="OMedia" />
                <p className="header-text">WOW is Comming Soon</p>
                <div className="contact-box">
                    <h4>Contact OMedia</h4>
                    <a href="mailto:contact@omedianetwork.com">contact@omedianetwork.com</a>
                    <p>Tel: 0224055999</p>
                    <p>Address: 10 Al Obour Buildings, Heliopolis, Cairo, Egypt</p>
                </div>
            </div>
        </div>
    )
}

export default Home;