import React from "react";

const Header = () => {
    return (
        <div className="header-container">
            <h1>
                <i className="far fa-circle circle-left"> </i>
                &nbsp;&nbsp;&nbsp;My Not ToDo List
                <i className="fas fa-times"></i>
                <i className="far fa-circle circle-right"></i>
            </h1>
        </div>
    );
};

export default Header;
