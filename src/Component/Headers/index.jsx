import ProtoTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import useWindowPosition from "../../Hooks/useWindowPosition";
import { HashLink as Link1 } from 'react-router-hash-link';

function Header({ className, logo, joinBtn, search }) {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [activeMobileSubMenu, setActiveSubMobileMenu] = useState(false);
  const windowPosition = useWindowPosition();
  return (
    <header
      className={`${className ? className : "header-01"} sticky ${windowPosition > 0 && "fix-header animated fadeInDown"
        } `}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              {/* logo Start */}
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="" />
                <img
                  className="sticky-logo"
                  src="assets/images/logo7.png"
                  alt=""
                />
              </Link>
              {/* logo End */}

              {/* Moblie Btn Start  */}

              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              >
                <i className="fal fa-bars"></i>
              </button>
              {/*  Moblie Btn End  */}

              {/* Nav Menu Start  */}
              <div
                className="collapse navbar-collapse"
                style={{ display: activeMobileMenu && "block" }}
              >
                <ul className="navbar-nav">
                  <li>
                    <Link to="/">Home </Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    {/* <Link to="#feature">Features </Link> */}
                    <Link1 smooth to="#feature">Features</Link1>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>




                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* Nav Menu End  */}

              {/*  User Btn  */}
              {className !== "header-02" && (

                // <a href="#" className="user-btn">
                <Link to="/login" className="user-btn">
                  <i className="ti-user" style={{ color: "white" }}></i>
                </Link>
                // </a>
              )}
              {/*  User Btn  */}

              {/* Join Btn  */}
              {joinBtn && (
                <Link to="/join-for-free" className="join-btn">Join for Free</Link>

              )}

              {/* Join Btn   */}
              {search && (
                <form className="search-box" method="post" action="#">
                  <input
                    type="search"
                    name="s"
                    placeholder="Search Courses..."
                  />
                  <button type="submit">
                    <i className="ti-search"></i>
                  </button>
                </form>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: ProtoTypes.string,
  logo: ProtoTypes.string,
  joinBtn: ProtoTypes.bool,
  search: ProtoTypes.bool,
};

export default Header;
