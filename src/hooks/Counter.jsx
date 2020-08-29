import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = ` Counter: ${count}`;
  }, [count]);

  return (
    <div>
      <div>
        Counter: {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default Counter;
