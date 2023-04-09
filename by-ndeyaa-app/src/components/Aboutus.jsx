import React from "react";
export default function Aboutus() {
    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <section id="about-us" className="common-section">
            <div className="title-section">
                <h1>Let's go commander !</h1>
                <img className="img-illustration" src="images/icons/group.png" alt="img-icon" />
            </div>
            <div className="paragraphs">
                <div className="p1">
                    {text}                
                </div>
                <div className="p2">
                    {text}
                </div>
            </div>
        </section>
    )
}