import { productsList } from './array-test'
import { useState } from 'react'
import './test.css'
import React from 'react'


function TestCards(){
    return(
        <div className='test-container'>
            <div className='cards-test'>
            {
              productsList.map((product) => <Test
                  title={product.title}
                  images={product.images}
                  description={product.description}
                  price={product.price}
                  brand={product.brand}
              />)
            }
            </div>
        </div>
    )
}

function Test({title, images, description, price, brand}) { 
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false);

    function NextBtn(){
        if(index < productsList.length - 1){
            setIndex(index + 1);
        }
    }

    function PrevBtn(){
        if(index > 0){
            setIndex(index - 1)
        }
    }

    function MoreClick() {
        setShowMore(!showMore);
    }

    const img = images[index];
    return (
        <div className='test-cards'>
            <div className='img'>
                <button onClick={NextBtn}>{"<"}</button>
                <img src={img} alt='#'></img>
                <button onClick={PrevBtn}>{">"}</button>
            </div>
            <h2>{title}</h2>
            <h3>${price}</h3>
            <p>{brand}</p>
            <button onClick={MoreClick}>
                {showMore ? 'Hide' : 'More...'}
            </button>
            {showMore && <p>{description}</p>}
        </div>
    )
}

export default TestCards

