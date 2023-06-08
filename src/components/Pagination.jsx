import * as React from "react";

function Pagination(props) {
  let [number, setNumber] = React.useState(1);
  let [clickNumber, setClickNumber] = React.useState(1);
  let lastNumber = 20;
  function NumberPlus() {
    setNumber(number + 1)
  }
  function NumberPlus5() {
    setNumber(number + 5)
  }
  function NumberMinus() {
    setNumber(number - 1)
  }
  function NumberMinus5() {
    setNumber(number - 5)
  }
  return (
    <>
      <div className='flexCenter gap10 size14 txt-black'>
        <button
          className={`round square
            ${number==1 ? 'disabled' : ''}
          `} 
          onClick={() => {
          if( number < 6 ) {
            setNumber(1);
          } else {
            NumberMinus5();
          }
        }}
        >
          <i className={`i-first-page ${number==1 ? 'bgc-grayc' : 'bgc-gray6'}`} />
        </button>
        <button 
          className={`round square
            ${number==1 ? 'disabled' : ''}
          `} 
          onClick={() => {
            if ( number <= 1 ) {
              setNumber(1);
            } else {
              NumberMinus();
            }
          }}
        >
          <i className={`i-left w8 h12 ${number==1 ? 'bgc-grayc' : 'bgc-gray6'}`}/>
        </button>

        <button 
          className={`primary round square ${clickNumber == (number) ? 'bgc-primary_10p' : ''}`} 
          onClick={()=>{
            setClickNumber(number);
          }}
        >
          <p className={`size14 ${clickNumber == (number) ? 'b txt-primary' : 'txt-black'}`}> {number} </p>
        </button>
        <button 
          className={`primary round square ${clickNumber == (number+1) ? 'bgc-primary_10p' : ''}`} 
          onClick={()=>{
            setClickNumber(number+1);
          }}
        >
          <p className={`size14 ${clickNumber == (number+1) ? 'b txt-primary' : 'txt-black'}`}> {number + 1} </p>
        </button>
        <button 
          className={`primary round square ${clickNumber == (number+2) ? 'bgc-primary_10p' : ''}`} 
          onClick={()=>{
            setClickNumber(number+2);
          }}
        >
          <p className={`size14 ${clickNumber == (number+2) ? 'b txt-primary' : 'txt-black'}`}> {number + 2} </p>
        </button>
        <button 
          className={`primary round square ${clickNumber == (number+3) ? 'bgc-primary_10p' : ''}`} 
          onClick={()=>{
            setClickNumber(number+3);
          }}
        >
          <p className={`size14 ${clickNumber == (number+3) ? 'b txt-primary' : 'txt-black'}`}> {number + 3} </p>
        </button>
        <button 
          className={`primary round square ${clickNumber == (number+4) ? 'bgc-primary_10p' : ''}`} 
          onClick={()=>{
            setClickNumber(number+4);
          }}
        >
          <p className={`size14 ${clickNumber == (number+4) ? 'b txt-primary' : 'txt-black'}`}> {number + 4} </p>
        </button>
        
        <button 
          className={`primary round square
            ${(number+4)== lastNumber ? 'disabled' : ''}
          `} 
          onClick={() => {
            if ( (number+4) >= lastNumber ) {
              setNumber(lastNumber-4);
            } else {
              NumberPlus();
            }
          }}
        >
          <i className={`i-right w8 h12 ${number+4==lastNumber ? 'bgc-grayc' : 'bgc-gray6'}`}/>
        </button>
        <button
          className={`round square
            ${(number+4)==lastNumber ? 'disabled' : ''}
          `} 
          onClick={() => {
          if( (number+9) > lastNumber ) {
            setNumber(lastNumber-4);
          } else {
            NumberPlus5();
          }
        }}
        >
          <i className={`i-last-page ${(number+4)==lastNumber ? 'bgc-grayc' : 'bgc-gray6'}`} />
        </button>
      </div>
    </>
  );

}

export default Pagination;
