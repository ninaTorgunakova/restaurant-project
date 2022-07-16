import './Header.scss';

const Header = () =>{
    return(
        <div id="home" className='header-block'>
            <div className='header-navigation'>
                <img className='small-logo' src="./small-logo.png" alt=""/>
                <div className='menu'>
                    <div className='menu-item'>
                        <a href="#home">HOME</a>
                    </div>
                    <div className='menu-item'>
                        <a href="#about">ABOUT US</a>
                    </div>
                    <div className='menu-item'>
                        <a href="#menu">MENU</a>
                    </div>
                    <div className='menu-item'>
                        <a href="#reservations">RESERVATIONS</a>
                    </div>
                    <div className='menu-item'>
                        <a href="#gallery">GALLERY</a>
                    </div>
                    <div className='menu-item'>
                        <a href="#contact">CONTACT</a>
                    </div>
                </div>
            </div>
            <div className='header-main-part'>
                <img className='logo' src="./logo.png" alt=""/>
                <span className='moto'>YOUR FAVORITE RESTAURANT</span>
            </div>
            <div className='header-working-hours'>
                <span><b>Monday — Friday:</b> 8 A.M. — 11 P.M.</span>
                <span><b>Weekends:</b> 9 A.M. — 5 P.M.</span>
            </div>
        </div>
    )
}

export default Header
