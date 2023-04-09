import React  from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Tab from "./Tab"
import Testimonial from "./Testimonial";
import Letcommand from "./Letcommand"
import Aboutus from "./Aboutus";
export default function App(){
    return (
        <div>
            <Navbar />
            <Welcome />
            <Tab />
            <Testimonial />
            <Letcommand />
            <Aboutus />
        </div>
    );
} 