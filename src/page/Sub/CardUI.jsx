import * as React from "react";

//component
import { Title, Card1 } from '@/components';
//nds-ui
import { Button, Hidden, Tab, Select, TextField } from 'nds-ui/component';

const BoardList = () => {
  const [TabState, setTabState] = React.useState(0);
  return (
    <>
    <Hidden min={1401}>
      <div className="contentWidth flexColumn mt30 mb175">
        <Title title='Title'/>
        <Tab 
          classTabWrap='tab-line mt30'
          theme="gray6"
          state={TabState}
          setState={setTabState}
          tabName={['Tab','Tab','Tab','Tab']}
        />
        <div className="flexColumn gap10 mt30">
          <div className="flexBetween">
            <div className="flex gap15 alignCenter">
              <p className="size14">
                <span className="txt-primary">40</span> in total
              </p>
              <div className="h12 w1 bgc-grayc" />
              <Select
                className='w150'
                list={['Select', 'Select', 'Select']}
              />
            </div>
            <div className="flex gap10">
              <TextField className='w300' placeholder='Search by Keyword'/>
              <Button theme="gray6" variant="contained" >
                Search
              </Button>
            </div>
          </div>
          <div className="flexColumn gap50">
            <div className="gap20 flexCenter">
              <Card1 />
              <Card1 likePrimary/>
              <Card1 primary />
              <Card1 />
              <Card1 />
            </div>
            <div className="gap20 flexCenter">
              <Card1 />
              <Card1 />
              <Card1 likePrimary/>
              <Card1 />
              <Card1 primary />
            </div>
          </div>
        </div>
        <div className="flexCenter mt70">
          <Button className='minw80 maxw80 h80' theme='gray6'>
            <div className="flexColumn flexCenter gap10 size12 txt-gray6">
              More(15/81)
              <i className="i-more w48 h48 bgc-gray6"/>
            </div>
          </Button>
        </div>
      </div>
    </Hidden>
    <Hidden min={801} max={1400}>
    <div className="contentWidth flexColumn mt30 mb175">
        <Title title='Title'/>
        <Tab 
          classTabWrap='tab-line mt30'
          theme="gray6"
          state={TabState}
          setState={setTabState}
          tabName={['Tab','Tab','Tab','Tab']}
        />
        <div className="flexColumn gap10 mt30">
          <div className="flexBetween">
            <div className="flex gap15 alignCenter">
              <p className="size14">
                <span className="txt-primary">40</span> in total
              </p>
              <div className="h12 w1 bgc-grayc" />
              <Select
                className='w150'
                list={['Select', 'Select', 'Select']}
              />
            </div>
            <div className="flex gap10">
              <TextField className='w300' placeholder='Search by Keyword'/>
              <Button theme="gray6" variant="contained" >
                Search
              </Button>
            </div>
          </div>
          <div className="flexColumn gap50">
            <div className="gap20 flexCenter">
              <Card1 />
              <Card1 likePrimary/>
              <Card1 />
            </div>
            <div className="gap20 flexCenter">
              <Card1 />
              <Card1 />
              <Card1 primary />
            </div>
          </div>
        </div>
        <div className="flexCenter mt70">
          <Button className='minw80 maxw80 h80' theme='gray6'>
            <div className="flexColumn flexCenter gap10 size12 txt-gray6">
              More(15/81)
              <i className="i-more w48 h48 bgc-gray6"/>
            </div>
          </Button>
        </div>
      </div>
    </Hidden>
    <Hidden max={800}>
      <div className="contentWidth flexColumn mt30 mb175">
        <Title title='Title'/>
        <Tab 
          classTabWrap='tab-line mt30'
          theme="gray6"
          state={TabState}
          setState={setTabState}
          tabName={['Tab','Tab','Tab','Tab']}
        />
        <div className="flexColumn gap10 mt30">
          <div className="flexColumn gap10">
            <div className="flex gap10">
              <TextField className='flex1' placeholder='Search by Keyword'/>
              <Button className='px20' theme="gray6" variant="contained" >
                <i className="i-magnifier" />
              </Button>
            </div>
            <Select
              className='w150'
              list={['Select', 'Select', 'Select']}
            />
          </div>
          <div className="flexColumn gap50">
            <div className="gap20 flexCenter">
              <Card1 />
              <Card1 />
            </div>
            <div className="gap20 flexCenter">
              <Card1 />
              <Card1 primary />
            </div>
            <div className="gap20 flexCenter">
              <Card1 likePrimary />
              <Card1 />
            </div>
          </div>
        </div>
        <div className="flexCenter mt70">
          <Button className='minw80 maxw80 h80' theme='gray6'>
            <div className="flexColumn flexCenter gap10 size12 txt-gray6">
              More(15/81)
              <i className="i-more w48 h48 bgc-gray6"/>
            </div>
          </Button>
        </div>
      </div>
    </Hidden>
    </>
  )
}


export default BoardList;