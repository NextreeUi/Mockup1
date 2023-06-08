import * as React from "react";

function Logo(props) {

  return (
    <>
      <a href="/" className='flexCenter gap20'>
        <i className={`i-logo ${props.gray ? 'bgc-gray9' : 'bgc-primary'} ${props.size=="medium" ? 'w50 h50' : 'w32 h32'}`}/>
        <p
          className={props.gray ? 'txt-gray9' : 'txt-primary'} 
          style={{ 
            fontWeight: "bold", 
            fontSize: props.size=='medium' ? '38rem' : '24rem' 
        }}>
          LOGO
        </p>
      </a>
    </>
  );
}

export default Logo;
