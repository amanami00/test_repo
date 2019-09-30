import React from 'react';
import { Button, Label, Input } from 'reactstrap';

const Login = ({ onInputChange, onSubmit }) => {
  return (
    <div className="container Login">
        <div className="row row-content">
            <div className="col-12">
                <h4>Login</h4>
            </div>
        </div>
        <div className="row row-content">
            <div className="col-3 text-right">
                <Label className="uname">User Name:</Label>
            </div>
            <div className="col-5 text-left">
                <Input
                	type="text"
                	name="uname"
                	placeholder="User Name"
                	onChange={ onInputChange }
                />
            </div>
        </div>
        <div className="row row-content">
            <div className="col-3 text-right">
                <Label>Password:</Label>
            </div>
            <div className="col-5 text-left">
                <Input
                	type="password"
                	name="pass"
                	placeholder="Password"
                	onChange={ onInputChange }
                />
            </div>
        </div>
        <div className="row row-content">
            <div className="col-12 text-center">
                <Button onClick={ onSubmit }>Submit</Button>
            </div>
        </div>
    </div>
  );
}

export default Login;
