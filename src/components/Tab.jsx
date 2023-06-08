import * as React from "react";

function Tab(props) {
  return (
    <div className="flex gap20 alignCenter">
      <button 
        className={`size55 round width100 ${ props.tabState == 1 ? 'outlined primary' : 'contained graye otl-white' }`}
        onClick={()=>{props.setTabState(1)}}
      >
        <p className='size16'> Tab </p>
      </button>
      <button 
        className={`size55 round width100 ${ props.tabState == 2 ? 'outlined primary' : 'contained graye otl-white' }`}
        onClick={()=>{props.setTabState(2)}}
      >
        <p className='size16'> Tab </p>
      </button>
      <button 
        className={`size55 round width100 ${ props.tabState == 3 ? 'outlined primary' : 'contained graye otl-white' }`}
        onClick={()=>{props.setTabState(3)}}
      >
        <p className='size16'> Tab </p>
      </button>
      <button 
        className={`size55 round width100 ${ props.tabState == 4 ? 'outlined primary' : 'contained graye otl-white' }`}
        onClick={()=>{props.setTabState(4)}}
      >
        <p className='size16'> Tab </p>
      </button>
    </div>
  );
}

export default Tab;