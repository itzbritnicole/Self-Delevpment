import React from 'react'
import closebutton from "../../assets/img/close-button.svg"
import goodbutton from "../../assets/img/good-button.svg"
import verygood from "../../assets/img/very-good-button.svg"
import excellent from "../../assets/img/excelent-button.svg"
import notgood from "../../assets/img/not-good-button.svg"
import API from "../../API"
import { useState } from 'react'
import { useEffect } from 'react'


const api = new API();
const Reviews = ({selectedItemId, setSelectedItemId, setShowReviews}) => {
    const [reviews,setReviews]=useState([]);

    useEffect((selectedItemId,setSelectedItemId)=>{
        api.getReviews(selectedItemId).then((reviews)=>{
            setSelectedItemId(null);
            setReviews(reviews);
        });
    },[]);

    const getImgReaction=(like_count)=>{
        switch(like_count){
            case 1:
                return notgood;
            case 2:
                return goodbutton;
            case 3:
                return verygood;
            default:
                return excellent;
              

    
        }
    };
  return (
    <div>
<section class="popup">

    <div class="popup-inner">
        <img src={closebutton} onClick={()=>setShowReviews(false)} alt=""/>
         <br/>
    <h1>Reviews for "Chicken Submarine Burger"</h1>
    <br/>

    <div class="buttons">
        {reviews&&
        reviews.map((review)=>(
            <img src={getImgReaction(review.like_count)} alt="" />

        ))}
    </div>
    <div class="popup-input">

        <input type="text" placeholder="text" value={reviews.name}/>
        <input type="text" placeholder="text" value={reviews.body}/>


        <br/><br/>


    </div>

</div>
</section>

      
    </div>
  )
}

export default Reviews
