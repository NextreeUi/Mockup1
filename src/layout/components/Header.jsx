import * as React from "react";

// component
import { 
  Logo, 
} from "@/components";

//nds-ui
import { Button, TextField } from "nds-ui/component";

function Header() {
  // state
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [allMenuOpen, setAllMenuOpen] = React.useState(false);

  // Slide in Notification Menu
  function NotificationSlide() {
    // state
    const [notificationSlide, setNotificationSlide] = React.useState(1);
    return (
      <>
      <div className="bgc-white r10 p20 height100 relative">
        <div className="header-btn-extend-notification-slide">
          <div 
            className={`header-btn-extend-notification-slide-content
            ${ 
              notificationSlide == 1 ?
              'slide1' :
              notificationSlide == 2 ?
              'slide2' :
              notificationSlide == 3 ?
              'slide3' : ''
            }`}
          >
            <div className="flex gap10 height100">
              <div className="flexCenter height100 flex1 r5 bgc-graye size16 txt-gray6">
                Thumbnail 1
              </div>
              <div className="flexCenter height100 flex1 r5 bgc-grayc size16 txt-gray6">
                Thumbnail 2
              </div>
            </div>
            <div className="flex gap10 height100">
              <div className="flexCenter height100 flex1 r5 bgc-graye size16 txt-gray6">
                Thumbnail 3
              </div>
              <div className="flexCenter height100 flex1 r5 bgc-grayc size16 txt-gray6">
                Thumbnail 4
              </div>
            </div>
            <div className="flex gap10 height100">
              <div className="flexCenter height100 flex1 r5 bgc-graye size16 txt-gray6">
                Thumbnail 5
              </div>
              <div className="flexCenter height100 flex1 r5 bgc-grayc size16 txt-gray6">
                Thumbnail 6
              </div>
            </div>
          </div>
          <div 
            className="header-btn-extend-notification-slide-arrow"
          > 
            <Button 
              square radius="round" hoverBg='graye-100' shadow theme='white' variant="contained"
              className={`
                size30 
                ${notificationSlide == 1 ?
                  'close' : ''
                } 
              `}
              onClick={() => {
                if (notificationSlide == 1) {
                  setNotificationSlide(1);
                } else if (notificationSlide == 2) {
                  setNotificationSlide(1);
                } else if ( notificationSlide == 3) {
                  setNotificationSlide(2);
                }
              }}
            >
              <i className="i-left bgc-gray6"/>
            </Button>
            <Button 
              square radius="round" hoverBg='graye-100' shadow theme='white' variant="contained"
              className={`
                size30
                ${notificationSlide == 3 ?
                  'close' : ''
                } 
              `}
              onClick={() => {
                if (notificationSlide == 1) {
                  setNotificationSlide(2);
                } else if (notificationSlide == 2) {
                  setNotificationSlide(3);
                } else if ( notificationSlide == 3) {
                  setNotificationSlide(3);
                }
              }}
            >
              <i className="i-right bgc-gray6"/>
            </Button>
          </div>
        </div>
      </div>
      </>
    )
  }
  return (
    <>
      <header className='header-wrap'>
        <div className="header-content">
          {/* header left */}
          <div className="header-content-left">
            <Logo/>
            <div className="flex">
              <div className="header-menu">
                <a href='/' className="header-menu-title">
                  Category
                </a>
                <div className="header-menu-extend">
                  <div className="header-menu-extend-inner">
                    <div className="hidden">
                      <Logo/> 
                    </div>
                    <div className="flex">
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-menu">
                <a href='/' className="header-menu-title">
                  Category
                </a>
                <div className="header-menu-extend">
                  <div className="header-menu-extend-inner">
                    <div className="hidden">
                      <Logo/> 
                    </div>
                    <div className="flex">
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-menu">
                <a href='/' className="header-menu-title">
                  Category
                </a>
                <div className="header-menu-extend">
                  <div className="header-menu-extend-inner">
                    <div className="hidden">
                      <Logo/> 
                    </div>
                    <div className="flex">
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-menu">
                <a href='/' className="header-menu-title">
                  Category
                </a>
                <div className="header-menu-extend">
                  <div className="header-menu-extend-inner">
                    <div className="hidden">
                      <Logo/> 
                    </div>
                    <div className="flex">
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-menu">
                <a href='/' className="header-menu-title">
                  Category
                </a>
                <div className="header-menu-extend">
                  <div className="header-menu-extend-inner">
                    <div className="hidden">
                      <Logo/> 
                    </div>
                    <div className="flex">
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                      <div className="w130 txt-gray6 alignCenter flexColumn gap10">
                        <p className="size16">Menu</p>
                        <div className="header-menu-smallMenu">
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                          <a href="/">Menu</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* header right */}
          <div className="header-content-right">
            <div className="flex w300 alignCenter mr20">
              <TextField radius="round" className="width100 pr40" placeholder="Search by Keyword"/>
              <Button size='small' radius="round" square className="ml-40">
                <p className="i-magnifier w20 h20 bgc-gray6" />
              </Button>
            </div>
            
            <div className="w1 h20 bgc-grayc" />

            <div className="flex">
              <Button radius="rect" className="header-btn"
                onClick={()=>{
                  setNotificationOpen(false);
                  setAllMenuOpen(false);
                }}
              >
                <p className="i-person w20 h20 bgc-gray6"/>
              </Button>
              <Button radius="rect" className={`header-btn ${notificationOpen ? 'open' : ''}`}
                onClick={()=>{
                  setNotificationOpen(!notificationOpen);
                  setAllMenuOpen(false);
                }}
              >
                <p className="i-notification w20 h20 bgc-gray6"/>
              </Button>
              <div className={`header-btn-extend-notification ${notificationOpen ? 'open' : ''}`}>
                <div>
                  <div className="flex justifyEnd h24">
                    <Button theme="gray6" size="extraSmall" radius="round" square
                      onClick={()=>{
                        setNotificationOpen(false)
                      }}
                    >
                      <i className="i-x w24 h24 bgc-gray6"/>
                    </Button>
                  </div>
                  <div className="flex gap40">
                    <div className="flexColumn gap10 flex1">
                      <div className="flexBetween">
                        <div className="flex gap10 alignEnd">
                          <p className="size19 txt-black b">Lorem Ipsum</p>
                          <p className="size14 txt-gray6">Lorem Ipsum</p>
                        </div>
                        <Button theme="gray3" size="extraSmall">
                          <div className="flex gap10 alignCenter">
                            <p className="size13 mb3 txt-gray3">more</p>
                            <i className="i-right bgc-gray3"/>
                          </div>
                        </Button>
                      </div>
                      <div className="flexColumn px20 py20 gap20 r10 bgc-white">
                        <a href="/" className="hover-bgc-graye transition flexBetween h32 px10 r5 alignCenter">
                          <p className="size14 txt-gray6"><span className="txt-black">[Lorem ipsum]</span> dolor sit amet</p>
                          <i className="i-right bgc-gray9"/>
                        </a>
                        <div className="h1 otlb-grayc-dashed"/>
                        <a href="/" className="hover-bgc-graye transition flexBetween h32 px10 r5 alignCenter">
                          <p className="size14 txt-gray6"> consectetur adipiscing elit,<span className="txt-black">[sed do eiusmod]</span> tempor incididunt</p>
                          <i className="i-right bgc-gray9"/>
                        </a>
                        <div className="h1 otlb-grayc-dashed"/>
                        <a href="/" className="hover-bgc-graye transition flexBetween h32 px10 r5 alignCenter">
                          <p className="size14 txt-gray6"><span className="txt-black">[Lorem ipsum]</span> dolor sit amet</p>
                          <i className="i-right bgc-gray9"/>
                        </a>
                      </div>
                    </div>
                    <div className="flexColumn gap10 w322">
                      <p className="size19 txt-black b">Lorem Ipsum</p>
                      <div className="flexColumn bgc-white r10 p20 height100 gap10">
                        <div className="flexBetween alignCenter">
                          <p className="size14 txt-gray6">Lorem Ipsum</p>
                          <p className="size14 txt-black">OO</p>
                        </div>
                        <div className="bgc-graye r10 height100"/>
                      </div>
                    </div>
                    <div className="flexColumn gap10 w446">
                      <p className="size19 txt-black b">Lorem Ipsum</p>
                      <NotificationSlide />
                    </div>
                  </div>
                </div>
              </div>
              <Button radius="rect" className={`header-btn ${allMenuOpen ? 'open' : ''}`}
                onClick={()=>{
                  setAllMenuOpen(!allMenuOpen)
                  setNotificationOpen(false);
                }}
              >
                <p className="i-menu w20 h20 bgc-gray6"/>
              </Button>
              <div className={`header-btn-extend-allMenu ${allMenuOpen ? 'open' : ''}`}>
                <div>
                  <div className="flex justifyEnd h24">
                    <Button theme="gray6" size="extraSmall" radius="round" square
                      onClick={()=>{
                        setAllMenuOpen(false)
                      }}
                    >
                      <i className="i-x w24 h24 bgc-gray6"/>
                    </Button>
                  </div>
                  <div className="flex pl20 pb20 otlb-black size16 txt-black">
                    All Services
                  </div>
                  <div className="flexColumn gap25 mx20">
                    <div className="flex gap70 alignStart mt25">
                      <p className="w150 size16 txt-black">Category</p>
                      <div className="flex flex1">
                        <div className="width100 flexColumn gap20">
                          <p className="size16 txt-gray6">Menu</p>
                          <div className="flexColumn gap5">
                            <a href="/" className="h26 txt-gray6 size14 hover-txt-primary">Menu</a>
                            <a href="/" className="h26 txt-gray6 size14 hover-txt-primary">Menu</a>
                            <a href="/" className="h26 txt-gray6 size14 hover-txt-primary">Menu</a>
                            <a href="/" className="h26 txt-gray6 size14 hover-txt-primary">Menu</a>
                            <a href="/" className="h26 txt-gray6 size14 hover-txt-primary">Menu</a>
                          </div>
                        </div>
                        <div className="width100 flexColumn gap20">
                          <p className="size16 txt-gray6">Menu</p>
                          <div className="flexColumn gap5">
                            <a href="/" className="h26 txt-gray6 size14 hover-txt-primary">Menu</a>
                            <a href="/" className="h26 txt-gray6 size14 hover-txt-primary">Menu</a>
                          </div>
                        </div>
                        <div className="width100 flexColumn gap20">
                          <p className="size16 txt-gray6">Menu</p>
                          <div className="flexColumn gap5">
                            <a href="/" className="h26 txt-gray6 size14 hover-txt-primary">Menu</a>
                            <a href="/" className="h26 txt-gray6 size14 hover-txt-primary">Menu</a>
                            <a href="/" className="h26 txt-gray6 size14 hover-txt-primary">Menu</a>
                          </div>
                        </div>
                        <div className="width100 flexColumn gap20">
                          <p className="size16 txt-gray6">Menu</p>
                          <div className="flexColumn gap5">
                            <a href="/" className="h26 txt-gray6 size14 hover-txt-primary">Menu</a>
                            <a href="/" className="h26 txt-gray6 size14 hover-txt-primary">Menu</a>
                          </div>
                        </div>
                        <div className="width100 flexColumn gap20">
                          <p className="size16 txt-gray6">Menu</p>
                          <div className="flexColumn gap5">
                            <a href="/" className="h26 txt-gray6 size14 hover-txt-primary">Menu</a>
                          </div>
                        </div>
                        <div className="width100">
                        </div>
                      </div>
                    </div>

                    <div className="h1 width100 otlb-grayc-dashed"/>

                    <div className="flex gap70 alignStart">
                      <p className="w150 size16 txt-black">Category</p>
                      <div className="flex flex1">
                        <a href="/" className="width100 hover-txt-primary size16 txt-gray6">Menu </a>
                        <a href="/" className="width100 hover-txt-primary size16 txt-gray6">Menu </a>
                        <a href="/" className="width100 hover-txt-primary size16 txt-gray6">Menu </a>
                        <a href="/" className="width100 hover-txt-primary size16 txt-gray6">Menu </a>
                        <a href="/" className="width100 hover-txt-primary size16 txt-gray6">Menu </a>
                        <a href="/" className="width100 hover-txt-primary size16 txt-gray6">Menu </a>
                      </div>
                    </div>
                    
                    <div className="h1 width100 otlb-grayc-dashed"/>

                    <div className="flex gap70 alignStart">
                      <p className="w150 size16 txt-black">Category</p>
                      <div className="flex flex1">
                        <a href="/" className="width100 hover-txt-primary size16 txt-gray6">Menu </a>
                        <a href="/" className="width100 hover-txt-primary size16 txt-gray6">Menu </a>
                        <a href="/" className="width100 hover-txt-primary size16 txt-gray6">Menu </a>
                        <p className="width100"></p>
                        <p className="width100"></p>
                        <p className="width100"></p>
                      </div>
                    </div>

                    <div className="h1 width100 otlb-grayc-dashed"/>

                    <div className="flex gap70 alignStart">
                      <p className="w150 size16 txt-black">Category</p>
                      <div className="flex flex1">
                        <a href="/" className="width100 hover-txt-primary size16 txt-gray6">Menu </a>
                        <a href="/" className="width100 hover-txt-primary size16 txt-gray6">Menu </a>
                        <p className="width100"></p>
                        <p className="width100"></p>
                        <p className="width100"></p>
                        <p className="width100"></p>
                      </div>
                    </div>

                    <div className="h1 width100 otlb-grayc-dashed"/>

                    <div className="flex gap70 alignStart">
                      <p className="w150 size16 txt-black">Category</p>
                      <div className="flex flex1">
                        <a href="/" className="width100 hover-txt-primary size16 txt-gray6">Menu </a>
                        <a href="/" className="width100 hover-txt-primary size16 txt-gray6">Menu </a>
                        <p className="width100"></p>
                        <p className="width100"></p>
                        <p className="width100"></p>
                        <p className="width100"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  );
}

export default Header;
