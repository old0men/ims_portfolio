"use client";
import { useRef } from "react"
export default function about() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const squareRef = useRef([])

    const handleClick = (index, event) => {

        event.stopPropagation()
        let current_square =  squareRef.current[index]

        for (let i = 0; i < squareRef.current.length; i++) {
            if (squareRef.current[i]?.classList.contains("square_show")) {
                squareRef.current[i].classList.remove("square_show")
                console.log("removed")
            }
        }

        if (current_square && index !== 5) {
            console.log(current_square + " : " + squareRef.current)
            current_square.classList.add("square_show")

        }
    }

    const handleRemove = () => {
        for (let i = 0; i < squareRef.current.length; i++) {
            if (squareRef.current[i]?.classList.contains("square_show")) {
                squareRef.current[i].classList.remove("square_show")
                console.log("removed")
            }
        }
    }

    return (
        <div className={"about_me_body"} onClick={() => handleRemove()}>
            <span>

            </span>
            <div className={"about_me_flexing_container"}>
                <article className={"left"}>
                    <p className={"square"}
                       ref={(current_square) => (squareRef.current[0] = current_square)}
                       onClick={(e) => handleClick(0, e)}
                    ></p>
                    <p className={"square"}
                       ref={(current_square) => (squareRef.current[1] = current_square)}
                       onClick={(e) => handleClick(1, e)}
                    ></p>
                </article>
                <article className={"right"}>
                    <p className={"square"}
                       ref={(current_square) => (squareRef.current[2] = current_square)}
                       onClick={(e) => handleClick(2, e)}
                    ></p>
                    <p className={"square"}
                       ref={(current_square) => (squareRef.current[3] = current_square)}
                       onClick={(e) => handleClick(3, e)}
                    ></p>
                </article>
            </div>
        </div>
    )

}