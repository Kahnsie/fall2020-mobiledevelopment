import React from 'react';

function DecreaseCount(props) {
  return (
    <div>
      <button onClick={() => {props.dispatch({"type": "decrement"}) }}>Click me (in another component)!</button>
    </div>
  );
}

export default DecreaseCount;
