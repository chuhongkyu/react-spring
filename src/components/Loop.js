import { useRef, useState } from "react";
import { useSpring, a } from "react-spring";

const Loop = () => {
  const styles = useSpring({
    loop: true,
    from: { x: 1000 },
    to: { x: 0 },
    config: { friction: 50 },
  });

  return (
    <div className="Box0">
      <a.div className="Bar">
        <a.div
          style={{
            width: "100%",
            height: 80,
            backgroundColor: "#46e891",
            ...styles,
          }}
        />
      </a.div>
    </div>
  );
};

export default Loop;
