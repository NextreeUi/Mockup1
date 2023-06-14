import * as React from "react";

//nds-ui
import { Checkbox, Button, Hidden, } from 'nds-ui/component';

function Card6(props) {
  return (
    <>
    <Hidden min={1401}>
      <div className="flex gap30 height100">
        <div className="width100 height100 bgc-graye"/>
        <div className="flexColumn width100">
          <div className="flex1 flexColumn gap20 height100">
            <p className="size20">Lorem ipsum dolor sit amet,</p>
            <ul className="card6-list">
              <li>
                Lorem
                <p>
                  Date / Time
                </p>
              </li>
              <li>
                Lorem
                <p>
                  Date / Time <br/>
                  Date / Time
                </p>
              </li>
              <li>
                Lorem
                <p>
                  Date / Time <br/>
                  Date / Time
                </p>
              </li>
            </ul>
          </div>
          <div className="flex alignCenter gap10">
            <Checkbox className="like-outlined" />
            <Button size='large' variant="outlined" radius="round" className="flex1 primary">
              Button
            </Button>
          </div>
        </div>
      </div>
    </Hidden>
    <Hidden max={1400}>
      <div className="flex gap30 h350">
        <div className="width100 height100 bgc-graye"/>
        <div className="flexColumn width100">
          <div className="flex1 flexColumn gap20 height100">
            <p className="size20">Lorem ipsum dolor sit amet,</p>
            <ul className="card6-list">
              <li>
                Lorem
                <p>
                  Date / Time
                </p>
              </li>
              <li>
                Lorem
                <p>
                  Date / Time <br/>
                  Date / Time
                </p>
              </li>
              <li>
                Lorem
                <p>
                  Date / Time <br/>
                  Date / Time
                </p>
              </li>
            </ul>
          </div>
          <div className="flex alignCenter gap10">
            <Checkbox className="like-outlined" />
            <Button size='large' variant="outlined" radius="round" className="flex1 primary">
              Button
            </Button>
          </div>
        </div>
      </div>
    </Hidden>
    </>
  );
}

export default Card6;