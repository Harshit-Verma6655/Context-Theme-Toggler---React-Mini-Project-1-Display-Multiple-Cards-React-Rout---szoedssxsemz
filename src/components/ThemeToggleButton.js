import React from 'react';


const ThemeToggleButton = () =>{
    let [global, setGlobal]=useState(true);
    return (
       <>
        <button id='global-theme-toggler' onClick={()=>setGlobal(!global)}>{global?"Switch to dark theme":"Switch to light theme'}</button>
        </>
    )

}
export {ThemeToggleButton}
