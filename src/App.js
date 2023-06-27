import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import LoopEx from './components/LoopEx';
import LoopEx2 from './components/LoopEx2';
import ProductList from './products/ProductList';

function App() {

  // const products = [
  //   {pno:1, pname:상품1, price:1000},
  //   {pno:2, pname:상품2, price:1000},
  //   {pno:3, pname:상품3, price:1000},
  //   {pno:4, pname:상품4, price:1000},
  //   {pno:5, pname:상품5, price:1000},
  // ]

  return (
    <div className="App">
      <ProductList/>
    </div>
  );
}

export default App;
