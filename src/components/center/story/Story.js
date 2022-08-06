import React from "react";
import classNames from "classnames/bind";
import { GrAddCircle } from "react-icons/gr";
import style from "./Story.module.scss";
const cls = classNames.bind(style);
const Story = () => {
    return (
        <div className={cls("header")}>
            <div className={cls("story")}>
                <img src="icons.jpg" alt="" />
                <div>
                    <GrAddCircle />
                    <div>Create story</div>
                </div>
            </div>
            <div className={cls("story1")}>
                <img src="hang1.jpg" alt="" className={cls("avatar")} />
                <div>
                    <img src="hang.jpg" alt="" />
                    <div>Hằng Voka</div>
                </div>
            </div>
            <div className={cls("story2")}>
                <img src="hai1.jpg" alt="" className={cls("avatar1")} />
                <div>
                    <img src="hai.jpg" alt="" />
                    <div>Lường Hải</div>
                </div>
            </div>
            <div className={cls("story3")}>
                <img src="trang1.jpg" alt="" className={cls("avatar2")} />
                <div>
                    <img src="trang.jpg" alt="" />
                    <div>Trang Anh</div>
                </div>
            </div>
            <div className={cls("story4")}>
                <img src="thanh1.jpg" alt="" className={cls("avatar3")} />
                <div>
                    <img src="thanh.jpg" alt="" />
                    <div>Thanh Thanh</div>
                </div>
            </div>
        </div>
    );
};

export default Story;
