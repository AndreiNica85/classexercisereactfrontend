import React from "react";


function OptionsDest(props){
    
    console.log(props.props)
    
    return(
        
        <option value={props.props}>{props.props}</option>
    )


}

export default OptionsDest;