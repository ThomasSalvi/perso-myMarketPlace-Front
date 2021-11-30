import React from 'react';
import Object from 'src/components/Object';
import './style.scss';

const Objectlist = ({ objects, posts }) => {
  const toto = 'toto';
  console.log(posts)
  return (
    <div className="objectList">
      {posts.map((object) => { 
        return (<Object title={object.title} price={object.price} imageUrl={object.imageUrl} objectId={object._id}/>)
      })}
    </div>
  );
};

export default Objectlist;
