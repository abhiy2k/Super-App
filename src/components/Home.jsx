import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";
import person1 from "./images/person-1.jpg";
import person2 from "./images/person-2.jpg";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";
import about from "./images/about.jpg";
import Music from "./images/music.svg";
import Code from "./images/code.svg";
import mark from "./images/bank2.svg";
import "./home.css";

function NavScrollExample() {
  return (
    <>
      <Navbar sticky="top" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Apps" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="/stock">Stock Market Tracker</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/code">Code Editor</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/wave">Music Player</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  More coming soon
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button className= "text-white mx-2 btn-danger" variant="outline-success">Login</Button>
          <Button className = "text-white btn-danger" variant="outline-success">Signup</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Body tag */}
      <section
        id="hero"
        class="min-vh-100 d-flex align-items-center text-center"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1
                data-aos="fade-left"
                class="text-uppercase text-white fw-semibold display-1"
              >
                THE EVERYTHING APP
              </h1>
              <h5 class="text-white mt-3 mb-4" data-aos="fade-right">
                A Swiss army Knife of mobile apps,offering a suite of services.
              </h5>
              {/* <div data-aos="fade-up" data-aos-delay="50">
                  <a href="#services" class="btn btn-brand me-2">Get Started</a>
                  <a href="#team" class="btn btn-light ms-2">Our Team</a>
                </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ABOUT --> */}
      <section id="about" class="section-padding">
        <div class="container">
          <div class="row">
            <div
              class="col-12 text-center"
              data-aos="fade-down"
              data-aos-delay="50"
            >
              <div class="section-title">
                <h1 class="display-4 fw-semibold">About us</h1>
                <div class="line"></div>
                <p>
                  {" "}
                  “Once a new technology rolls over you, if you're not part of
                  the steamroller, you're part of the road.”
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-6" data-aos="fade-down" data-aos-delay="50">
              <img src={about} alt="" />
            </div>
            <div data-aos="fade-down" data-aos-delay="150" class="col-lg-5">
              <h1>About Super</h1>
              <p class="mt-3 mb-4"></p>
              <div class="d-flex pt-4 mb-3">
                <div class="iconbox me-4">
                  <i class="ri-mail-send-fill"></i>
                </div>
                <div>
                  <h5>We are Innovtive</h5>
                  <p>Innovation is at the heart of our innovatiion.</p>
                </div>
              </div>
              <div class="d-flex mb-3">
                <div class="iconbox me-4">
                  <i class="ri-user-5-fill"></i>
                </div>
                <div>
                  <h5>We are Risk takers</h5>
                  <p>
                    We beleive in taking risk and doing something unique every
                    time.
                  </p>
                </div>
              </div>
              <div class="d-flex">
                <div class="iconbox me-4">
                  <i class="ri-rocket-2-fill"></i>
                </div>
                <div>
                  <h5>We are Disruptive</h5>
                  <p>
                    We beleive in providing all suits of services to our
                    customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="section-padding border-top">
        <div class="container">
          <div class="row">
            <div
              class="col-12 text-center"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <div class="section-title">
                <h1 class="display-4 fw-semibold">Awesome Apps</h1>
                <div class="line"></div>
                <p>
                  Checkout the awesome apps we have built, more apps coming
                  soon.
                </p>
              </div>
            </div>
          </div>
          <div class="row g-4 text-center">
            <div
              class="col-lg-4 col-sm-6"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <div class="service theme-shadow p-lg-5 p-4 app1">
                <div class="iconbox">
                <img src={mark} />
                </div>
                <h5 class="mt-4 mb-3 text-white"><Link to="/stock">Stock Market Tracker</Link></h5>
                <p>
                  Thinking of Investing ? checkout the trends and share price of
                  your favourite stock.
                </p>
              </div>
            </div>
            <div
              class="col-lg-4 col-sm-6"
              data-aos="fade-down"
              data-aos-delay="250"
            >
              <div class="service theme-shadow p-lg-5 p-4 app2">
                <div class="iconbox">
                  <img src={Code} />
                </div>
                <h5 class="mt-4 mb-3 text-white"><Link to="/code">Code editor</Link></h5>
                <p>
                  Tired of your editor ? check out our code editor for practice
                  with real time live server.
                </p>
              </div>
            </div>
            <div
              class="col-lg-4 col-sm-6"
              data-aos="fade-down"
              data-aos-delay="350"
            >
              <div class="service theme-shadow p-lg-5 p-4 app3">
                <div class="iconbox">
                  <img src={Music} />
                </div>
                <h5 class="mt-4 mb-3"><Link to="/wave">Music player</Link></h5>
                <p>
                  Want to Change your mood with Music ? Check out to our music
                  player.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* teams */}
      <section id="team" class="section-padding">
        <div class="container">
          <div class="row">
            <div
              class="col-12 text-center"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <div class="section-title">
                <h1 class="display-4 fw-semibold text-black">Team Members</h1>
                <div class="line"></div>
                <p>
                  We are group of motivating individual who aspire to become
                  successful, we love to code and buid awesome stuffs for our
                  users.
                </p>
              </div>
            </div>
          </div>
          <div class="row g-4 text-center">
            <div class="col-md-4" data-aos="fade-down" data-aos-delay="150">
              <div class="team-member image-zoom">
                <div class="image-zoom-wrapper">
                  <img src={person1} alt="" />
                </div>
                <div class="team-member-content">
                  <h4 class="text-white">Abhishek Singh</h4>
                  <p class="mb-0 text-white">Front End Engineer</p>
                </div>
              </div>
            </div>
            <div class="col-md-4" data-aos="fade-down" data-aos-delay="250">
              <div class="team-member image-zoom">
                <div class="image-zoom-wrapper">
                  <img src={person2} alt="" />
                </div>
                <div class="team-member-content">
                  <h4 class="text-white">Gautam Jain</h4>
                  <p class="mb-0 text-white">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CONTACT --> */}
      <section class="section-padding bg-light" id="contact">
        <div class="container">
          <div class="row">
            <div
              class="col-12 text-center"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <div class="section-title">
                <h1 class="display-4 text-white fw-semibold">Get in touch</h1>
                <div class="line bg-white"></div>
                <p class="text-white">
                  Have Some valuable Feedback? Reach out to us.
                </p>
              </div>
            </div>
          </div>
          <div
            class="row justify-content-center"
            data-aos="fade-down"
            data-aos-delay="250"
          >
            <div class="col-lg-8">
              <form action="#" class="row g-3 p-lg-5 p-4 bg-white theme-shadow">
                <div class="form-group col-lg-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter first name"
                  />
                </div>
                <div class="form-group col-lg-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter last name"
                  />
                </div>
                <div class="form-group col-lg-12">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Email address"
                  />
                </div>
                <div class="form-group col-lg-12">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter subject"
                  />
                </div>
                <div class="form-group col-lg-12">
                  <textarea
                    name="message"
                    rows="5"
                    class="form-control"
                    placeholder="Enter Message"
                  ></textarea>
                </div>
                <div class="form-group col-lg-12 d-grid">
                  <button class="btn btn-success">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer class="bg-dark">
        <div class="footer-top">
          <div class="container">
            <div class="row gy-5">
              <div class="col-lg-3 col-sm-6">
                <h5 class="mb-0 text-white">SOCIAL</h5>
                <div class="line"></div>
                <p>Follows us on our social Handles.</p>
                <div class="social-icons">
                  <a href="#">
                    <img src={instagram} />{" "}
                  </a>
                  <a href="#">
                    <img src={twitter} />{" "}
                  </a>
                  <a href="#">
                    <img src={github} />{" "}
                  </a>
                  <a href="#">
                    <img src={linkedin} />{" "}
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <h5 class="mb-0 text-white">APPS</h5>
                <div class="line"></div>
                <ul>
                  <li>
                    <a href="#">Stock Market Tracker</a>
                  </li>
                  <li>
                    <a href="#">Code Editor</a>
                  </li>
                  <li>
                    <a href="#">Music Player</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-sm-6">
                <h5 class="mb-0 text-white">ABOUT</h5>
                <div class="line"></div>
                <ul>
                  <li>
                    <a href="#">Mission</a>
                  </li>
                  <li>
                    <a href="#">Vision</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-sm-6">
                <h5 class="mb-0 text-white">CONTACT</h5>
                <div class="line"></div>
                <ul>
                  <li>New Delhi, 110092</li>
                  <li>(234) 675 - 45789</li>
                  <li>www.super.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row g-4 justify-content-between">
              <div class="col-auto">
                <p class="mb-0">©Super Copyright . All Rights Reserved</p>
              </div>
              <div class="col-auto">
                <p class="mb-0">
                  Buy a coffer for the developer@
                  <a href="#">abhiy2k</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default NavScrollExample;
