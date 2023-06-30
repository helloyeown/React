import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Kiosk from "./components/Kiosk";
import Todo from "./components/todo";
import TodoInput from "./components/todo/TodoInput";
import ZCounter from "./components/zcounter";
import ZKiosk from "./components/zkiosk";
import Ztodo from "./components/ztodo";
import ZtodoInput from "./components/ztodo/ZTodoInput";
import SampleLayout from "./layout/SampleLayout";
import TemplatePage from "./layout/TemplatePage";

function App() {
  const obj = {title:'Title', content : 'Content'}

  /* [] 동적접근 / . 정적 접근*/
  // console.log(obj['title'])

  return (
    <div className="">


      <div>

        <Ztodo></Ztodo>

        {/* <Todo></Todo> */}
        
        {/* <TemplatePage>
          <div className="text-6xl text-red-700">Logo Header</div>
          <ZKiosk></ZKiosk>
          <div className="text-6xl text-red-700">Logo Footer</div>
        </TemplatePage> */}

        {/* <ZCounter/> */}
      {/* <Kiosk></Kiosk> */}
      </div>
    </div>
  );
}

export default App;
