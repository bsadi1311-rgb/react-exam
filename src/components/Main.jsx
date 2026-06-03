import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";
import s9 from "../assets/s9.png";
import ReactCompareImage from "react-compare-image";
import SwiperMain from "./Swiper";
import Projects from "./Project";
import Mortgage from "./Mortage";
import { useTranslation } from "react-i18next";

export default function Main() {
  const { t } = useTranslation();

  const stats = [
    {
      id: 1,
      number: "10",
      text: t("stat1"),
    },
    {
      id: 2,
      number: "250+",
      text: t("stat2"),
    },
    {
      id: 3,
      number: "100%",
      text: t("stat3"),
    },
  ];

  return (
    <>
      {/* Статистика */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-20 px-5">
        {stats.map((item) => (
          <div key={item.id} className="w-full md:w-[330px] p-3 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-[#EFA359]">
              {item.number}
            </h1>

            <hr className="border-[#EFA359] mt-5" />

            <p className="mt-5 font-bold">{item.text}</p>
          </div>
        ))}
      </div>

      {/* О компании */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 my-20 px-5">
        <div className="w-full md:w-[400px]">
          <h1 className="text-3xl md:text-4xl font-bold text-[#EFA359] mb-5">
            {t("aboutTitle")}
          </h1>

          <p className="mb-4">{t("aboutText1")}</p>

          <p className="mb-4">{t("aboutText2")}</p>

          <p>{t("aboutText3")}</p>
        </div>

        <img
          src={s5}
          alt="company"
          className="w-full md:w-[500px] rounded-lg"
        />
      </div>

      {/* Архитектура */}
      <div className="bg-[#f3f3f3] py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center md:text-left">
            {t("architecture")}{" "}
            <span className="text-[#EFA35A] italic">
              {t("architecture2")}
            </span>
          </h1>

          <div className="max-w-6xl overflow-hidden">
            <ReactCompareImage leftImage={s7} rightImage={s6} />
          </div>

          <p className="text-lg md:text-2xl mt-10 max-w-4xl mx-auto leading-relaxed">
            {t("architectureText")}
          </p>
        </div>
      </div>

      <SwiperMain />
      <Projects />

      <img
        src={s9}
        alt="banner"
        className="w-[95%] m-auto my-40"
      />

      <Mortgage />
    </>
  );
}