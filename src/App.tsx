import React, { Fragment } from 'react';
import Drawer from './components/template/Drawer';
import Home from './pages/Home';
import { CompanyList, CompanyForm } from './pages/company/Index';
import { UserList, UserForm } from './pages/user/Index';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';

const App = () => {
  return (
    <Fragment>
      <CssBaseline/>
      <Router>
        <Drawer>
          <Container>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/companhias" exact component={CompanyList}/>
              <Route path="/companhia/:id?" component={CompanyForm}/>
              <Route path="/usuarios" exact component={UserList}/>
              <Route path="/usuario/:id?" component={UserForm}/>
            </Switch>
          </Container>
        </Drawer>
      </Router>
    </Fragment>
  );
}

export default App;
