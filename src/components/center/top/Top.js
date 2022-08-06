import React from "react";
import classNames from "classnames/bind";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { FcVideoCall, FcStackOfPhotos } from "react-icons/fc";
import style from "./Top.module.scss";

const cls = classNames.bind(style);

const Top = () => {
    return (
        <div className={cls("top")}>
            <div className={cls("post")}>
                <img src="/icons.jpg" alt="" />
                <form action="">
                    <div>
                        <input
                            type="text"
                            placeholder="What's on your mind, Linh?"
                        />
                    </div>
                </form>
            </div>
            <div className={cls("feel")}>
                <div className={cls("row")}>
                    <FcVideoCall />
                    <div>Live video</div>
                </div>
                <div className={cls("row")}>
                    <FcStackOfPhotos />
                    <div>Photos/video</div>
                </div>
                <div className={cls("row")}>
                    <BsFillEmojiSmileFill />
                    <div>Feeling/activity</div>
                </div>
            </div>
        </div>
    );
};

export default Top;
