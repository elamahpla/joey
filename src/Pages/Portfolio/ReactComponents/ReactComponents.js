import React from 'react';
import ReusableButton from './Button/Button';
import VisibilityToggle from './VisibilityToggle/VisibilityToggle';
import MenuContainer from './Sidebar/MenuContainer';
import Modal from './Modal/Modal';
import Todo from './Todo/Todo'; 

const ReactComponents = () => (
  <div>
    <h1 className="Portfolio-H1">React Components</h1>
    <hr/>
    <br/>
    <ReusableButton />
    <br/>
    <VisibilityToggle />
    <br/>
    <MenuContainer />
    <br/>
    <Modal />
    <br/>
    <Todo />
  </div>
);

export default ReactComponents;