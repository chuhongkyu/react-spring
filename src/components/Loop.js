import { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

const Loop = () => {
  const n = useRef(0);

  const styles = useSpring({
    //false 멈추고
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 180 },
  });

  return (
    <div className="Box">
      <animated.div
        style={{
          width: 80,
          height: 80,
          backgroundColor: "#46e891",
          borderRadius: 16,
          ...styles,
        }}
      />
      <span style={{ padding: 10, backgroundColor: "blue" }}> 버튼</span>
    </div>
  );
};

export default Loop;
