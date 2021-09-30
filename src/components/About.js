import React, { useState, useEffect } from "react";
import img1 from "../img/me.png";
import "../css/about.css";

function About() {
    const [letters, setLetters] = useState([[" ", 0], [" ", 0], [" ", 0], [" ", 0], [" ", 0], [" ", 0], [" ", 0], [" ", 0], [" ", 0], [" ", 0], [" ", 0], [" ", 0], [" ", 0],])

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const swapElements = (arr, index1, index2) => {
        const el1 = arr[index1];
        const el2 = arr[index2];
        arr.splice(index1, 1, el2);
        arr.splice(index2, 1, el1)
        return arr
    }

    const bubbleSort = (arr, n = arr.length) => {
        if (n === 1) {
            return arr;
        }

        // for (let i = 0; i < n - 1; i++) {
        //     if (arr[i][1] > arr[i + 1][1]) {
        //         arr = swapElements(arr, i, i + 1)
        //     }
        // }

        let i = 0

        const myLoop = () => {
            setTimeout(() => {
                if (arr[i][1] > arr[i + 1][1]) {
                    arr = swapElements(arr, i, i + 1);
                    setLetters(arr);
                }
                i++
                console.log(i < n - 1)
                if (i < n - 1) {
                    myLoop();
                }
            }, 100)
        }

        myLoop()

        return bubbleSort(arr, n - 1)
    }

    const sortName = () => {
        const name = [["D", 0], ["y", 1], ["l", 2], ["a", 3], ["n", 4], [" ", 5], ["M", 6], ["c", 7], ["A", 8], ["u", 9], ["l", 10], ["a", 11], ["y", 12]]
        let mixedName = []
        for (let i = 0; i < 13; i++) {
            const rand = getRandomInt(12 - i);
            mixedName.push(name[rand]);
            name.splice(rand, 1)
        }
        console.log(mixedName);
        setLetters(mixedName);
        bubbleSort(mixedName);

    }

    const animation = () => {

    }

    useEffect(sortName, [])


    return (
        <section className="container">
            <div className="row text-center">
                {/* <h1 className="col-12 my-3 p-4 opaque font-link">{`${letters[0][0]}${letters[1][0]}${letters[2][0]}${letters[3][0]}${letters[4][0]}${letters[5][0]}${letters[6][0]}${letters[7][0]}${letters[8][0]}${letters[9][0]}${letters[10][0]}${letters[11][0]}${letters[12][0]}`}</h1> */}
                <h1 className="col-12 my-3 p-4 opaque font-link">Dylan McAulay</h1>
                <div className="col-md-12 col-lg-6 opaque py-3 text font-link">
                    Front end web developer, with degrees in Applied Mathematics and Physics, bringing an analytical lens to building websites and online tools. Earned a certificate in Full Stack Web Development from the University of Connecticut Coding Boot Camp. Dependable problem-solver with a passion for detail oriented design. Strengths in analytical thinking, communication, and adaptability<span>{<br />}</span>
                    <span className="highlight">Key Skills: HTML, CSS, JavsScript, Node, React, MongoDB</span>
                </div>
                <div className="col-md-12 col-lg-6 p">
                    <img src={img1} alt="me" id="me" />
                </div>
            </div>
        </section>
    );
}

export default About;