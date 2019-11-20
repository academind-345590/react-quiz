import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import classes from './MenuToggle.css';

const MenuToggle = props => {
  let icon = null;
  const cls = [
    classes.MenuToggle
  ]
  if (props.isOpen){
    icon = faTimes;
    cls.push(classes.open);
  } else {
    icon = faBars;
  }
  return (
    <FontAwesomeIcon 
      icon={icon} 
      className={cls.join(' ')}
      onClick = {props.onToggle}
    />
  )
}

export default MenuToggle