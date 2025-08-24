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
                        <h2>About me</h2>
                    </div>
                    <div className="square" onClick={(e) => handleClick(1, e)}>
                        <h2>Abilities</h2>
                    </div>
                </article>
                <article className="right">
                    <div className="square" onClick={(e) => handleClick(2, e)}>
                        <h2>interests</h2>
                    </div>
                    <div className="square" onClick={(e) => handleClick(3, e)}>
                        <h2>hobbies</h2>
                    </div>
                </article>

                <div key={0} className={"overlay overlay-0 hidden"} ref={(el) => (overlayRefs.current[0] = el)}>
                    <section className="about_me_am_text">
                        <div className="content_wrapper">
                            <p>
                                My interest in IT started with my fascination for mathematics.
                                This then further evolved with my love for science. Currently I
                                am working on a physics particle simulator. This project I am
                                making a reality by using Bevy Rust.
                                <br/><br/>
                                Contact me at: <a
                                href="mailto:victor.pesci@outlook.com">victor.pesci@outlook.com </a><br/><br/>
                                or Discord <strong>Oldomen</strong>
                            </p>
                        </div>
                    </section>
                </div>
                <div key={1} className={"overlay overlay-1 hidden"} ref={(el) => (overlayRefs.current[1] = el)}>
                    <section className="about_me_am_text">
                        <div className="content_wrapper">
                            <p>
                                I initially learned Python as part of my IT-curriculum to learn the basics of coding and logical
                                problem solving. After that came Web-Development tools like, js[react] with sql languages.
                                Currently I am teaching myself low-level-programming and functionally typed languages with rust.
                                I chose rust because it is unlike anything I have done up until now and learning through
                                curiosity is how I work.
                            </p>
                        </div>
                    </section>
                </div>
                <div key={2} className={"overlay overlay-2 hidden"} ref={(el) => (overlayRefs.current[2] = el)}>
                    <section className="about_me_am_text">
                        <div className="content_wrapper">
                            <p>
                                My interests in IT are very broad.
                                Full-stack projects are very interesting to me.
                                These kinds of projects give me the most to do and are the most fun.
                                I am also interested in IT security but leane more into the application development side
                                of
                                development with captures me the most.
                                I would also be curious about learning how Integrated systems work or more accuratly
                                said
                                working on a project with Integrated systems.
                            </p>
                        </div>
                    </section>
                </div>
                <div key={3} className={"overlay overlay-3 hidden"} ref={(el) => (overlayRefs.current[3] = el)}>
                    <section className="about_me_am_text">
                        <div className="content_wrapper">
                            <p>
                                I have been practicing Judo for most of my life having made many great friendships and
                                having kept myself healthy. As of recently I also started indoor bouldering. This new
                                hobby has brought me a lot of joy and I am farther seeing how important logical problem
                                solving is even in day-to-day life.
                            </p>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
}
