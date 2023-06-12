import * as React from "react";

// nds-ui
import { Location } from 'nds-ui/component';

function Title(props) {
  return (
    <>
      <div className="flexColumn gap30">
        <Location 
          number={3} 
          icon={<i className='i-right bgc-grayc' />}
          depth1={
            <div className="flex alignCenter gap5 ">
              <i className="i-home bgc-gray9"/>
              Home
            </div>
            }
          depth2='Location'
          depthLast='Location'
        />
        <div className="flex alignEnd gap10">
          <p className="size32">{props.title}</p>
          {
            props.onlyTitle ?
            <></>
            :
            <>
              <div className="w1 h17 bgc-grayc"/>
              <p className="size14 txt-gray9">Lorem ipsum dolor sit amet</p>
            </>
          }
        </div>
      </div>
    </>
  );
}

export default Title;