import React from 'react';
import axios from 'axios';
import { InputGroup } from 'react-bootstrap';
import { message } from 'antd';
import 'antd/dist/antd.css';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

class SignUp1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(event) {
        // do some login logic here, and if successful:
        this.props.history.push(`/dashboard/default`);
    }

    postDataHandler = () => {
        const data = {
            userName: this.state.userName,
            password: this.state.password
        };
        console.log("data :: ", data)
        axios.post(`http://localhost:9008/api/v1/get/admin/info`, data)
            .then(response => {
                console.log("response >>> ",response.data)
                if (response.data.status === 200){
                    message.success({
                        content: 'Welcome Back!',
                        className: 'custom-class',
                        style: {
                          marginTop: '20vh',
                        },
                      });
                    localStorage.setItem('token', response.data.token)
                    this.handleLogin(response)
                }else {
                    message.error({
                        content: 'Please check your user name and password again!',
                        className: 'custom-class',
                        style: {
                          marginTop: '20vh',
                        },
                      });
                    //alert("Something Wrong! Please check your user name and password.")
                }
                //window.location.reload();
            })
            .catch(err => {
                console.log(err);
                this.setState({error : true});
            });
    };

    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1"><i className="feather icon-user"/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="UserName" 
                                            value={this.state.userName}
                                            onChange={(event) => this.setState({userName: event.target.value})}
                                        />
                                    </InputGroup>
                                </div>
                                <div className="input-group mb-4">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1"><i className="feather icon-lock"/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={(event) => this.setState({password: event.target.value})}
                                        />
                                    </InputGroup>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4" onClick={this.postDataHandler}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;