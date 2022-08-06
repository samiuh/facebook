import React from "react";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import {
    AiOutlineSearch,
    AiOutlineHome,
    AiOutlineMessage,
} from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { GrGamepad, GrNotification } from "react-icons/gr";
import { FiMoreVertical } from "react-icons/fi";

const cls = classNames.bind(style);

const Header = () => {
    return (
        <div className={cls("header")}>
            <div className={cls("left")}>
                <img src="/icons.jpg" alt="" />
                <form action="">
                    <div>
                        <AiOutlineSearch />
                        <input
                            type="text"
                            placeholder="Tìm kiếm trên facebook"
                        />
                    </div>
                </form>
            </div>

            <div className={cls("center")}>
                <AiOutlineHome className={cls("home")} />
                <MdOndemandVideo />
                <BsShop />
                <BiUserCircle />
                <GrGamepad />
            </div>

            <div className={cls("right")}>
                <FiMoreVertical />
                <AiOutlineMessage />
                <GrNotification />
                <img src="/icons.jpg" alt="" className={cls("avatar")} />
            </div>
        </div>
    );
};

export default Header;
