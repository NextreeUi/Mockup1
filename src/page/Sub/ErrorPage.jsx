import * as React from "react";

//nds-ui
import { Button, Hidden } from 'nds-ui/component';

const ErrorPage = () => {
  return (
    <>
    <Hidden min={801}>
      <div className="vw100 vh100 flexCenter gap50">
        <i className="i-logo w267 h267 bgc-black_30p"/>
        <div className="flexColumn h267 flexBetween">
          <div className="flexColumn gap30">
            <div className="flexColumn gap10">
              <p className="size24 lh100 b txt-grayc">404 - Page Not Found</p>
              <p className="size48 lh100 txt-gray3">This page doesn’t exist</p>
            </div>
            <p className="size18 txt-gray6 lh130">We suggest you ‘Back’ or ‘Main Page’. </p>
          </div>
          <div className="flex gap20">
            <Button className='w200' size="large" variant="outlined" theme="gray6">Back</Button>
            <Button className='w200' size="large" variant="contained" >Main Page</Button>
          </div>
        </div>
      </div>
    </Hidden>
    <Hidden max={800}>
      <div className="vw100 vh100 flexColumn flexCenter gap50">
        <i className="i-logo w267 h267 bgc-black_30p"/>
        <div className="flexColumn alignCenter gap50">
          <div className="flexColumn alignCenter gap20">
            <p className="size24 lh100 b txt-grayc">404 - Page Not Found</p>
            <p className="size48 lh110 txtCenter txt-gray3">This page <br/>doesn’t exist</p>
            <p className="size18 txt-gray6 lh130">We suggest you ‘Back’ or ‘Main Page’. </p>
          </div>
          <div className="flex gap20 width100">
            <Button className='width100' size="large" variant="outlined" theme="gray6">Back</Button>
            <Button className='width100' size="large" variant="contained" >Main Page</Button>
          </div>
        </div>
      </div>
    </Hidden>
    </>
  )
}


export default ErrorPage;