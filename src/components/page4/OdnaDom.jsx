import Header6 from "./Header6";
import l1 from "../../assets/l1.png"
import Main6 from "./Main6";
import Footer6 from "./Footer6";

export default function OdnaDom() {
    return (
        <>
        <Header6 />
        <img src={l1} alt="" className="mt-10" />
        <h1 className="mt-20 ml-10 font-bold text-5xl">одноэтажные <span className="text-[#EFA35A] font-bold text-5xl">дома</span></h1>
        <Main6 />
        <Footer6 />
        </>
    )
}