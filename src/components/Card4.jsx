import * as React from "react";

// nds-ui
import { Button, Checkbox, Hidden } from 'nds-ui/component';

function Card4(props) {
  return (
    <>
      <Hidden min={1401}>
        <div className="px20 py15 cursor hover-bgc-primary_10p transition3 width100 height100 flexColumn gap10">
          <div className="r10 bgc-grayc-100 width100 height100" />
          <div className="flexColumn gap2">
            <p className="size12 txt-gray6">Lorem</p>
            <p className="size16 txt-gray6">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className="flex gap10 alignCenter">
            <div className="bgc-grayc w40 h40 r20" />
            <p className="size13">Name</p>
            <p className="size12 txt-gray9">Company</p>
          </div>
          <div className="flex gap10 width100">
            <Checkbox className='like-contained' defaultChecked/>
            <Button variant="contained" size="large" theme="white" otl='gray6' radius="round" hoverBg="graye-100" className="flex1">Button</Button>
          </div>
        </div>
      </Hidden>
      <Hidden max={1400} className='px20 py15 cursor hover-bgc-primary_10p transition3 width100 height100 flex gap20'>
        <div className="r10 bgc-grayc-100 width100 height100" />
        <div className="flexColumn width100 gap10">
          <div className="flexColumn gap2">
            <p className="size12 txt-gray6">Lorem</p>
            <p className="size16 txt-gray6">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div className="flex gap10 alignCenter">
            <div className="bgc-grayc w40 h40 r20" />
            <p className="size13">Name</p>
            <p className="size12 txt-gray9">Company</p>
          </div>
          <div className="flex gap10 width100">
            <Checkbox className='like-contained' defaultChecked/>
            <Button variant="contained" size="large" theme="white" otl='gray6' radius="round" hoverBg="graye-100" className="flex1">Button</Button>
          </div>
        </div>
      </Hidden>
    </>
  );
}

export default Card4;