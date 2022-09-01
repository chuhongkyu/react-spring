# React-spring

- react-spring 은 대부분의 UI 관련 애니메이션 요구 사항을 다루어야 하는 스프링 물리학 기반 애니메이션 라이브러리입니다. 아이디어를 움직이는 인터페이스에 자신 있게 적용할 수 있을 만큼 유연한 도구를 제공합니다.
  이 라이브러리는 애니메이션에 대한 현대적인 접근 방식을 나타냅니다. Christopher Chedeau의 애니메이션 과 Cheng Lou의 반응 모션 에서 많은 영감을 받았습니다 . 애니메이션의 강력한 보간 및 성능은 물론 react-motion의 사용 용이성을 계승합니다. 그러나 애니메이션은 대부분 명령적이며 반응 모션은 대부분 선언적이지만 반응 스프링은 둘 모두를 연결합니다. 보기를 형성하는 방법에 반드시 영향을 미치지 않는 작고 명시적인 유틸리티 함수를 사용하여 정적 데이터를 이동하는 것이 얼마나 쉬운지 놀랄 것입니다.

  ```
  @react-spring/konva
  @react-spring/네이티브
  @react-spring/three  //와우 gsap 처럼?
  @react-spring/web
  @react-spring/zdog
  ```

## 사용

- [ ] from | obj Base values, optional
- [ ] to | obj/fn/array(obj) Animates to ...
- [ ] loop | obj/fn/bool Looping settings, see loop prop for more details
- [ ] delay| number/fn Delay in ms before the animation starts. Also valid as a function for individual keys: key => delay
- [ ] immediate | bool/fn Prevents animation if true. Also valid as a function for individual keys: key => immediate
- [ ] config | obj/fn Spring config (contains mass, tension, friction, etc). Also valid as a function for individual keys: key => config
- [ ] reset | bool The spring starts to animate from scratch (from -> to) if set true
- [ ] reverse | bool "from" and "to" are switched if set true, this will only make sense in combination with the "reset" flag

- [ ] cancel | bool/string/fn When true, the cancel prop stops the animation of every animated value owned by the Controller that receives it. See cancel prop for more details
- [ ] pause | bool The pause prop literally freezes animations in time.
- [ ] events | fn A variety of event callbacks (see events for more information)
