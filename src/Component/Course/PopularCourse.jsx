import ProtoTypes from "prop-types";
import CourseItemCard from "../Cards/CourseItemCard";
import WhyChooseUs from "./WhyChooseUs";

function PopularCourse({ course, heading }) {
  return (
    <section className="popular-course-section">
      <div className="container">
        {heading && (
          <div className="row">
            <div className="col-md-8">
              <h2 className="sec-title">
                <span>Explore</span> Our Popular Features
              </h2>
            </div>
            <div className="col-md-4">
              <a className="read-more" href="#">
                Browse More Features<i className="arrow_right"></i>
              </a>
            </div>
          </div>
        )}
        {course && (
          <div className="row">
            <div className="col-lg-12">
              <div className="course-wrapper">
                <CourseItemCard title="Seamless Examination Generation – Both Offline & Online" link="single-course">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="74"
                    height="60"
                    viewBox="0 0 74 60"
                  >
                    <defs>
                      <pattern
                        id="pattern"
                        preserveAspectRatio="xMidYMid slice"
                        width="100%"
                        height="100%"
                        viewBox="0 0 74 60"
                      >
                        <image
                          width="74"
                          height="60"
                          xlinkHref="assets/images/home/desktop1-image.png"
                        />
                      </pattern>
                    </defs>
                    <path
                      id="desktop1"
                      className="cls-1"
                      style={{ fill: "url(#pattern)" }}
                      d="M0,0H74V60H0Z"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="State-of-the-Art AI-Based Data Analytics"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                  >
                    <image
                      id="data"
                      width="64"
                      height="64"
                      xlinkHref="assets/images/home/data-image.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="Comprehensive Online Proctoring Tools"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="74"
                    height="70"
                    viewBox="0 0 74 70"
                  >
                    <image
                      id="proposal"
                      width="74"
                      height="70"
                      xlinkHref="assets/images/home/proposal-image.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard title="Question Bank Authoring Made Simple" link="single-course">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="80"
                    height="67"
                    viewBox="0 0 80 67"
                  >
                    <image
                      id="chat"
                      width="80"
                      height="67"
                      xlinkHref="assets/images/home/chat-image.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="Flexibility and Ease of Use"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="58"
                    height="73"
                    viewBox="0 0 58 73"
                  >
                    <image
                      id="mind"
                      width="58"
                      height="73"
                      xlinkHref="assets/images/home/mind-image.png"
                    />
                  </svg>
                </CourseItemCard>
              </div>
            </div>
          </div>
        )}

        <div className="row mt-120">
          <div className="row">
            <h2 className="sec-title">
              <span>About Us</span>
            </h2>
          </div>
          <div className="row">


            <div className="col-lg-7 col-md-6">
              <div className="ab-thumb">
                <img src="assets/images/home/1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="ab-content">
                <h3>Intelligent Secure Testing & Evaluation Node: </h3>
                <p className="mid-item">
                  Who else do you know who'll do that for you?
                </p>
                <p>
                  A Comprehensive One-Stop Solution for Modern Assessments
                  In the rapidly evolving educational landscape, the demand for reliable, secure, and efficient assessment solutions has never been higher. Enter the Intuitive Secure
                  Testing & Evaluation Node (IS10)—an innovative, all-encompassing software designed to streamline the entire examination process. From question bank authoring to examination delivery—both offline and online—to advanced data analytics using AI-based tools,

                  IS10  provides a robust, flexible, and user-friendly platform that caters to the needs of educational institutions, certification bodies, and training centres worldwide.

                </p>
                <a className="bisylms-btn" href="#">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-120">

          {/* <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="ab-content">
                <h3 className="text-center">Why Choose IS10 </h3>

                <p className="text-center">
                  The Intelligent Secure Testing & Evaluation Node stands out as a unique, one-stop solution that encompasses all facets of the examination process. It caters to the needs of modern educational systems by offering a comprehensive platform that not only facilitates seamless examination management but also drives educational excellence through its AI-powered analytics and insights.
                  By choosing IS10, educational institutions and organizations are investing in a solution that enhances the quality of education, ensures examination integrity, and provides powerful tools for data-driven educational improvements. It's not just a software—it's a complete ecosystem designed to elevate the standards of assessments and evaluations.

                  In today's education sector, where flexibility, security, and efficiency are paramount, IS10emerges as a leading choice for institutions looking to innovate and optimize their examination processes. With its all-encompassing features, ease of use, and advanced AI capabilities, the Intelligent Secure Testing & Evaluation Node sets a new benchmark for comprehensive, secure, and intelligent testing and evaluation solutions.

                </p>
                <div className="d-flex justify-content-center">
                  <a className="bisylms-btn" href="#">
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          <WhyChooseUs />

        </div>
      </div>
    </section>
  );
}

PopularCourse.propTypes = {
  course: ProtoTypes.bool,
  heading: ProtoTypes.bool,
};

export default PopularCourse;
