import './workspaces.css';
import React from 'react';
import { connect } from 'react-redux';
import Topnav from './Topnav';
import Workspace from './Workspace';
import classnames from 'classnames';

const Workspaces = ({ theme }) => {
  return (
    <section className={classnames(`workspaces ${theme}`)}>
      <Topnav/>
      <Workspace/>
    </section>
  );
};

const mapStateToProps = state => ({
  theme: state.theme,
  workspace: state.workspace
})

export default connect(
  mapStateToProps
)(Workspaces);