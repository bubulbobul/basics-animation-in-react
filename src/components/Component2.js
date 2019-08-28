import React from 'react'
import { Spring } from 'react-spring/renderprops'

const c2Style = {
    background: "slateblue",
    color: "white",
    padding: "1.5rem"
}

const Components2 = ({ toggle }) => {

    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1000, duration: 1000 }}
        >
            {
                props => (
                    <div style={props}>
                        <div style={c2Style}>
                            <h1>Component 2</h1>
                            <p>Incididunt nulla duis consequat voluptate ad ex. Sint ipsum ea amet officia non do quis dolor do qui enim elit. Labore id voluptate et fugiat eiusmod qui qui. Enim aute irure consectetur voluptate dolore occaecat in nostrud aliquip ex in dolore aliquip qui. Cillum quis incididunt dolor reprehenderit amet.</p>
                            <button style={{
                                background: "#333",
                                color: "#fff",
                                padding: "1rem 2rem",
                                border: "none",
                                textTransform: "uppercase",
                                margin: "15px 0"
                            }}
                                onClick={e => toggle(e)}>Toggle Component 3</button>
                        </div>
                    </div>
                )
            }
        </Spring>

    )
}

export default Components2;

