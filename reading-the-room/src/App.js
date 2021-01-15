import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReadingRoom from './components/ReadingRoom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route>
         <ReadingRoom />
      </Route>
       {/* <Route>
          <Scenarios />
       </Route>
         <Route>
         <Events />
       </Route>
         <Route>
         <StartGame />
       </Route>
         <Route>
         <Game />
       </Route>
         <Route>  
        <Promps />
       </Route>
         <Route> 
        <Countdown />
       </Route>
         <Route>   
        <GameOver />
       </Route>
         <Route>
         <ClickAreas />
       </Route>
         <Route>
          <Arrows />
       </Route>
         <Route>
          <Pages />
       </Route> */}


      </BrowserRouter>
    </div>
  );
}

export default App;
