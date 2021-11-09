import React, { useEffect, useState } from 'react';
import { getAerodromes } from '../services/AerodromeService';

function AerodromeComponent() {
    const [list, setList] = useState([]);

    useEffect(
        () => {
            getAerodromes()
                .then(
                    (aerodromes: any) => {
                        setList(aerodromes)
                        console.log(aerodromes)
                })
        }, [])

    return(
      <>
      </>
    )
}

export default AerodromeComponent;