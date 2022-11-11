import React from "react";

export default function Card({ ImgSrc, pluse, starIcon }) {
  return (
    <>
      <div className="col-md-4">
        <div className="progCard position-relative overflow-hidden">
          <img src={ImgSrc} alt="cabin" className="w-100 " />
          <div className="OutLayer position-absolute top-0 bottom-0 start-0 end-0 mainColor d-flex align-items-center justify-content-center">
            <img
              src={pluse}
              alt="pluse"
              className="w-25 m-auto opacity-100"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            />
          </div>
          <div
            className="modal fade "
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header text-center position-relative d-block ">
                  <h2
                    className="modal-title mainHeader"
                    id="staticBackdropLabel"
                  >
                    Log Cabin
                  </h2>
                  <div className="bordered">
                    <div className="customerDivider my-4">
                      <div className="leftLine"></div>
                      <div className="starIcon">
                        <img src={starIcon} alt="starIcon" />
                      </div>
                      <div className="rightLine"></div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 mt-2 me-3"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    src={ImgSrc}
                    alt="pluse"
                    className="w-100 m-auto opacity-100"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
