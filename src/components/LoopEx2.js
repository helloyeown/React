const LoopEx2 = (start, end) => {

    const arr = []

    for (let i = start; i <= end; i++) {
        arr.push(<li key={i}>moon{i}</li>)
        
    }

    return ( 
        <ul>
            {arr}
        </ul>
     );
}
 
export default LoopEx2;