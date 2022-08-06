import React from "react";
import classNames from "classnames/bind";
import style from "./Post.module.scss";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { GoComment } from "react-icons/go";
import { RiShareForwardFill } from "react-icons/ri";

const cls = classNames.bind(style);

const Post = ({
    avatar,
    username,
    date,
    img,
    content,
    numlike,
    numcmt,
    numshare,
}) => {
    return (
        <div className={cls("post")}>
            <div className={cls("ava")}>
                <img src={avatar} alt="" />
                <div>
                    <div>{username}</div>
                    <div style={{ fontSize: "12px", color: "#65676b" }}>
                        {date}
                    </div>
                </div>
            </div>
            <div className={cls("content")}>
                <div>{content}</div>
                <img src={img} alt="" />
            </div>
            <div className={cls("num")}>
                <div className={cls("like")}>
                    <AiFillLike className={cls("like1")} />
                    <FcLike />
                    <div>{numlike}</div>
                </div>
                <div className={cls("cmt")}>
                    <div>{numcmt + " Comment"}</div>
                    <div>{numshare + " Share"}</div>
                </div>
            </div>
            <div className={cls("space")}>
                <div className={cls("outline")}>
                    <AiOutlineLike />
                    <div>Like</div>
                </div>
                <div className={cls("outline")}>
                    <GoComment />
                    <div>Comment</div>
                </div>
                <div className={cls("outline")}>
                    <RiShareForwardFill />
                    <div>Share</div>
                </div>
            </div>
        </div>
    );
};

export default Post;
