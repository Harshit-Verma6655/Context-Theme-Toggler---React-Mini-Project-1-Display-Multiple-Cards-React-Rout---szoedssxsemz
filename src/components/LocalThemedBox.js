import React from 'react';


const LocalThemedBox = () => {

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box" className={global?"bg-light":"bg-dark"}>
        {/* Write code below this line */}
        <p id="local-themed-text-container" className={"text-light"}> lorem ipsum dolor iterit n stuff</p>
            
        <button id="local-theme-toggler" className={"btn btn-light"}>Toggle local theme to dark</button>
    </div>
)
}

export { LocalThemedBox }
