import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";

const HomeWeDesign = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="container-fluid wedesignsec">
        <div className="paddingsec">
          <div className="row">
            <div className="col-xl-6 order-xl-1 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12">
              <div
                className="mainheading"
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="500"
              >
                We design, build & launch digital products
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <div
                    className="secondheading"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  >
                    We work complex to make it simple for you
                  </div>
                  <div
                    className="secondtext"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  >
                    We understand your product and simplify it for the people
                    who use it.
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div
                    className="secondheading"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  >
                    Creating world-class products and brands
                  </div>
                  <div
                    className="secondtext"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  >
                    Need us for team or are looking for staff augmentation with
                    a lot of collaboration, we’ve got you covered.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 order-xl-2col-lg-12 order-lg-1 col-sm-12 col-12">
              <div
                className="mobileillustration d-flex justify-content-center"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="1000"
              >
                <div className="animateicons">
                  <img
                    className="rocket"
                    src="/images/mobileillustration/Rocket.svg"
                    alt="img"
                  />
                  <img
                    className="mobile"
                    src="/images/mobileillustration/Mobile phone.svg"
                    alt="img"
                  />
                  <img
                    className="hands"
                    src="/images/mobileillustration/Hands.svg"
                    alt="img"
                  />
                  <img
                    className="cubes"
                    src="/images/mobileillustration/Cubes.svg"
                    alt="img"
                  />
                  <img
                    className="thumb"
                    src="/images/mobileillustration/Thumb.svg"
                    alt="img"
                  />
                  <img
                    className="monitor"
                    src="/images/mobileillustration/Monitor.svg"
                    alt="img"
                  />
                  <img
                    className="persons"
                    src="/images/mobileillustration/persons.svg"
                    alt="img"
                  />
                </div>
                <img src="/images/mobileillustration/mainimage.svg" alt="img" />
              </div>
            </div>
          </div>
          <div className="awardsec">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-12 d-flex mobcenter">
                <div
                  className="heading"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  A proven track record
                </div>
              </div>
              <div className="col-md-12 col-lg-8 col-12">
                <div className="awards">
                  <img
                    src="/images/Award 1.png"
                    alt="award"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="500"
                  />
                  <img
                    src="/images/award2.png"
                    alt="award"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="700"
                  />
                  <img
                    src="/images/award 3.png"
                    alt="award"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="900"
                  />
                  <img
                    src="/images/award4.png"
                    alt="award"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="1100"
                  />
                  <img
                    src="/images/award5.png"
                    alt="award"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="1300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWeDesign;
