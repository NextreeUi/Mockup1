import * as React from "react";
import { 
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
} from "@/components";

//nds-ui
import { Slide, Button, Hidden, Tab } from 'nds-ui/component';

const MainBanner = ({lnbOpen}) => {
  const SlideContent = (props) => {
    return (
      <>
        <Hidden min={801} className={`width100 height100 flexColumn flexCenter gap50 ${props.gray ? 'bgc-grayc' : 'bgc-graye'}`}>
          <div className="flexColumn flexCenter gap30">
            <div className="flexColumn flexCenter gap20">
              <div className="flexColumn flexCenter ">
                <div className="flex gap10 size18 txt-gray9">
                  <p className="b txt-primary">Lorem</p>
                  <p>Lorem ipsum dolor</p>
                </div>
                <p className="size32 txtCenter b txt-black">{props.number} Lorem ipsum dolor sit amet consectetur</p>
                <p className="size24 txt-black">adipiscing (ELIT)</p>
              </div>
              <div className="flex gap10">
                <Button size='large' radius='round' variant='contained' theme='white'>
                  BUTTON
                </Button>
                <Button size='large' radius='round' variant='contained'>
                  BUTTON
                </Button>
              </div>
            </div>
            <i className="i-logo w334 h334 bgc-black_15p"/>
          </div>
          <div className="h30"/>
        </Hidden>
        <Hidden max={800} className={`width100 height100 flexColumn py70 flexCenter gap20 ${props.gray ? 'bgc-grayc' : 'bgc-graye'}`}>
          <div className="flexColumn flexCenter gap50">
            <div className="flexColumn flexCenter ">
              <div className="flex gap10 size18 txt-gray9">
                <p className="b txt-primary">Lorem</p>
                <p>Lorem ipsum dolor</p>
              </div>
              <p className="size32 txtCenter b txt-black">{props.number} Lorem ipsum dolor sit <br/> amet consectetur</p>
              <p className="size24 txt-black">adipiscing (ELIT)</p>
            </div>
            <div className="flex gap10">
              <Button size='large' radius='round' variant='contained' theme='white'>
                BUTTON
              </Button>
              <Button size='large' radius='round' variant='contained'>
                BUTTON
              </Button>
            </div>
          </div>
          <i className="i-logo w216 h216 bgc-black_15p"/>
        </Hidden>
      </>
    )
  }
  return (
    <>
    <Hidden min={1401}>
      <Slide 
        classSlide='h700 lnbContentWidth'
        classBtn='w1140'
        classNav='slide-mainBanner-nav'
        classNavWrap='slide-mainBanner-nav-wrap'
        playIcon={<i className='flex bgc-black_30p i-play w22 h22'/>}
        pauseIcon={<i className='flex bgc-black_30p i-pause w22 h22'/>}
        content={[
          <SlideContent key={1} number={1}/>,
          <SlideContent key={2} number={2} gray/>,
          <SlideContent key={3} number={3}/>,
          <SlideContent key={4} number={4} gray/>
        ]}
      />
    </Hidden>
    <Hidden min={801} max={1400}>
      <Slide 
        classSlide='h700 lnbContentWidth'
        classBtn='w540'
        classNav='slide-mainBanner-nav'
        classNavWrap='slide-mainBanner-nav-wrap'
        playIcon={<i className='flex bgc-black_30p i-play w22 h22'/>}
        pauseIcon={<i className='flex bgc-black_30p i-pause w22 h22'/>}
        content={[
          <SlideContent key={1} number={1}/>,
          <SlideContent key={2} number={2} gray/>,
          <SlideContent key={3} number={3}/>,
          <SlideContent key={4} number={4} gray/>
        ]}
      />
    </Hidden>
    <Hidden max={800}>
      <Slide 
        classSlide='height100 vw100-4'
        classBtn='px10 width100'
        noNav
        leftBtn={
          <Button theme='gray6' square radius="round">
            <i className="i-left-thin w30 h30"/>
          </Button>
        }        
        rightBtn={
          <Button theme='gray6' square radius="round">
            <i className="i-right-thin w30 h30"/>
          </Button>
        }        
        content={[
          <SlideContent key={1} number={1}/>,
          <SlideContent key={2} number={2} gray/>,
          <SlideContent key={3} number={3}/>,
          <SlideContent key={4} number={4} gray/>
        ]}
      />
    </Hidden>
    </>
  );
}

const Section1 = () => {
  const [tabState, setTabState] = React.useState(1);

  return (
    <>
    <Hidden min={1401} className='section1'>
      <div className="flexColumn alignCenter">
        <div className="w1140 flex gap70">
          <div className="flexColumn gap5 w220 mt85">
            <div className="flex gap4">
              <p className="size16 txt-gray6">Mr.</p>
              <p className="size16 txt-gray3">Lorem</p>
            </div>
            <div className="size24 txt-black">
              Welcome! <br/>
              to the <br/>
              <b>LOGO</b>
            </div>
          </div>
          <Tab 
            state={tabState} 
            setState={setTabState}
            tabName={['Tab', 'Tab', 'Tab', 'Tab']}
            classTabWrap='tab-round'
          >
            {
              tabState == 0 ?
              <div className='flexColumn gap15'>
                <div className="flexBetween alignCenter">
                  <p className="size19"> Lorem Ipsum </p>
                  <Button variant='contained' theme='white' size='extraSmall' radius="round" square>
                    <i className="i-plus" />
                  </Button>
                </div>
                <div className="flex gap20">
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 title='Lorem ipsum dolor sit amet, consectetur'/>
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'/>
                </div>
              </div>
              
              : tabState == 1 ?
              <div className='flexColumn gap15'>
                <div className="flexBetween alignCenter">
                  <p className="size19"> Lorem Ipsum </p>
                  <Button variant='contained' theme='white' size='extraSmall' radius="round" square>
                    <i className="i-plus" />
                  </Button>
                </div>
                <div className="flex gap20">
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 title='Lorem ipsum dolor sit amet, consectetur'/>
                  <Card2 no/>
                  <Card2 no/>
                </div>
              </div>
              : tabState == 2 ?
              <div className='flexColumn gap15'>
                <div className="flexBetween alignCenter">
                  <p className="size19"> Lorem Ipsum </p>
                  <Button variant='contained' theme='white' size='extraSmall' radius="round" square>
                    <i className="i-plus" />
                  </Button>
                </div>
                <div className="flex gap20">
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 no/>
                </div>
              </div>
              : tabState == 3 ?
              <div className='flexColumn gap15'>
                <div className="flexBetween alignCenter">
                  <p className="size19"> Lorem Ipsum </p>
                  <Button variant='contained' theme='white' size='extraSmall' radius="round" square>
                    <i className="i-plus" />
                  </Button>
                </div>
                <div className="flex gap20">
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 no/>
                  <Card2 no/>
                  <Card2 no/>
                </div> 
              </div>: <></>
            }
          </Tab>
        </div>
      </div>
    </Hidden>
    <Hidden min={801} max={1400} className='section1'>
      <div className="flexColumn alignCenter">
        <div className="flexColumn w560 alignStart gap5 w220 mb30">
          <div className="flex gap4">
            <p className="size16 txt-gray6">Mr.</p>
            <p className="size16 txt-gray3">Lorem</p>
          </div>
          <div className="size24 txt-black">
            Welcome! <br/>
            to the <br/>
            <b>LOGO</b>
          </div>
        </div>
        <div className="w560 flex gap70">
          <Tab 
            state={tabState} 
            setState={setTabState}
            tabName={['Tab', 'Tab', 'Tab', 'Tab']}
            classTabWrap='tab-round'
          >
            {
              tabState == 0 ?
              <div className='flexColumn gap15'>
                <div className="flexBetween alignCenter">
                  <p className="size19"> Lorem Ipsum </p>
                  <Button variant='contained' theme='white' size='extraSmall' radius="round" square>
                    <i className="i-plus" />
                  </Button>
                </div>
                <div className="flex gap20">
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'/>
                </div>
              </div>
              
              : tabState == 1 ?
              <div className='flexColumn gap15'>
                <div className="flexBetween alignCenter">
                  <p className="size19"> Lorem Ipsum </p>
                  <Button variant='contained' theme='white' size='extraSmall' radius="round" square>
                    <i className="i-plus" />
                  </Button>
                </div>
                <div className="flex gap20">
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 no/>
                </div>
              </div>
              : tabState == 2 ?
              <div className='flexColumn gap15'>
                <div className="flexBetween alignCenter">
                  <p className="size19"> Lorem Ipsum </p>
                  <Button variant='contained' theme='white' size='extraSmall' radius="round" square>
                    <i className="i-plus" />
                  </Button>
                </div>
                <div className="flex gap20">
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 no/>
                </div>
              </div>
              : tabState == 3 ?
              <div className='flexColumn gap15'>
                <div className="flexBetween alignCenter">
                  <p className="size19"> Lorem Ipsum </p>
                  <Button variant='contained' theme='white' size='extraSmall' radius="round" square>
                    <i className="i-plus" />
                  </Button>
                </div>
                <div className="flex gap20">
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 no/>
                </div> 
              </div>: <></>
            }
          </Tab>
        </div>
      </div>
    </Hidden>
    <Hidden max={801} className='section1'>
      <div className="flexColumn alignCenter">
        <div className="flexColumn alignCenter gap5 mb30">
          <div className="flex gap4">
            <p className="size16 txt-gray6">Mr.</p>
            <p className="size16 txt-gray3">Lorem</p>
          </div>
          <div className="size24 txt-black">
            Welcome! to the <b>LOGO</b>
          </div>
        </div>
        <div className="section-content flex gap70">
          <Tab 
            state={tabState} 
            setState={setTabState}
            tabName={['Tab', 'Tab', 'Tab', 'Tab']}
            classTabWrap='tab-round'
          >
            {
              tabState == 0 ?
              <div className='flexColumn gap15'>
                <div className="flexBetween alignCenter">
                  <p className="size19"> Lorem Ipsum </p>
                  <Button variant='contained' theme='white' size='extraSmall' radius="round" square>
                    <i className="i-plus" />
                  </Button>
                </div>
                <div className="flex gap20">
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 title='Lorem ipsum dolor sit amet, consectetur'/>
                </div>
              </div>
              
              : tabState == 1 ?
              <div className='flexColumn gap15'>
                <div className="flexBetween alignCenter">
                  <p className="size19"> Lorem Ipsum </p>
                  <Button variant='contained' theme='white' size='extraSmall' radius="round" square>
                    <i className="i-plus" />
                  </Button>
                </div>
                <div className="flex gap20">
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 title='Lorem ipsum dolor sit amet, consectetur'/>
                </div>
              </div>
              : tabState == 2 ?
              <div className='flexColumn gap15'>
                <div className="flexBetween alignCenter">
                  <p className="size19"> Lorem Ipsum </p>
                  <Button variant='contained' theme='white' size='extraSmall' radius="round" square>
                    <i className="i-plus" />
                  </Button>
                </div>
                <div className="flex gap20">
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 no/>
                </div>
              </div>
              : tabState == 3 ?
              <div className='flexColumn gap15'>
                <div className="flexBetween alignCenter">
                  <p className="size19"> Lorem Ipsum </p>
                  <Button variant='contained' theme='white' size='extraSmall' radius="round" square>
                    <i className="i-plus" />
                  </Button>
                </div>
                <div className="flex gap20">
                  <Card2 title='Lorem Ipsum dolor'/>
                  <Card2 no/>
                </div> 
              </div>: <></>
            }
          </Tab>
        </div>
      </div>
    </Hidden>
    </>
  )
}

const Section2 = () => {
  const [cardSlideNumber, setCardSlideNumber] = React.useState(1);

  return (
    <>
    <Hidden min={1401}>
      <section className="section2">
        <div className="w1140 flexColumn  gap15">
          <div className="flex justifyEnd gap20">
            <Button 
              size="extraSmall"
              radius="round"
              square
              theme="white"
              onClick={()=>{
                if(cardSlideNumber > 1) {
                  setCardSlideNumber(cardSlideNumber - 1)
                }
              }}  
            >
              <p className="i-left-thin w24 h24 bgc-gray6" />
            </Button>
            <Button 
              size="extraSmall"
              radius="round"
              square
              theme="white"
              onClick={()=>{
                if(cardSlideNumber < 3) {
                  setCardSlideNumber(cardSlideNumber + 1)
                }
              }}  
            >
              <p className="i-right-thin w24 h24 bgc-gray6" />
            </Button>
          </div>
          <div className="flex gap70">
            <div className="w220 flexColumn gap5">
              <div className="flex gap4 size16 txt-gray3">
                <p className="txt-gray6">Mr.</p>
                <p>Lorem</p>
              </div>
              <p className="size24 txt-black">
              Lorem ipsum dolor sit amet, consectetur 
              </p>
            </div>
            <div className="card-slide-wrap">
              <div 
                className={`card-slide ${
                  cardSlideNumber == 1 ? 's1' :
                  cardSlideNumber == 2 ? 's2' :
                  cardSlideNumber == 3 ? 's3' : ''
                }`}
              >
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 no/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Hidden>
    <Hidden min={801} max={1400}>
      <section className="section2">
        <div className="w560 flexColumn gap15">
          <div className="flexBetween alignEnd">
            <div className="w220 flexColumn gap5">
              <div className="flex gap4 size16 txt-gray3">
                <p className="txt-gray6">Mr.</p>
                <p>Lorem</p>
              </div>
              <p className="size24 txt-black">
              Lorem ipsum dolor sit amet, consectetur 
              </p>
            </div>
            <div className="flex gap20">
              <Button 
                size="extraSmall"
                radius="round"
                square
                theme="white"
                onClick={()=>{
                  if(cardSlideNumber > 1) {
                    setCardSlideNumber(cardSlideNumber - 1)
                  }
                }}  
              >
                <p className="i-left-thin w24 h24 bgc-gray6" />
              </Button>
              <Button 
                size="extraSmall"
                radius="round"
                square
                theme="white"
                onClick={()=>{
                  if(cardSlideNumber < 3) {
                    setCardSlideNumber(cardSlideNumber + 1)
                  }
                }}  
              >
                <p className="i-right-thin w24 h24 bgc-gray6" />
              </Button>
            </div>
          </div>
          <div className="flex gap70">
            
            <div className="card-slide-wrap">
              <div 
                className={`card-slide ${
                  cardSlideNumber == 1 ? 's1' :
                  cardSlideNumber == 2 ? 's2' :
                  cardSlideNumber == 3 ? 's3' : ''
                }`}
              >
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 no/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Hidden>
    <Hidden max={800}>
      <section className="section2">
        <div className="section-content flexColumn gap15">
          <div className="flexColumn gap5">
            <div className="flex gap4 size16 txt-gray3">
              <p className="txt-gray6">Mr.</p>
              <p>Lorem</p>
            </div>
            <div className="size24 txt-black flexBetween">
              Lorem ipsum dolor sit amet, consectetur 
              <div className="flex gap20">
                <Button 
                  size="extraSmall"
                  radius="round"
                  square
                  theme="white"
                  onClick={()=>{
                    if(cardSlideNumber > 1) {
                      setCardSlideNumber(cardSlideNumber - 1)
                    }
                  }}  
                >
                  <p className="i-left-thin w24 h24 bgc-gray6" />
                </Button>
                <Button 
                  size="extraSmall"
                  radius="round"
                  square
                  theme="white"
                  onClick={()=>{
                    if(cardSlideNumber < 3) {
                      setCardSlideNumber(cardSlideNumber + 1)
                    }
                  }}  
                >
                  <p className="i-right-thin w24 h24 bgc-gray6" />
                </Button>
              </div>
            </div>
          </div>
          <div className="justifyEnd">
            
          </div>
          <div className="flex gap70">
            <div className="card-slide-wrap">
              <div 
                className={`card-slide ${
                  cardSlideNumber == 1 ? 's1' :
                  cardSlideNumber == 2 ? 's2' :
                  cardSlideNumber == 3 ? 's3' : ''
                }`}
              >
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 no/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Hidden>
    </>
  )
}

const Section3 = (props) => {
  return (
    <>
    <Hidden min={1401}>
      <section className="section3">
        <div className="flexColumn gap30">
          <Hidden max={1400}>
            <p className="w220 size24">
              Lorem ipsum dolor sit amet, consectetur 
            </p>
          </Hidden>
          <div className="w1140 flex gap70">
            <Hidden min={1400}>
              <p className="w220 size24">
                Lorem ipsum dolor sit amet, consectetur 
              </p>
            </Hidden>
            <div className="flex flex1 gap50">
              <div className="flexColumn width100 gap20">
                <p className="size19">Lorem Ipsum</p>
                <Card6 />
              </div>
              <div className="height100 w1 bgc-grayc"/>
              <div className="flexColumn width100 gap20">
                <div className="flexBetween alignCenter">
                  <p className="size19">Lorem Ipsum</p>
                  <Button theme="gray3" size="extraSmall" radius="round" square>
                    <i className="i-plus"/>
                  </Button>
                </div>
                {
                  props.loading ?
                  <div className="flex1 h328 otl-grayc flexCenter size14 txt-gray6">
                    Loading...
                  </div>
                  :
                  <div className="flexColumn gap20">
                    <Card5 />
                    <Card5 />
                    <Card5 />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </Hidden>
    <Hidden min={801} max={1400}>
      <section className="section3">
        <div className="flexColumn gap30">
          <p className="w220 size24">
            Lorem ipsum dolor sit amet, consectetur 
          </p>
          <div className="w560 flex gap70">
            <div className="flexColumn flex1 gap50">
              <div className="flexColumn width100 gap20">
                <p className="size19">Lorem Ipsum</p>
                <Card6 />
              </div>
              <div className="width100 h1 bgc-grayc"/>
              <div className="flexColumn width100 gap20">
                <div className="flexBetween alignCenter">
                  <p className="size19">Lorem Ipsum</p>
                  <Button theme="gray3" size="extraSmall" radius="round" square>
                    <i className="i-plus"/>
                  </Button>
                </div>
                {
                  props.loading ?
                  <div className="flex1 h328 otl-grayc flexCenter size14 txt-gray6">
                    Loading...
                  </div>
                  :
                  <div className="flexColumn gap20">
                    <Card5 />
                    <Card5 />
                    <Card5 />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </Hidden>
    <Hidden max={800}>
      <section className="section3">
        <div className="flexColumn gap30">
          <p className="w220 size24">
            Lorem ipsum dolor sit amet, consectetur 
          </p>
          <div className="section-content flex gap70">
            <div className="flexColumn width100 gap50">
              <div className="flexColumn h380 width100 gap20">
                <p className="size19">Lorem Ipsum</p>
                <Card6 />
              </div>
              <div className="width100 h1 bgc-grayc"/>
              <div className="flexColumn width100 gap20">
                <div className="flexBetween alignCenter">
                  <p className="size19">Lorem Ipsum</p>
                  <Button theme="gray3" size="extraSmall" radius="round" square>
                    <i className="i-plus"/>
                  </Button>
                </div>
                {
                  props.loading ?
                  <div className="flex1 h328 otl-grayc flexCenter size14 txt-gray6">
                    Loading...
                  </div>
                  :
                  <div className="flexColumn gap20">
                    <Card5 />
                    <Card5 />
                    <Card5 />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </Hidden>
    </>
  )
}

const SubBanner = ({lnbOpen}) => {
  const SlideContent = (props) => {
    return (
      <>
      <Hidden min={1400} className='width100 height100'>
        <div className={`width100 height100 flexCenter ${props.gray ? 'bgc-gray6': 'bgc-gray9'}`}>
          <div className="w1140 relative height100 flexColumn gap20 justifyCenter alignStart">
            <div className="flexColumn gap10alignStart">
              <div className="flex gap10 size18 txt-white">
                <p className="b txt-primary">Lorem</p>
                <p>Lorem ipsum dolor</p>
              </div>
              <p className="size32 lh100 txt-white">
                {props.number} Lorem ipsum dolor sit amet consectetur <br/>
              </p>
              <p className="size32 lh100 txt-white">
                adipiscing (ELIT)
              </p>
            </div>
            <div className="flex gap10 mb30">
              <Button size='large' variant="contained" radius="round" theme="white">
                Button
              </Button>
              <Button size='large' variant="contained" radius="round">
                Button
              </Button>
            </div>
            <i className="i-logo w232 h232 bgc-white_80p absolute ar0"/>
          </div>
        </div>
      </Hidden>
      <Hidden min={801} max={1400} className='width100 height100'>
        <div className={`width100 height100 flexCenter ${props.gray ? 'bgc-gray6': 'bgc-gray9'}`}>
          <div className="w560 relative height100 flexColumn gap20 justifyCenter alignStart">
            <div className="flexColumn gap10alignStart">
              <div className="flex gap10 size18 txt-white">
                <p className="b txt-primary">Lorem</p>
                <p>Lorem ipsum dolor</p>
              </div>
              <p className="size32 lh100 txt-white">
                {props.number} Lorem ipsum dolor sit amet consectetur <br/>
              </p>
              <p className="size32 lh100 txt-white">
                adipiscing (ELIT)
              </p>
            </div>
            <div className="flex gap10 mb30">
              <Button size='large' variant="contained" radius="round" theme="white">
                Button
              </Button>
              <Button size='large' variant="contained" radius="round">
                Button
              </Button>
            </div>
            <i className="i-logo w160 h160 bgc-white_80p absolute ar0"/>
          </div>
        </div>
      </Hidden>
      <Hidden max={800} className='width100 height100'>
        <div className={`width100 py70 height100 flexCenter ${props.gray ? 'bgc-gray6': 'bgc-gray9'}`}>
          <div className="contentWidth gap50 mb70 relative height100 flexColumn gap20 justifyCenter alignStart">
            <div className="flexColumn gap10 alignStart">
              <div className="flex gap10 size18 txt-white">
                <p className="b txt-primary">Lorem</p>
                <p>Lorem ipsum dolor</p>
              </div>
              <p className="size32 lh100 txt-white">
                {props.number} Lorem ipsum dolor sit amet consectetur <br/>
              </p>
              <p className="size32 lh100 txt-white">
                adipiscing (ELIT)
              </p>
            </div>
            <div className="flex gap10">
              <Button size='large' variant="contained" radius="round" theme="white">
                Button
              </Button>
              <Button size='large' variant="contained" radius="round">
                Button
              </Button>
            </div>
          </div>
        </div>
      </Hidden>
      </>
    )
  }
  return (
    <>
      <Hidden min={1401}>
        <Slide
          classSlide='h317 lnbContentWidth'
          classNav='slide-subBanner-nav'
          classNavWrap='w1140 ab45'
          playIcon={<i className='flex bgc-white i-play w30 h30'/>}
          pauseIcon={<i className='flex bgc-white i-pause w30 h30'/>}
          leftBtn={<></>}
          rightBtn={<></>}
          content={[
            <SlideContent key={1} gray/>,
            <SlideContent key={2} />,
            <SlideContent key={3} gray/>,
            <SlideContent key={4} />
          ]}
        />
      </Hidden>
      <Hidden min={801} max={1400}>
        <Slide
          classSlide='h317 lnbContentWidth'
          classNav='slide-subBanner-nav'
          classNavWrap='w560 ab45'
          playIcon={<i className='flex bgc-white i-play w30 h30'/>}
          pauseIcon={<i className='flex bgc-white i-pause w30 h30'/>}
          leftBtn={<></>}
          rightBtn={<></>}
          content={[
            <SlideContent key={1} gray/>,
            <SlideContent key={2} />,
            <SlideContent key={3} gray/>,
            <SlideContent key={4} />
          ]}
        />
      </Hidden>
      <Hidden max={800}>
        <Slide
          classSlide='height100 vw100-4'
          classNav='slide-subBanner-nav'
          classNavWrap='slide-subBanner-nav-wrap'
          playIcon={<i className='flex bgc-white i-play w30 h30'/>}
          pauseIcon={<i className='flex bgc-white i-pause w30 h30'/>}
          leftBtn={<></>}
          rightBtn={<></>}
          content={[
            <SlideContent key={1} gray/>,
            <SlideContent key={2} />,
            <SlideContent key={3} gray/>,
            <SlideContent key={4} />
          ]}
        />
      </Hidden>
    </>
  );
}

const Section4 = () => {
  const [cardSlideNumber, setCardSlideNumber] = React.useState(1);

  return (
    <>
    <Hidden min={1401} className='section4'>
      <section className="section4">
        <div className="w1140 flexColumn gap15">
          <div className="justifyEnd">
            <div className="flex gap20">
              <Button 
                size="extraSmall"
                radius="round"
                square
                theme="white"
                onClick={()=>{
                  if(cardSlideNumber > 1) {
                    setCardSlideNumber(cardSlideNumber - 1)
                  }
                }}  
              >
                <p className="i-left-thin w24 h24 bgc-gray6" />
              </Button>
              <Button 
                size="extraSmall"
                radius="round"
                square
                theme="white"
                onClick={()=>{
                  if(cardSlideNumber < 3) {
                    setCardSlideNumber(cardSlideNumber + 1)
                  }
                }}  
              >
                <p className="i-right-thin w24 h24 bgc-gray6" />
              </Button>
            </div>
          </div>
          <div className="flex gap70">
            <div className="w220 flexColumn gap5">
              <div className="flex gap4 size16 txt-gray3">
                <p className="txt-gray6">Mr.</p>
                <p>Lorem</p>
              </div>
              <p className="size24 txt-black">
              Lorem ipsum dolor sit amet, consectetur 
              </p>
            </div>
            <div className="card-slide-wrap">
              <div 
                className={`card-slide ${
                  cardSlideNumber == 1 ? 's1' :
                  cardSlideNumber == 2 ? 's2' :
                  cardSlideNumber == 3 ? 's3' : ''
                }`}
              >
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 title='Lorem Ipsum dolor'/>
                <Card2 no/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Hidden>
    <Hidden min={801} max={1400} className='section4'>
    <section className="section4">
      <div className="w560 flexColumn gap15">
        <div className="flexBetween alignEnd">
         <div className="w220 flexColumn gap5">
            <div className="flex gap4 size16 txt-gray3">
              <p className="txt-gray6">Mr.</p>
              <p>Lorem</p>
            </div>
            <p className="size24 txt-black">
            Lorem ipsum dolor sit amet, consectetur 
            </p>
          </div>
          <div className="flex gap20">
            <Button 
              size="extraSmall"
              radius="round"
              square
              theme="white"
              onClick={()=>{
                if(cardSlideNumber > 1) {
                  setCardSlideNumber(cardSlideNumber - 1)
                }
              }}  
            >
              <p className="i-left-thin w24 h24 bgc-gray6" />
            </Button>
            <Button 
              size="extraSmall"
              radius="round"
              square
              theme="white"
              onClick={()=>{
                if(cardSlideNumber < 3) {
                  setCardSlideNumber(cardSlideNumber + 1)
                }
              }}  
            >
              <p className="i-right-thin w24 h24 bgc-gray6" />
            </Button>
          </div>
        </div>
        <div className="flex gap70">
          <div className="card-slide-wrap">
            <div 
              className={`card-slide ${
                cardSlideNumber == 1 ? 's1' :
                cardSlideNumber == 2 ? 's2' :
                cardSlideNumber == 3 ? 's3' : ''
              }`}
            >
              <Card2 title='Lorem Ipsum dolor'/>
              <Card2 title='Lorem Ipsum dolor'/>
              <Card2 title='Lorem Ipsum dolor'/>
              <Card2 title='Lorem Ipsum dolor'/>
              <Card2 title='Lorem Ipsum dolor'/>
              <Card2 no/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Hidden>
  <Hidden max={800} className='section4'>
    <section className="section4">
      <div className="section-content flexColumn gap15">
        <div className="flexBetween alignEnd">
         <div className="w220 flexColumn gap5">
            <div className="flex gap4 size16 txt-gray3">
              <p className="txt-gray6">Mr.</p>
              <p>Lorem</p>
            </div>
            <p className="size24 txt-black">
            Lorem ipsum dolor sit amet, consectetur 
            </p>
          </div>
          <div className="flex gap20">
            <Button 
              size="extraSmall"
              radius="round"
              square
              theme="white"
              onClick={()=>{
                if(cardSlideNumber > 1) {
                  setCardSlideNumber(cardSlideNumber - 1)
                }
              }}  
            >
              <p className="i-left-thin w24 h24 bgc-gray6" />
            </Button>
            <Button 
              size="extraSmall"
              radius="round"
              square
              theme="white"
              onClick={()=>{
                if(cardSlideNumber < 3) {
                  setCardSlideNumber(cardSlideNumber + 1)
                }
              }}  
            >
              <p className="i-right-thin w24 h24 bgc-gray6" />
            </Button>
          </div>
        </div>
        <div className="flex gap70">
          <div className="card-slide-wrap">
            <div 
              className={`card-slide ${
                cardSlideNumber == 1 ? 's1' :
                cardSlideNumber == 2 ? 's2' :
                cardSlideNumber == 3 ? 's3' : ''
              }`}
            >
              <Card2 title='Lorem Ipsum dolor'/>
              <Card2 title='Lorem Ipsum dolor'/>
              <Card2 title='Lorem Ipsum dolor'/>
              <Card2 title='Lorem Ipsum dolor'/>
              <Card2 title='Lorem Ipsum dolor'/>
              <Card2 no/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Hidden>
  </>
  )
}

const Section5 = (props) => {
  return (
    <>
    <Hidden min={1401} className='section5'>
      <section className="section5">
        <div className="w1140 flex gap50">
          <div className="flex1 flexColumn gap20">
            <div className="h24 flexBetween">
              <p className="size19"> New</p>
              <Button size="extraSmall" square radius='round' theme="gray3">
                <i className="i-plus"/>
              </Button>
            </div>
            <div className="flex gap40">
              <div className="flexColumn w100 flex1 gap15">
                <div className="flexColumn gap5">
                  <p className="size13">[Lorem]</p>
                  <p className="size24">Lorem ipsum dolor</p>
                  <p className="size13 txt-gray9">company</p>
                </div>
                <div className="ellipsis5 size13 txt-gray9">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="flexColumn gap5">
                  <p className="size14 txt-gray6">[7Chapter]</p>
                  <div className="scrollYAuto scroll-padding h128 r10 flexColumn gap10 p15 bgc-primary_10p">
                    <div className="flex gap20">
                      <div className="w30 h30 r15 bgc-primary flexCenter txt-white size13">01</div>
                      <div className="flexColumn w100 flex1 py5 gap5">
                        <p className="size13 ellipsis2">Lorem ipsum dolor sit amet, consectetur</p>
                        <div className="flex gap20">
                          <p className="size12 txt-gray6">Video</p>
                          <p className="size12 txt-gray9">25m</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap20">
                      <div className="w30 h30 r15 bgc-primary flexCenter txt-white size13">02</div>
                      <div className="flexColumn w100 flex1 py5 gap5">
                        <p className="size13 ellipsis2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                        <div className="flex gap20">
                          <p className="size12 txt-gray6">Video</p>
                          <p className="size12 txt-gray9">25m</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap20">
                      <div className="w30 h30 r15 bgc-primary flexCenter txt-white size13">03</div>
                      <div className="flexColumn w100 flex1 py5 gap5">
                        <p className="size13 ellipsis2">Lorem ipsum dolor sit amet, consectetur</p>
                        <div className="flex gap20">
                          <p className="size12 txt-gray6">Video</p>
                          <p className="size12 txt-gray9">25m</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w235 bgc-graye">
                <Card3 />
              </div>
            </div>
          </div>
          <div className="height100 w1 bgc-grayc"/>
          <div className="w520">
          <div className="flexColumn width100 height100 gap20">
            <div className="flexBetween alignCenter">
              <p className="size19">Lorem ipsum dolor</p>
              <Button theme="gray3" size="extraSmall" radius="round" square>
                <i className="i-plus"/>
              </Button>
            </div>
            {
              props.loading ?
              <div className="flex1 h328 otl-grayc flexCenter size14 txt-gray6">
                Loading...
              </div>
              :
              <div className="flex height100">
                <Card4 />
                <Card4 />
              </div>
            }
            </div>
          </div>
        </div>
      </section>
    </Hidden>
    <Hidden min={801} max={1400} className='section5'>
      <section className="section5">
        <div className="w560 flexColumn gap50">
          <div className="width100 flexColumn gap20">
            <div className="h24 flexBetween">
              <p className="size19"> New</p>
              <Button size="extraSmall" square radius='round' theme="gray3">
                <i className="i-plus"/>
              </Button>
            </div>
            <div className="flex gap40">
              <div className="flexColumn w100 flex1 gap15">
                <div className="flexColumn gap5">
                  <p className="size13">[Lorem]</p>
                  <p className="size24">Lorem ipsum dolor</p>
                  <p className="size13 txt-gray9">company</p>
                </div>
                <div className="ellipsis5 size13 txt-gray9">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="flexColumn gap5">
                  <p className="size14 txt-gray6">[7Chapter]</p>
                  <div className="scrollYAuto scroll-padding h128 r10 flexColumn gap10 p15 bgc-primary_10p">
                    <div className="flex gap20">
                      <div className="w30 h30 r15 bgc-primary flexCenter txt-white size13">01</div>
                      <div className="flexColumn w100 flex1 py5 gap5">
                        <p className="size13 ellipsis2">Lorem ipsum dolor sit amet, consectetur</p>
                        <div className="flex gap20">
                          <p className="size12 txt-gray6">Video</p>
                          <p className="size12 txt-gray9">25m</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap20">
                      <div className="w30 h30 r15 bgc-primary flexCenter txt-white size13">02</div>
                      <div className="flexColumn w100 flex1 py5 gap5">
                        <p className="size13 ellipsis2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                        <div className="flex gap20">
                          <p className="size12 txt-gray6">Video</p>
                          <p className="size12 txt-gray9">25m</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap20">
                      <div className="w30 h30 r15 bgc-primary flexCenter txt-white size13">03</div>
                      <div className="flexColumn w100 flex1 py5 gap5">
                        <p className="size13 ellipsis2">Lorem ipsum dolor sit amet, consectetur</p>
                        <div className="flex gap20">
                          <p className="size12 txt-gray6">Video</p>
                          <p className="size12 txt-gray9">25m</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="width100 h1 bgc-grayc"/>
          <div className="width100">
            <div className="flexColumn width100 height100 gap20">
              <div className="flexBetween alignCenter">
                <p className="size19">Lorem ipsum dolor</p>
                <Button theme="gray3" size="extraSmall" radius="round" square>
                  <i className="i-plus"/>
                </Button>
              </div>
              {
                props.loading ?
                <div className="flex1 h328 otl-grayc flexCenter size14 txt-gray6">
                  Loading...
                </div>
                :
                <div className="flex height100">
                  <Card4 />
                </div>
              }
              </div>
            </div>
        </div>
      </section>
    </Hidden>
    <Hidden max={800} className='section5'>
      <section className="section5">
        <div className="section-content flexColumn gap50">
          <div className="width100 flexColumn gap20">
            <div className="h24 flexBetween">
              <p className="size19"> New</p>
              <Button size="extraSmall" square radius='round' theme="gray3">
                <i className="i-plus"/>
              </Button>
            </div>
            <div className="flex gap40">
              <div className="flexColumn w100 flex1 gap15">
                <div className="flexColumn gap5">
                  <p className="size13">[Lorem]</p>
                  <p className="size24">Lorem ipsum dolor</p>
                  <p className="size13 txt-gray9">company</p>
                </div>
                <div className="ellipsis5 size13 txt-gray9">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="flexColumn gap5">
                  <p className="size14 txt-gray6">[7Chapter]</p>
                  <div className="scrollYAuto scroll-padding h128 r10 flexColumn gap10 p15 bgc-primary_10p">
                    <div className="flex gap20">
                      <div className="w30 h30 r15 bgc-primary flexCenter txt-white size13">01</div>
                      <div className="flexColumn w100 flex1 py5 gap5">
                        <p className="size13 ellipsis2">Lorem ipsum dolor sit amet, consectetur</p>
                        <div className="flex gap20">
                          <p className="size12 txt-gray6">Video</p>
                          <p className="size12 txt-gray9">25m</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap20">
                      <div className="w30 h30 r15 bgc-primary flexCenter txt-white size13">02</div>
                      <div className="flexColumn w100 flex1 py5 gap5">
                        <p className="size13 ellipsis2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                        <div className="flex gap20">
                          <p className="size12 txt-gray6">Video</p>
                          <p className="size12 txt-gray9">25m</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap20">
                      <div className="w30 h30 r15 bgc-primary flexCenter txt-white size13">03</div>
                      <div className="flexColumn w100 flex1 py5 gap5">
                        <p className="size13 ellipsis2">Lorem ipsum dolor sit amet, consectetur</p>
                        <div className="flex gap20">
                          <p className="size12 txt-gray6">Video</p>
                          <p className="size12 txt-gray9">25m</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="widht100 h1 bgc-grayc"/>
          <div className="width100">
            <div className="flexColumn width100 height100 gap20">
              <div className="flexBetween alignCenter">
                <p className="size19">Lorem ipsum dolor</p>
                <Button theme="gray3" size="extraSmall" radius="round" square>
                  <i className="i-plus"/>
                </Button>
              </div>
              {
                props.loading ?
                <div className="flex1 h328 otl-grayc flexCenter size14 txt-gray6">
                  Loading...
                </div>
                :
                <div className="flexColumn height100">
                  <Card4 />
                  <Card4 />
                </div>
              }
              </div>
            </div>
        </div>
      </section>
    </Hidden>
    </>
  )
}
const TopBtnSection = () => {
  const TopClick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }
  return (
    <>
    <Hidden min={1401}>
      <section>
        <div className="w1140 relative">
          <Button onClick={TopClick} variant="outlined" theme="grayc" radius="round" className="absolute ab100 ar0 maxw40 minh60 flexColumn gap5">
            <p className="i-left bgc-gray6" style={{transform: 'rotate(90deg)'}}/>
            <p className="size11 txt-gray6">TOP</p>
          </Button>
        </div>
      </section>
    </Hidden>
    <Hidden min={801} max={1400}>
      <section>
        <div className="w560 relative">
          <Button onClick={TopClick} variant="outlined" theme="grayc" radius="round" className="absolute ab100 ar0 maxw40 minh60 flexColumn gap5">
            <p className="i-left bgc-gray6" style={{transform: 'rotate(90deg)'}}/>
            <p className="size11 txt-gray6">TOP</p>
          </Button>
        </div>
      </section>
    </Hidden>
    <Hidden max={800}>
      <section>
        <div className="w1140 relative">
          <Button onClick={TopClick} variant="outlined" theme="grayc" radius="round" className="absolute ab100 ar0 maxw40 minh60 flexColumn gap5">
            <p className="i-left bgc-gray6" style={{transform: 'rotate(90deg)'}}/>
            <p className="size11 txt-gray6">TOP</p>
          </Button>
        </div>
      </section>
    </Hidden>
    </>
  )
}
const MainLnb = ({lnbOpen}) => {
  return (
    <>
    <div className="flexColumn gap70 mb175">
      <MainBanner lnbOpen={lnbOpen}/>
      <Section1 />
      <Section2 />
      <Hidden min={1401}>
        <Section3 loading/>
      </Hidden>
      <Section3 />
      <SubBanner lnbOpen={lnbOpen}/>
      <Section4 />
      <Hidden min={1401}>
        <Section5 loading/>
      </Hidden>
      <Section5 />   
    </div>
    <TopBtnSection />
    </>
  )
}


export default MainLnb;