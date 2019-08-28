import React from 'react'
import { Spring } from 'react-spring/renderprops'

const c1Style = {
    background: "steelblue",
    color: "white",
    padding: "1.5rem"
}



export default function Components1() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
        // config={{ duration: 1000, delay: 1000 }}
        >
            {
                props => (
                    <div style={props}>
                        <div style={c1Style}>
                            <h1>Component 1</h1>
                            <p>Incididunt nulla duis consequat voluptate ad ex. Sint ipsum ea amet officia non do quis dolor do qui enim elit. Labore id voluptate et fugiat eiusmod qui qui. Enim aute irure consectetur voluptate dolore occaecat in nostrud aliquip ex in dolore aliquip qui. Cillum quis incididunt dolor reprehenderit amet.</p>
                            <Spring
                                from={{ number: 0 }}
                                to={{ number: 10 }}
                            >
                                {props => (
                                    <div style={props}>
                                        <h1 style={{
                                            background: "#333",
                                            textAlign: "center",
                                            width: "100px",
                                            borderRadius: "50%",
                                            margin: "1rem auto"
                                        }}>
                                            {props.number.toFixed()}
                                        </h1>
                                    </div>
                                )}
                            </Spring>
                        </div>
                    </div>
                )
            }
        </Spring>

    )
}

const counter = {
    background: "#333",
    textAlign: "center",
    width: "100px",
    borderRadius: "50%",
    margin: "1rem auto"
}



