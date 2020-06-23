import React from 'react';


class SignInForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      errors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
   
   
    handleSubmit(e){
      //debugger{[type]: e.target.value}
      e.preventDefault();
      const user= Object.assign({}, this.state); 
      this.props.processForm(user).then(()=>{this.setState({["errors"]:[]})
    }).catch(()=>{
        this.setState({errors: [...this.state.errors, "Your email and password don't match. Please try again."
      ]}) ;
      });
      // .then((this.props)=>{
      //   console.log("Hello");
      //   console.log(this.props);
       // this.props.closeModal
      //});
    }

    demoLogin(e){
      e.preventDefault();
      const user= {email: 'gAlinda@shiz.edu', password:'popular'};
      this.props.processForm(user).then(this.props.closeModal);
    }

    handleInput(type){
      return(e)=>{
        this.setState({[type]: e.target.value});
      };
    }
   
    renderErrors() {
      if (this.props.errors === undefined){
        return (
          <>
          </>
          );   }
      return(
        <ul>
          {this.props.errors.map((error, i) => {
            //debugger
            return ( <li key={`error-${i}`}>
              {error}
            </li>);
           
          })}
        </ul>
      );
    }
    
    render(){
      return (
        <>
          <form className = 'session_form' onSubmit={this.handleSubmit} >
          {this.renderErrors()}
          <fieldset>
            <h1 className = "sign_h">Please sign in</h1>
              <label> 
                <input type="text" name="inputBox" onChange={this.handleInput('email')}placeholder='Email' />
                </label>
              <label> 
                <input type="password" name="inputBox" onChange={this.handleInput('password')} placeholder='Password' />
              </label>
              <button onClick={this.handleSubmit}>Sign In</button>
              </fieldset>
              <button onClick={this.demoLogin}>Demo User</button>
              
             </form>
        </>
      )
    
    }
  
}

export default SignInForm;