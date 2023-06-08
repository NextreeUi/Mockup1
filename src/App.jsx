import * as React from 'react';
import { HashRouter, Route, Link, Routes } from "react-router-dom";

// layout
import DefaultLayout from "@/layout/DefaultLayout";
import GuideLayout from "@/layout/GuideLayout";
import NoLayout from "@/layout/NoLayout";

//img
import homeBg from '@/assets/images/home-bg.svg';

// style
import "@/assets/scss/style.scss";
import "nds-ui/css/style.scss";

const Home = () => {
  return (
    <>
      <div className='guide-wrap'>
        {/* Header */}
        <div className='flex alignCenter bgc-white_30p blur-back50 otlb-grayc h70 px30 py15'>
          <Link to='/' className='flex alignCenter size24 txt-gray6 flex gap30'>
            <b className='size32 txt-primary'>NDS-UI</b>
            <p> | </p>
            <p>Mock Up 1</p>
          </Link>
        </div>

        {/* Content */}
        <div className='guide-main'>
          <dl>
            <dt> UI</dt>
            <dd>
              <Link to='/GuideLayout/ui/StyleGuide'>🔗 StyleGuide</Link>
            </dd>
          </dl>
          <hr className='guide-line' />
          <dl>
            <dt> Login</dt>
            <dd>
              <Link to='/NoLayout/LogIn/LogIn1'>🔗 LogIn 1</Link>
            </dd>
            <dd>
              <Link to='/NoLayout/LogIn/LogIn2'>🔗 LogIn 2</Link>
            </dd>
          </dl>
          <hr className='guide-line' />
          <dl>
            <dt> Main</dt>
            <dd>
              <Link to='/DefaultLayout/Main/MainGnb'>🔗 Main page (Gnb)</Link>
            </dd>
            <dd>
              <Link to='/DefaultLayout/Main/MainLnb'>🔗 Main page (Lnb)</Link>
            </dd>
          </dl>
        </div>

        <div className='guide-bg'>
          <img src={homeBg} />
        </div>
      </div>
    </>
  )
}

const App = () => {
  React.useEffect(()=> {
    document.documentElement.setAttribute("data-theme", "light");
  }, [])
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/*' element={<Home/>} />
          <Route path='/DefaultLayout/*' element={<DefaultLayout />} />
          <Route path='/GuideLayout/*' element={<GuideLayout />} />
          <Route path='/NoLayout/*' element={<NoLayout />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;