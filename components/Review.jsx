"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import OnClick from "./OnClick";
import Star from "./Star";

export default function Review() {
    const [submitClick, setSubmitClick] = useState(false);

    const handleAlert = () => {
        alert(" Your Review's now Submitted");
        setSubmitClick(true);
    }

    return (
        <div className="reviewBox">
            <FontAwesomeIcon className="ml-3 mt-3" icon={faXmark} />
            <h1 className="text-xl m-2 font-bold">Leave a Review</h1>

            <h2 className="italic font-bold ml-2">Safety</h2>
            <p className="text-xs ml-1">Lorem ipsum dolor sit amet consectetur</p>
            <Star />

            <h2 className="italic m-1 font-bold">Communication</h2>
            <p className="text-xs ml-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
            <Star />

            <h2 className="italic m-1 font-semibold">Would you recommend Trausti?</h2>
            <OnClick />

            <span>
                <button
                    onClick={handleAlert}
                    className={`submitButton ${submitClick ? "submitClickedClass" : ""}`}
                >
                    Submit
                </button>
            </span>
        </div>
    );
}
