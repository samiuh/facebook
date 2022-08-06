import React from "react";
import classNames from "classnames/bind";
import { FcVideoCall } from "react-icons/fc";
import style from "./Live.module.scss";

const cls = classNames.bind(style);

const Live = () => {
    return (
        <div className={cls("live")}>
            <div className={cls("call")}>
                <div className={cls("call1")}>
                    <FcVideoCall />
                </div>
                <div className={cls("room")}>
                    <div>Linh's room</div>
                    <div>Get started</div>
                </div>
                <div className={cls("btn")}>
                    <button>Create</button>
                </div>
            </div>
            <div className={cls("say")}>
                <div className={cls("say1")}>
                    <img src="/huyen.jpg" alt="" />
                </div>
                <div className={cls("room1")}>
                    <div>Huyền Henry</div>
                </div>
                <div className={cls("btn1")}>
                    <button>Say hi</button>
                </div>
            </div>
        </div>
    );
};

export default Live;
