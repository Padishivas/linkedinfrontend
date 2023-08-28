import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/slices/userSlice";
import { Link } from "react-router-dom";
import { FormGroup, Label, Input, Form, Button, Row, Col } from "reactstrap";

const Register = () => {
    const [userDetails, setUserDetails] = useState({});

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(userDetails))
    };

    return (
        <>
            <Row style={{ marginTop: "2rem" }}>
                <Col
                    md={{
                        offset: 3,
                        size: 6,
                    }}
                >
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
                            Submit
                        </Button>
                    </Form>
                    <br />
                    <a>Already have an account <Link to="/login">Log in</Link></a>
                </Col>
            </Row>
        </>
    )
}

export default Register;





// import React, { useState } from "react";
// import '../styles/Signup.css';
// import axios from "axios";
// import { matchPath } from "react-router-dom";


// function Signup() {
//     const [data, setdata] = useState({
//         Username: "",
//         Email: "",
//         password: "",
//         confirmPassword: "",
//     })

//     const { Username, email, password, confirmPassword } = data;

//     const changeHandler = e => {
//         setdata({ ...data, [e.target.name]: e.target.value })
//     }

//     const submitHandler = e => {
//         e.preventDefault();

        
        
//         if (password === confirmPassword) {
//             console.log(data);

//         }else{
           
//             alert("Please check the password u have entered" );
//         }


//     //    axios.post('',Username,email,password,confirmPassword)
//     //    .then(result=>console.log(result))
//     //    .catch(err=>console.log(err))
      
        
//     }
//     return (
//         <div className="Signupdiv">
//             <form onSubmit={submitHandler}>
//                 <div className='logo'>
//                     <img src='https://tse2.mm.bing.net/th?id=OIP.ET7dA_ENIRNBE7R0WZ04pwHaFH&pid=Api&P=0&h=180' />
//                 </div>
//                 <div className='signup'>
//                     <h3>Sign in</h3>
//                     <p>Stay updated on your professional world</p>

//                     <div className='inputs'>


//                         <input type='text' name="Username" value={Username} onChange={changeHandler} placeholder="Username" />




//                         <input type='email' name="Email" value={email} onChange={changeHandler} placeholder="Email" />




//                         <input type='password' name="password" value={password} onChange={changeHandler} placeholder="Password" />



//                         <input type='password' name="confirmPassword" value={confirmPassword} onChange={changeHandler} placeholder="ConfrimPassword" />

//                     </div>

//                     <p>ForgotPassword</p>

//                  <link></link>   <button className='SingUpBtn' type="submit" >SignUp</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Signup;