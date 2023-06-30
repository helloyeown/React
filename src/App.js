import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Kiosk from "./components/Kiosk";
import Todo from "./components/todo";
import TodoInput from "./components/todo/TodoInput";
// index.js를 넣어주면 폴더명이 임포트 됨
import ZCounter from "./components/zcounter";
import ZKiosk from "./components/zcounter/zkiosk";
import ZTodo from "./components/ztodo";
import SampleLayout from "./layout/SampleLayout";
import TemplatePage from "./layout/TemplatePage";
import TemplateLayout from "./layout/TemplatePage";


function App() {
  return (
    <div>
      <ZTodo></ZTodo>
    </div>
  );
}

export default App;
