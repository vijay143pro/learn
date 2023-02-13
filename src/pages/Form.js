import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            formName:"",
            age:"",
            email:"",
            mobile:"",
            password:"",
            repassword:"",
            address:"",
            error:false

        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value

        })
        
    }
    handleClick=(e)=>{
        e.preventDefault()
        var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
        if(this.state.formName.length==0 ){
            this.setState({
                error:true
            })
           
        }
        else if(!email_regex.test){
            this.setState({
                error:true
            })
        }
        else{
            this.setState({
                error:false
            })
        }
        if(this.state.age.length==0){
            this.setState({
                error:true
            })
        }
        else{
            this.setState({
                error:false
            })
        }
        if(this.state.email.length==0){
            this.setState({
                error:true
            })
        }
        
        else{
            this.setState({
                error:false
            })
        }
        if(this.state.mobile.length==0){
            this.setState({
                error:true
            })
        }
        else{
            this.setState({
                error:false
            })
        }
        if(this.state.password.length==0){
            this.setState({
                error:true
            })
        }
        else{
            this.setState({
                error:false
            })
        }
        if(this.state.repassword.length==0 || this.state.password !=this.state.repassword){
            this.setState({
                error:true
            })
        }
        else{
            this.setState({
                error:false
            })
        }
    }
    render(){
        return(
            <div><div className="ele1">
                <form className="form" onSubmit={(e)=>{this.handleClick(e)}}>
                <h1>Form validation</h1>
                <input type="text" id="formName" placeholder="Enter Name" onChange={(e)=>{this.handleChange(e)}}
                 name="formName"/><br/>{this.state.error?<label>Fill and enter valid Name</label>:""}<br/><br/>
                <input type="number" id="age" name="age" onChange={(e)=>{this.handleChange(e)}}/><br/>
                {this.state.error?<label>Fill and enter valid Age</label>:""}<br/><br/>
                <input type="email" id="email" name="email" autoComplete="off" 
                placeholder="Enter your email" onChange={(e)=>{this.handleChange(e)}}/><br/>
                {this.state.error?<label>Fill and enter valid Email</label>:""}<br/><br/>
                <input type="tel" id="mobile" name="mobile" placeholder="Enter mobile number"
                onChange={(e)=>{this.handleChange(e)}}/><br/>
                {this.state.error?<label>Fill and enter valid Mobile number</label>:""}<br/><br/>
                <input type="password" id="pass" name="password" placeholder="Enter password"
                onChange={(e)=>{this.handleChange(e)}}/><br/>
                {this.state.error?<label>Fill and enter valid password</label>:""}<br/><br/>
                <input type="password" id="repass" name="repassword" 
                placeholder="confirm password" onChange={(e)=>{this.handleChange(e)}}/><br/>
                {this.state.error?<label>Fill and check password again</label>:""}<br/><br/>
                <textarea placeholder="Enter address" rows={5} cols={25}></textarea><br/>
                {this.state.error?<label>Fill the address</label>:""}<br/><br/>
                <button id="sub">Submit</button>
                </form></div>
            </div>
        )
    }
}
export  {Form}