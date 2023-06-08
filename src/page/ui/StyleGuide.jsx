import * as React from "react";
import { Logo, 
  Textarea,
} from "@/components";

// nds-ui
import { Button, TextField, TextArea, Select, Checkbox, Radio, Switch, Location, Pagination, } from 'nds-ui/component';

function StyleGuide() {
  let iconsList = [
    "home",
    "right",
    "right-arrow",
    "left-arrow",
    "check",
    "filter",
    "heart-outline",
    "heart",
    "magnifier",
    "pencil"
  ];
  let icons = iconsList.map((iconsName,index) => {
    return(
      <i key={iconsName + index} className={`i-${iconsName} bgc-gray6`} />
    )
  });
  
  return (
    <div className='p50 flexColumn gap50'>
      <div className='guide-style'>
        {/* logo */}
        <dl>
          <dt> Logo </dt>
          <dd>
            <div>
              <Logo/>
              <Logo size='medium'/>
            </div>
          </dd>
        </dl>
        {/* CheckBox / Radio */}
        <dl>
          <dt> Check Box /  Radio </dt>
          <dd>
            <div>
              <Checkbox />
              <Checkbox defaultChecked/>
              <Checkbox disabled/>
              <Checkbox defaultChecked disabled/>
            </div>
            <div>
            <div className="flex gap10">
              <Radio name='radioGroup1'/>
              <Radio name='radioGroup1' defaultChecked/>
              <Radio name='radioGroup2' disabled/>
              <Radio name='radioGroup2' defaultChecked disabled/>
            </div>
            </div>
          </dd>
        </dl>
      </div>

      <div className='guide-style'>
        {/* Toggle */}
        <dl>
          <dt> Toggle </dt>
          <dd>
            <div>
              <Switch/>
              <Switch defaultChecked/>
              <Switch disabled/>
              <Switch defaultChecked disabled/>
            </div>
            <div className="bgc-black_10p flexColumn">
              <div className="flex gap10">
                <Checkbox className='like' />
                <Checkbox className='like'  defaultChecked/>
              </div>
              <div className="flex gap10">
                <Checkbox className='like-outlined'/>
                <Checkbox className='like-outlined' defaultChecked/>
              </div>
              <div className="flex gap10">
                <Checkbox className='like-contained'/>
                <Checkbox className='like-contained' defaultChecked/>
              </div>
            </div>
          </dd>
        </dl>
        {/* Icon */}
        <dl>
          <dt> Icon </dt>
          <dd>
            <div>
              {icons}
            </div>
          </dd>
        </dl>
      </div>

      <div className='guide-style'>
        {/* Location */}
        <dl>
          <dt> Location </dt>
          <dd>
            <div className="flexColumn alignStart">
              <Location 
                depthLast='Last Location'
              />
              <Location 
                number={3}
                depth2='First Location'
                depthLast='Last Location'
              />
              <Location 
                number={4}
                depth2='First Location'
                depth3='Second Location'
                depthLast='Last Location'
              />
              <Location 
                number={5}
                depth2='First Location'
                depth3='Second Location'
                depth4='Third Location'
                depthLast='Last Location'
              />
            </div>
          </dd>
        </dl>
        {/* Pagination */}
        <dl>
          <dt> Pagination </dt>
          <dd>
            <div>
              <Pagination />
            </div>
          </dd>
        </dl>
      </div>

      <div className='guide-style'>
        {/* Button */}
        
        <dl>
          <dt> Button </dt>
          <dd className="flexColumn">
            <div className="flex gap35">
              <div className="flexColumn gap10 alignStart">
                <Button size='small' variant="outlined"> <p>Button</p><i className="i-right-arrow bgc-primary w15 h15" /> </Button>
                <Button variant="outlined"> Button </Button>
                <Button size='large' variant="outlined"> Button </Button>
                <Button size='small' variant="outlined" radius="round"> Button </Button>
                <Button variant="outlined" radius="round"> Button </Button>
                <Button size='large' variant="outlined" radius="round"> Button </Button>
                <Button size='large' variant="outlined" square > <i className="i-right-arrow bgc-primary" /> </Button>
                <Button size='large' variant="outlined" radius="round" square> <i className="i-right-arrow bgc-primary" /> </Button>
              </div>
              <div className="flexColumn gap10 alignStart">
                <Button size='small' variant="contained"> <p>Button</p><i className="i-right-arrow bgc-primary w15 h15" /> </Button>
                <Button variant="contained"> Button </Button>
                <Button size='large' variant="contained"> Button </Button>
                <Button size='small' variant="contained" radius="round"> Button </Button>
                <Button variant="contained" radius="round"> Button </Button>
                <Button size='large' variant="contained" radius="round"> Button </Button>
                <Button size='large' variant="contained" square > <i className="i-right-arrow bgc-primary" /> </Button>
                <Button size='large' variant="contained" radius="round" square> <i className="i-right-arrow bgc-primary" /> </Button>
              </div>
              <div className="flexColumn gap10 alignStart">
                <Button theme="gray6" size='small' variant="outlined"> <p>Button</p><i className="i-right-arrow bgc-primary w15 h15" /> </Button>
                <Button theme="gray6" variant="outlined"> Button </Button>
                <Button theme="gray6" size='large' variant="outlined"> Button </Button>
                <Button theme="gray6" size='small' variant="outlined" radius="round"> Button </Button>
                <Button theme="gray6" variant="outlined" radius="round"> Button </Button>
                <Button theme="gray6" size='large' variant="outlined" radius="round"> Button </Button>
                <Button theme="gray6" size='large' variant="outlined" square > <i className="i-right-arrow bgc-primary" /> </Button>
                <Button theme="gray6" size='large' variant="outlined" radius="round" square> <i className="i-right-arrow bgc-primary" /> </Button>
              </div>
              <div className="flexColumn gap10 alignStart">
                <Button theme="gray6" size='small' variant="contained"> <p>Button</p><i className="i-right-arrow bgc-primary w15 h15" /> </Button>
                <Button theme="gray6" variant="contained"> Button </Button>
                <Button theme="gray6" size='large' variant="contained"> Button </Button>
                <Button theme="gray6" size='small' variant="contained" radius="round"> Button </Button>
                <Button theme="gray6" variant="contained" radius="round"> Button </Button>
                <Button theme="gray6" size='large' variant="contained" radius="round"> Button </Button>
                <Button theme="gray6" size='large' variant="contained" square > <i className="i-right-arrow bgc-primary" /> </Button>
                <Button theme="gray6" size='large' variant="contained" radius="round" square> <i className="i-right-arrow bgc-primary" /> </Button>
              </div>
              <div className="flexColumn gap10 alignStart">
                <Button disabled size='small' variant="outlined"> <p>Button</p><i className="i-right-arrow bgc-primary w15 h15" /> </Button>
                <Button disabled variant="outlined"> Button </Button>
                <Button disabled size='large' variant="outlined"> Button </Button>
                <Button disabled size='small' variant="outlined" radius="round"> Button </Button>
                <Button disabled variant="outlined" radius="round"> Button </Button>
                <Button disabled size='large' variant="outlined" radius="round"> Button </Button>
                <Button disabled size='large' variant="outlined" square > <i className="i-right-arrow bgc-primary" /> </Button>
                <Button disabled size='large' variant="outlined" radius="round" square> <i className="i-right-arrow bgc-primary" /> </Button>
              </div>
              <div className="flexColumn gap10 alignStart">
                <Button disabled size='small' variant="contained"> <p>Button</p><i className="i-right-arrow bgc-primary w15 h15" /> </Button>
                <Button disabled variant="contained"> Button </Button>
                <Button disabled size='large' variant="contained"> Button </Button>
                <Button disabled size='small' variant="contained" radius="round"> Button </Button>
                <Button disabled variant="contained" radius="round"> Button </Button>
                <Button disabled size='large' variant="contained" radius="round"> Button </Button>
                <Button disabled size='large' variant="contained" square > <i className="i-right-arrow bgc-primary" /> </Button>
                <Button disabled size='large' variant="contained" radius="round" square> <i className="i-right-arrow bgc-primary" /> </Button>
              </div>
              <div className="flexColumn gap10 alignStart">
                <Button size='small' > <p>Button</p><i className="i-right-arrow bgc-primary w15 h15" /> </Button>
                <Button > Button </Button>
                <Button size='large' > Button </Button>
                <Button size='small'  radius="round"> Button </Button>
                <Button radius="round"> Button </Button>
                <Button size='large' radius="round"> Button </Button>
                <Button size='large' square > <i className="i-right-arrow bgc-primary" /> </Button>
                <Button size='large' radius="round" square> <i className="i-right-arrow bgc-primary" /> </Button>
              </div>
              <div className="flexColumn gap10 alignStart">
                <Button theme="gray6" size='small' > <p>Button</p><i className="i-right-arrow bgc-primary w15 h15" /> </Button>
                <Button theme="gray6" > Button </Button>
                <Button theme="gray6" size='large' > Button </Button>
                <Button theme="gray6" size='small'  radius="round"> Button </Button>
                <Button theme="gray6" radius="round"> Button </Button>
                <Button theme="gray6" size='large' radius="round"> Button </Button>
                <Button theme="gray6" size='large' square > <i className="i-right-arrow bgc-primary" /> </Button>
                <Button theme="gray6" size='large' radius="round" square> <i className="i-right-arrow bgc-primary" /> </Button>
              </div>
            </div>
          </dd>
        </dl>
      </div>
      <div className='guide-style'>
        {/* Textfield */}
        <dl>
          <dt> Textfield </dt>
          <dd className="flexColumn">
            <div className="flexColumn alignStart">
              <div className="flex gap10">
                <TextField className='w300' defaultValue='Default'/>
                <TextField className='w300' defaultValue='Disabled' disabled/>
                <TextField className='w300' defaultValue='Read Only' readOnly />
              </div>
              <div className="flex gap10">
                <TextField className='w300' size='large' defaultValue='Default'/>
                <TextField className='w300' size='large' defaultValue='Disabled' disabled/>
                <TextField className='w300' size='large' defaultValue='Read Only' readOnly />
              </div>
              <div className="flex gap10">
                <TextField className='w300' radius="round" defaultValue='Default'/>
                <TextField className='w300' radius="round" defaultValue='Disabled' disabled/>
                <TextField className='w300' radius="round" defaultValue='Read Only' readOnly />
              </div>
              <div className="flex gap10">
                <TextField className='w300' radius="round" size='large' defaultValue='Default'/>
                <TextField className='w300' radius="round" size='large' defaultValue='Disabled' disabled/>
                <TextField className='w300' radius="round" size='large' defaultValue='Read Only' readOnly />
              </div>
            </div>
            <div className="flexColumn alignStart">
              <div className="flex gap10">
                <TextArea defaultValue='Default' className="w300" rows={5} />
                <TextArea defaultValue='Disabled' className="w300" rows={5} disabled/>
                <TextArea defaultValue='Read Only' className="w300" rows={5} readOnly/>
              </div>
              <div className="flex gap10">
                <TextArea defaultValue='Default' max={200} className='w300' rows={5} />
                <TextArea defaultValue='Disabled' max={200} className='w300' rows={5} disabled/>
                <TextArea defaultValue='Read Only' max={200} className='w300' rows={5} readOnly/>
              </div>
            </div>
          </dd>
        </dl>
      </div>
      <div className='guide-style'>
        {/* Select */}
        <dl>
          <dt> Select </dt>
          <dd>
            <div className="flexColumn alignStart">
              <div className="flex gap10">
                <Select list={['Default', 'Disabled', 'Read Only']} />
                <Select list={['Default', 'Disabled', 'Read Only']} disabled/>
              </div>
              <div className="flex gap10">
                <Select size="large" list={['Default', 'Disabled', 'Read Only']} />
                <Select size="large" list={['Default', 'Disabled', 'Read Only']} disabled/>
              </div>
              <div className="flex gap10">
                <Select radius="round" list={['Default', 'Disabled', 'Read Only']} />
                <Select radius="round" list={['Default', 'Disabled', 'Read Only']} disabled/>
              </div>
              <div className="flex gap10">
                <Select radius="round" size="large" list={['Default', 'Disabled', 'Read Only']} />
                <Select radius="round" size="large" list={['Default', 'Disabled', 'Read Only']} disabled/>
              </div>
            </div>
          </dd>
        </dl>
      </div>
      <div className='guide-style'>
        {/* date */}
        <dl>
          <dt> Date </dt>
          <dd>
            <div className="flexColumn alignStart">
              제작 예정입니다.
            </div>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default StyleGuide;
