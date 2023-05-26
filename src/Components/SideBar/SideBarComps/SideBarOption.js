import React from 'react'
import './SideBarOption.css'
const SideBarOption = ({Icon, title, number, isActive, onClick}) => {
  return (
    <div className={`sidebarOptions ${isActive && 'sidebarOptions-active' }`} onClick={onClick}  >
        <Icon/>
        <h4>{title}</h4>
        {/* <p>{number}</p> */}
    </div>
  )
}

export default SideBarOption