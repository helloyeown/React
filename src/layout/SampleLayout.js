const SampleLayout = ({children}) => {
    return ( 

        <div className=" bg-blue-500 m-12 w-full p-12">
            <div className="h-[10vh] bg-red-400">
                Logo
            </div>
            {children}
        </div>

     );
}
 
export default SampleLayout;