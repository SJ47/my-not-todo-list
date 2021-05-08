import React from "react";

const Footer = ({ handleAddNewTask }) => {
    return (
        <div className="footer-container">
            <p className="add-new-button" onClick={handleAddNewTask}>
                + ADD NEW TASK
            </p>
        </div>
    );
};

export default Footer;
