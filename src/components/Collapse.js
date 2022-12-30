import React, { useState, useRef, useEffect } from "react";

export default function Collapse({ props, title }) {
    const ChevronDown = <i className="fa-solid fa-chevron-down"></i>;
    const ChevronUp = <i className="fa-solid fa-chevron-up"> </i>;
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle);
    };

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);

    const displayProps = () => {
        if (typeof props === "object") {
            return (
                <ul>
                    {props.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        } else {
            return <p>{props}</p>;
        }
    };

    return (
        <div className="collapse">
            <div onClick={toggleState} className="collapse_visible">
                <h3>{title}</h3>
                <div className="collapse_icon">
                    {toggle ? ChevronUp : ChevronDown}
                </div>
            </div>

            <div
                ref={refHeight}
                className={
                    toggle ? "collapse_toggle animated" : "collapse_toggle"
                }
                style={{ height: toggle ? `${heightEl}` : "0px" }}
            >
                {displayProps()}
            </div>
        </div>
    );
}
