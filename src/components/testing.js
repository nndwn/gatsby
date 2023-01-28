import React, { useState } from 'react'



const Testing = () => {
  const handleClick = () => {
    setToggle(!toggle);
  };
  //Using Inline Function and the The Logical Not (!) to toggle state
    const [toggle, setToggle] = useState(true);

    return (
      <div>
        <button onClick={handleClick} className="btn btn-warning mb-5">Toggle State</button>
  
        <ul className="list-group" style={{ display: toggle ? 'block' : 'none' }}>
          <li>test</li>
        </ul>
  
      </div>
    )
}


export default Testing