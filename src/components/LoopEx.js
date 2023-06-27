const LoopEx = () => {

    const arr = [1,2,3,4,5];

    const result = arr.map((ele, idx) => {
        if(ele % 2 === 0) {
            return <li key={idx}>{ele}</li>
        }
    })

    return ( 
        <>
            <ul>
                {result}
            </ul>
        </>
     );
}
 
export default LoopEx;