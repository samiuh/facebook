import React from "react";
import classNames from "classnames/bind";
import style from "./Right.module.scss";
import { MdVideoCameraFront } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const cls = classNames.bind(style);

const Right = () => {
    return (
        <div className={cls("right")}>
            <div className={cls("header")}>
                <div className={cls("friendrequest")}>
                    <div>Friend requests</div>
                    <div>See all</div>
                </div>
                <div className={cls("colum")}>
                    <img src="/embe.jpg" alt="" />
                    <div>
                        <div>Ngô Bảo An</div>
                        <div>19 matual friends</div>
                        <div className={cls("btn")}>
                            <button>Confirm</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls("center")}>
                <div className={cls("birthday")}>
                    <div>Birthdays</div>
                </div>
                <div className={cls("gift")}>
                    <img src="/hopqua.jpg" />
                    <div>Hôm nay là sinh nhật của Tú Anh và An Nhiên</div>
                </div>
            </div>
            <div className={cls("final")}>
                <div className={cls("contact")}>
                    <div>Contacts</div>
                    <div className={cls("add")}>
                        <MdVideoCameraFront />
                        <AiOutlineSearch />
                        <BiDotsHorizontalRounded />
                    </div>
                </div>
                <div className={cls("row")}>
                    <img src="/hang.jpg" alt="" />
                    <div>Hằng Voka</div>
                </div>
                <div className={cls("row")}>
                    <img src="/thanh.jpg" alt="" />
                    <div>Thanh Thanh</div>
                </div>
                <div className={cls("row")}>
                    <img src="/hai.jpg" alt="" />
                    <div>Lường Hải</div>
                </div>
                <div className={cls("row")}>
                    <img src="/diem.jpg" alt="" />
                    <div>Diem Moon</div>
                </div>
                <div className={cls("row")}>
                    <img src="/huyen.jpg" alt="" />
                    <div>Huyền Henry</div>
                </div>
                <div className={cls("row")}>
                    <img src="/trang.jpg" alt="" />
                    <div>Trang Anh</div>
                </div>
                <div className={cls("row")}>
                    <img src="/trinh.jpg" alt="" />
                    <div>Trinh Trần</div>
                </div>
            </div>
        </div>
    );
};

export default Right;
