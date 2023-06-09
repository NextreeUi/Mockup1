import * as React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

// components
import Lnb from "@/layout/components/Lnb";
import Contents from "@/layout/components/Contents";
import Footer from "@/layout/components/Footer";

function DefaultLayout() {
  const location = useLocation();
  const { type, id } = useParams();

  return (
    <>
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
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
