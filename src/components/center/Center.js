import React from "react";
import classNames from "classnames/bind";
import style from "./Center.module.scss";
import Story from "./story/Story";
import Top from "./top/Top";
import Post from "./post/Post";
import Live from "./live/Live";

const cls = classNames.bind(style);

const Center = () => {
    return (
        <div className={cls("center")}>
            <Story />
            <Top />
            <Live />
            <Post
                avatar="/trinh.jpg"
                username="Trinh Trần"
                date="3d"
                content="Cảm ơn các anh chiến sĩ, những người anh hùng của Tổ Quốc.
                         Nguồn ảnh: Anbecks Thái Hà An"
                img="/cuuho.jpg"
                numlike="1500"
                numcmt="264"
                numshare="202"
            />
            <Post
                avatar="/huyen.jpg"
                username="Huyền Henry"
                date="4m"
                content="Đừng lãng phí một ngày đẹp trời, chỉ để quan tâm lời thiên hạ. "
                img="/hinhnen.jpg"
                numlike="130"
                numcmt="342"
                numshare="20"
            />
        </div>
    );
};

export default Center;
