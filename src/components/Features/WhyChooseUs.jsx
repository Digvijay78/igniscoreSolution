import React from 'react';
import pic1 from "../../assets/pic1.jpg"
import pic2 from "../../assets/pic2.jpg"
import pic3 from "../../assets/pic3.jpg"
import pic4 from "../../assets/pic4.jpg"
import pic5 from "../../assets/pic5.jpg"
import pic6 from "../../assets/pic6.jpg"
import pic7 from "../../assets/pic7.jpg"
import pic8 from "../../assets/pic8.jpg"
import "./WhyChooseUs.css"

const WhyChooseUs = () => {
  return (
<>
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

    {/* <div className="content">
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
        </div> */}
</div>



    <div style={styles.container}>
      <h1 style={styles.heading}>Why Choose Igniscore Solutions?</h1>

    

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          {/* <img src={pic2} alt="Market Expertise" style={styles.icon} /> */}
          <h3 style={styles.cardHeading}>Expertise in the Indian Market</h3>
          <p style={styles.cardText}>
            Igniscore Solutions understands the unique challenges of navigating the rapidly evolving Indian market, with its shifting technology and customer service expectations.
          </p>
        </div>

        <div style={styles.card}>
          {/* <img src="/path/to/customized-solutions-icon.png" alt="Customized Solutions" style={styles.icon} /> */}
          <h3 style={styles.cardHeading}>Flexible, Customized Solutions</h3>
          <p style={styles.cardText}>
            We offer flexible, customizable solutions that help businesses increase revenue, reduce liabilities, enhance product marketability, and strengthen brand differentiation.
          </p>
        </div>

        <div style={styles.card}>
          {/* <img src="/path/to/lifecycle-icon.png" alt="Service Lifecycle" style={styles.icon} /> */}
          <h3 style={styles.cardHeading}>End-to-End Service Lifecycle</h3>
          <p style={styles.cardText}>
            Igniscore Solutions takes full ownership of the service lifecycle, ensuring our clients meet their business goals for both new and existing products.
          </p>
        </div>

        <div style={styles.card}>
          {/* <img src="/path/to/trusted-partner-icon.png" alt="Trusted Partner" style={styles.icon} /> */}
          <h3 style={styles.cardHeading}>Trusted Partner</h3>
          <p style={styles.cardText}>
            As a trusted partner, we enable our clients to focus on their core business while we handle the challenges of the Indian market.
          </p>
        </div>

        {/* New Div 1 */}
        <div style={styles.card}>
          {/* <img src="/path/to/innovation-icon.png" alt="Innovation" style={styles.icon} /> */}
          <h3 style={styles.cardHeading}>Innovative Technology</h3>
          <p style={styles.cardText}>
            We leverage cutting-edge technologies to provide innovative solutions that drive business growth, improve operational efficiency, and offer a competitive edge in the market.
          </p>
        </div>

        {/* New Div 2 */}
        <div style={styles.card}>
          {/* <img src="/path/to/client-centric-icon.png" alt="Client-Centric" style={styles.icon} /> */}
          <h3 style={styles.cardHeading}>Client-Centric Approach</h3>
          <p style={styles.cardText}>
            Our client-first philosophy ensures that we build long-term partnerships by tailoring solutions that meet unique business needs and drive sustainable success.
          </p>
        </div>
      </div>
    </div>
</>
  );
};

const styles = {
    container: {
    backgroundColor: '#0A0F14', // Dark background from second image
    color: '#E2E8F0', // Light text color from second image
    padding: '40px',
    borderRadius: '8px',
    marginTop: "50px"
  },
  heading: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#38BDF8', // Teal/blue heading color
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#1F2937', // Dark card background
    padding: '20px',
    margin: '10px',
    width: '23%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  icon: {
    width: '50px',
    height: '50px',
    marginBottom: '15px',
  },
  cardHeading: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#38BDF8', // Teal heading for each card
  },
  cardText: {
    fontSize: '1rem',
    color: '#94A3B8', // Light gray text for card description
  },
};

export default WhyChooseUs;
