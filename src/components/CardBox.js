import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

const cards = [
  "https://www.seventoy.co.kr/data/item/1509888918/thumb-7ZmI7Y6Y7J207KeA7ZGc7KeA6riw7KSAcopy_800x800.jpg",
  "https://www.seventoy.co.kr/data/item/1553767960/7ZGc7KeA642U67iU7Jik6rG064u07IS467iQ7IaM65Oc.jpg",
  "https://www.seventoy.co.kr/data/item/1521640865/thumb-7ZGc7KeA65OA64KY66ek7Iqk_800x800.jpg",
  "http://plahobby.com/web/product/big/201906/e3f9ef21172b6e342a74b4c6383a154b.jpg",
  "https://www.seventoy.co.kr/data/item/1509948920/thumb-5057939_800x800.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaq_J-AfPL3-P6e7o1cWkOC-jEF3aUIFyjEsBp8L1tqSYmaD4D222YwN9ZCdbf2bPXO6Y&usqp=CAU",
  "https://www.seventoy.co.kr/data/item/1524403556/7ZGc7KeA7JeQ7J207KeA64W466eQ.jpg",
  "https://www.seventoy.co.kr/data/item/1509872764/thumb-PG7Y287Iqk7Yq46rG064u07ZGc7KeA_800x800.jpg",
];

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// 중간 방향과 스케일을 을 구하는법
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const CardBox = () => {
  //new Set 중복제거
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity

  //use Drag
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start((i) => {
        if (index !== i) return; // e're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (window.innerWidth / 3) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  return (
    <div className="Box">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck" key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
      <h1
        style={{
          position: "absolute",
          bottom: 10,
          left: "40%",
        }}
      >
        좌우로 카드를 던져 보자
      </h1>
    </div>
  );
};

export default CardBox;
