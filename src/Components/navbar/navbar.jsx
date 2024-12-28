import './navbar.css'
import arrow_btn from '../../assets/Assets/arrow_btn.png'
const Navbar=()=>{
    return(
      <div className="navbar">
        <div className="navlogo">EV-olution</div>
          <ul className="navitem">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='navcontact'>Contact</li>
          </ul> 
        
      </div> 
    )
}
export default Navbar