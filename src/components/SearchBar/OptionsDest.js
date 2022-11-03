import React from "react";


function OptionsDest(props){
    
    console.log(props)
    
    return(
        
        <option value={props.data}>{props.data}</option>
    )


}

export default OptionsDest;