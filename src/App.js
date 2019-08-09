import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import PATH from './Path';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Sections/NotFound/NotFound';
import HomeSection from './Sections/HomeSection/HomeSection';
import ProblemsSection from './Sections/ProblemsSection/ProblemsSection';
import ProblemWithIDSection from './Sections/ProblemWithIDSection/ProblemWithIDSection';
import SignUpSection from './Sections/SignUpSection/SignUpSection';
import LoginSection from './Sections/LoginSection/LoginSection';
import AccountManageContext, {AccountManager} from './Contexts/AccountManage/AccountManage';

const listOfSections=['HOME','CONTESTS','PROBLEMS','FAQ','BUG_REPORT'];

function App() {
  const [loginStatus,setLogin] = useState(false);
  return (
    <div className="App">
    <AccountManageContext.Provider value={new AccountManager()}>
      <Router>
        <Header listOfSections={listOfSections}/>
          {/* Below is main part of website */}
        <div className="app-body">
          <div className="app-body_left">
            <Switch>
              <Route exact path={PATH.HOME} component ={HomeSection}/>
              <Route path={PATH.LOGIN} component = {LoginSection}/>
              <Route path={PATH.SIGNUP} component = {SignUpSection}/>
              <Route exact path={PATH.PROBLEMS} component={ProblemsSection}/>
              <Route path={`${PATH.PROBLEMS}:id/`} component={ProblemWithIDSection}/>
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
    </AccountManageContext.Provider>
    </div>
  );
}

export default App;
