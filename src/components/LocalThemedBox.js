import React from 'react';


const LocalThemedBox = () => {

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box" className={global?"bg-light":"bg-dark"}>
        {/* Write code below this line */}
        <p id="local-themed-text-container"></p>
        
    </div>
)
}

export { LocalThemedBox }
