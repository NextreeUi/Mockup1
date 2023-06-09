import * as React from "react";

//component
import { 
  Logo, 
} from "@/components";

//nds-ui
import { Avatar, Button, TextField } from "nds-ui/component";

const Lnb = () => {
  const [LnbState, setLnbState] = React.useState(true);
  const [SearchState, setSearchState] = React.useState(false);

  const ExtendClick = () => {
    setLnbState(!LnbState)
    document.documentElement.style.setProperty('--lnb-contents-width', `${LnbState ? 'calc(100vw - 84rem)' : 'calc(100vw - 264rem)'}`);
  }
  const SearchClick = () => {
    setSearchState(!SearchState)
  }
  return (
    <nav className={`lnb-wrap ${LnbState ? 'w260' : 'w80'}`}>
      <div className={`relative width100 flex alignCenter p20 justifyStart`}>
        <div className={`${LnbState ? '' : 'w40'}`}>
          <Logo noText={!LnbState}/>
        </div>
        <div className={`r-10 absolute overHidden flex justifyEnd ${LnbState ? 'w20' : 'w10'}`}>
          <Button onClick={ExtendClick} square className='maxw20 minw20 h20' variant="contained" radius="round">
            <i className={`i-lnb-arrow w5 h8 lnb-extend-icon ${LnbState ? 'open mr2' : 'ml8'}`}/>
          </Button>
        </div>
      </div>
      <div className="width100 p20 flex alignCenter">
        {
          LnbState ?
          <>
            <TextField radius="round" className="width100 pr32" placeholder="Search by Keyword"/>
            <Button theme="white" size='small' radius="round" square className="ml-32">
              <p className="i-magnifier w20 h20 bgc-gray6" />
            </Button>
          </>
          :
          <div className="relative">
            <Button onClick={SearchClick} className='minw40 maxw40 h40' theme='gray6' square>
              <p className="i-magnifier w20 h20 bgc-gray6" />
            </Button>
            {
              SearchState ?
              <div className="flex alignCenter absolute t3 l50">
                <TextField radius="round" className="lnb-textfield w300  pr32" placeholder="Search by Keyword"/>
                <Button onClick={SearchClick} theme="white" size='small' radius="round" square className="ml-32">
                  <p className="i-magnifier w20 h20 bgc-gray6" />
                </Button>
              </div>
              :
              <></>
            }
            
          </div>
        }
      </div>
      {
        LnbState ?
        <>
        <div className="p20 flexColumn gap20">
          <p className="size16">Menu</p>
          <div className="flexColumn gap5">
            <Button className='width100 h40 px10' theme='black' >
              <div className="width100 flex justifyStart gap10 size14">
                <p className="i-menu " />
                All Menu
              </div>
            </Button>
            <Button className='width100 h40 px10' theme='black' >
              <div className="width100 flex justifyStart gap10 size14">
                <p className="i-notification " />
                Notification
              </div>
            </Button>
          </div>
        </div>
        <div className="px20 h1 width100">
          <div className="h1 width100 bgc-grayc" />
        </div>
        <div className="p20 flexColumn gap20">
          <p className="size16">Menu</p>
          <div className="flexColumn gap5">
            <Button className='width100 h40 px10' theme='black' >
              <div className="width100 flex justifyStart gap10 size14">
                <div className="w20 h20 r5 otl-black_30p bgc-primary_light" />
                Category
              </div>
            </Button>
            <Button className='width100 h40 px10' theme='black' >
              <div className="width100 flex justifyStart gap10 size14">
                <div className="w20 h20 r5 otl-black_30p bgc-primary_70p" />
                Category
              </div>
            </Button>
            <Button className='width100 h40 px10' theme='black' >
              <div className="width100 flex justifyStart gap10 size14">
                <div className="w20 h20 r5 otl-black_30p bgc-primary_30p" />
                Category
              </div>
            </Button>
            <Button className='width100 h40 px10' theme='black' >
              <div className="width100 flex justifyStart gap10 size14">
                <div className="w20 h20 r5 otl-black_30p bgc-primary_10p" />
                Category
              </div>
            </Button>
          </div>
        </div>
        </>
        :
        <>
        <div className="px20 h1 width100">
          <div className="h1 width100 bgc-grayc" />
        </div>
        <div className="p20 flexColumn gap20">
          <div className="flexColumn gap5">
            <Button className='width100 h40 minw40 maxw40 flex' square theme='black' >
              <p className="i-menu bgc-gray6" />
            </Button>
            <Button className='width100 h40 minw40 maxw40 flex' square theme='black' >
              <p className="i-notification bgc-gray6" />
            </Button>
          </div>
        </div>
        <div className="px20 h1 width100">
          <div className="h1 width100 bgc-grayc" />
        </div>
        <div className="p20 flexColumn gap20">
          <div className="flexColumn gap5">
            <Button className='width100 h40 minw40 maxw40 flex ' square theme='black' >
              <div className="w20 h20 r5 otl-black_30p bgc-primary_light" />
            </Button>
            <Button className='width100 h40 minw40 maxw40 flex ' square theme='black' >
              <div className="w20 h20 r5 otl-black_30p bgc-primary_70p" />
            </Button>
            <Button className='width100 h40 minw40 maxw40 flex ' square theme='black' >
              <div className="w20 h20 r5 otl-black_30p bgc-primary_30p" />
            </Button>
            <Button className='width100 h40 minw40 maxw40 flex ' square theme='black' >
              <div className="w20 h20 r5 otl-black_30p bgc-primary_10p" />
            </Button>
          </div>
        </div>
        </>
      }
      {
        LnbState ?
        <>
        <div className="width100 p20 h80 absolute flexBetween b0 otlt-grayc">
          <div className="flex gap10 alignCenter">
            <Avatar name='lorem' color='primary'/>  
            <div className="flexColumn size12 gap5">
              <b>Lorem</b>
              <p className="txt-gray6">lorem@email.com</p>
            </div>
          </div>
          <Button className='minw40 maxw40 h40' square theme='gray6'>
            <i className='i-logout'/>
          </Button>
        </div>
        </>
        :
        <div className="width100 p20 h80 absolute flexBetween b0 otlt-grayc">
          <Button className='minw40 maxw40 h40' square theme='gray6'>
            <i className='i-logout'/>
          </Button>
        </div>
      }

    </nav>
  );
}

export default Lnb;
