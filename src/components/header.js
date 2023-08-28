import "../styles/header.scss";
import { Input } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { CgMenuGridR } from "react-icons/cg";
import Accor from "../utls/accor";

import React, { useState } from 'react';
// import {
//     Accordion,
//     AccordionBody,
//     AccordionHeader,
//     AccordionItem,
// } from 'reactstrap';

import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

const Header = ({ direction, ...args }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    }

    // const [open, setOpen] = useState('1');
    // const toggle = (id) => {
    //     if (open === id) {
    //         setOpen();
    //     } else {
    //         setOpen(id);
    //     }
    // };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div className="header">
            <div class="header1">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" />
                <div className="searchbox"></div>
            </div>
            <div className="header2">
                <div>
                    <input type="text" className="inp" />
                </div>
                <div>
                    <Link to="/subHome"><AiFillHome className="icon" /><p className="text1">Home</p></Link>

                </div>
                <div>
                    <Link to="/myNetwork"><MdPeopleAlt className="icon" /><p className="text1">MyNetwork</p></Link>

                </div>
                <div>
                    <Link to="/jobs"><PiSuitcaseSimpleDuotone className="icon" /><p className="text1">Jobs</p></Link>

                </div>
                <div>
                    <Link to=""><BiMessageRoundedDots className="icon" /><p className="text1">Messages</p></Link>

                </div>
                <div>
                    <Link to=""><IoIosNotifications className="icon" /><p className="text1">Notifications</p></Link>

                </div>

                <div>
                    <Link to=""><RxAvatar className="icon" /><p className="text1">Me</p></Link>

                </div>
                

                <div>
                    <CgMenuGridR className="icon" />
                    {/* <Accor /> */}
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                        <DropdownToggle caret>Business</DropdownToggle>
                        <DropdownMenu {...args}>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem>Some Action</DropdownItem>
                            <DropdownItem text>Dropdown Item Text</DropdownItem>
                            <DropdownItem disabled>Action (disabled)</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Foo Action</DropdownItem>
                            <DropdownItem>Bar Action</DropdownItem>
                            <DropdownItem>
                                <button onClick={handleLogout} type="button" className="btn">Logout</button>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </div>

                

            </div>


        </div>
    )
}

Header.propTypes = {
    direction: PropTypes.string,
};

export default Header;