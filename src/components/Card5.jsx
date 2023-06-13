import * as React from "react";

function Card5(props) {
  return (
    <>
      <div className="flex gap20 alignCenter cursor">
        <div className="h100 w170 bgc-graye r10 " />
        <div className="flexColumn gap20">
          <div className="flexColumn">
            <p className="size12 txt-gray6">[Lorem]</p>
            <p className="size16">Lorem ipsum dolor</p>
          </div>
          <div className="flex gap10 size12">
            <p>Name</p>
            <p className="txt-gray6">Company</p>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Card5;