import React from 'react';
import StarShow from './starcomponent';

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
              <StarShow
                rating = {review.rating}/>
              <p>{review.body}</p>
            </div>
          </div>
        )
      })}
      </div>
    )

  }

export default ReviewIndex;