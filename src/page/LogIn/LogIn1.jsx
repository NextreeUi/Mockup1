import * as React from "react";
import Logo from "../../components/Logo";
import { Checkbox, TextField, Button, Hidden } from "nds-ui/component";

function LogIn1() {

  return (
    <>
    <Hidden min={1401}>
      <div className='vh100 width100 bgc-graye flexCenter'>
        <div className="maxw1300 h730 r20 otl-grayc bgc-white flex">
          <div className="width100 r20 bgc-primary height100 flexCenter px100">
            <i className='i-logo bgc-white_50p w250 h250'/>
          </div>
          <div className="width100 flexColumnCenter gap30 px100">
            <Logo size="medium"/>
            <div className="flexColumnCenter gap10">
              <p className="size32"> Welcome to the <span className="b">Logo!</span></p>
              <p className="txtCenter txt-gray9 size16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div className="flexColumn gap20 width100">
              <div className="flexColumn gap10 ">
                <p className="size14 txt-gray3"> ID </p>
                <TextField size="large" placeholder='Email' />
              </div>
              <div className="width100 h1 otlb-grayc-dashed"/>
              <div className="flexColumn gap10">
                <p className="size14 txt-gray3"> Password </p>
                <TextField size="large" placeholder='Password' />
              </div>
              <div className="width100 h1 otlb-grayc-dashed"/>
              <div className="flexBetween alignCenter">
                <div className="flex gap10 alignCenter">
                  <Checkbox size="small"/>
                  <p className='size14 txt-gray9 '>Remember Me</p>
                </div>
                <div className="flex gap10 alignCenter">
                  <a href='/' className='size14 txt-primary_light underline'>Forgot Password</a>
                </div>
              </div>
              <Button size='large' variant='contained'>Login</Button>
              <p className="justifyCenter size12 txt-gray9"> Don’t have an account? &nbsp; <a href='/' className="b txt-primary"> Sing up! </a> </p>
            </div>
          </div>
        </div>
      </div>
    </Hidden>
    <Hidden min={801} max={1400}>
      <div className='vh100 width100 bgc-graye flexCenter'>
        <div className="w800 h730 r20 otl-grayc bgc-white flex">
          <div className="width100 flexColumnCenter gap30 px100">
            <Logo size="medium"/>
            <div className="flexColumnCenter gap10">
              <p className="size32"> Welcome to the <span className="b">Logo!</span></p>
              <p className="txtCenter txt-gray9 size16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div className="flexColumn gap20 width100">
              <div className="flexColumn gap10 ">
                <p className="size14 txt-gray3"> ID </p>
                <TextField size="large" placeholder='Email' />
              </div>
              <div className="width100 h1 otlb-grayc-dashed"/>
              <div className="flexColumn gap10">
                <p className="size14 txt-gray3"> Password </p>
                <TextField size="large" placeholder='Password' />
              </div>
              <div className="width100 h1 otlb-grayc-dashed"/>
              <div className="flexBetween alignCenter">
                <div className="flex gap10 alignCenter">
                  <Checkbox size="small"/>
                  <p className='size14 txt-gray9 '>Remember Me</p>
                </div>
                <div className="flex gap10 alignCenter">
                  <a href='/' className='size14 txt-primary_light underline'>Forgot Password</a>
                </div>
              </div>
              <Button size='large' variant='contained'>Login</Button>
              <p className="justifyCenter size12 txt-gray9"> Don’t have an account? &nbsp; <a href='/' className="b txt-primary"> Sing up! </a> </p>
            </div>
          </div>
        </div>
      </div>
    </Hidden>
    <Hidden max={800} >
      <div className='vh100 width100 flexCenter'>
        <div className="width100 flexColumnCenter gap50 px50">
          <Logo size="medium"/>
          <div className="flexColumnCenter gap10">
            <p className="size32"> Welcome to the <span className="b">Logo!</span></p>
            <p className="txtCenter txt-gray9 size16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
          <div className="flexColumn gap20 width100">
            <div className="flexColumn gap10 ">
              <p className="size14 txt-gray3"> ID </p>
              <TextField size="large" placeholder='Email' />
            </div>
            <div className="width100 h1 otlb-grayc-dashed"/>
            <div className="flexColumn gap10">
              <p className="size14 txt-gray3"> Password </p>
              <TextField size="large" placeholder='Password' />
            </div>
            <div className="width100 h1 otlb-grayc-dashed"/>
            <div className="flexBetween alignCenter">
              <div className="flex gap10 alignCenter">
                <Checkbox size="small"/>
                <p className='size14 txt-gray9 '>Remember Me</p>
              </div>
              <div className="flex gap10 alignCenter">
                <a href='/' className='size14 txt-primary_light underline'>Forgot Password</a>
              </div>
            </div>
            <Button size='large' variant='contained'>Login</Button>
            <p className="justifyCenter size12 txt-gray9"> Don’t have an account? &nbsp; <a href='/' className="b txt-primary"> Sing up! </a> </p>
          </div>
        </div>
      </div>
    </Hidden>
    </>
  );
}

export default LogIn1;
