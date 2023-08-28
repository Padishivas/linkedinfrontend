import { Row, Col } from "reactstrap";
import "../styles/subHome.scss";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Avatar } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideocamIcon from "@mui/icons-material/Videocam";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import axios from "axios";
import { getpost } from "../redux/slices/postSlice";

// useEffect()

const SubHome = (args) => {

    const [input, setInput] = useState(" ");
    const imgRef = useRef(null)

    const [modal, setModal] = useState(false);
    const [modall, setModall] = useState(false);

    const toggle = () => setModal(!modal);
    const togglepost = () => setModall(!modall);


    const selected = useSelector((state) => state.Post.value.getpost)
    console.log(selected)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const files = imgRef.current.files;
        let imgs = [];
        for (let index = 0; index < files.length; index++) {
            const element = files[index];
            imgs.push(await profileUpload(element))
        }
        await axios.post("http://localhost:4000/posts/addpost", {
            image: imgs,
            title: input.title,
            desc: input.desc,
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        dispatch(getpost());

    };

    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")



    const profileUpload = async (file) => {
        const formData = new FormData()

        formData.append("file", file)
        formData.append("upload_preset", 'tzklkycg')

        const { data } = await axios.post("https://api.cloudinary.com/v1_1/dklgbc3ez/image/upload", formData);
        return data.url
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getpost());
    }, [])
    return (
        <div>
            <Row>
                <Col md={{ size: 2, offset: 2 }}>
                    <Row>
                        <div className="welcome">
                            
                            <div className="circle"></div>
                            {/* <Button href="" style={{ cursor: "pointer" }} onClick={toggle}>Add a photo</Button> */}
                            <a style={{ cursor: "pointer" }} onClick={toggle}>Add a Photo</a>
                            <Modal isOpen={modal} toggle={toggle} {...args}>
                                <ModalHeader toggle={toggle}>Add Photo</ModalHeader>
                                <ModalBody className="modalbody">
                                    <div><h3>No professional headshot needed! <br />
                                        Just something that represents you.</h3></div>
                                    <div>
                                        <img className="img1" src="https://static.licdn.com/sc/h/c5ybm82ti04zuasz2a0ubx7bu" />
                                    </div>
                                    <div>
                                        <p>On LinkedIn, we require members to use their real identities, so take or upload a<br />
                                            photo of yourself. Then crop, filter, and adjust it to perfection.</p>
                                    </div>
                                </ModalBody>
                                <ModalFooter style={{ position: "relative" }}>
                                    <Button color="primary" onClick={toggle}>
                                        Use Camera
                                    </Button>{' '}
                                    {/* <Button color="secondary" onClick={toggle}>
                                        Cancel
                                    </Button> */}
                                    <input type="file" style={{ position: "absolute", opacity: 0, zIndex: "1" }} />
                                    <Button color="primary" style={{ position: "absolute", left: "65%" }}>
                                        Upload Photo
                                    </Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </Row>
                    <Row>
                        <div className="welcome">

                        </div>
                    </Row>
                </Col>
                <Col md={{ size: 4 }}>
                    <Row>
                        <div className="postmain">
                            <div className="line1">
                                <Avatar img src='https://w0.peakpx.com/wallpaper/388/134/HD-wallpaper-pspk-in-beard-smile-pspk-beard-pawan-kalyan.jpg' style={{ height: "50px" }} />
                                <input type="text" placeholder="Start a post" className="postinput" onClick={togglepost} />
                                <Modal isOpen={modall} toggle={togglepost} {...args}>
                                    <ModalHeader toggle={togglepost}>Add Post</ModalHeader>
                                    <ModalBody className="modalbody">
                                        <Form>
                                            <Input
                                                innerRef={imgRef}
                                                id="image"
                                                name="image"
                                                type="file"
                                                multiple={true}
                                            />
                                            <Input
                                                id="title"
                                                name="title"
                                                type="text"
                                                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                            />
                                            <Input
                                                id="desc"
                                                name="desc"
                                                type="text"
                                                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                            />
                                            <Button
                                                outline={true}
                                                block={true}
                                                color="primary"
                                                onClick={(e) => handleSubmit(e)}
                                            >
                                                Post
                                            </Button>
                                        </Form>
                                    </ModalBody>

                                </Modal>
                            </div>
                            <div className="line1">
                                <div className='options' >
                                    <input className='pic' type="file" accept="image/*;capture=camera" />

                                    <AddPhotoAlternateIcon style={{ color: '#70b5f9' }} />
                                    <span>Photo</span>
                                </div>
                                <div className='options'>
                                    {/* <input className='video' type='file' /> */}
                                    <VideocamIcon style={{ color: '#7fc15e' }} />
                                    <span>Video</span>
                                </div>
                                <div className='options'>
                                    <EventIcon style={{ color: '#e4a33e' }} />
                                    <span>Event</span>
                                </div>
                                <div className='options'>
                                    <ArticleIcon style={{ color: '#fc9295' }} />
                                    <span>WriteArticle</span>
                                </div>
                            </div>
                        </div>

                        {selected.map(e => {
                            return (
                                <div className="postmain">
                                    <div className="postline1">
                                        <Avatar img src='https://w0.peakpx.com/wallpaper/388/134/HD-wallpaper-pspk-in-beard-smile-pspk-beard-pawan-kalyan.jpg' style={{ height: "50px" }} />
                                        <div>
                                            <h5>{e.title}</h5>
                                            <p>{e.desc}</p>
                                        </div>
                                    </div>
                                    <img src={e.image[0]} />
                                </div>
                            )
                        })}


                    </Row>
                </Col>
                <Col md={{ size: 2 }}>
                    <div className="welcome">

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SubHome;