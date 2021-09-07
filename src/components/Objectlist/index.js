import React from 'react';
import Object from 'src/components/Object';
import './style.scss';

const Objectlist = ({ objects }) => {
  const toto = 'toto';
  return (
    <div className="objectList">
      {objects.map((object) => { 
        return (<Object title={object.title} price={object.price} imageUrl={object.imageUrl}/>)
      })}
    </div>
  );
};

export default Objectlist;
