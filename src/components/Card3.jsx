import * as React from "react";

// nds-ui
import { Button, Checkbox } from 'nds-ui/component';

function Card3(props) {
  return (
    <>
      <div className="r10 bgc-grayc width100 height100 flex alignEnd">
        <div className="flex gap10 width100 p10">
          <Checkbox className='like' defaultChecked/>
          <Button variant="contained" size="large" theme="white" radius="round" hoverBg="graye-100" className="flex1">Button</Button>
        </div>
      </div>
    </>
  );
}

export default Card3;