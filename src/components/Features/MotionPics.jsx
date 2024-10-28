import React from 'react'
import pic1 from "../../assets/pic1.jpg"
import pic2 from "../../assets/pic2.jpg"
import pic3 from "../../assets/pic3.jpg"
import pic4 from "../../assets/pic4.jpg"
import pic5 from "../../assets/pic5.jpg"
import pic6 from "../../assets/pic6.jpg"
import pic7 from "../../assets/pic7.jpg"
import pic8 from "../../assets/pic8.jpg"
import "./WhyChooseUs.css"

const MotionPics = () => {
  return (
    <div className='banner' >

<div className="slider" style={{ '--quantity': 10 }}>
      <div className="item" style={{ '--position': 1 }}>
        <img src={pic2} alt="" />
      </div>
      <div className="item" style={{ '--position': 2 }}>
        <img src={pic3} alt="" /> {/* Update path */}
      </div>
      <div className="item" style={{ '--position': 3 }}>
        <img src={pic4} alt="" /> {/* Update path */}
      </div>
      <div className="item" style={{ '--position': 4 }}>
        <img src={pic5} alt="" /> {/* Update path */}
      </div>
      <div className="item" style={{ '--position': 5 }}>
        <img src={pic6} alt="" /> {/* Update path */}
      </div>
      <div className="item" style={{ '--position': 6 }}>
        <img src={pic7} alt="" /> {/* Update path */}
      </div>
      <div className="item" style={{ '--position': 7 }}>
        <img src={pic8} alt="" /> {/* Update path */}
      </div>
      <div className="item" style={{ '--position': 8 }}>
        <img src={pic1} alt="" /> {/* Update path */}
      </div>
      <div className="item" style={{ '--position': 9 }}>
        <img src={pic2} alt="" /> {/* Update path */}
      </div>
      <div className="item" style={{ '--position': 10 }}>
        <img src={pic3} alt="" /> {/* Update path */}
      </div>
    </div>

    <div className="content">
            <h1 data-content="CSS ONLY">
                CSS ONLY
            </h1>
            <div className="author">
                <h2>LUN DEV</h2>
                <p><b>Web Design</b></p>
                <p>
                    Subscribe to the channel to watch many interesting videos
                </p>
            </div>
            <div className="model"></div>
        </div>
</div>
  )
}

export default MotionPics