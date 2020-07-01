import React from 'react';

class ReviewIndex extends React.Component{
  constructor(props){
    super(props);
  }
  

  render(){
      const {reviews} = this.props.reviews;
    if (!reviews){
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

}

export default ReviewIndex;