import React from 'react'
import closebutton from "../../assets/img/close-button.svg"
import goodbutton from "../../assets/img/good-button.svg"
import verygood from "../../assets/img/very-good-button.svg"
import excellent from "../../assets/img/excelent-button.svg"
import notgood from "../../assets/img/not-good-button.svg"
import API from "../../API"
import { useState } from 'react'


const api = new API();



const WriteReview = ({selectedItemId,setSelectedItemId,setShowWriteReview}) => {
  const [likeCount,setLikeCount]=useState(1),
    [name,setName]=useState(""),
    [body,setBody]=useState("");

  const inputName=(event)=>{
    setName(event.target.value);
  };

  const inputBody=(event)=>{
    setBody(event.target.value);
  };

  const sendReviewButton=()=>{
    api.writeReview(selectedItemId,name,body,likeCount).then((review)=>{
      alert("Your review has been sent! Thank you for your review");
      setName("");
      setBody("");
      setLikeCount(1);
      setSelectedItemId(null);
      setShowWriteReview(false);
    });
  };
  return (
    <div>
        <section class="popup">
       
       <div class="popup-inner">
           <img src={closebutton} onClick={()=>setShowWriteReview(false)} alt=""/>
           <br/>
           <h1>Write Review</h1>
           <br/>
           <h2>Choose your Thoughts</h2>
           <br/>

           <div class="buttons">
             <div>
              {likeCount===1?(
                <img src={notgood} class="selected" onClick={()=>setLikeCount(1)} alt="" />
               ):(
                <img src={notgood} onClick={()=>setLikeCount(1)} alt="" />
              )}
            </div>
            <div>
              {likeCount===2?(
                <img src={goodbutton} class="selected" onClick={()=>setLikeCount(2)} alt="" />
               ):(
                <img src={goodbutton} onClick={()=>setLikeCount(2)} alt="" />
              )}
            </div>
            <div>
              {likeCount===3?(
                <img src={verygood} class="selected" onClick={()=>setLikeCount(3)} alt="" />
               ):(
                <img src={verygood} onClick={()=>setLikeCount(3)} alt="" />
              )}
            </div>
            <div>
              {likeCount===4?(
                <img src={excellent} class="selected" onClick={()=>setLikeCount(4)} alt="" />
               ):(
                <img src={excellent} onClick={()=>setLikeCount(4)} alt="" />
              )}
            </div>
           </div>

           <div class="popup-input">
               <input onChange={inputName} type="text" placeholder="Enter Your Name" required/>
              <textarea name="body" onChange={inputBody} placeholder='Enter Your Review' cols="30" rows="10" required></textarea>
               <br/><br/>
          
               <button onClick={sendReviewButton}> Send reviews</button>
           </div>

       </div>
   </section>
      
    </div>
  )
}

export default WriteReview
