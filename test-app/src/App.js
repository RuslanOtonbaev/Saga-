import React from 'react';
import './App.css';

import Banner from './Components/banner-module/banner';
import Toggler from './Components/toggle-module/section-toggler';
import Content from './Components/content-module/content-component';

function App() {
  return (
      <div className='wrapper'>
          <div className="container">
              <Banner />
              <Toggler />
          </div>
          <Content />
      </div>
  );
}

export default App;
