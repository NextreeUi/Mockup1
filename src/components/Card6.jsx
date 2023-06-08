import * as React from "react";

//nds-ui
import { Checkbox, Button, } from 'nds-ui/component';

function Card6(props) {
  return (
    <>
      <div className="flex gap30 height100">
        <div className="w235 height100 bgc-graye"/>
        <div className="flexColumn flex1">
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
    </>
  );
}

export default Card6;