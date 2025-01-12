import Loader from "/loader.gif";

function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black"><img className="h-[50%] object-cover" src={Loader} alt="Loading..." /></div>
  );
}

export default Loading;
