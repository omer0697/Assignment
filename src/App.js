import Card from "./Components/Card";
import HomePageImage from "./Components/Images/bg.png";

function App() {
  return (
    <div className="flex flex-row h-screen overflow-x-hidden relative">
      <img src={HomePageImage} alt="Home Page" className="absolute z-[-1] w-full h-[437px] object-fill xl:z-40 xl:static xl:h-full" />
      <div className="flex w-full pt-56 flex-col pl-7 xl:pl-36 xl:w-1/2 h-full z-20 xl:pt-[96px]">
        <h1 className="text-white text-xl pr-40 w-full xl:text-4xl font-custom xl:text-black items-center font-bold xl:pr-[300px] xl:min-w-[200px]">Everyday items, we have something to suit every occasion.</h1>
        <p className="hidden font-avenir xl:block xl:pt-[12px] text-[#666666] pr-[400px]">At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.</p>
        <button className="flex font-avenir flex-col w-48 mt-8 items-center text-white xl:text-black font-bold xl:mt-10">
          Shop All Everyday Items
          <hr className="mt-1 w-full border-white xl:border-black" />
        </button>
        <Card />
      </div>
    </div>
  );
}

export default App;
