import React,{useState,useContext,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import PATH from './Routes/Path';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Sections/NotFound/NotFound';
import HomeSection from './Sections/HomeSection/HomeSection';


import {ProblemsRoute, AuthenticationRoute, AnnouncementsRoute} from './Routes/Routes';

import AccountManageContext from './Contexts/AccountManage/AccountManage';

const listOfSections=['HOME','CONTESTS','PROBLEMS','FAQ','BUG_REPORT'];

const App = () => {
  const accountManager=useContext(AccountManageContext);
  const [loginStatus,setLogin] = useState(false);
  useEffect(()=>{
    const a= async()=> {
      let tempState=await accountManager.doCheck();
      if (tempState)
      setLogin(true);
      console.log(tempState);
    }
    a();
  },[setLogin,accountManager,loginStatus]
  )
  return (
    <div className="App">
      <Router>
        <Header listOfSections={listOfSections} status={loginStatus} setLogin={setLogin}/>
          {/* Below is main part of website */}
        <div className="app-body">
          <div className="app-body_left">
            <Switch>
              <Route exact path={PATH.HOME} component ={HomeSection}/>
              {/*Above is Home Page */}
              <Route path={PATH.USER} 
                    render = {(props)=>{
                        return(<AuthenticationRoute {...props} setLogin={setLogin}/>)
                        }}/>
              <Route path={PATH.PROBLEMS} component={ProblemsRoute}/>
              <Route path={PATH.ANNOUNCEMENTS} component={AnnouncementsRoute}/>
              
              {/*this is no match page*/}
              <Route component = {NotFound}/>
            </Switch>
          </div>
          <div className="app-body_right">
          </div>
        </div>
          {/* Above is main part of website */}
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
