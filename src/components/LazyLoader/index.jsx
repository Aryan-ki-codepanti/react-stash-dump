import React, { useEffect, useState } from "react";
import "./LazyLoader.css";
import moment from "moment";

const ProfileImage = ({ image }) => (
    <div className="d-flex justify-content-center">
        <img
            className="rounded-circle border border-1 border-dark"
            src={image}
            alt="avatar"
        />
    </div>
);

const Name = ({ first, last, title }) => (
    <h2 className="text-center my-3 profile-name">
        {title} {first} {last}
    </h2>
);

const Address = ({ address = "B-4 172 Sector 7 Rohini" }) => (
    <div className="my-3">
        <h3>Home</h3>
        <p>{address}</p>
    </div>
);

const Country = ({ country = "India" }) => (
    <div>
        <h3>Country</h3>
        <p>{country}</p>
    </div>
);

const DOB = ({ age, date }) => (
    <div className="my-3">
        <h3>Other Details</h3>
        <p>{age} years old</p>
        <p>Born on {moment(date).format("Do MMMM , YYYY")}</p>
    </div>
);

const Contact = ({ phone, username, email }) => (
    <div>
        <h3>Contact</h3>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{username}</p>
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
            {user && (
                <div className="loader-wrapper">
                    <div className="loader-box rounded-5 p-3">
                        <div className="profile-header">
                            <ProfileImage image={user.picture.medium} />
                            <Name {...user.name} />
                        </div>
                        <div className="profile-footer my-4">
                            <div className="left">
                                <Address />
                                <Country />
                            </div>
                            <div className="right">
                                <DOB {...user.dob} />
                                <div className="profile-contact">
                                    <Contact
                                        phone={user.phone}
                                        email={user.email}
                                        username={user.login.username}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LazyLoader;
