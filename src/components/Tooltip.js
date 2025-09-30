import React,{useState} from 'react'

const Tooltip = ({text,children}) => {
    const [visible,setVisible]=useState(false);
  return (
    <div className='tooltip'
      onMouseEnter={()=>setVisible(true)}
      onMouseLeave={()=>setVisible(false)}>
          {visible && <div className='tooltiptext'>{text}</div>}
      {children}
  
     </div>
  )
}

export default Tooltip;
