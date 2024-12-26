import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import './styles.css';
import './styles/animations.css';
import ServiceDetail from './components/ServiceDetail';
import SuccessStories from './components/SuccessStories';
import FAQ from './components/FAQ';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <main>
              <ServiceList />
              <SuccessStories />
              <FAQ />
              <AppointmentForm />
            </main>
          </Route>
          <Route path="/service/:service">
            <ServiceDetail />
          </Route>
          <Route path="/admin">
            <AdminPanel />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

