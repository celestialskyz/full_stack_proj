import React from 'react';
const ReviewIndex = ({reviews}) =>{
  

    if (!reviews || reviews === {}){
      return(<></>);
    }
  
    return(
      <div className= "reviewIdx">
      {reviews.map(review =>{
      
        return(
          <div className="review">
            <div className="leftsideUser">
              {review.author}
            </div>
            <div className = "rightReview">
              <h4>{review.rating}</h4>
              <p>{review.body}</p>
            </div>
          </div>
        )
      })}
      </div>
    )

  }

export default ReviewIndex;