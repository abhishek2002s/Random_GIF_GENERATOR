import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return(
    <div className="w-full h-full flex flex-col background items-center">
      <h1 className="bg-white w-11/12 font-bold rounded-lg  text-center mt-[40px] text-3xl  px-10 py-2">Random GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
