import { useState } from "react";
import { useSpring } from "react-spring";
import { animated } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";

const SpaceShip = () => {
  const [state, setState] = useState(false);
  const [toggle, set] = useState(0);
  const [{ x }] = useSpring(
    {
      x: toggle,
      config: { mass: 5, tension: 1000, friction: 50, precision: 0.0001 },
    },
    [toggle]
  );
  return (
    <div className="Box2">
      <animated.div
        style={{
          width: "300%",
          height: "200%",
          transform:
            "translate3d(-50%, -50%, 0) rotate3d(1, 0, 0, 55deg) rotate3d(0, 0, 1, 45deg)",
          backgroundColor: x.to([0, 1], ["#c9ffed", "#ff2558"]),
          color: x.to([0, 1], ["#7fffd4", "#c70f46"]),
        }}
      >
        <h1
          style={{ position: "absolute", top: 300, right: 100, fontSize: 55 }}
        >
          asmdlasjfpasn kㅁㄴㄹ만 너무 어렵다...
        </h1>
        <h1
          style={{
            position: "absolute",
            bottom: 100,
            right: 100,
            fontSize: 55,
          }}
        >
          리액트 스프링...
        </h1>
        <animated.h1>{x.to((x) => (x + 8).toFixed(2))}</animated.h1>
        <Canvas
          rthographic
          shadows
          dpr={[1, 2]}
          camera={{ position: [-10, 10, 10], fov: 50 }}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh
            onClick={() => setState(!state)}
            scale={state ? 1.5 : 1}
            position={[5, 0, 0]}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={state ? "hotpink" : "orange"} />
          </mesh>
        </Canvas>
      </animated.div>
    </div>
  );
};

export default SpaceShip;
