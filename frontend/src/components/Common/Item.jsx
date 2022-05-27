import React from 'react'
import {useDispatch} from "react-redux"
import heart from "../../assets/img/Icon awesome-heart.svg"
import {addCart,increaseCart,decreaseCart} from "../../reducks/carts/operations"
import  addToCart  from "../../assets/img/cart.svg"


const Item = (item,selected_count,setShowWriteReview,setShowReviews,setSelectedItemId) => {
    const dispatch=useDispatch();
    const clickAddCart=()=>{
        dispatch(addCart(item));
    }
    const clickPlusCart=()=>{
        dispatch(increaseCart(item));
    }
    const clickMinusCart=()=>{
        dispatch(decreaseCart(item));
    }
    const clickCheckReviews=()=>{
        setSelectedItemId(item.id);
        setShowReviews(true);
    }
    const clickWrirteReview=()=>{
        setSelectedItemId(item.id);
        setShowWriteReview(true);
    }



  return (
    <div>
       <section class="container">

            <div class="grid">


                <div class="item"> 
                    <div class="image-container">
                         <img src={item.image} alt=""/>

                    </div>
                    <div class="description">
                        <div class="like">
                            <img src={heart} alt=""/>
                            <p>
                                ({item.total_like_count})
                            </p>
                        </div>
                        <div class="item-name">
                            <p>{item.name}</p>
                        </div>
                        <div class="item-review">
                            <button onClick={()=>clickWrirteReview(true)}>
                                Write Review </button>
                            <button onClick={()=>clickCheckReviews(true)}>
                                Check Review </button>
                        </div>


                        <div class="add-to-cart">
                            {selected_count===0?(
                                <button class="add" onClick={clickAddCart}>
                                   <img src={addToCart} alt=""/>Add to Cart</button>
                            ):(
                                <div class = "number">
                                    <span class="minus" onClick={clickMinusCart}>-</span>
                                    <span class="count">{selected_count}</span>
                                    <span class="plus" onClick={clickPlusCart}>+</span>
                                </div>
                            )}
                            <p>${item.price}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    </div>
  )
}

export default Item
