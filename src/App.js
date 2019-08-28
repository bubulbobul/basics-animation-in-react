import React, { useState } from 'react';
import Component1 from "./components/Component1"
import Component2 from "./components/Component2"
import Component3 from "./components/Component3"
import './App.css';

import { Transition, animated } from 'react-spring/renderprops'


function App() {
  const [component3, showComponent3] = useState(false)

  const toggle = (e) => showComponent3(!component3)

  return (
    <div className="App">
      <Component1 />
      <Component2 toggle={toggle} />
      <Transition
        native
        items={component3}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {
          show => show && (props => (
            <animated.div style={props}>
              <Component3 />
            </animated.div>
          ))
        }
      </Transition>
      <h1>hello</h1>
    </div>
  );
}

export default App;
