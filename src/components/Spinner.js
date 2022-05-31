import React from "react";

export default function Spinner() {
  return (
    <>
      <div className="text-center">
        <div className="lds-ring my-3">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
