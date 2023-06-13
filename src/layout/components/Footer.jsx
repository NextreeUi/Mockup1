import * as React from "react";

// component
import { 
  Logo, 
} from "@/components";
import { Hidden } from "nds-ui/component";

function Footer() {
  return (
    <>
      <Hidden min={801}>
        <footer className='footer-wrap'>
          <div className="footer-content">
            <div className="flex w300">
              <Logo gray/>
            </div>
            <div className="flex gap10 alignCenter">
              <a href="/" className="size14 txt-gray6"> Privacy </a>
              <div className="h12 w1 bgc-grayc"/>
              <a href="/" className="size14 txt-gray6"> Company </a>
            </div>
            <div className="flex w300 alignEnd size14 txt-gray9">
              Copyright  ⓒ Company, All Right Reserved.
            </div>
          </div>
        </footer>
      </Hidden>
      <Hidden max={800}>
        <footer className='py70 bgc-graye'>
          <div className="flexColumn alignCenter gap30">
            <div className="flex">
              <Logo gray/>
            </div>
            <div className="flex gap10 alignCenter">
              <a href="/" className="size14 txt-gray6"> Privacy </a>
              <div className="h12 w1 bgc-grayc"/>
              <a href="/" className="size14 txt-gray6"> Company </a>
            </div>
            <div className="flex size14 txt-gray9">
              Copyright  ⓒ Company, All Right Reserved.
            </div>
          </div>
        </footer>
      </Hidden>
    </>
  );
}

export default Footer;
