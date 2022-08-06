import React from "react";
import classNames from "classnames/bind";
import stype from "./Left.module.scss";
import { FaUserFriends } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { BsShop, BsCalendarEventFill, BsMessenger } from "react-icons/bs";
import { MdOndemandVideo, MdOutlinePages } from "react-icons/md";
import { AiTwotoneNotification } from "react-icons/ai";

const cls = classNames.bind(stype);

const Left = () => {
    return (
        <div className={cls("left")}>
            <div className={cls("row")}>
                <FaUserFriends />
                <div>Friend</div>
            </div>
            <div className={cls("row")}>
                <GrGroup />
                <div>Group</div>
            </div>
            <div className={cls("row")}>
                <BsShop />
                <div>Marketplace</div>
            </div>
            <div className={cls("row")}>
                <MdOndemandVideo />
                <div>Watch</div>
            </div>
            <div className={cls("row")}>
                <AiTwotoneNotification />
                <div>Ad Center</div>
            </div>
            <div className={cls("row")}>
                <BsCalendarEventFill />
                <div>Events</div>
            </div>
            <div className={cls("row")}>
                <BsMessenger />
                <div>Messenger</div>
            </div>
            <div className={cls("row")}>
                <MdOutlinePages />
                <div>Pages</div>
            </div>
        </div>
    );
};
export default Left;
