import React from 'react';

class ReviewIndex extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchReviews();
  }

  render(){

  }

}