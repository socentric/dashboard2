import './topnav.css';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { setActiveWorkspace, addWorkspace, removeWorkspace } from './actions';

const Topnav = ({ activeWorkspace, workspaces, showNavigation, setActiveWorkspace, addWorkspace, removeWorkspace }) => {
  return (
    <nav className={classnames('topnav', {'topnav_hidden': !showNavigation})} >
      <section className="topnav_section">
        {
          workspaces.map(workspace => {
            const {title, id} = workspace;
            return (
              <Fragment key={id}>
                <button 
                  className={classnames('topnav_button', {'topnav_button-active': activeWorkspace === id})} 
                  onClick={setActiveWorkspace(id)}
                >
                  <span contentEditable="true">{title}</span>
                </button>
                <button 
                  className="topnav_button topnav_button-close"
                  onClick={removeWorkspace(id)}
                >
                  <span className="material-icons topnav_icon-close" aria-hidden="true">close</span> 
                </button>
              </Fragment>
            )
          })
        }
        <button className="topnav_button topnav_button-add" onClick={addWorkspace}>
          <span className="material-icons topnav_icon-add" aria-hidden="true">add</span>
        </button>
      </section>
    </nav>
  );
};

const mapStateToProps = state => ({
  activeWorkspace: state.activeWorkspace,
  workspaces: state.workspaces,
  showNavigation: state.showNavigation
})

const mapDispatchToProps = dispatch => ({
  setActiveWorkspace: (id) => () => dispatch(setActiveWorkspace(id)),
  addWorkspace: () => dispatch(addWorkspace()),
  removeWorkspace: (id) => () => dispatch(removeWorkspace(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topnav);