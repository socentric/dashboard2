import React from 'react';
import classnames from 'classnames';
import Section from './Section';

export default ({type, basis, id, children}) => {
  return (
    <div 
      className={classnames('resizable-container', {'layout-column': type ==='row', 'layout-row': type ==='column'})}
      data-resize-type={type}
      data-resize-basis={basis}
      id={id}
      key={id}
    >
      { 
        children.map(child => {
          return <Section
            id={child.id}
            children={child.children}
            key={child.id}
          />
        })
      }
      <div className={classnames(`resize-bar resize-bar-${type}`)}></div>
    </div>
  );
};