import { Link } from "react-router-dom";

function Event() {
  return (
    <section className="event-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title">
              <span>Contact Now</span> Upcoming Events
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="event-item-1">
              <div className="e-date">
                18 <span>September</span>
              </div>
              <p>
                <i className="icon_pin_alt"></i>New Delhi, INDIA
              </p>
              <h4>
                <Link to="single-event">
                  DIDAC INDIA 2024 - Annual International Exhibition and Conference
                </Link>
              </h4>
              <Link className="bisylms-btn" to="#">
                Get Ticket
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="event-item-1">
              <div className="e-date">
                07 <span>November</span>
              </div>
              <p>
                <i className="icon_pin_alt"></i>Singapore
              </p>
              <h4>
                <Link to="single-event">
                  Asia's largest conference and exhibition for educators and EdTech providers
                </Link>
              </h4>
              <Link className="bisylms-btn" to="#">
                Get Ticket
              </Link>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Link className="read-more" to="#">
              View all Events<i className="arrow_right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
