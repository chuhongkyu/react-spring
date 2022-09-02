import "./App.css";
import CardBox from "./components/CardBox";
import Loop from "./components/Loop";

function App() {
  return (
    <div className="App">
      <header>
        <h1>✔ React-Spring</h1>
      </header>
      <div className="wrapper">
        <p>
          react-spring은 cross platform으로 웹, react-native, react-native-web
          등의 플랫폼에서 다 사용 가능하다. 왜 이름이 durations이 아니라
          springs일까? react-spring 홈페이지에 따르면, 모든 움직임은 만화처럼
          깔끔하게 움직이는 경우는 거의 없으며, 항상 struggle(꿈틀거림)이
          존재한다. 즉, 어느 움직임이든 한 번에(sync) 이루어지지 않고, 늘 time
          and curves(시간과 굴곡)에 영향을 받는다. 애니메이션 라이브러리하면
          animated와 react-motion이 많이 나온다. react-animated는 시간 기반의
          애니메이션 라이브러리로 간단하게 start와 stop 메소드를 사용한다.
          react-spring은 animated의 쉬운 사용과 react-motion의 간결한 구조를
          합쳤다.
        </p>
      </div>
      <div className="Section">
        {/* <Loop /> */}
        <CardBox />
      </div>
    </div>
  );
}

export default App;
