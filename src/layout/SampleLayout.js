import { Children } from "react";

const SampleLayout = ({children}) => {
  return ( 
    <div className="bg-green-700 m-12 w-full h-[20vh]">
      <div className="h-[10vh] bg-red-200">
        logo
      </div>
      {children}
    </div>
   );
}
 
export default SampleLayout;