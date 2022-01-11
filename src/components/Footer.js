import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-white.svg";
import linkedin from "../img/social/linkedin.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-6">
                <section>
                  <img
                    src={logo}
                    alt="Sean McAnally"
                    style={{ width: "14em", height: "5em" }}
                  />
                </section>
              </div>
              <div className="column is-6 social">
                {/* <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a> */}
                <a title="linkedin" href="https://linkedin.com">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <ul className="contact-list">
                    <li>
                      <a href="tel:0274891235" className="navbar-item">
                        027 489 1235
                      </a>
                    </li>
                    <li>
                      <a href="mailto:sean@seanmcanally.co.nz" className="navbar-item">
                        sean@seanmcanally.co.nz
                      </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
      </footer>
    );
  }
};

export default Footer;
