import './app.css';
import React, { Fragment } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { toggleNavigation } from './actions';
import Leftnav from './Leftnav';
import Settings from './Settings';
import Workspaces from './Workspaces';
import logo from '../public/logo.png';

const App = ({ showSettings, showNavigation, toggleNavigation }) => {
  return (
    <Fragment>
        <button 
          className={classnames('button-logo', {'button-logo-small': !showNavigation})}
          onClick={toggleNavigation}
        >
          {
            showNavigation && (
              <Fragment>
                <img className="logo-image" src={logo} alt="Taurus" />
                <span className="logo-text">Connected</span>
              </Fragment>
            )
          }
        </button>
        <Leftnav/>
        { 
          showSettings === true ? 
          <Settings/> : 
          <Workspaces/>
        }
    </Fragment>
  );
};

const mapStateToProps = state => ({
  showSettings: state.showSettings,
  showNavigation: state.showNavigation
})

const mapDispatchToProps = dispatch => ({
  toggleNavigation: () => dispatch(toggleNavigation()),  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
