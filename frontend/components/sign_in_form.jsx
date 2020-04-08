import React from 'react';

class SignInForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
   
   
    handleSubmit(e){
      e.preventDefault();
      const user= Object.assign({}, this.state); 
      this.props.processForm(user);
      this.props.closeModal();
    }

    demoLogin(e){
      e.preventDefault();
      const user= {email: 'gAlinda@shiz.edu', password:'popular'};
      this.props.processForm(user);
      this.props.closeModal();
    }

    handleInput(type){
      return(e)=>{
        this.setState({[type]: e.target.value});
      };
    }

    render(){
      return (
        <>
          
          <form className = 'session_form' onSubmit={this.handleSubmit} >
            <h1 className = "signup_h">Welcome to OpenPlaybill!</h1>
              <label> 
                <input type="text" name="inputBox" onChange={this.handleInput('email')}placeholder='Enter email'/>
                </label>
              <label> 
                <input type="password" name="inputBox" onChange={this.handleInput('password')} placeholder='Enter password'/>
              </label>
              <button onClick={this.handleSubmit}>Sign In</button>
              <button onClick={this.demoLogin}>Demo User</button>
            </form>
        </>
      )
    
    }
  
}

export default SignInForm;