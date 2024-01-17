import React from 'react'

function Cup ({guest}){
    return <h2>Tea Cup for guest #{guest}</h2>
}

export default function TeaGathering() {
    let cups=[];
    for (let i = 1; i<5; i++){
        cups.push(<Cup key={i} guest={i} />);
    }

  return cups;

}

