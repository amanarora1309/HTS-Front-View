import { useEffect, useState } from "react";
import PackageCard from "../Cards/PackageCard";

function Package() {
  const [carusole, setCarusole] = useState({
    next: 3,
    current: 2,
    prev: 1,
  });

  useEffect(() => {
    const currentSlide = carusole.current === 4 ? 1 : carusole.current + 1;
    const nextSlide = carusole.next === 4 ? 1 : carusole.next + 1;
    const prevSlide = carusole.prev === 4 ? 1 : carusole.prev + 1;
    setTimeout(() => {
      setCarusole({
        next: nextSlide,
        current: currentSlide,
        prev: prevSlide,
      });
    }, 5000);
  }, [carusole]);

  return (
    <section
      className="package-section"
      style={{ backgroundImage: "url(assets/images/home/package-bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title">
              <span>Online Examination</span> Offers 3 Types of Membership Packages
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div id="card-slider" className="pack-slid">
              <PackageCard
                packageInfo={{
                  img: "assets/images/gold.jpg",
                  statusImg: "assets/images/home/gold.png",
                  price: "500",
                  offerPrice: "200 / 1 year",
                  memberShipStatus: "Gold Membership",
                  exam: "100",
                  classes: "3",
                  link: "/login",
                  description:
                    "All Features of the Bronze and Silver package.",
                  ai:
                    "AI based Proctoring Tool for the Remote Examination",
                  aiPrice: "USD 0.25 per Assessment"
                }}
                id={1}
                status={carusole}
              />
              <PackageCard
                packageInfo={{
                  img: "assets/images/silver.jpg",
                  statusImg: "assets/images/home/silver.png",
                  price: "100",
                  offerPrice: "50 / 500  Assessments ( 1 Year Validity)",
                  memberShipStatus: "Silver Membership",
                  exam: "50",
                  classes: "3",
                  link: "/login",
                  description:
                    "Features Including Bronze Pack, Generate Examination Online, Import Candidates Data Candidate Registers and Do Assessment, Start & Stop Examination, Result Generation, Maximum 500 Candidates",
                  ai:
                    "Data Analytics Using AI",
                  aiPrice: "USD 20 per 500 Assessments."
                }}
                id={2}
                status={carusole}
              />
              <PackageCard
                packageInfo={{
                  img: "assets/images/bronze.jpg",
                  statusImg: "assets/images/home/bronze.png",
                  price: "50",
                  offerPrice: "20 / 1 Month",
                  memberShipStatus: "Bronze Membership",
                  exam: "10",
                  classes: "3",
                  link: "/login",
                  description:
                    "Features Create Your Own Class, Course, Section, Subsection, Difficulty Level, Type of Questions, Import your questions. Question Authoring Workflow Generate Question Paper into Docs and Multiple Test Versions. Question Bank Size of Maximum 3000 Questions.",
                  ai:
                    "Generation of Question Bank using AI Module.",
                  aiPrice: "AI Question USD 0.08 per Prompt."
                }}
                id={3}
                status={carusole}
              />
              <PackageCard
                packageInfo={{
                  img: "assets/images/silver.jpg",
                  statusImg: "assets/images/home/silver.png",
                  price: "100",
                  offerPrice: "50 / 500  Assessments ( 1 Year Validity)",
                  memberShipStatus: "Silver Membership",
                  exam: "50",
                  classes: "3",
                  link: "/login",
                  description:
                    "Features Including Bronze Pack, Generate Examination Online, Import Candidates Data Candidate Registers and Do Assessment, Start & Stop Examination, Result Generation, Maximum 500 Candidates",
                  ai:
                    "Data Analytics Using AI",
                  aiPrice: "USD 20 per 500 Assessments."
                }}
                id={4}
                status={carusole}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Package;

// style={{opacity: "0",zIndex: "0", transform: "matrix(0.9, 0, 0, 0.9, 0, -120)"}}
// style={{opacity: "0.75",zIndex: "0",  transform: "matrix(0.9, 0, 0, 0.9, 0, 0)"}}
// style={{opacity: "1", zIndex: "1",  "transform: matrix(1, 0, 0, 1, 0, 125)" }}
// style={{opacity: "0.75",zIndex: "0",  transform: "matrix(0.9, 0, 0, 0.9, 0, 250)"}}
