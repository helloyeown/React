import { useState } from "react"
import ZCart from "./ZCart"
import ZProductList from "./ZProductList"


const ZKiosk = () => {

    // 2
    const [items, setItems] = useState([])

    // 1
    const buyProduct = (product) => {

        console.log(product)

        // 해당 상품이 카트에 있는가?
        const targetArr = items.filter(item => item.pno === product.pno)

        //해당 상품이 카트에 없으면 items에 추가 
        if(targetArr.length === 0 ){
            setItems([...items, {...product, qty:1}])
            return
        }

        // 해당 상품이 items에 있으면 qty만 증가
        targetArr[0].qty += 1
        setItems([...items])

        // product 수량 추가
        // setItems([...items, {...product, qty:1}])

        console.log(items)
        
        
    }
    
    // 1
    const viewProduct = () => {
        
        console.log("view")

    }

    // 3
    const changeQty = (pno, amount) => {
        console.log("changeQty")

        const targetItem = items.filter(item => item.pno === pno)[0]
        targetItem.qty += amount

        if(targetItem.qty === 0 ){

            setItems(items.filter(item => item.pno !== pno))
            return

        }

        setItems([...items])

    }

    return ( 
        
        <div>
            <ZProductList buyProduct={buyProduct} viewProduct={viewProduct}></ZProductList>
            <ZCart arr={items} changeQty={changeQty}></ZCart>
        </div>
     );
}
 
export default ZKiosk;