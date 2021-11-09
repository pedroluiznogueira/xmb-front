import React, { useEffect, useState } from 'react';
import { getAerodromes } from '../../services/AerodromeService';
import './AerodromeComponent.css';

function AerodromeComponent() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAerodromes()
      .then(aerodromes => {
        if(mounted) {
          setList(aerodromes)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div className="wrapper">

     {/* get method */}
     <ul className="container-ul">
       {
        list.map(
          aerodrome =>
           <li className="container-li" key={aerodrome.name}>
             {aerodrome.name}
           </li>
        )
       }
     </ul>
    </div>
  )
}

export default AerodromeComponent;