import s10 from "../../assets/s10.png";
import s11 from "../../assets/s11.png";
import CardBox from "./CardBox";

export default function Card2() {
  return (
    <>
      {/* TITLE */}
      <div className="m-auto w-[92%] text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold">
          популярные{" "}
          <span className="text-[#F9DCC1]">проекты</span>
        </h1>

        <hr className="w-[120px] md:w-[300px] border-[#F1AE6F] mt-3 mx-auto md:mx-0" />
      </div>

      {/* CARDS */}
      <div className="mb-20 mt-10 flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        
        {/* CARD 1 */}
        <div className="w-full md:w-[45%] border border-[#F9DCC1] h-auto pb-5">
          <img src={s10} alt="" className="w-full h-[200px] md:h-[300px] object-cover" />

          <div className="flex items-center justify-between px-4 mt-3">
            <h1 className="text-xl md:text-3xl font-bold">WIN-1</h1>
            <h1 className="text-[#F9DCC1] text-lg md:text-2xl font-bold">
              13 800 000 ₽
            </h1>
          </div>

          <button className="border border-[#F9DCC1] p-2 w-[160px] md:w-[200px] mt-5 ml-4">
            Детали проекта
          </button>
        </div>

        {/* CARD 2 */}
        <div className="w-full md:w-[45%] border border-[#F9DCC1] h-auto pb-5">
          <img src={s11} alt="" className="w-full h-[200px] md:h-[300px] object-cover" />

          <div className="flex items-center justify-between px-4 mt-3">
            <h1 className="text-xl md:text-3xl font-bold">WIN-1</h1>
            <h1 className="text-[#F9DCC1] text-lg md:text-2xl font-bold">
              13 800 000 ₽
            </h1>
          </div>

          <button className="border border-[#F9DCC1] p-2 w-[160px] md:w-[200px] mt-5 ml-4">
            Детали проекта
          </button>
        </div>

      </div>

      <CardBox />
    </>
  );
}