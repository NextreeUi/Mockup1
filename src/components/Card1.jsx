import * as React from "react";

// nds-ui
import { Button, Checkbox } from 'nds-ui/component';

const Card1 = ({primary, likePrimary}) => {
  return (
    <>
      <div className="r10 otl-grayc overHidden flexColumn width100">
        <div className="width100 h150 bgc-grayc flex alignCenter p10 size20 b txt-gray3">
          Lorem
        </div>
        <div className="px10 py20 flexColumn gap15">
          <div className="flexColumn gap5">
            <p className="size12 txt-gray6">Type</p>
            <p className="lh130 size16 h42 ellipsis2"> Title </p>
          </div>
          <div className="flex gap15">
            <Checkbox className='like-outlined' defaultChecked={likePrimary}/>
            <Button className='flex1 gap10' size="large" radius="round" theme={primary ? 'primary' : 'gray6'} variant="outlined"> 
              {primary ? <i className='i-check bgc-primary'/> : ''}
              Button 
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1;