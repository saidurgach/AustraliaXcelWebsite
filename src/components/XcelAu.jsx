// App.jsx
import React, { useRef,useEffect,useState } from 'react';
import axios from "axios";
import { Container, Navbar, Nav ,Button, Row,Col,Card, ListGroup,Image,InputGroup,Form,Modal} from 'react-bootstrap';
import AustraliaImg from '../assets/Australia-Image.jpg';
import AustraliaImage1 from '../assets/AustraliaImage1.jpg';
import AustraliaImage2 from '../assets/AustraliaImage2.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';


import "@fortawesome/fontawesome-free/css/all.min.css";
import './XcelAu.css'

import { FaUserFriends,FaUniversity ,FaGlobe ,FaPassport,FaWhatsapp, FaChevronUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaPen,
  FaComment,
} from "react-icons/fa";




const servicesMigration = [
  "General Skilled Migration Visas",
  "Skilled Independent Visa (Sub class 189)",
  "Skilled Nominated Visa (Sub class 190)",
  "Skilled Work Regional (Provisional) Subclass 491",
  "Temporary Graduate Visa (TR 485)",
  "Visitor Visa (Sub Class 600)",
  "Student Visa/Student Visa Extension (Subclass 500)",
  "Partner Visa (For Permanent and Temporary Residents)",
  "Parent Visa",
  "Visa Refusal (AAT Appeal)",
"Training Visa"
];


function XcelAu () {
   const [expanded, setExpanded] = useState(false);
   const handleNavClick = (ref) => {
    scrollToSection(ref);
    setExpanded(false); // close menu on link click
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
   const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

   const stats = [
    { count: 2000, label: 'Students', icon: <FaUserFriends /> },
    { count: 500, label: 'Universities',icon: <FaUniversity /> },
    { count: 150, label: 'Countries', icon: <FaGlobe />  },
    { count: 1000, label: 'Immigration' , icon: <FaPassport />},
  ];

const services = ['Education', 'Migration', 'Insurance', 'Training'];


    const [activeService, setActiveService] = useState('Education');


  const homeRef = useRef(null);
  const images = [AustraliaImg, AustraliaImage1, AustraliaImage2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const aboutRef = useRef(null);
  const educationRef=useRef(null);
  const contactRef = useRef(null);
 
 

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
useEffect(() => {
  AOS.init({ duration: 1000 });
   once: true;
}, []);

const feedbacks = [
  
  {
    name: "Naveen Gunti",
    text: "Today I got my COE with the help of Praveen and Poorvi. I'm very thankful they helped me in each and every step.",
  },
  {
    name: "Lakshmi Vijaya Polavarapu",
    text: "My visa application experience was exceptional. My agent Pooja was extremely patient, professional, and tolerant.",
  },
  {
    name: "Friends World",
    text: "I recommend Xcel Global Services. Pooja & Kaveri were great—professional, helpful and kind. Keep up the good work!",
  },
];



const partners = [
 
  {
    alt: "MARA logo with blue star and text Migration Agents Registration Authority",
    src: "https://storage.googleapis.com/a1aa/image/7bbf4521-76ad-4bed-f19b-dd38b62e51b5.jpg"
  },
  {
    alt: "QEAC logo with blue and teal circular abstract icon and text",
    src: "https://storage.googleapis.com/a1aa/image/e7992823-aa2a-401f-64ac-91fb9ca5f7ca.jpg"
  },
   {
    alt: "IDP logo with text Proud Co-Owner of IELTS in orange, green and red colors",
    src: "https://storage.googleapis.com/a1aa/image/50aaecf4-a423-4552-0065-47b4279881a0.jpg"
  },
  {
    alt: "ETS logo with blue and red elliptical swoosh and text",
    src: "https://storage.googleapis.com/a1aa/image/c5d2763c-66c7-4e3d-dff1-4e775f839b69.jpg"
  },
];
const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
  //   onSubmit: (values, { resetForm }) => {
  //     console.log(values);
  //     resetForm();
  //     setShow(true); // Show thank you popup
  //   },
  // });
  onSubmit: (values, { resetForm }) => {
  axios
    .post("http://localhost:5000/api/contact", values)
    .then(() => {
      resetForm();
      setShow(true); // Show the popup
    })
    .catch((error) => {
      console.error("Form submission error:", error);
    });
  }
  });

 

  return (
    <>
      {/* topbar */}
      <div className="topbar">
        <div className="topbar-content">
          <div>
            Quick Call <span className="fw-normal">: +61 415 060 000</span>
          </div>
          <div>
            Email Address <span className="fw-normal">: migration@xcelgs.com</span>
          </div>
        </div>
      </div>
      


{/* 
      <Navbar bg="light" expand="lg" className="navbar-custom fixed-top navbar-below-topbar"> */}
       <Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} expand="lg" bg="light" variant="light" className="navbar-custom fixed-top navbar-below-topbar">
        <Container>
          {/* <Navbar.Brand href="#home">MyLogo</Navbar.Brand> */}
          <Navbar.Brand href="#home">
  <img
    src="https://www.xcelgs.com.au/assets/images/logo.png"
    alt="Logo"
    height="40"
    className="d-inline-block align-top"
  />
</Navbar.Brand>

             <Navbar.Toggle aria-controls="basic-navbar-nav">
          {expanded ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => handleNavClick(homeRef)}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(aboutRef)}>About</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(educationRef)}>Education</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(educationRef)}>Migration</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(educationRef)}>Insurance</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(educationRef)}>Training</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(contactRef)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

    

 


      {/* Sections */}
         
 <div ref={homeRef} className='hero-container'>
      <img
        src={images[currentIndex]}
        alt="Three business women in formal wear standing in front of an Australian flag background"
        className="hero-image"
        width="1920"
        height="1080"
      />
       
      <div className="overlay">
        <div>
          <div className="divider"></div>
          <h1>
            Pioneers In Education
            <br />
            And Migration Services
          </h1>
        </div>
      </div>
   



           <Button
             aria-label="Scroll to top"
             className="scroll-top-btn"
             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
           >
             <i className="fas fa-chevron-up"></i>
           </Button>
         </div>  


       
     {/* --------------------------------------------------------------- */}


      <div ref={aboutRef} >
      <Container className="py-5" >
      <Row className="align-items-center">
        {/* Left Side: Image */}
        <Col md={6} className="text-center mb-4 mb-md-0">
          <img
            src="https://web.archive.org/web/20241014191032im_/https://www.xcelgs.com.au/assets/images/about/logo.jpg"
            alt="XGS circular logo"
            width="300"
            height="300"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <p className="about-label">
            <span className="blue-line"></span>
            About XCEL GLOBAL SERVICES
          </p>
          <h1>
            Build Your Career
            <br />
            The Right Way
          </h1>
          <p className="description">
            XCEL GLOBAL SERVICES is a leading education and migration service provider in Australia. The team at XCEL GLOBAL SERVICES provide expert advice on migration and skills assessment.
            <br />
            We recognize that the initial decisions and processes related to studying or migration is stressful and challenging task for students, migrant applicants, and their families.
          </p>
        </Col>
      </Row>
    </Container>  
      </div>
      {/* ------------------------------ */}
      <div className="app" style={{ fontFamily: 'Inter, sans-serif' }}>
        <main className='py-5'>
          <Container>
          <div className="mb-4">
            <div className="d-flex align-items-center mb-2">
              <div style={{ width: '3rem', height: '2px' }} className="bg-primary me-2" />
              <h5 className="text-primary fw-semibold mb-0">We Can Help You</h5>
            </div>
            <h1 className="fw-bold" style={{ maxWidth: '40rem' }}>
              We Make Your Future Bright
            </h1>
          </div>

          {/* Cards */}
          <Row xs={1} sm={2} md={4} className="g-4">
            {/* Card 1 */}
            <Col>
              <Card className="card-hover h-100">
                <div className="bg-info text-center position-relative p-3 rounded-top">
                  <Card.Img
                    variant="top"
                    src="https://storage.googleapis.com/a1aa/image/bb6e5f4f-8e75-4e05-f031-95f2ff8f74f1.jpg"
                    style={{ maxHeight: '180px', objectFit: 'contain' }}
                  />
                  
                </div>
                <Card.Body>
                  <Card.Link href="#" className="fw-semibold text-primary">
                    Process Related to Education
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col>
              <Card className="card-hover bg-light h-100">
                <Card.Img
                  variant="top"
                  src="https://storage.googleapis.com/a1aa/image/7b5993d6-f76d-4e70-090e-a41b99e6c659.jpg"
                  style={{ maxHeight: '180px', objectFit: 'contain' }}
                />
                <Card.Body>
                  <Card.Text className="text-primary fw-semibold small mb-2">
                    Application process
                  </Card.Text>
                  <Card.Link href="#" className="fw-semibold text-primary">
                    Prospective Migrants
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col>
              <Card className="card-hover bg-light h-100">
                <Card.Img
                  variant="top"
                  src="https://storage.googleapis.com/a1aa/image/fdb6bd38-feb7-45f6-878c-4723b6c77c86.jpg"
                  style={{ maxHeight: '180px', objectFit: 'contain' }}
                />
                <Card.Body>
                  <Card.Text className="text-primary fw-semibold small mb-2">
                    Visa processing
                  </Card.Text>
                  <Card.Link href="#" className="fw-semibold text-primary">
                    Visa Processing
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 4 */}
            <Col>
              <Card className="card-hover h-100">
                <Card.Img
                  variant="top"
                  src="https://storage.googleapis.com/a1aa/image/58983472-c485-4e4a-5d1b-72838f7284f5.jpg"
                  style={{ maxHeight: '180px', objectFit: 'contain' }}
                />
                <Card.Body>
                  <Card.Text className="text-primary fw-semibold small mb-2">
                    Lodging skill assessment
                  </Card.Text>
                  <Card.Link href="#" className="fw-semibold text-primary">
                    Skills Assessment
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
    {/* --------------------------------------- */}
    <section className="stats-section">
  <Container>
    <div className="row g-4 justify-content-center">
      
{stats.map((item, idx) => (
  <motion.div
    key={idx}
    className="col-6 col-sm-6 col-md-4 col-lg-3"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: idx * 0.2 }}
  >
    <div className="stats-box p-3 rounded shadow h-100">
      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
        <div className="stats-icon" style={{ fontSize: '40px' }}>
          {item.icon}
        </div>
      </motion.div>

      <div className="stats-count mt-2">
        <InView triggerOnce>
          {({ inView, ref }) => (
            <span ref={ref}>
              {inView ? <CountUp end={item.count} duration={2} separator="," /> : '0'}+
            </span>
          )}
        </InView>
      </div>

      <div className="stats-label">{item.label}</div>
    </div>
  </motion.div>
))}
    </div>
  </Container>
</section>

  
{/* ----------------------------------- */}
<div ref={educationRef}>
    
     
         <Container className="py-5" id="about">
              {/* Section Header */}
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="divider"></div>
                <span className="text-primary fw-semibold fs-3">---Our Service---</span>
                <div className="divider"></div>
              </div>
              <h2 className="fs-3 fw-bold text-dark mb-4">
                Glance At Our Unmatched Consulting
              </h2>
        
              {/* Buttons */}
              <div className="d-flex flex-wrap justify-content-center gap-4 mt-3 mb-4">
                {services.map((service, idx) => (
                  <Button
                    key={idx}
                    onClick={() => setActiveService(service)}
                    variant={activeService === service ? 'primary' : 'light'}
                    className={`py-2 px-4 min-w-btn fw-${activeService === service ? 'semibold' : 'normal'}`}
                  >
                    {service}
                  </Button>
                ))}
              </div>
              
        
              {/* Conditional Content */}
              {activeService === 'Education' && (
                <div>
                  {/* <h4>Education Consulting</h4>
                  <p>We provide expert guidance for overseas education...</p> */}
                    <div className="bg-white font-sans">
      {/* Main content */}
      <div className="container-fluid px-0">
        <div className="row g-0 min-vh-100">
          {/* Left - Image */}
          
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center bg-primary bg-opacity-25 p-4 animated-left">
  <h2 className="text-black fs-5 fs-md-4 fw-normal mb-2 text-center">EDUCATION IN</h2>
  <h1 className="text-primary fs-2 fs-md-1 fw-bold mb-4 text-center">AUSTRALIA</h1>
  <img
    src="https://www.aecoverseas.com/wp-content/uploads/2024/06/A-Guide-to-Australian-Education-for-International-Students-AEC-Overseas.jpg"
    alt="Books and passport"
    className="img-fluid animated-image"
    style={{ maxWidth: '100%' }} // Ensure the image is responsive
  />
</div>


          {/* Right - Text */}
          <div className="col-12 col-md-6 p-4 overflow-auto custom-scroll">
            <h2 className="text-dark fw-bold fs-1 fs-md-1 mb-3">Why Study in Australia</h2>
            <p className="text-secondary fs-4 fs-md-5 mb-4" style={{ maxWidth: '600px' }}>
              Australia is one of the preferred destinations for international students in the world and has eight of the top 100 universities in the world. Australian Universities and Educational Institutes offer more than 20,000 courses across wider domains including business, technology, health care, nursing, trade, and animation. Each year Australian government invests $2mn in scholarships for international students.
            </p>

            <ul className="list-unstyled" style={{ maxWidth: '600px' }}>
              {[
                'Masters (Course Work and Research)',
                'Bachelors',
                'Diploma Courses and Trade Courses',
                'Professional Year',
                'Nursing and Other Related Courses'
              ].map((item, idx) => (
                <li key={idx} className="d-flex align-items-center gap-2 text-black mb-3">
                  <span
                    className="check-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '28px', height: '28px' }}
                   >
                   <i className="fas fa-check small"></i> 
                  </span>
                  <span className="fw-medium fs-5 fs-md-4">{item}</span>
                </li>
              ))}
            </ul>

          
            <div className="d-flex justify-content-center mt-4">
              <button
                onClick={scrollToContact} // Scroll function
                className="btn book-consultation-btn fs-5"
              >
                Book Consultation Now
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  

  
                </div>
              )}
              </Container>
              </div>
              {/* --------------------------------------------------------------------------------- */}
              {activeService === 'Migration' && (
                <div>
                  {/* <h4>Migration Services</h4>
                  <p>Our team helps you with smooth visa and migration processes...</p> */}
                   <Container fluid className="min-vh-100 d-flex flex-column flex-md-row p-0">
   
      <Col md={6} className="d-flex flex-column justify-content-center align-items-center p-4 bg-primary">
  <h1 className="text-white fw-semibold display-5 mb-4">Migration</h1>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqeIjnKlUEoRrNV9d1IzcENADa1YMz4rPZEQ&s"
    alt="Migration illustration"
    className="img-fluid w-100 zoom-in-animation"
    style={{ maxWidth: "500px" }}
  />
</Col>

      <Col md={6} className="right-section p-4 overflow-auto">
        <h2 className="fs-4 fw-bold mb-4">Migration</h2>
        <ListGroup variant="flush">
          {servicesMigration.map((item, index) => (
            <ListGroup.Item key={index} className="d-flex align-items-start fs-5 border-0 px-0 py-2">
              {/* <span className="check-icon rounded-circle">
                <i className="fas fa-check fa-xs"></i>
              </span> */}
               <span
                    className="check-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '28px', height: '28px' }}
                   >
                   <i className="fas fa-check small"></i> 
                  </span>
              <p className="ms-3 mb-0">{item}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="d-flex justify-content-center mt-4">
              <button
                onClick={scrollToContact} // Scroll function
                className="btn book-consultation-btn fs-5"
              >
                Book Consultation Now
              </button>
            </div>
      </Col>
        
            
    </Container>
  

                </div>
              )}

              {/* --------------------------------------------- */}
             
            {activeService === 'Insurance' && (
                <div>
                  {/* <h4>Insurance Solutions</h4>
                  <p>Protect your future with our personalized insurance plans...</p> */}
                   <Container fluid className="insurance-section py-5">
                          <Row className="align-items-center justify-content-center">
                            {/* Left: Image */}
                            <Col md={6} className="text-center mb-4 mb-md-0">
                              <img
                                src="https://storage.googleapis.com/a1aa/image/32187675-373b-4d7b-caee-f0d71c829baa.jpg"
                                alt="Insurance"
                                className="img-fluid insurance-image"
                              />
                            </Col>
                  
                            {/* Right: Content */}
                            <Col md={6}>
                              <h3 className="text-dark fw-semibold fs-3 mb-3">Insurance</h3>
                              <p className="text-dark fs-5 mb-4">
                                Australia is a country that has the best health standards in the world.
                                And, to maintain those standards, immigrants looking to visit, study
                                or work in Australia are required to meet minimum health requirements
                                to be granted a visa. We have partnered with leading insurance companies
                                in Australia to provide quality insurance for all the immigrants during
                                their stay in Australia.
                              </p>
                              <div className="d-flex justify-content-center mt-4">
                                <button
                                  onClick={scrollToContact} // Scroll function
                                  className="btn book-consultation-btn fs-5"
                                >
                                  Book Consultation Now
                                </button>
                              </div>
                             
                            </Col>
                          </Row>
                        </Container>
                  
                </div>
              )}
              {/* ------------------------------------------------------------- */}
              {activeService === 'Training' && (
                <div>
<div className="training-section">
      <Container fluid className="min-vh-100 d-flex flex-column flex-md-row p-0">
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center bg-blue p-4"
        >
          <h2 className="text-blue-900 fw-bold display-5 mb-4">Training</h2>
         <img
  src="https://storage.googleapis.com/a1aa/image/b1e0c1c6-5a1f-4b80-962a-e10551f28b7c.jpg"
  alt="Training illustration"
  className="img-fluid animated-image"
  style={{ maxWidth: "500px" }}
/>

        </Col>

        <Col
          md={6}
          className="d-flex flex-column justify-content-center p-4"
        >
          <ul className="list-unstyled text-secondary fs-5">
            <li className="d-flex align-items-center mb-3">
              <span className="check-icon me-3">
                <i className="fas fa-check"></i>
              </span>
              Nurses
            </li>
            <li className="d-flex align-items-center mb-3">
              <span className="check-icon me-3">
                <i className="fas fa-check"></i>
              </span>
              AMC
            </li>
            <li className="d-flex align-items-center mb-3">
              <span className="check-icon me-3">
                <i className="fas fa-check"></i>
              </span>
              PTE/IELTS
            </li>
          </ul>
          <div className="d-flex justify-content-center mt-4">
                                <button
                                  onClick={scrollToContact} // Scroll function
                                  className="btn book-consultation-btn fs-5"
                                >
                                  Book Consultation Now
                                </button>
                              </div>
        </Col>
      </Container>
    </div>


                </div>
                       
              )}

              {/* ------------------------------------------------------------- */}
            {/* MigrationTEAM */}
             <main className="main-content">
      <Container>
        <h1 className="page-title" data-aos="zoom-in">Our Migration Team</h1>
        <Row className="team-members">
          {/* Team Member 1 */}
          <Col xs={12} md={4} className="team-member" >
            <div className="team-member-content" data-aos="zoom-in">
              <Image 
                src="https://storage.googleapis.com/a1aa/image/8929b883-cc21-45ac-5b22-29a9ad5e200e.jpg"  
                alt="Ronith Kailasa" 
                className="team-member-img"
                 style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div className="team-member-info">
                <h2>POOJA RAWAL</h2>
                <p>Co-Founder/MAARA</p>
              </div>
            </div>
          </Col>
          {/* Team Member 2 */}
          <Col xs={12} md={4} className="team-member" >
            <div className="team-member-content" data-aos="zoom-in">
              <Image 
                src="https://storage.googleapis.com/a1aa/image/0568d2ca-1743-4060-db7f-5883f50d6488.jpg" 
                alt="Sanket Patro" 
                className="team-member-img"
                 style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div className="team-member-info">
                <h2>Sanket Patro</h2>
                <p>Admissions Expert</p>
              </div>
            </div>
          </Col>
          {/* Team member3 */}
           
            <Col xs={12} md={4} className="team-member" >
            <div className="team-member-content" data-aos="zoom-in">
              <Image 
                src="https://img.freepik.com/premium-psd/png-indian-business-woman-photography-portrait-smiling_53876-522930.jpg?w=360"  
                alt="Ronith Kailasa" 
                className="team-member-img"
                 style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div className="team-member-info">
                <h2>Deepthi</h2>
                <p>Customer Relationship Executive</p>
              </div>
            </div>
          </Col>
          {/* Team member4 */}
           <Col xs={12} md={4} className="team-member" >
            <div className="team-member-content" data-aos="zoom-in">
              <Image 
                src="https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg"  
                alt="Ronith Kailasa" 
                className="team-member-img"
                 style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div className="team-member-info">
                <h2>Ronith Kailasa</h2>
                <p>Manager</p>
              </div>
            </div>
          </Col>
          {/* Team member5 */}
           <Col xs={12} md={4} className="team-member" >
            <div className="team-member-content" data-aos="zoom-in">
              <Image 
                src="https://static.everypixel.com/ep-gallerystock/1128/7181/7247/03361/11287181724703361572.jpg"  
                alt="Ronith Kailasa" 
                className="team-member-img"
                 style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div className="team-member-info">
                <h2>Prativa Rawal</h2>
                <p>Head Of Operations</p>
              </div>
            </div>
          </Col>
          {/* Team member6 */}
         
           <Col xs={12} md={4} className="team-member" >
            <div className="team-member-content" data-aos="zoom-in">
              <Image 
                src="https://thumbs.dreamstime.com/b/portrait-beautiful-young-indian-girl-business-woman-smiling-sitting-steps-office-building-holding-notepad-white-158880029.jpg"  
                alt="Ronith Kailasa" 
                className="team-member-img"
                 style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div className="team-member-info">
                <h2>Jasmine Saluja</h2>
                <p>Customer Relationship Exective</p>
              </div>
            </div>
          </Col> 
        </Row>
      </Container>
    </main>

    {/* ------------------------------------- */}
    {/* Feedbacks */}
    
   
             <h2 className="text-secondary fw-bold text-center mb-3">---Our Client Feedbacks---</h2>
       <div className="feedback-section">
           <div className="overlay">
             <Container>
               {/* <h2 className="text-white text-center mb-3">Our Client Feedbacks</h2> */}
               <div className="feedback-scroll-wrapper">
                 {feedbacks.map((fb, index) => (
                   <div className="feedback-card-wrapper" key={index}>
                     <Card className="feedback-card">
                       <Card.Body>
                         <Card.Text className="feedback-text">"{fb.text}"</Card.Text>
                         <Card.Title className="mt-3">{fb.name}</Card.Title>
                       </Card.Body>
                     </Card>
                   </div>
                 ))}
               </div>
             </Container>
           </div>
         </div> 
          
       
{/*        
     ---------------------------------------------- */}
      <div className="bg-white font-sans">
           <Container className="trusted-partners-container py-4">
             <h2 className="partners-title text-center mb-4">
               <span className="line"></span>
               <span>Our Trusted Partners</span>
             </h2>
     
             <Row className="justify-content-center">
               {partners.map((partner, index) => (
                 <Col key={index} xs={6} sm={4} md={3} className="text-center mb-4">
                   <img
                     alt={partner.alt}
                     src={partner.src}
                     className="img-fluid partner-img"
                   />
                 </Col>
               ))}
             </Row>
           </Container>
         </div>
    
 {/* --------------------------------------------- */}
  <div className="contact-info">
       <Container>
         <Row className="justify-content-center g-4">
           {/* Email */}
           <Col xs={12} md={6} lg={4}>
             <Card className="info-card text-center">
               <div className="icon-box email">
                 <i className="fas fa-envelope"></i>
               </div>
               <Card.Body>
                 <Card.Title>Email Address</Card.Title>
                 <Card.Text>migration@xcelgs.com</Card.Text>
               </Card.Body>
             </Card>
           </Col>
 
           {/* Location */}
           <Col xs={12} md={6} lg={4}>
             <Card className="info-card text-center">
               <div className="icon-box location">
                 <i className="fas fa-map-marker-alt"></i>
               </div>
               <Card.Body>
                 <Card.Title>Our Location</Card.Title>
                 <Card.Text>
                   Level 7/276 Flinders St,<br />
                   Melbourne VIC 3000, Australia
                 </Card.Text>
                 <hr />
                 <Card.Text>
                   Level 6, 97 Pirie Street,<br />
                   Adelaide, SA 5000, Australia
                 </Card.Text>
                 <hr />
                 <Card.Text>
                   Level 4/60 Moorabool St,<br />
                   Geelong, VIC 3220
                 </Card.Text>
               </Card.Body>
             </Card>
           </Col>
 
           {/* Phone */}
           <Col xs={12} md={6} lg={4}>
             <Card className="info-card text-center">
               <div className="icon-box phone">
                 <i className="fas fa-phone-alt"></i>
               </div>
               <Card.Body>
                 <Card.Title>Phone Number</Card.Title>
                 <Card.Text>+61 415 060 000</Card.Text>
               </Card.Body>
             </Card>
           </Col>
         </Row>
       </Container>
     </div>
   

     

{/* 
      --------------------------------------------------------------------- */}
  {/* <div ref={contactRef}  style={{ scrollMarginTop: '100px', padding: '100px', backgroundColor: '#e9ecef' }}
      > */}
        {/* <h1>Contact Section</h1>
        <p>This is the Contact section.</p> */}
        

 {/* <div className="queries-form-section bg-white py-2 ">
      <Container>
        <div className="divider text-center mb-4">
          <hr className="line" />
          <span className="divider-text">Send Us Message</span>
          <hr className="line" />
        </div>

        <h1 className="text-center text-secondary fw-bold mb-5">
          Your Queries Will Be Answered Here
        </h1> */}
{/* ------------------------------------------------------ */}


    <div ref={contactRef}>

      <div className="divider text-center mb-4">
          <hr className="line" />
          <span className="divider-text">Send Us Message</span>
          <hr className="line" />
        </div>

        <h1 className="text-center text-secondary fw-bold mb-5">
          Your Queries Will Be Answered Here
        </h1>
{/* ------------------------------- */}
 <div className="queries-form-section py-5">
      <Container>
        <div className="form-header text-center mb-5">
          <h2>Let's Connect</h2>
          <p className="sub-heading fw-bold">
            Send us a message and we’ll get back to you shortly
          </p>
        </div>

        <div className="form-box shadow-sm p-4 rounded-4 bg-white">
          <Form onSubmit={formik.handleSubmit} className="modern-form-container">  

            <Row className="g-4">
              <Col md={6}>
                <InputGroup className="custom-group">
                  <InputGroup.Text><FaUser /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    isInvalid={formik.touched.name && formik.errors.name}
                  />
                </InputGroup>
              </Col>

              <Col md={6}>
                <InputGroup className="custom-group">
                  <InputGroup.Text><FaPhone /></InputGroup.Text>
                  <Form.Control
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    isInvalid={formik.touched.phone && formik.errors.phone}
                  />
                </InputGroup>
              </Col>

              <Col md={6}>
                <InputGroup className="custom-group">
                  <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    isInvalid={formik.touched.email && formik.errors.email}
                  />
                </InputGroup>
              </Col>

              <Col md={6}>
                <InputGroup className="custom-group">
                  <InputGroup.Text><FaPen /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    isInvalid={formik.touched.subject && formik.errors.subject}
                  />
                </InputGroup>
              </Col>

              <Col md={12}>
                <InputGroup className="custom-group">
                  <InputGroup.Text><FaComment /></InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write Message"
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    isInvalid={formik.touched.message && formik.errors.message}
                  />
                </InputGroup>
              </Col>

              <div className="text-center mt-4">
                <button className="fancy-button" type="submit">
                  <span>Send Us Message</span>
                </button>
              </div>
            </Row>
          </Form>
        </div>

        {/* ✅ Popup Modal */}
        <Modal show={show} onHide={() => setShow(false)} centered className="thankyou-modal">
  <Modal.Body className="text-center py-5 px-4">
    <div className="success-icon mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="green"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" stroke="green" strokeWidth="2" fill="#d4edda" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l3 3 7-7" />
      </svg>
    </div>
    <h4 className="mb-2">Thank You!</h4>
    <p className="text-muted">Your message has been successfully sent.</p>
    <Button variant="success" className="mt-3 px-4" onClick={() => setShow(false)}>
      Close
    </Button>
  </Modal.Body>
</Modal>

      </Container>
    </div>
 







{/* 
------------------------------------------- */}
</div>
 </>
   
  );
}


export default XcelAu;

