import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
const offSlide = {
  opacity: "0",
  transform: "matrix(0.9, 0, 0, 0.9, 0, -120)",
};

const prevSlide = {
  opacity: "0.75",
  transform: "matrix(0.9, 0, 0, 0.9, 0, 0)",
  transition: "all linear 0.5s",
};

const activeSlide = {
  opacity: "1",
  zIndex: "1",
  transform: "matrix(1, 0, 0, 1, 0, 125)",
  transition: "all linear 0.5s",
};
const nextSlide = {
  opacity: "0.75",
  transform: "matrix(0.9, 0, 0, 0.9, 0, 250)",
};

function PackageCard({ packageInfo, id, status }) {
  const {
    img,
    statusImg,
    price,
    offerPrice,
    memberShipStatus,
    exam,
    classes,
    link,
    description,
    ai,
    aiPrice
  } = packageInfo;
  return (
    <div
      className="package-item"
      style={
        status.current === id
          ? activeSlide
          : status.next === id
            ? nextSlide
            : status.prev === id
              ? prevSlide
              : offSlide
      }
    >
      <div className="pack-thumb">
        <img src={img} alt="" />
        <div className="pack-middle">
          <img src={statusImg} alt="" />
        </div>
      </div>
      <div className="pack-details">
        <div className="pack-price">
          <span>${price}</span> ${offerPrice}
        </div>
        <h3>{memberShipStatus}</h3>
        <div className="pack-meta">
          {/* <span>
            <i className="icon_book_alt"></i>
            {exam} Exam
          </span> */}
          {/* <span>
            <i className="icon_toolbox_alt"></i>
            {classes} Classes
          </span> */}
        </div>
        <div className="">
          <h4 className="mb-1">Features</h4>
          <p className="mb-2">{description}</p>
        </div>
        <div className="">
          <h4 className="mb-1">AI Features</h4>
          <p className="mb-0">{ai}</p>
          <p className="fw-bold mb-0" style={{ fontWeight: "bold" }}>{aiPrice}</p>
        </div>
        <div className="d-flex justify-content-end">

          <Link to={link} className="bisylms-btn">
            Purchase Now
          </Link>
        </div>
      </div>
    </div>
  );
}

PackageCard.propTypes = {
  packageInfo: ProtoTypes.object,
  status: ProtoTypes.object,
  id: ProtoTypes.number,
};

export default PackageCard;
