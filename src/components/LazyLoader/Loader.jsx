import React from "react";
import "./Loader.css";

export const Loader = () => {
    return (
        <div>
            <div className="load-header d-flex align-items-center gap-3 mb-4">
                <div className="load-pic"></div>
                <div className="load-name"></div>
            </div>
            <div className="load-footer">
                <div className="loader-left">
                    <div className="lazy-box"></div>
                    <div className="lazy-box"></div>
                    <div className="lazy-box"></div>
                </div>
                <div className="loader-right">
                    <div className="lazy-box"></div>
                    <div className="lazy-box"></div>
                    <div className="lazy-box"></div>
                </div>
            </div>
        </div>
    );
};
