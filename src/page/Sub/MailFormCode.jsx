import * as React from "react";

//nds-ui
import { Button } from 'nds-ui/component';
import Logo from "../../components/Logo";

const MailFormCode = () => {
  return (
    <>
    <div className="vh100 flexCenter">
      <div className="flexColumn w800 overHidden r50 otl-grayc">
        <div className="relative bgc-gray3 flexColumn alignStart gap20 pt70 pr200 pb100 pl70">
          <Logo white/>
          <p className="size32 t lh130 txt-white">
            Verification Code
          </p>
          <i className="w207 h207 i-logo bgc-white_30p absolute ar65 ab-20"/>
        </div>
        <div className='px100 py50 flexColumn alignCenter gap50'>
          <div className="flexColumn t txt-gray3 gap15">
            <p className="size24">
              <span className="txt-primary">Mr Lorem</span>, Hello! We are Logo
            </p>
            <p className="size18 lh130">
              Lorem ipsum dolor sit amet, <span className="txt-primary">consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div className="flexBetween width100">
            <div className="r10 otl-black flexCenter w79 h82 size32 b">1</div>
            <div className="r10 otl-black flexCenter w79 h82 size32 b">5</div>
            <div className="r10 otl-black flexCenter w79 h82 size32 b">3</div>
            <div className="r10 otl-black flexCenter w79 h82 size32 b">1</div>
            <div className="r10 otl-black flexCenter w79 h82 size32 b">2</div>
            <div className="r10 otl-black flexCenter w79 h82 size32 b">8</div>
          </div>
        </div>
        <div className="bgc-grayf8 px70 py40 size12 txt-gray9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    </>
  )
}


export default MailFormCode;