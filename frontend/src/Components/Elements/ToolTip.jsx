import React from 'react'

const ToolTip = ({toolTiptext, children}) => {
  return (
    <>
    <div style={{...basicStyles.toolTipDiv}} className="tooltip-custom">
        <span style={{...basicStyles.toolTipContent}} >{toolTiptext}</span>
        {children}
    </div>
    </>
  )
}

const basicStyles = {
    toolTipDiv: {
        position : "relative",
        padding: 0,
        margin : "10px"
    },
    toolTipContent: {
        position : "absolute",
        bottom:"-25px",
        left:0,
        backgroundColor: "#2f5342",
        color:"#fff",
        width:"max-content",
        display: "none",
        padding: "3px 5px",
        textAlign: "center",
        fontSize: "0.7rem",
        borderRadius:"3px"
    }
}

export default ToolTip