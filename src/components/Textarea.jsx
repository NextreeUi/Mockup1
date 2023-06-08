import * as React from "react";

function Textarea(props) {
  let [total, setTotal] = React.useState(props.defaultValue ? props.defaultValue.length : 0);
  function keyUp(e) {
    let number = e.target.value.length;
    if ( number < props.max) {
      setTotal(number);  
    } else if ( number == props.max ) {
      setTotal(number);  
      alert('최대 글자 수에 도달했습니다.')
    }
  }

  return (
    <div className="textarea-div">
      <textarea 
        defaultValue={props.defaultValue} 
        className={`textarea ${props.className}`}
        maxLength={props.max} rows={props.rows}
        readOnly={props.readOnly}
        disabled={props.disabled} 
        onChange={keyUp}  
      />
      <span className="textarea-span" > {total} / {props.max} 글자 </span>
      <div className="textarea-box"/>
    </div>
  );
}

export default Textarea;