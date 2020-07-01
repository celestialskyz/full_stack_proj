import React from 'react';
import { Route, Switch, Link, withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.reviewSubmit = this.reviewSubmit.bind(this);
  }

  componentDidMount(){
      this.props.fetchMusicals();
  }
  
  reviewSubmit(e) {
    e.preventDefault();
    let reviewdraft = Object.assign({}, this.state, {musical_id:this.props.musical.id}, {user_id:this.props.currentUser.id});
    createReview(reviewdraft);
    this.props.history.push({
      pathname: `/musicals/${this.props.musical.id}`
    });
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {

    if (!this.props.musical){
      return (<></>)
    }
    return (
      <div className="reviews">
         <h2>Review</h2>
        <form  className="review-form" onSubmit={this.reviewSubmit}>
          <h2>{this.props.currentUser.first_name} how was your experience at {this.props.musical.name}?</h2>
          <fieldset>
            <span className="star-group">
              <input type="radio" id="5-Stars" name="rating" value="5" checked="checked" onChange={this.update('rating')}/><label>5</label>
              <input type="radio" id="4-Stars" name="rating" value="4"  onChange={this.update('rating')} /><label >4</label>
              <input type="radio" id="3-Stars" name="rating" value="3" onChange={this.update('rating')} /><label>3</label>
              <input type="radio" id="2-Stars" name="rating" value="2" onChange={this.update('rating')} /><label >2</label>
              <input type="radio" id="1-Stars" name="rating" value="1" onChange={this.update('rating')} /><label >1</label>
              <input type="radio" id="0-Stars" name="rating" value="0" className="star-clear" onChange={this.update('rating')} /><label>0</label>
            </span>
        </fieldset>
          {/* <br/>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br/> */}

          <label>Comment</label>
         <div className = "textarea">
          <textarea className = "inputbox"
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
          </div>
          <button className = "reviewSub">Submit</button>
        </form>
      
      </div>
    );
 }
}

export default withRouter(ReviewForm);

