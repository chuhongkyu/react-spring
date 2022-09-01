import { useSpring, animated } from "react-spring";

const Loop = () => {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
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
    </div>
  );
};

export default Loop;
