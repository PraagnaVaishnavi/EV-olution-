import './background.css'
import video1 from '../../assets/Assets/video1.mp4'
import image1 from '../../assets/Assets/image1.png'
import image2 from '../../assets/Assets/image2.png'
import image3 from '../../assets/Assets/image3.png'
const Background=({play,heroCount})=>{
    if(play){
        return (
            <div>
             <video className='background' autoPlay loop muted>
                <source  src={video1} type='video/mp4' />
             </video>
            </div>
        )
    }
    else if( heroCount===0) 
    return (
        <div>
<img src={image1} className='background' alt="" />
        </div>
    )
    else if( heroCount===1) 
        return (
            <div>
    <img src={image2} className='background' alt="" />
            </div>
        )
        else  
            return (
                <div>
        <img src={image3} className='background' alt="" />
                </div>
            )
}
export default Background