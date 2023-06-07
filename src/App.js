import React, {createContext, useContext, useRef, useState} from 'react';
import Header from './common/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import background from './Content/assets/home/background-home-desktop.jpg'
import Home from './Home';
import Destination_Page from './Content/Destination_Page';
import Crew_Page from './Content/Crew_Page';
import Technology_page from './Content/Technology_Page';
import NotFound from './Content/NotFound';
import data from './data.json';

export const GlobalContext = createContext();


function App() {

  const initialObj = {
    data : JSON.parse(JSON.stringify(data))
  }
  const [obj, setObj] = useState(initialObj);

  return (
    <BrowserRouter>
    <GlobalContext.Provider value = {{obj, setObj}}>

      <div className = "min-h-[100vh] relative overflow-x-hidden flex justify-center items-start overflow-y-scroll">
        <Header />
          <Routes>
            <Route path='/home' element = {<Home />} />
            <Route path = '/destination' element = {<Destination_Page />} />
            <Route path = '/crew' element = {<Crew_Page />} />
            <Route path = '/technology' element = {<Technology_page />} />


            <Route path = '/' element = {<Home />} />
            <Route path = '/*' element = {<NotFound />} />
          </Routes>
      </div>
    </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
