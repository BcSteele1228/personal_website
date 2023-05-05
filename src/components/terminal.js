import React from "react";
import { TypedTerminal } from "react-component-typed-terminal";
import './terminal.css';

const typedJsProps = {
    loop: false,
    typeSpeed: 20,
    showCursor: true,
}

const terminalData = [
    {
      command: "cat about_me.txt",
      results: ["I am a member of the Telecommunications, Media, and",
        "Entertainment squad in the IBM Industry Engineering Lab,",
        "with a focus in the application of artificial intelligence,",
        "edge computing, and IoT, to networking",
        "and Industry 4.0 robotics."]
    }
]

const title = ["About Me"]

const promptText = ["Brady@website:~ $"]

const Terminal = () => {
    return <TypedTerminal typedJsProps={typedJsProps} terminalData={terminalData} title={title} promptText={promptText}/>
}

export default Terminal;