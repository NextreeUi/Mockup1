import * as React from "react";

// component
import { 
  Logo, 
} from "@/components";

function Footer() {
  return (
    <>
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
    </>
  );
}

export default Footer;
