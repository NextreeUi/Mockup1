import * as React from "react";

//component
import { Title } from '@/components';
//nds-ui
import { Tab, Pagination, Accordion } from 'nds-ui/component';

const FAQ = () => {
  const [TabState, setTabState] = React.useState(0);

  const FAQAccordion = () => {
    const [AccordionState, setAccordionState] = React.useState(false);
    const AcoordionClick = () => {
      setAccordionState(!AccordionState)
      console.log('asd')
    }
    return (
      <Accordion click={AcoordionClick} className={`h48 otlb-grayc-dashed`} title={<div className="flex alignCenter gap12"><div className={`transition5 w28 h28 size14 flexCenter b r20 ${AccordionState ? 'bgc-primary txt-white' : 'otl-gray6 txt-gray6'}`}>Q</div> Lorem ipsum dolor sit amet</div>}>
        <div className="pl40 py20 gap12 flex otlb-grayc-dashed">
          <div className="w28 h28 bgc-primary size14 txt-white flexCenter b r20">A</div>
          <div className="w20 size14 txt-gray3 flex1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </div>
        </div>
      </Accordion>
    )
  }
  
  return (
    <>
    <div className="contentWidth flexColumn mt30 mb175">
      <Title title='FAQ'/>
      <Tab 
        classTabWrap='tab-line mt30'
        theme="gray6"
        state={TabState}
        setState={setTabState}
        tabName={['Tab','Tab','Tab','Tab']}
      />
      <div className="flexColumn gap10 mt30">
        <p className="size14"> 40 <span className="txt-gray6"> in total </span> </p>
        <div className="otlt-black flexColumn width100">
          <FAQAccordion /><FAQAccordion /><FAQAccordion /><FAQAccordion /><FAQAccordion />
          <FAQAccordion /><FAQAccordion /><FAQAccordion /><FAQAccordion /><FAQAccordion />
          <div className="width100 h1 bgc-black mt-1"/>
        </div>
      </div>
      <div className="flexCenter mt60">
        <Pagination />
      </div>

    </div>
    </>
  )
}


export default FAQ;