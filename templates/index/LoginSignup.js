class LoginCard extends React.Component{
    constructor(props){
        super(props);
    }
    submitData(e){
        e.preventDefault();
        console.log('I want to submit');
        console.log(this);
    }
    isValid(item,isUsername){
        if(isUsername){
            return true;
        }
        else true;
    }
    validateAndSubmit(e){
        e.preventDefault();
        var username=$('#loginUsernameInput').get(0).value;
        var password=$('#loginPasswordInput').get(0).value;  
        if(isValid(username,true) && isValid(password,false)){
            console.log('valid');
        }
        else{
            console.log('invalid');
        }
    }
    render(){
        return(
            <div style={{
                fontFamily: 'ubuntu',
                left: this.props.left || '0%',
                top: this.props.top || '0%',
                position: 'absolute',
                backgroundColor: colorPalette.primary,
                width: '25%',
                height: '60%',
                borderRadius: '10px'
            }}>
                <h1 style={{
                    textAlign: 'center',
                    //borderColor: colorPalette.primary+' '+colorPalette.primary+' '+'#a0a0a0'+' '+colorPalette.primary
                }}>
                    login
                </h1>
                <form id="asd">
                    <label style={{
                        position: 'absolute',
                        left: '8%',
                        top: '30%',
                        fontSize: '120%',
                        fontWeight: 'bolder'
                    }}>
                        username
                        
                    </label>
                    <input id='loginUsernameInput' style={{
                        position: 'absolute',
                        left: '45%',
                        borderRadius: '5px',
                        height: '7%',
                        width: '45%',
                        top: '30%'
                    }}
                    type='text'/>

                    <label style={{
                        position: 'absolute',
                        left: '8%',
                        top: '60%',
                        fontSize: '120%',
                        fontWeight: 'bolder'
                    }}>
                        password
                    </label>
                    <input id='loginPasswordInput' style={{
                        position: 'absolute',
                        left: '45%',
                        borderRadius: '5px',
                        height: '7%',
                        width: '45%',
                        top: '60%'
                    }}
                    type='password'/>
                    <Button left='35%' top='80%' padding='3% 8% 3% 8%' clickHandler={this.submitData.bind(this)}text='Submit'/>
                </form>
            </div>
        )
    }
}

class SignupCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            confirmationIsWrong: false,
            signupFailed: false
        }
    }
    async validateAndSubmit(e){
        var data={
            username: $('#signupUsernameInput').get(0).value,
            password: $('#signupPasswordInput').get(0).value,
            confirmPassword: $('#signupConfirmPasswordInput').get(0).value
        }
        console.log(data);
        if(data.password!==data.confirmPassword){
            console.log('Password and Confirmation do not match')
            this.setState({
                signupFailed: false,
                confirmationIsWrong: true
            });
            return;
        }
        else{
            this.setState({
                confirmationIsWrong: false
            });
        }
        
        var res=await fetch('http://localhost:5000/createUser/',{
                method: 'POST',
                mode: 'cors',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data),
                credentials: 'same-origin'
            });
    
        if(!res.ok){
            console.log('Something went wrong');
            this.setState({
                signupFailed: true
            });
            return;
        }
        this.setState({
            signupFailed: false
        });

        res=await res.json();
        console.log(res);
        window.location='http://localhost:5000/redirect'
    }
    render(){
        return(
            <div id='signupForm' style={{
                fontFamily: 'ubuntu',
                left: this.props.left || '0%',
                top: this.props.top || '0%',
                position: 'absolute',
                backgroundColor: colorPalette.primary,
                width: '35%',
                height: '60%',
                borderRadius: '10px',
            }}>
                <h1 style={{
                    textAlign: 'center',
                    //borderColor: colorPalette.primary+' '+colorPalette.primary+' '+'#a0a0a0'+' '+colorPalette.primary
                }}>
                    sign up
                </h1>
                <form id='asdasd'>
                    <label style={{
                        position: 'absolute',
                        left: '13%',
                        top: '31%',
                        fontSize: '120%',
                        fontWeight: 'bolder'
                    }}>
                        username
                        
                    </label>
                    {!this.state.signupFailed &&
                        <input id='signupUsernameInput' style={{
                            position: 'absolute',
                            left: '45%',
                            borderRadius: '5px',
                            height: '7%',
                            width: '45%',
                            fontFamily: 'ubuntu',
                            top: '30%'
                        }}
                        type='text'/>
                    }
                    {this.state.signupFailed && 
                        <input id='signupUsernameInput' style={{
                            position: 'absolute',
                            left: '45%',
                            borderRadius: '5px',
                            height: '7%',
                            width: '45%',
                            fontFamily: 'ubuntu',
                            top: '30%',
                            borderStyle: 'solid',
                            borderWidth: '3px',
                            borderColor: 'red'
                        }}
                        type='text'/>
                    }
                    <label style={{
                        position: 'absolute',
                        left: '13%',
                        top: '46%',
                        fontSize: '120%',
                        fontWeight: 'bolder'
                    }}>
                        password
                    </label>
                    
                    <input id='signupPasswordInput' style={{
                        position: 'absolute',
                        left: '45%',
                        borderRadius: '5px',
                        height: '7%',
                        width: '45%',
                        fontFamily: 'ubuntu',
                        top: '45%'
                    }}
                    type='password'/>
                    
                    <label style={{
                        position: 'absolute',
                        left: '5%',
                        top: '61%',
                        fontSize: '120%',
                        fontWeight: 'bolder'
                    }}>
                        confirm password
                    </label>
                    {!this.state.confirmationIsWrong &&
                        <input id="signupConfirmPasswordInput" style={{
                            position: 'absolute',
                            left: '45%',
                            borderRadius: '5px',
                            height: '7%',
                            width: '45%',
                            fontFamily: 'ubuntu',
                            top: '60%'
                        }}
                        type='password'/>
                    }
                    {this.state.confirmationIsWrong &&
                        <input id="signupConfirmPasswordInput" style={{
                            position: 'absolute',
                            left: '45%',
                            borderRadius: '5px',
                            height: '7%',
                            width: '45%',
                            fontFamily: 'ubuntu',
                            top: '60%',
                            borderStyle: 'style',
                            borderWidth: '3px',
                            borderColor: 'red'
                        }}
                        type='password'/>
                    }
                    {this.state.confirmationIsWrong && 
                        <div style={{
                            fontFamily: 'arial',
                            color: 'red',
                            position: 'absolute',
                            top: '70%',
                            left: '35%'
                        }}>
                            passwords don't match
                        </div>
                    }
                    {this.state.signupFailed && 
                        <div style={{
                            fontFamily: 'arial',
                            color: 'red',
                            position: 'absolute',
                            top: '70%',
                            left: '35%'
                        }}>
                            username exists
                        </div>
                    }
                    <Button left='35%' top='80%' padding='3% 8% 3% 8%' clickHandler={this.validateAndSubmit.bind(this)}text='Submit'/>
                </form>
            </div>
        )
    }
}