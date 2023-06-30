import { Children } from "react";

const TemplatePage = ({children}) => {

  console.log("children.................")
  console.log(children)

  const [header, main, footer] = children

  return ( 
    <div className="w-100 bg-blue-300 jusify-center items-center h-[100vh]">
      <div className="h-[20vh] bg-red-300">
        {header}
      </div>
      <div className="h-[60vh] bg-green-300">
        {main}
      </div>
      <div className="h-[20vh] bg-yellow-300">
        {footer}
       </div>
    </div>
  );
}
 
export default TemplatePage;