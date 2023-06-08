import * as React from "react";

function Location(props) {
  function number() {
    if (props.depth === 5) {
      return(
        <>
          <i className="i-right bgc-grayc"/>
          <a href="/">{props.first}</a>
          <i className="i-right bgc-grayc"/>
          <a href="/">{props.second}</a>
          <i className="i-right bgc-grayc"/>
          <a href="/">{props.third}</a>
        </>
      )
    } else if (props.depth === 4) {
      return(
        <>
          <i className="i-right bgc-grayc"/>
          <a href="/">{props.first}</a>
          <i className="i-right bgc-grayc"/>
          <a href="/">{props.second}</a>
        </>
      )
    } else if (props.depth === 3) {
      return(
        <>
          <i className="i-right bgc-grayc"/>
          <a href="/">{props.first}</a>
        </>
      )
    }
  }
  
  return (
    <>
      <div className='flexCenter gap10 size12 txt-gray9'>
        <div className="flexCenter gap5">
          <i className="i-home bgc-gray9" />
          <p>Home</p>
        </div>
        {number()}
        <i className="i-right bgc-grayc"/>
        <a href="/" className="txt-gray3" >{props.last}</a>
      </div>
    </>
  );

}

export default Location;
