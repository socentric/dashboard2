import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initSplitters } from './utils/splitter';
import Container from './Container';

const Workspace = ({ activeWorkspaceLayout }) => {
  useEffect(() => {
    initSplitters();
  });

  const {id, type, basis, children} = activeWorkspaceLayout;
  return (
    <div className="workspace">
      { children.length > 0 ? (
        <Container
          id={id}
          type={type} 
          basis={basis}
          children={children} 
        />
      ) : (
        <div className="emptyworkspace">
          <span className="material-icons emptyworkspace_icon" aria-hidden="true">widgets</span>
          <h2 className="emptyworkspace_message">
            Drag widgets onto your workspace from the left navigation bar
          </h2>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeWorkspaceLayout: state.workspaces.filter(workspace => workspace.id === state.activeWorkspace)[0].layout,
  }
}

export default connect(
  mapStateToProps
)(Workspace);