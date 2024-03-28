import {useState} from 'react'
import { sculptureList } from './data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0); // state variable
    const [showMore, setShowMore] = useState(true);
  
    function handleClickNext() {
      if(index < sculptureList.length - 1){
        setIndex(index + 1);
      }
    }
  
    function handleClickPrev(){
      if(index > 0){
        setIndex(index - 1)
      }
    }
  
    function handleMoreClick() {
      setShowMore(!showMore);
    }
  
    // rerendering
    let sculpture = sculptureList[index];
    return (
      <>
        <button 
          onClick={handleClickNext}
          disabled={index == sculptureList.length - 1}
        >
          Next
        </button>
        <button 
          onClick={handleClickPrev}
          disabled={index == 0} 
        >
          Previos
        </button>
        <h2>
          <i>{sculpture.name} </i> 
          by {sculpture.artist}
        </h2>
        <h3>  
          ({index + 1} of {sculptureList.length})
        </h3>
        <img 
          src={sculpture.url} 
          alt={sculpture.alt}
        />
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
      </>
    );
  }
