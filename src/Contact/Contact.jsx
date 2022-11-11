import React from "react";
import starIcon from "../imgs/star.svg";
import "./Contact.css";
export default function Contact() {
  return (
    <>
      <section className="contact" id="Contact">
        <h2 className="text-center text-uppercase subHeader">Contact</h2>
        <div className="bordered">
          <div className="customerDivider my-4">
            <div className="leftLine"></div>
            <div className="starIcon">
              <img src={starIcon} alt="starIcon" />
            </div>
            <div className="rightLine"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <form action="#">
                <div className="formInput">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className=" form-control mt-2"
                    placeholder="Name"
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="name">Email addres</label>
                  <input
                    type="text"
                    name="Email"
                    id="Email"
                    className=" form-control mt-2"
                    placeholder="Email addres"
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="name">Phone</label>
                  <input
                    type="text"
                    name="Phone"
                    id="Phone"
                    className=" form-control mt-2"
                    placeholder="Phone"
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="name">Message</label>

                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    className="form-control"
                  ></textarea>
                </div>
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row location">
              <div className="col-md-4">
                <div>
                  <h4>Location</h4>
                  <p>2215 John Daniel Drive Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <h4>Around the Web</h4>
                  <div className="social d-flex align-items-center justify-content-center   ">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <h4>About Freelancer</h4>
                  <p>
                    Freelance is a free to use, MIT licensed Bootstrap theme
                    created by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="strip-bottom">
            <p>Copyright © Your Website 2021</p>
          </div>
        </footer>
      </section>
    </>
  );
}
