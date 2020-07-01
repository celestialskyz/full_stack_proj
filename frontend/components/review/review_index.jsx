import React from 'react';
debugger
const ReviewIndex = ({reviews}) =>{
    debugger

    if (!reviews || reviews === {}){
      return(<></>);
    }
    debugger
    return(
      <div className= "reviewIdx">
      {reviews.map(review =>{
        debugger
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