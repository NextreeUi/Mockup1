import * as React from "react";

// component
import { 
  Logo, 
} from "@/components";

//nds-ui
import { Button, TextField } from "nds-ui/component";

const InfoHeader = () => {
  return (
    <>
      <header className='header-wrap'>
        <div className="header-content flexCenter">
          <Logo />
        </div>
      </header>
    </>
  );
}

export default InfoHeader;
