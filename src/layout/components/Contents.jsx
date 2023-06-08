import * as React from "react";
import loadable from "@loadable/component";
import { Route, Routes, useParams } from "react-router-dom";

// nds-ui
import { Loading } from 'nds-ui/component';

const Contents = () => {
  const params = useParams();
  // Component import
  const PageContents = loadable(
    () => import(`../../page/${params.type}/${params.id}.jsx`),
    { fallback: 
      <div className="loading-wrap">
        <Loading />
      </div> 
    }
  );

  return (
    <>
      <PageContents />
    </>
  );
};

export default Contents;
