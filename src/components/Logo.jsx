import * as React from "react";

import { Link } from "react-router-dom";

function Logo(props) {

  return (
    <>
      <Link to="#" className='flexCenter gap20'>
        <i className={`i-logo ${props.gray ? 'bgc-gray9' : props.white ? 'bgc-white' : 'bgc-primary'} ${props.size=="medium" ? 'w50 h50' : 'w32 h32'}`}/>
        {
          props.noText ?
          <></>
          :
          <p
            className={props.gray ? 'txt-gray9' : props.white ? 'txt-white' : 'txt-primary'} 
            style={{ 
              fontWeight: "bold", 
              fontSize: props.size=='medium' ? '38rem' : '24rem' 
          }}>
            LOGO
          </p>
        }
      </Link>
    </>
  );
}

export default Logo;
