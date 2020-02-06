import './leftnav.css';
import React from 'react';
import { connect } from 'react-redux';
import { setTheme, showSettings, minimiseNav } from './actions';
import classnames from 'classnames';

const Leftnav = ({ theme, settings, nav, setTheme, showSettings, showNavigation, minimiseNav }) => {
  return (
    <nav className={classnames(`leftnav ${theme}`, {'leftnav_minimised': nav}, {'leftnav_hidden': !showNavigation})}>
      <section className="leftnav_section">
        { 
          settings === false ? (
            <div>
              <button className={classnames('leftnav_button', {'leftnav_button-active': settings})} onClick={showSettings(true)}>
                <span className="material-icons leftnav_button-icon button_icon-user-settings" aria-hidden="true">settings</span>
              </button>
              <button 
                className={classnames('leftnav_button', {'leftnav_button-active': !nav})} 
                onClick={minimiseNav()}
              >
                <span className="material-icons leftnav_button-icon" aria-hidden="true">widgets</span>
              </button>
              <button className="leftnav_button">
                <span className="material-icons leftnav_button-icon" aria-hidden="true">search</span>
              </button>
              <button className="leftnav_button">
                <span className="material-icons leftnav_button-icon" aria-hidden="true">add</span>
              </button>
            </div>
          ) : (
            <button className={classnames('leftnav_button', {'leftnav_button-active': !settings})} onClick={showSettings(false)}>
              <span className="material-icons leftnav_button-icon" aria-hidden="true">dashboard</span>
            </button> 
          )
        }

        <div className="leftnav_section-bottom">
          { 
            theme === 'dark' ? (
              <button className="leftnav_button" onClick={setTheme('light')}>
                <span className="material-icons leftnav_button-icon" aria-hidden="true">wb_sunny</span>
              </button>
            ) : (
              <button className="leftnav_button" onClick={setTheme('dark')}>
                <span className="material-icons leftnav_button-icon" aria-hidden="true">brightness_3</span>
              </button>
            )
          }
        <button className="leftnav_button">
          <span className="material-icons leftnav_button-icon" aria-hidden="true">power_settings_new</span>
        </button>
        <button className="leftnav_button">
          <span className="material-icons leftnav_button-icon" aria-hidden="true">notifications</span>
        </button>
        </div>
      </section>

      <section className="leftnav_section leftnav_section-widgets">
          <button className="leftnav_button leftnav_button-widget">
            <span className="material-icons leftnav_button-icon button_icon-widget" aria-hidden="true">drag_indicator</span>
            Quick Entry
          </button>
          <button className="leftnav_button leftnav_button-widget">
            <span className="material-icons leftnav_button-icon button_icon-widget" aria-hidden="true">drag_indicator</span>
            OMON
          </button>
          <button className="leftnav_button leftnav_button-widget">
            <span className="material-icons leftnav_button-icon button_icon-widget" aria-hidden="true">drag_indicator</span>
            RFQ Blotter
          </button>  
          <button className="leftnav_button leftnav_button-widget">
            <span className="material-icons leftnav_button-icon button_icon-widget" aria-hidden="true">drag_indicator</span>
            BQ Blotter
          </button>
      </section>
    </nav>
  );
};

const mapStateToProps = state => ({
  theme: state.theme,
  settings: state.showSettings,
  nav: state.minimiseNav,
  showNavigation: state.showNavigation
})

const mapDispatchToProps = dispatch => ({
  setTheme: (theme) => () => dispatch(setTheme(theme)),
  showSettings: (shouldShow) => () => dispatch(showSettings(shouldShow)),
  minimiseNav: () => () => dispatch(minimiseNav()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leftnav);