import './hero.css'
import arrow_btn from '../../assets/Assets/arrow_btn.png'
import play_icon from '../../assets/Assets/play_icon.png'
import pause_icon from '../../assets/Assets/pause_icon.png'
const Hero=({setPlay, heroData,setHeroCount, play,heroCount})=>{
    return (
        <div className='hero'>
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="explore">
                <p>Explore the features</p>
                <img src={arrow_btn}  alt="" />
            </div>
            <div className="hero-dot-play">
            <ul className="explore-ul">
                <li onClick={()=>setHeroCount(0)} className={`hero-dot ${(heroCount===0)?"orange":""}`}></li>
                <li onClick={()=>setHeroCount(1)}className={`hero-dot ${(heroCount===1)?"orange":""}`}></li>
                <li onClick={()=>setHeroCount(2)}className={`hero-dot ${(heroCount===2)?"orange":""}`}></li>
            </ul>
            <div className="play-video">
                <img src={play?pause_icon:play_icon} onClick={()=>{setPlay(!play)}} alt="" />
            </div>
            </div>
            
   
        </div>
    )
}
export default Hero