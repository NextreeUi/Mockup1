import * as React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

// components
import InfoHeader from "@/layout/components/InfoHeader";
import Contents from "@/layout/components/Contents";
import Footer from "@/layout/components/Footer";

function InfoLayout() {
  const location = useLocation();
  const { type, id } = useParams();

  return (
    <>
      <div className='layout-wrap'>
        <InfoHeader></InfoHeader>
        {/* contents */}
        <div className='layout-contents' id='contents'>
          <Routes>
            <Route path={`:type/:id`} element={<Contents />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default InfoLayout;
