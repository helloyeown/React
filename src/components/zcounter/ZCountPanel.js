const ZCountPanel = ({fn}) => {
  
  
  
  return (  
    <div className="bg-red-300 flex p-6">
      <button 
      className="m-6 m-2 bg-blue-200"
      onClick={() => fn(1)}>
        INC
      </button>
      <button 
      className="m-6 m-2 bg-blue-200"
      onClick={() => fn(-1)}>
        DEC
      </button>
    </div>
  );
}
 
export default ZCountPanel;