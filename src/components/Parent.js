import React, { useState } from 'react'
import { Box } from './Box'

import aws from "../img/aws.png";
import googleCloud from "../img/google-cloud.png";
import firebase from "../img/firebase.png";
const activeCSS = {
    backgroundColor: `rgba(0, 0, 255, 0.233)`,
    border: `2px solid rgba(0, 0, 255, 0.863)`
};

export const Parent = () => {
    const [activeBox, setActiveBox] = useState(null);
    return (
        <div className="parent">
                <Box
                    activeBox={activeBox}
                    setActiveBox={setActiveBox}
                    activeCSS={activeCSS}
                    num={1}
                    title="Firebase"
                    logo={firebase}
                />
                <Box
                    activeBox={activeBox}
                    setActiveBox={setActiveBox}
                    activeCSS={activeCSS}
                    num={2}
                    title="AWS"
                    logo={aws}
                />
                <Box
                    activeBox={activeBox}
                    setActiveBox={setActiveBox}
                    activeCSS={activeCSS}
                    num={3}
                    title="Google Cloud"
                    logo={googleCloud}
                />
            </div>
    )
}
