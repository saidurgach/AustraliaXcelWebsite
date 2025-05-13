import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Modal,
  Button,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaPen,
  FaComment,
} from "react-icons/fa";
import "./About.css";

const About = () => {
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
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      setShow(true); // Show thank you popup
    },
  });

  return (
    <div className="queries-form-section py-5">
      <Container>
        <div className="form-header text-center mb-5">
          <h2>Let's Connect</h2>
          <p className="sub-heading fw-bold">
            Send us a message and we’ll get back to you shortly
          </p>
        </div>

        <div className="form-box shadow-sm p-4 rounded-4 bg-white">
          {/* <Form onSubmit={formik.handleSubmit} className="modern-form-container"> */}
           <Form onSubmit={(values) => {
           
            axios.post("http://localhost:5000/api/contact", values)
              .then(() => {
                resetForm();
                setShow(true);
              })
              .catch((error) => {
                console.error("Form submission error:", error);
              });
          }} className="modern-form-container">
            
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
  );
};

export default About;
