import * as React from "react";

// nds-ui
import { TextArea } from 'nds-ui/component';

const TextAreaMax = (props) => {
  let defaultValue = props.defaultValue || ''
  const maxLength = 1000;
  // 한글 = 3바이트 / 영문 = 1바이트 / 숫자 = 1바이트 로 계산해주는 함수입니다.
  const getByteLengthOfString = function(s,b,i,c){
    for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
    return b;
  };
  // 텍스트 사이즈 상태입니다.
  let [textSize, setTextSize] = React.useState(getByteLengthOfString(defaultValue));
  function NowTextSize(event) {
    setTextSize(getByteLengthOfString(event.target.value))
    if ( getByteLengthOfString(event.target.value) > maxLength ) {
        event.target.value = event.target.value.substr(0, event.target.value.length-2)
    } 
  };

  return (
    <div className="flex1 flex relative">
      <TextArea 
        onChange={NowTextSize} 
        className={`width100` + ' ' + (props.className)} 
        maxLength={1000} 
        placeholder={'Comment (Max 1000)'}
        defaultValue={props.defaultValue}
      />
      <p 
        className={`absolute ab12 ar15 size11 ${textSize > (maxLength - 3) ? 'txt-notification' : 'txt-gray9'}`}
      > 
        {textSize} / {maxLength}
      </p>
    </div>
  )
}

export default TextAreaMax;