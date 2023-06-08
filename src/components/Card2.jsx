import * as React from "react";

// nds-ui
import { Button, Checkbox } from 'nds-ui/component';

function Card2(props) {
  return (
    <>
      {
        props.no ?
        <div className="width100 otl-transparent"/>
        :
        <div className="width100 cursor r10 otl-grayc flexColumn overHidden card2-wrap">
          <div className="width100 h150 bgc-grayc-100 flexCenter">
            <i className="i-logo w60 h60 bgc-gray9" />
          </div>
          <div className="width100 bgc-white relative h93 flexColumn px10 pt20 pb13">
            <p className="size12 txt-gray6">Lorem</p>
            <p className="size16 width100 lh130 ellipsis2">
              {props.title}
            </p>
            <div className="card2-hover">
              <Checkbox className='like' defaultChecked/>
              <Button variant="contained" size="large" theme="white" radius="round" hoverBg="graye-100" className="flex1">Button</Button>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Card2;