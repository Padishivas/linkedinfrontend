import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {Col, Row, Form, FormGroup, Input, Label, Button} from "reactstrap";
import { login } from "../redux/slices/userSlice";
import { Link, useNavigate} from "react-router-dom"

const Login = () => {
    const [userDetails, setUserDetails] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        dispatch(login({userDetails, navigate}))
    };
    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="avc@xyz.com"
                        type="email"
                        value={userDetails.email}
                        onChange={(e) =>
                            setUserDetails({ ...userDetails, email: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder="********"
                        type="password"
                        value={userDetails.password}
                        onChange={(e) =>
                            setUserDetails({ ...userDetails, password: e.target.value })}
                    />
                </FormGroup>
                
                <Button
                    outline={true}
                    block={true}
                    color="primary"
                    onClick={(e) => handleSubmit(e)}
                >
                    Login
                </Button>
            </Form>
            <br />
            <a>Don't have an account <Link to={"/register"}>Register</Link></a>
        </>
    )
}
export default Login;


