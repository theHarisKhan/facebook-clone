import { useState } from 'react';
import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import LogIn from './Components/LogIn/LogIn';
import { useStateValue } from './Components/Redux/StateProvider';
import SideBar from './Components/SideBar/SideBar';
import Widgets from './Components/Widgets';

function App() {
  const [{user}, dispatch] = useStateValue()

  return (
    <div>
    {!user ? (
        <LogIn />
    ) : (
      <>
        <Header />
        <div className="app_body">
          <SideBar />
          <Feed />
          <Widgets />
        </div>
      </>
    )}
    </div>
  );
}

export default App;
