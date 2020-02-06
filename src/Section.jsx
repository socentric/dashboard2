import React from 'react';
import Container from './Container';
import Panel from './Panel';

export default ({id, children}) => {
  const child = children ? children[0] : undefined;
  return (
    <section className="section resizable" id={id} key={id}>
      { child && (
        <Container
          id={child.id}
          type={child.type} 
          basis={child.basis}
          children={child.children} 
        />
      )}

      { !child && (
        <Panel/>
      )}
    </section>
  );
};