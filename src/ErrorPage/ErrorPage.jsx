import React from "react";
import Nav from "../Nav/Nav";

export default function ErrorPage() {
  function ErrorMsg() {
    return (
      <>
        <div className="wraper d-flex align-items-center justify-content-center w-100 vh-100">
          <h1>Page Not found </h1>
        </div>
      </>
    );
  }
  return (
    <>
      <ErrorMsg />
    </>
  );
}
