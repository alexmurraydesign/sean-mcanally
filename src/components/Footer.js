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
        <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="columns">
                  <div className="column is-6 footer-logo">
                    <section>
                      <Link to="/">
                        <img
                          src={logo}
                          alt="Sean McAnally"
                          style={{ width: "16em", height: "5em" }}
                        />
                      </Link>
                    </section>
                  </div>
                  <div className="column is-6">
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
                    <div className="social">
                      <a title="linkedin" href="https://linkedin.com">
                        <img
                          src={linkedin}
                          alt="linkedin"
                          style={{ width: "1em", height: "1em" }}
                        />
                      </a>
                    </div>
                    <ul className="contact-list">
                        <li>
                          <a href="tel:0274891235">
                            027 489 1235
                          </a>
                        </li>
                        <li>
                          <a href="mailto:sean@seanmcanally.co.nz">
                            sean@seanmcanally.co.nz
                          </a>
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </footer>
    );
  }
};

export default Footer;
