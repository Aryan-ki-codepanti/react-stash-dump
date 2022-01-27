import React, { useEffect, useState } from "react";
import "./LazyLoader.css";
import moment from "moment";
import callSVG from "../../img/call.svg";
import emailSVG from "../../img/email.svg";
import contactsSVG from "../../img/contacts.svg";
import homeSVG from "../../img/home.svg";
import { Loader } from "./Loader";

const ProfileImage = ({ image }) => (
    <div>
        <img
            className="rounded-circle border border-1 border-dark"
            src={image}
            alt="avatar"
        />
    </div>
);

const Name = ({ first, last, title }) => (
    <h2 className="my-3 profile-name">
        {title} {first} {last}
    </h2>
);

const Address = ({ address = "B-4 172 Sector 7 Rohini" }) => (
    <div className="grid-child">
        <h3>Home</h3>
        <div class="d-flex align-items-center gap-2">
            <img src={homeSVG} alt="" />
            <p>{address}</p>
        </div>
    </div>
);

const Country = ({ country = "India" }) => (
    <div>
        <h3>Country</h3>
        <p>{country}</p>
    </div>
);

const DOB = ({ age, date }) => (
    <div>
        <h3>Other Details</h3>
        <p>{age} years old</p>
        <p>Born on {moment(date).format("Do MMMM , YYYY")}</p>
    </div>
);

const Contact = ({ phone, username, email }) => (
    <div>
        <h3>Contact</h3>
        <div className="d-flex gap-2 align-items-center my-2">
            <img src={callSVG} alt="" />
            <p>{phone}</p>
        </div>
        <div className="d-flex gap-2 align-items-center my-2">
            <img src={emailSVG} alt="" />
            <p>{email}</p>
        </div>
        <div className="d-flex gap-2 align-items-center my-2">
            <img src={contactsSVG} alt="" />
            <p>{username}</p>
        </div>
    </div>
);

const LazyLoader = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://randomuser.me/api/");
            const data = await res.json();
            setUser(prev => data.results[0]);
        };
        getData();
    }, []);

    return (
        <>
            <div className="loader-wrapper">
                <div className="loader-box rounded-5 p-3">
                    {user ? (
                        <>
                            <div className="profile-header d-flex align-items-center gap-4">
                                <ProfileImage image={user.picture.medium} />
                                <Name {...user.name} />
                            </div>
                            <div className="profile-footer my-4">
                                <Address />
                                <Country />
                                <DOB {...user.dob} />
                                <div className="profile-contact grid-child">
                                    <Contact
                                        phone={user.phone}
                                        email={user.email}
                                        username={user.login.username}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        </>
    );
};

export default LazyLoader;
