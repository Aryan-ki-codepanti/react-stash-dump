import React from "react";

export const Box = ({
    title,
    logo,
    setActiveBox,
    num,
    activeCSS,
    activeBox
}) => {
    return (
        <div
            style={activeBox === num ? activeCSS : {}}
            className="box"
            onClick={() => setActiveBox(prev => num)}
        >
            <h1> {title} </h1>
            <img src={logo} alt="" />
        </div>
    );
};
