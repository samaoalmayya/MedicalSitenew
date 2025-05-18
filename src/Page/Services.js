import React from "react";
import Banner from "../Components/Banner/Banner";
import image1 from "../Assets/d3.jpg";
import image2 from "../Assets/d4.jpg";
import image3 from "../Assets/d5.jpg";
import { Carousel, Container } from "react-bootstrap";
import "./Services.css";

function Services() {
  return (
    <>
      <Banner title="Services" smtitle="Welcome in Services" />

      {/* توسيط الكاروسيل وتحديد حجمه */}
      <Container className="mt-4 d-flex justify-content-center">
        <div style={{ maxWidth: "900px", width: "100%", height: "auto" }}>
          <Carousel fade className="Carousel_slider">
            <Carousel.Item>
              <img
                className="d-block mx-auto rounded"
                src={image1}
                alt="First slide"
                style={{
                  maxHeight: "400px",
                  objectFit: "contain",
                  width: "100%",
                  backgroundColor: "#000",
                }}
              />
              <Carousel.Caption>
                <h3>Services</h3>
                <p> Welcome in page Services</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block mx-auto rounded"
                src={image2}
                alt="Second slide"
                style={{
                  maxHeight: "400px",
                  objectFit: "contain",
                  width: "100%",
                  backgroundColor: "#000",
                }}
              />
              <Carousel.Caption>
                <h3>Services</h3>
                <p> Welcome in page Services</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block mx-auto rounded"
                src={image3}
                alt="Third slide"
                style={{
                  maxHeight: "400px",
                  objectFit: "contain",
                  width: "100%",
                  backgroundColor: "#000",
                }}
              />
              <Carousel.Caption>
                <h3>Services</h3>
                <p> Welcome in page Services</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>

      <hr />
    </>
  );
}

export default Services;
