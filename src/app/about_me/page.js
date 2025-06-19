"use client";
import { useRef } from "react";

export default function About() {
    const overlayRefs = useRef([]);

    const totalOverlays = 4;

    const handleClick = (index, event) => {
        event.stopPropagation();
        const overlay = overlayRefs.current[index];
        const overlay_background = document.getElementById("overlay_background");

        handleRemove();

        if (overlay) {
            overlay.classList.remove("hidden");
            overlay.classList.add("show");
            overlay_background.classList.add("dark_background");
        }
    };

    const handleRemove = () => {
        overlayRefs.current.forEach((overlay) => {
            if (overlay) {
                overlay.classList.remove("show");
                overlay.classList.add("hidden");
            }
        });
        const overlay_background = document.getElementById("overlay_background");
        if (overlay_background) {
            overlay_background.classList.remove("dark_background");
        }
    };

    return (
        <div className="about_me_body" id="overlay_background" onClick={handleRemove}>
            <div className="about_me_flexing_container">
                <article className="left">
                    <div className="square" onClick={(e) => handleClick(0, e)}>
                        <p>Info 1</p>
                    </div>
                    <div className="square" onClick={(e) => handleClick(1, e)}>
                        <p>Info 2</p>
                    </div>
                </article>
                <article className="right">
                    <div className="square" onClick={(e) => handleClick(2, e)}>
                        <p>Info 3</p>
                    </div>
                    <div className="square" onClick={(e) => handleClick(3, e)}>
                        <p>Info 4</p>
                    </div>
                </article>

                {/* Overlays */}
                {[0, 1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className={`overlay hidden overlay-${i}`}
                        ref={(el) => (overlayRefs.current[i] = el)}
                    >
                        <p>Expanded info for square {i + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
