import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'admin',
            password: '',
            hasLoginFailed: false,
            showSuccesMessage: true

        }
        this.handlChange = this.handlChange.bind(this)
        this.loginClick = this.loginClick.bind(this)
    }
    handlChange(event) {
        this.setState({
            [event.target.name]
                : event.target.value
        })
    }

    loginClick() {
        if (this.state.username === 'admin' && this.state.password === 'admin') {
            AuthenticationService.regisgerSuccesslogin(this.state.username, this.state.password);
            this.props.history.push("/welcome")
        }
        else {
            this.setState({ showSuccesMessage: false })
            this.setState({ hasLoginFailed: true })
        }
    }



    render() {
        return (
            <div className="container-fluid" style={{display: 'flex', justifyContent: 'center', backgroundColor:'#15171c'}}>
               
                <form style={{ width: '30%',marginTop:'25vh', marginBottom:'38.5vh', color:'white'}}>
                    <div class="mb-3">
                        <label for="exampleUsername" class="form-label">User Name :</label>
                        <input type="text" class="form-control" id="exampleUsernamel1" value={this.state.username} onChange={this.handlChange} />
                    </div>
                    {this.state.hasLoginFailed && <div className='alert alert-danger'> Invalid Credentials</div>}
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password :</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={this.state.password} onChange={this.handlChange} />
                    </div>
                    <button type="button" onClick={this.loginClick} class="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }

}
export default Login