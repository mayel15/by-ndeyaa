import React  from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Tab from "./Tab"
import Testimonial from "./Testimonial";
export default function App(){
    return (
        <div>
            <Navbar />
            <Welcome />
            <Tab />
            <Testimonial />
        </div>
    );
} 