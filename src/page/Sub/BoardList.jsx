import * as React from "react";

//component
import { Title } from '@/components';
//nds-ui
import { Slide, Button, Tab, Location, Select, TextField, Checkbox, Table, Pagination } from 'nds-ui/component';

const Filter = () => {
  return (
    <>
    <div className="p20 bgc-graye">
      <div className="px30 pt10 pb30 bgc-white flexColumn gap30">
        <div className="flexColumn">
          <div className="h50 otlb-grayc-dashed flex alignCenter">
            <p className="px10 w200 size14">Type</p>
            <div className="flex1 flex gap50">
              <div className="flex gap5 px10 alignCenter size14 txt-gray6">
                <Checkbox size="small" />
                All
              </div>
              <div className="flex gap5 px10 alignCenter size14 txt-gray6">
                <Checkbox size="small" />
                Type
              </div>
              <div className="flex gap5 px10 alignCenter size14 txt-gray6">
                <Checkbox size="small" />
                Type
              </div>
              <div className="flex gap5 px10 alignCenter size14 txt-gray6">
                <Checkbox size="small" />
                Type
              </div>
              <div className="flex gap5 px10 alignCenter size14 txt-gray6">
                <Checkbox size="small" />
                Type
              </div>
              <div className="flex gap5 px10 alignCenter size14 txt-gray6">
                <Checkbox size="small" />
                Type
              </div>
              <div className="flex gap5 px10 alignCenter size14 txt-gray6">
                <Checkbox size="small" />
                Type
              </div>
            </div>
          </div>
          <div className="h50 otlb-grayc-dashed flex alignCenter">
            <p className="px10 w200 size14">Status</p>
            <div className="flex1 flex gap50">
              <div className="flex gap5 px10 alignCenter size14 txt-gray6">
                <Checkbox size="small" />
                All
              </div>
              <div className="flex gap5 px10 alignCenter size14 txt-gray6">
                <Checkbox size="small" />
                Status
              </div>
              <div className="flex gap5 px10 alignCenter size14 txt-gray6">
                <Checkbox size="small" />
                Status
              </div>
              <div className="flex gap5 px10 alignCenter size14 txt-gray6">
                <Checkbox size="small" />
                Status
              </div>
              <div className="flex gap5 px10 alignCenter size14 txt-gray6">
                <Checkbox size="small" />
                Status
              </div>
            </div>
          </div>
          <div className="h50 otlb-grayc-dashed flex alignCenter">
            <p className="px10 w200 size14">Date</p>
            <div className="flex1 flex gap10 alignCenter">
              <TextField className='w160' placeholder='2023.06.07' />
              ~
              <TextField className='w160' placeholder='2023.06.07' />
            </div>
          </div>
        </div>
        <div className="flexCenter gap10">
          <Button size="large" className='minw120 maxw120' variant="outlined" theme='gray6'>
            RESET
          </Button>
          <Button size="large" className='minw120 maxw120' variant="contained">
            APPLY
          </Button>

        </div>
      </div>
    </div>
    </>
  )
}

const ListTable = () => {
  const ListContent = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
      date: '2023.01.18 17:00:00'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      date: '2023.01.18 17:00:00'
    },
    {
      title: 'Lorem ipsum dolor sit amet, adipiscing elit, sed eiusmod tempor',
      date: '2023.01.18 17:00:00'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      date: '2023.01.18 17:00:00'
    },
    {
      title: 'Lorem adipiscing elit, sed do eiusmod tempor',
      date: '2023.01.18 17:00:00'
    },
    {
      title: 'Lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      date: '2023.01.18 17:00:00'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor',
      date: '2023.01.18 17:00:00'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
      date: '2023.01.18 17:00:00'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore',
      date: '2023.01.18 17:00:00'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      date: '2023.01.18 17:00:00'
    },
  ]
  return (
    <>
    <Table
      classTBody='col1-align-center col-last-align-center'
      colGroup={
        <>
          <col className="w150"/>
          <col className="flex1"/>
          <col className="w200"/>
        </>
      }
      tHead={
        <>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </>
      }
      tBody= {
        <>
          {
            ListContent.map((content ,index)=>{
              return(
                <tr>
                  <td>{index + 1}</td>
                  <td>{content.title}</td>
                  <td>{content.date}</td>
                </tr>    
              )
            })
          }
        </>
      }
    />
    </>
  )
}
const BoardList = () => {
  const [TabState, setTabState] = React.useState(0);
  const [FilterState, setFilterState] = React.useState(true);

  const FilterClick = () => {
    setFilterState(!FilterState)
  }
  return (
    <>
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
            <Button theme="gray6" variant="contained" className='minw60 maxw60'>
              <i className="i-magnifier" />
            </Button>
            <Button onClick={FilterClick} theme={`${FilterState ? 'primary' : 'gray6'}`} variant="outlined" className='minw60 maxw60'>
              <i className="i-filter" />
            </Button>
          </div>
        </div>
        {
          FilterState ?
          <Filter />
          :
          <></>
        }
        <ListTable />
      </div>
      <div className="flexCenter mt60">
        <Pagination />
      </div>

    </div>
    </>
  )
}


export default BoardList;