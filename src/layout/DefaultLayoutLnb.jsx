import * as React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

// components
import Lnb from "@/layout/components/Lnb";
import Header from "@/layout/components/Header";
import Contents from "@/layout/components/Contents";
import Footer from "@/layout/components/Footer";

import { Hidden } from "nds-ui/component";

function DefaultLayout() {
  const location = useLocation();
  const { type, id } = useParams();

  return (
    <>
      <Hidden min={801}>
        <div className='layout-wrap'>
          <div className="flex width100">
            <Lnb></Lnb>
            <div className="lnb-contents">
              {/* contents */}
              <div className='layout-contents ' id='contents'>
                <Routes>
                  <Route path={`:type/:id`} element={<Contents />} />
                </Routes>
              </div>
              <Footer lnb></Footer>
            </div>
          </div>
        </div>
      </Hidden>
      <Hidden max={800}>
        <div className='layout-wrap'>
          <Header></Header>
          {/* contents */}
          <div className='layout-contents' id='contents'>
            <Routes>
              <Route path={`:type/:id`} element={<Contents />} />
            </Routes>
          </div>
          <Footer lnb></Footer>
        </div>
      </Hidden>
    </>
  );
}

export default DefaultLayout;
