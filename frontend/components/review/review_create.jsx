import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.reviewSubmit = this.reviewSubmit.bind(this);
  }

  reviewSubmit(e) {
    e.preventDefault();
    let reviewdraft = Object.assign({}, this.state, {musical_id:this.props.musical});
    createReview(reviewdraft);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="reviews">
         <h2>Review</h2>
        <form  className="review-form" onSubmit={this.reviewSubmit}>
          <label>Rating</label>
          <br/>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br/>

          <label>Comment</label>
         <div className = "textarea">
          <textarea className = "inputbox"
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
          </div>
          <input type="submit" />
        </form>
      
      </div>
    );
 }
}

export default (ReviewForm);

