import React from "react";

export const Slideout = ({open, onSelect}) => {
    return (
        <div className={`mp_component__slideout ${open ? "open" : "closed"}`}>
            <div className="bg_layers">
                <div className="bg_layer" />
                <div className="bg_layer" />
                <div className="bg_layer" />
            </div>
            <div className="options">
                {["get at me", "work", "play"].map((item) => {
                    return (
                        <div className="option" onClick={() => onSelect(item)}>
                            <h1>{item}</h1>
                            <div className="hover_slide" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};