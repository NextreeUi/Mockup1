import * as React from "react";

//component
import { Title } from '@/components';
//nds-ui
import { Button, Hidden, Checkbox } from 'nds-ui/component';

const Privacy = () => {

  return (
    <>
    <Hidden min={1401}>
    <div className="infoWidth flexColumn mt30 mb135">
        <Title title='Privacy' onlyTitle/>
        <div className="mt30 flexColumn gap50 alignCenter">
          <div className="px30 pt20 pb30 r10 otl-grayc flexColumn">
            <p className="h50 flex alignCenter otlb-gray6 size16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="h50 flex alignCenter size14">
              Lorem ipsum dolor
            </p>
            <div className="scrollYAuto scroll-padding25 r10 bgc-graye txt-gray6-100 size12 p20 h170">
              Lorem ipsum dolor sit amet
              <br/><br/>
              consectetur adipiscing elit
              <br/><br/>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br/><br/>
              It is a long established fact that a reader will be distracted by the readable content 
              <br/><br/>
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
              <br/><br/>
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
          </div>
          <div className="px30 flexColumn gap20">
            <p className="size16">Lorem ipsum dolor sit amet, consectetur</p>
            <p className="size14 txt-gray6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="flex width100 otl-gray6">
              <div className="flexColumn width100 otlr-gray6-100">
                <p className="flexCenter size14 h50 bgc-graye otlb2-gray6">Title</p>
                <div className="flexCenter size14 p10 txt-gray6">
                  <div>
                    <span className="txt-black">[Necessary]</span> <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
              <div className="flexColumn width100 otlr-gray6-100">
                <p className="flexCenter size14 h50 bgc-graye otlb2-gray6">Title</p>
                <div className="flexCenter size14 p10 txt-gray6">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
              <div className="flexColumn width100">
                <p className="flexCenter size14 h50 bgc-graye otlb2-gray6">Title</p>
                <div className="flexCenter flex1 size14 p10 txt-gray6">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className="flexCenter gap20">
              <div className="flexCenter size16 gap5">
                <i className="i-info bgc-gray6"/>
                Lorem ipsum dolor sit amet, consectetur
              </div>
              <div className="flexCenter size16 gap5">
                <Checkbox size="small" />
                Pivacy Accept
              </div>
            </div>
          </div>
          <Button size="large" variant="contained" theme='gray6'>Confirm</Button>
        </div>
      </div>
    </Hidden>
    <Hidden min={801} max={1400}>
      <div className="w800 flexColumn mt30 mb135">
        <Title title='Privacy' onlyTitle/>
        <div className="mt30 flexColumn gap50 alignCenter">
          <div className="px30 pt20 pb30 r10 otl-grayc flexColumn">
            <p className="h50 flex alignCenter otlb-gray6 size16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="h50 flex alignCenter size14">
              Lorem ipsum dolor
            </p>
            <div className="scrollYAuto scroll-padding25 r10 bgc-graye txt-gray6-100 size12 p20 h170">
              Lorem ipsum dolor sit amet
              <br/><br/>
              consectetur adipiscing elit
              <br/><br/>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br/><br/>
              It is a long established fact that a reader will be distracted by the readable content 
              <br/><br/>
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
              <br/><br/>
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
          </div>
          <div className="px30 flexColumn gap20">
            <p className="size16">Lorem ipsum dolor sit amet, consectetur</p>
            <p className="size14 txt-gray6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="flex width100 otl-gray6">
              <div className="flexColumn width100 otlr-gray6-100">
                <p className="flexCenter size14 h50 bgc-graye otlb2-gray6">Title</p>
                <div className="flexCenter size14 p10 txt-gray6">
                  <div>
                    <span className="txt-black">[Necessary]</span> <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
              <div className="flexColumn width100 otlr-gray6-100">
                <p className="flexCenter size14 h50 bgc-graye otlb2-gray6">Title</p>
                <div className="flexCenter size14 p10 txt-gray6">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
              <div className="flexColumn width100">
                <p className="flexCenter size14 h50 bgc-graye otlb2-gray6">Title</p>
                <div className="flexCenter flex1 size14 p10 txt-gray6">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className="flexCenter gap20">
              <div className="flexCenter size16 gap5">
                <i className="i-info bgc-gray6"/>
                Lorem ipsum dolor sit amet, consectetur
              </div>
              <div className="flexCenter size16 gap5">
                <Checkbox size="small" />
                Pivacy Accept
              </div>
            </div>
          </div>
          <Button size="large" variant="contained" theme='gray6'>Confirm</Button>
        </div>
      </div>
    </Hidden>
    <Hidden max={800}>
      <div className="px30 flexColumn mt30 mb135">
        <Title title='Privacy' onlyTitle/>
        <div className="mt30 flexColumn gap50 alignCenter">
          <div className="px20 pb20 pt10 r10 otl-grayc flexColumn">
            <p className="h50 flex alignCenter otlb-gray6 size16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className="h50 flex alignCenter size14">
              Lorem ipsum dolor
            </p>
            <div className="scrollYAuto scroll-padding25 r10 bgc-graye txt-gray6-100 size12 p20 h170">
              Lorem ipsum dolor sit amet
              <br/><br/>
              consectetur adipiscing elit
              <br/><br/>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br/><br/>
              It is a long established fact that a reader will be distracted by the readable content 
              <br/><br/>
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
              <br/><br/>
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
          </div>
          <div className="flexColumn gap20">
            <p className="size16">Lorem ipsum dolor sit amet, consectetur</p>
            <p className="size14 txt-gray6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="flexColumn gap10">
              <div className="flexColumn width100 otl-grayc ">
                <p className="flexCenter size14 h50 bgc-graye ">Title</p>
                <div className="flexCenter size14 p10 txt-gray6">
                  <div>
                    <span className="txt-black">[Necessary]</span> <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
              <div className="flexColumn width100 otl-grayc ">
                <p className="flexCenter size14 h50 bgc-graye ">Title</p>
                <div className="flexCenter size14 p10 txt-gray6">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
              <div className="flexColumn width100 otl-grayc">
                <p className="flexCenter size14 h50 bgc-graye"> Title</p>
                <div className="flexCenter flex1 size14 p10 txt-gray6">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className="flexColumn gap15">
              <div className="flexCenter size16 gap5">
                <i className="i-info bgc-gray6"/>
                Lorem ipsum dolor sit amet, consectetur
              </div>
              <div className="flexCenter size16 gap5">
                <Checkbox size="small" />
                Pivacy Accept
              </div>
            </div>
          </div>
          <Button size="large" variant="contained" theme='gray6'>Confirm</Button>
        </div>
      </div>
    </Hidden>
    </>
  )
}


export default Privacy;