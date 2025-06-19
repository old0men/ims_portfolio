"use client";
import { useRef } from "react";
import Link from "next/link";

export default function About() {
    const overlayRefs = useRef([]);

    const handleClick = (index, event) => {
        event.stopPropagation();
        const overlay = overlayRefs.current[index];
        const overlay_background = document.getElementById("overlay_background");

        handleRemove();

        if (overlay) {
            overlay.classList.remove("hidden");
            overlay.classList.add("show");
            console.log("show" + index)
            overlay_background.classList.add("dark_background");
        }

        if (overlay.show) {
            handleRemove()
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
            <Link className={"page_back"} href={"./"}>⋖</Link>
            <div className="about_me_flexing_container">
                <article className="left">
                    <div className="square" onClick={(e) => handleClick(0, e)}>
                        <section className={"left"}>
                            <p>Info 1</p>
                            <p>Info 1</p>
                            <p>Info 1</p>
                            <p>Info 1</p>
                            <p>Info 1</p>
                        </section>
                        <section className={"right"}>
                            <p>Info 1</p>
                            <p>Info 1</p>
                            <p>Info 1</p>
                            <p>Info 1</p>
                            <p>Info 1</p>
                            <p>Info 1</p>
                        </section>
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

                <div key={0} className={"overlay overlay-0 hidden"} ref={(el) => (overlayRefs.current[0] = el)}>
                    <section className={"left"}>
                        <p>Info 1</p>
                        <p>Info 1</p>
                        <p>Info 1</p>
                        <p>Info 1</p>
                        <p>Info 1</p>
                    </section>
                    <section className={"right"}>
                        <p>Info 2</p>
                        <p>Info 2</p>
                        <p>Info 2</p>
                        <p>Info 2</p>
                        <p>Info 2</p>
                        <p>Info 2</p>
                    </section>
                </div>
                <div key={1} className={"overlay overlay-0 hidden"} ref={(el) => (overlayRefs.current[1] = el)}>
                    s1
                </div>
                <div key={2} className={"overlay overlay-0 hidden"} ref={(el) => (overlayRefs.current[2] = el)}>
                    s2
                </div>
                <div key={3} className={"overlay overlay-0 hidden"} ref={(el) => (overlayRefs.current[3] = el)}>
                    s3
                </div>

            </div>
        </div>
    );
}
