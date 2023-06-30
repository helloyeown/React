import { useState } from "react"
import ZProductList from "./ZProductList"
import ZCart from "./ZCart"


const ZKiosk = () => {

  const [items, setItems] = useState([])

  const buyProduct = (product) => {
    console.log("buy Product", product)
  }

  const viewProduct = () => {
    console.log("view Product")
  }

  const changeQty = () => {
    console.log("changeQty")
  }


  return ( 
    <>
      <ZProductList buyProduct={buyProduct} viewProduct={viewProduct}></ZProductList>
      <ZCart arr={items} changeQty={changeQty}></ZCart>
    </>
   );
}
 
export default ZKiosk;