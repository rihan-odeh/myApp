import React from "react"
export function CheckBox(){
    const[checked, toggle]= userReducer(
        checkes => !checked, 
        false
    ); 
    returrn (
    <>
    <label htmlFor="checkbox">
        { checked ? "checked" : "not checked"}
    </label>
    <input id="checkbox" type="checkbox" vlaue={checked} onChange={toggle}/> 
    
    
    
    </>

    )
    
}