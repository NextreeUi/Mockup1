import{r as m,j as e,F as t,a as l,s as n,B as s}from"./index-351d9847.js";import{C as I}from"./Checkbox-1cee9bc5.js";const j=({left:a})=>e(s,{className:n["slide-btn"]+" "+(a?n.left:""),square:!0,size:"large",variant:"contained",bg:"white",color:"black",hoverBg:"grayc-100",hoverColor:"white",ripple:"white",radius:"round",shadow:!0,children:e("p",{})}),D=({content:a,leftBtn:r,rightBtn:N,noNav:S,pauseIcon:v,playIcon:h,autoSlide:k=!0,delay:B=3e3,noPause:T,classSlide:x,classBtn:f,classNavWrap:y,classNav:w})=>{const[d,o]=m.useState(1),u=m.useRef(),b=()=>{d==1?o(a.length):o(d-1)},C=()=>{d==a.length?o(1):o(d+1)};m.useEffect(()=>{u.current.style.marginLeft=`${100-d*100}%`,u.current.style.width=`${a.length*100}%`});const[p,L]=m.useState(k);function z(g,c){const E=m.useRef();m.useEffect(()=>{E.current=g},[g]),m.useEffect(()=>{function A(){E.current()}if(c!==null){let O=setInterval(A,c);return()=>clearInterval(O)}},[c,d])}return p?z(()=>{d==a.length?o(1):o(d+1)},B):z(()=>{},null),e(t,{children:l("div",{className:n["slide-wrap"]+" "+(x||""),children:[e("div",{ref:u,className:n.slide,children:a}),l("div",{className:n["slide-btn-wrap"]+" "+(f||""),children:[e("div",{onClick:b,children:r||e(j,{left:!0})}),e("div",{onClick:C,children:N||e(j,{})})]}),S?e(t,{}):l("div",{className:n["slide-nav-wrap"]+" "+(y||""),children:[a.map((g,c)=>e("div",{className:n["slide-nav"]+" "+(d==c+1?n.select:"")+" "+(d==c+1?"select":"")+" "+(w||""),onClick:()=>{o(c+1)}},c)),T?e(t,{}):e("div",{onClick:()=>{L(!p)},children:p?v||e("i",{className:n["slide-nav-pause"]}):h||e("i",{className:n["slide-nav-play"]})})]})]})})},V=({state:a,setState:r,tabName:N=["탭을 입력해주세요"],variant:S="contained",radius:v="rect",size:h="large",theme:k="primary",bg:B,otl:T,color:x,ripple:f="ripple",hoverBg:y,hoverOtl:w,hoverColor:d,children:o,classTabWrap:u,classTab:b,classBtnWrap:C,classBtn:p,classCustom:L})=>{const z=N;return e(t,{children:l("div",{className:n["tab-wrap"]+" "+(u||""),children:[e("div",{className:n.tab+" "+(b||""),children:z.map((g,c)=>l("div",{className:n["tab-btn-wrap"]+" "+(C||""),children:[e(s,{className:(p||"")+" "+(a==c?"select":""),size:h=="large"?"large":h=="medium"?"medium":h=="small"?"small":h=="extraSmall"?"extraSmall":"",theme:k,bg:B,otl:T,color:x,radius:v,ripple:f,hoverBg:y,hoverOtl:w,hoverColor:d,variant:a==c?S:"normal",onClick:()=>{r(c)},children:g}),e("div",{className:n["tab-custom"]+" "+(L||"")+" "+(a==c?"":n.close)+" "+(a==c?"":"close")})]},c))}),o]})})};function i(a){return e(t,{children:a.no?e("div",{className:"width100 otl-transparent"}):l("div",{className:"width100 cursor r10 otl-grayc flexColumn overHidden card2-wrap",children:[e("div",{className:"width100 h150 bgc-grayc-100 flexCenter",children:e("i",{className:"i-logo w60 h60 bgc-gray9"})}),l("div",{className:"width100 bgc-white relative h93 flexColumn px10 pt20 pb13",children:[e("p",{className:"size12 txt-gray6",children:"Lorem"}),e("p",{className:"size16 width100 lh130 ellipsis2",children:a.title}),l("div",{className:"card2-hover",children:[e(I,{className:"like",defaultChecked:!0}),e(s,{variant:"contained",size:"large",theme:"white",radius:"round",hoverBg:"graye-100",className:"flex1",children:"Button"})]})]})]})})}function W(a){return e(t,{children:e("div",{className:"r10 bgc-grayc width100 height100 flex alignEnd",children:l("div",{className:"flex gap10 width100 p10",children:[e(I,{className:"like",defaultChecked:!0}),e(s,{variant:"contained",size:"large",theme:"white",radius:"round",hoverBg:"graye-100",className:"flex1",children:"Button"})]})})})}function M(a){return e(t,{children:l("div",{className:"px20 py15 cursor hover-bgc-primary_10p transition3 width100 height100 flexColumn gap10",children:[e("div",{className:"r10 bgc-grayc-100 width100 height100"}),l("div",{className:"flexColumn gap2",children:[e("p",{className:"size12 txt-gray6",children:"Lorem"}),e("p",{className:"size16 txt-gray6",children:"Lorem ipsum dolor sit amet, consectetur"})]}),l("div",{className:"flex gap10 alignCenter",children:[e("div",{className:"bgc-grayc w40 h40 r20"}),e("p",{className:"size13",children:"Name"}),e("p",{className:"size12 txt-gray9",children:"Company"})]}),l("div",{className:"flex gap10 width100",children:[e(I,{className:"like-contained",defaultChecked:!0}),e(s,{variant:"contained",size:"large",theme:"white",otl:"gray6",radius:"round",hoverBg:"graye-100",className:"flex1",children:"Button"})]})]})})}function q(a){return e(t,{children:l("div",{className:"flex gap20 alignCenter cursor",children:[e("div",{className:"h100 w170 bgc-graye r10"}),l("div",{className:"flexColumn gap20",children:[l("div",{className:"flexColumn",children:[e("p",{className:"size12 txt-gray6",children:"[Lorem]"}),e("p",{className:"size16",children:"Lorem ipsum dolor"})]}),l("div",{className:"flex gap10 size12",children:[e("p",{children:"Name"}),e("p",{className:"txt-gray6",children:"Company"})]})]})]})})}function F(a){return e(t,{children:l("div",{className:"flex gap30 height100",children:[e("div",{className:"w235 height100 bgc-graye"}),l("div",{className:"flexColumn flex1",children:[l("div",{className:"flex1 flexColumn gap20 height100",children:[e("p",{className:"size20",children:"Lorem ipsum dolor sit amet,"}),l("ul",{className:"card6-list",children:[l("li",{children:["Lorem",e("p",{children:"Date / Time"})]}),l("li",{children:["Lorem",l("p",{children:["Date / Time ",e("br",{}),"Date / Time"]})]}),l("li",{children:["Lorem",l("p",{children:["Date / Time ",e("br",{}),"Date / Time"]})]})]})]}),l("div",{className:"flex alignCenter gap10",children:[e(I,{className:"like-outlined"}),e(s,{size:"large",variant:"outlined",radius:"round",className:"flex1 primary",children:"Button"})]})]})]})})}const G=()=>{const a=r=>e(t,{children:l("div",{className:`width100 height100 flexColumn flexCenter gap50 ${r.gray?"bgc-grayc":"bgc-graye"}`,children:[l("div",{className:"flexColumn flexCenter gap30",children:[l("div",{className:"flexColumn flexCenter gap20",children:[l("div",{className:"flexColumn flexCenter ",children:[l("div",{className:"flex gap10 size18 txt-gray9",children:[e("p",{className:"b txt-primary",children:"Lorem"}),e("p",{children:"Lorem ipsum dolor"})]}),l("p",{className:"size32 b txt-black",children:[r.number," Lorem ipsum dolor sit amet consectetur"]}),e("p",{className:"size24 txt-black",children:"adipiscing (ELIT)"})]}),l("div",{className:"flex gap10",children:[e(s,{size:"large",radius:"round",variant:"contained",theme:"white",children:"BUTTON"}),e(s,{size:"large",radius:"round",variant:"contained",children:"BUTTON"})]})]}),e("i",{className:"i-logo w334 h334 bgc-black_15p"})]}),e("div",{className:"h30"})]})});return e(t,{children:e(D,{classSlide:"h700",classBtn:"contentWidth",classNav:"slide-mainBanner-nav",classNavWrap:"slide-mainBanner-nav-wrap",playIcon:e("i",{className:"flex bgc-black_30p i-play w22 h22"}),pauseIcon:e("i",{className:"flex bgc-black_30p i-pause w22 h22"}),content:[e(a,{number:1},1),e(a,{number:2,gray:!0},2),e(a,{number:3},3),e(a,{number:4,gray:!0},4)]})})},R=()=>{const[a,r]=m.useState(1);return e("section",{className:"section1",children:l("div",{className:"section-content flex gap70",children:[l("div",{className:"flexColumn gap5 w220 mt85",children:[l("div",{className:"flex gap4",children:[e("p",{className:"size16 txt-gray6",children:"Mr."}),e("p",{className:"size16 txt-gray3",children:"Lorem"})]}),l("div",{className:"size24 txt-black",children:["Welcome! ",e("br",{}),"to the ",e("br",{}),e("b",{children:"LOGO"})]})]}),e(V,{state:a,setState:r,tabName:["Tab","Tab","Tab","Tab"],classTabWrap:"tab-round",children:a==0?l("div",{className:"flexColumn gap15",children:[l("div",{className:"flexBetween alignCenter",children:[e("p",{className:"size19",children:" Lorem Ipsum "}),e(s,{variant:"contained",theme:"white",size:"extraSmall",radius:"round",square:!0,children:e("i",{className:"i-plus"})})]}),l("div",{className:"flex gap20",children:[e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem ipsum dolor sit amet, consectetur"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"})]})]}):a==1?l("div",{className:"flexColumn gap15",children:[l("div",{className:"flexBetween alignCenter",children:[e("p",{className:"size19",children:" Lorem Ipsum "}),e(s,{variant:"contained",theme:"white",size:"extraSmall",radius:"round",square:!0,children:e("i",{className:"i-plus"})})]}),l("div",{className:"flex gap20",children:[e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem ipsum dolor sit amet, consectetur"}),e(i,{no:!0}),e(i,{no:!0})]})]}):a==2?l("div",{className:"flexColumn gap15",children:[l("div",{className:"flexBetween alignCenter",children:[e("p",{className:"size19",children:" Lorem Ipsum "}),e(s,{variant:"contained",theme:"white",size:"extraSmall",radius:"round",square:!0,children:e("i",{className:"i-plus"})})]}),l("div",{className:"flex gap20",children:[e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{no:!0})]})]}):a==3?l("div",{className:"flexColumn gap15",children:[l("div",{className:"flexBetween alignCenter",children:[e("p",{className:"size19",children:" Lorem Ipsum "}),e(s,{variant:"contained",theme:"white",size:"extraSmall",radius:"round",square:!0,children:e("i",{className:"i-plus"})})]}),l("div",{className:"flex gap20",children:[e(i,{title:"Lorem Ipsum dolor"}),e(i,{no:!0}),e(i,{no:!0}),e(i,{no:!0})]})]}):e(t,{})})]})})},U=()=>{const[a,r]=m.useState(1);return e("section",{className:"section2",children:l("div",{className:"section-content flexColumn gap15",children:[e("div",{className:"justifyEnd",children:l("div",{className:"flex gap20",children:[e(s,{size:"extraSmall",radius:"round",square:!0,theme:"white",onClick:()=>{a>1&&r(a-1)},children:e("p",{className:"i-left-thin w24 h24 bgc-gray6"})}),e(s,{size:"extraSmall",radius:"round",square:!0,theme:"white",onClick:()=>{a<3&&r(a+1)},children:e("p",{className:"i-right-thin w24 h24 bgc-gray6"})})]})}),l("div",{className:"flex gap70",children:[l("div",{className:"w220 flexColumn gap5",children:[l("div",{className:"flex gap4 size16 txt-gray3",children:[e("p",{className:"txt-gray6",children:"Mr."}),e("p",{children:"Lorem"})]}),e("p",{className:"size24 txt-black",children:"Lorem ipsum dolor sit amet, consectetur"})]}),e("div",{className:"card-slide-wrap",children:l("div",{className:`card-slide ${a==1?"s1":a==2?"s2":a==3?"s3":""}`,children:[e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{no:!0})]})})]})]})})},_=a=>e("section",{className:"section3",children:l("div",{className:"section-content flex gap70",children:[e("p",{className:"w220 size24",children:"Lorem ipsum dolor sit amet, consectetur"}),l("div",{className:"flex flex1 gap50",children:[l("div",{className:"flexColumn width100 gap20",children:[e("p",{className:"size19",children:"Lorem Ipsum"}),e(F,{})]}),e("div",{className:"height100 w1 bgc-grayc"}),l("div",{className:"flexColumn width100 gap20",children:[l("div",{className:"flexBetween alignCenter",children:[e("p",{className:"size19",children:"Lorem Ipsum"}),e(s,{theme:"gray3",size:"extraSmall",radius:"round",square:!0,children:e("i",{className:"i-plus"})})]}),a.loading?e("div",{className:"flex1 h328 otl-grayc flexCenter size14 txt-gray6",children:"Loading..."}):l("div",{className:"flexColumn gap20",children:[e(q,{}),e(q,{}),e(q,{})]})]})]})]})}),H=()=>{const a=r=>e(t,{children:e("div",{className:`width100 height100 flexCenter ${r.gray?"bgc-gray6":"bgc-gray9"}`,children:l("div",{className:"contentWidth relative height100 flexColumn gap20 justifyCenter alignStart",children:[l("div",{className:"flexColumn gap10alignStart",children:[l("div",{className:"flex gap10 size18 txt-white",children:[e("p",{className:"b txt-primary",children:"Lorem"}),e("p",{children:"Lorem ipsum dolor"})]}),l("p",{className:"size32 lh100 txt-white",children:[r.number," Lorem ipsum dolor sit amet consectetur ",e("br",{})]}),e("p",{className:"size32 lh100 txt-white",children:"adipiscing (ELIT)"})]}),l("div",{className:"flex gap10 mb30",children:[e(s,{size:"large",variant:"contained",radius:"round",theme:"white",children:"Button"}),e(s,{size:"large",variant:"contained",radius:"round",children:"Button"})]}),e("i",{className:"i-logo w232 h232 bgc-white_80p absolute r0"})]})})});return e(t,{children:e(D,{classSlide:"h317 vw100-4",classNav:"slide-subBanner-nav",classNavWrap:"slide-subBanner-nav-wrap",playIcon:e("i",{className:"flex bgc-white i-play w30 h30"}),pauseIcon:e("i",{className:"flex bgc-white i-pause w30 h30"}),leftBtn:e(t,{}),rightBtn:e(t,{}),content:[e(a,{gray:!0}),e(a,{}),e(a,{gray:!0}),e(a,{})]})})},P=()=>{const[a,r]=m.useState(1);return e("section",{className:"section4",children:l("div",{className:"section-content flexColumn gap15",children:[e("div",{className:"justifyEnd",children:l("div",{className:"flex gap20",children:[e(s,{size:"extraSmall",radius:"round",square:!0,theme:"white",onClick:()=>{a>1&&r(a-1)},children:e("p",{className:"i-left-thin w24 h24 bgc-gray6"})}),e(s,{size:"extraSmall",radius:"round",square:!0,theme:"white",onClick:()=>{a<3&&r(a+1)},children:e("p",{className:"i-right-thin w24 h24 bgc-gray6"})})]})}),l("div",{className:"flex gap70",children:[l("div",{className:"w220 flexColumn gap5",children:[l("div",{className:"flex gap4 size16 txt-gray3",children:[e("p",{className:"txt-gray6",children:"Mr."}),e("p",{children:"Lorem"})]}),e("p",{className:"size24 txt-black",children:"Lorem ipsum dolor sit amet, consectetur"})]}),e("div",{className:"card-slide-wrap",children:l("div",{className:`card-slide ${a==1?"s1":a==2?"s2":a==3?"s3":""}`,children:[e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{title:"Lorem Ipsum dolor"}),e(i,{no:!0})]})})]})]})})},$=a=>e("section",{className:"section5",children:l("div",{className:"section-content flex gap50",children:[l("div",{className:"flex1 flexColumn gap20",children:[l("div",{className:"h24 flexBetween",children:[e("p",{className:"size19",children:" New"}),e(s,{size:"extraSmall",square:!0,radius:"round",theme:"gray3",children:e("i",{className:"i-plus"})})]}),l("div",{className:"flex gap40",children:[l("div",{className:"flexColumn w100 flex1 gap15",children:[l("div",{className:"flexColumn gap5",children:[e("p",{className:"size13",children:"[Lorem]"}),e("p",{className:"size24",children:"Lorem ipsum dolor"}),e("p",{className:"size13 txt-gray9",children:"company"})]}),e("div",{className:"ellipsis5 size13 txt-gray9",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),l("div",{className:"flexColumn gap5",children:[e("p",{className:"size14 txt-gray6",children:"[7Chapter]"}),l("div",{className:"scrollYAuto scroll-padding h128 r10 flexColumn gap10 p15 bgc-primary_10p",children:[l("div",{className:"flex gap20",children:[e("div",{className:"w30 h30 r15 bgc-primary flexCenter txt-white size13",children:"01"}),l("div",{className:"flexColumn w100 flex1 py5 gap5",children:[e("p",{className:"size13 ellipsis2",children:"Lorem ipsum dolor sit amet, consectetur"}),l("div",{className:"flex gap20",children:[e("p",{className:"size12 txt-gray6",children:"Video"}),e("p",{className:"size12 txt-gray9",children:"25m"})]})]})]}),l("div",{className:"flex gap20",children:[e("div",{className:"w30 h30 r15 bgc-primary flexCenter txt-white size13",children:"02"}),l("div",{className:"flexColumn w100 flex1 py5 gap5",children:[e("p",{className:"size13 ellipsis2",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"}),l("div",{className:"flex gap20",children:[e("p",{className:"size12 txt-gray6",children:"Video"}),e("p",{className:"size12 txt-gray9",children:"25m"})]})]})]}),l("div",{className:"flex gap20",children:[e("div",{className:"w30 h30 r15 bgc-primary flexCenter txt-white size13",children:"03"}),l("div",{className:"flexColumn w100 flex1 py5 gap5",children:[e("p",{className:"size13 ellipsis2",children:"Lorem ipsum dolor sit amet, consectetur"}),l("div",{className:"flex gap20",children:[e("p",{className:"size12 txt-gray6",children:"Video"}),e("p",{className:"size12 txt-gray9",children:"25m"})]})]})]})]})]})]}),e("div",{className:"w235 bgc-graye",children:e(W,{})})]})]}),e("div",{className:"height100 w1 bgc-grayc"}),e("div",{className:"w520",children:l("div",{className:"flexColumn width100 height100 gap20",children:[l("div",{className:"flexBetween alignCenter",children:[e("p",{className:"size19",children:"Lorem ipsum dolor"}),e(s,{theme:"gray3",size:"extraSmall",radius:"round",square:!0,children:e("i",{className:"i-plus"})})]}),a.loading?e("div",{className:"flex1 h328 otl-grayc flexCenter size14 txt-gray6",children:"Loading..."}):l("div",{className:"flex height100",children:[e(M,{}),e(M,{})]})]})})]})}),K=()=>l("div",{className:"flexColumn gap70",children:[e(G,{}),e(R,{}),e(U,{}),e(_,{loading:!0}),e(_,{}),e(H,{}),e(P,{}),e($,{loading:!0}),e($,{})]});export{K as default};