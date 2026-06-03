import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <Box sx={{ width: "100%", mt: 4 }}>
        <iframe
          src="https://yandex.com/map-widget/v1/"
          width="100%"
          height="500"
          style={{ border: 0 }}
          title="map"
        />
      </Box>

      <div className="bg-[#323232] text-white py-10 px-5 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          
          {/* О компании */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-2">
              {t("aboutCompany")}
            </h1>

            <hr className="w-full md:w-[200px] border-[#614E3C] mb-4" />

            <div className="space-y-2 text-gray-300">
              <p>{t("home")}</p>
              <p>{t("reviews")}</p>
              <p>{t("team")}</p>
              <p>{t("partners")}</p>
              <p>{t("contact")}</p>
            </div>
          </div>

          {/* Проекты */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-2">
              {t("projects")}
            </h1>

            <hr className="w-full md:w-[200px] border-[#614E3C] mb-4" />

            <div className="space-y-2 text-gray-300">
              <p>{t("cottages")}</p>
              <p>{t("townhouses")}</p>
              <p>{t("houses")}</p>
              <p>{t("layouts")}</p>
              <p>{t("catalog")}</p>
            </div>
          </div>

          {/* Ипотека */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-2">
              {t("mortgage")}
            </h1>

            <hr className="w-full md:w-[200px] border-[#614E3C] mb-4" />

            <div className="space-y-2 text-gray-300">
              <p>{t("family")}</p>
              <p>{t("military")}</p>
              <p>{t("preferential")}</p>
              <p>{t("banks")}</p>
              <p>{t("consultation")}</p>
            </div>
          </div>

          {/* Лого */}
          <div className="flex flex-col items-center">
            <img
              src={s2}
              alt="logo"
              className="w-[140px] md:w-[200px]"
            />

            <div className="flex gap-4 mt-8">
              <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer hover:border-[#EFA35A] hover:text-[#EFA35A] transition">
                <YouTubeIcon />
              </div>

              <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer hover:border-[#EFA35A] hover:text-[#EFA35A] transition">
                <XIcon />
              </div>

              <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer hover:border-[#EFA35A] hover:text-[#EFA35A] transition">
                <YouTubeIcon />
              </div>

              <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer hover:border-[#EFA35A] hover:text-[#EFA35A] transition">
                <XIcon />
              </div>
            </div>

            <img
              src={s3}
              alt="partner"
              className="w-[140px] md:w-[200px] mt-8"
            />
          </div>
        </div>
      </div>
    </>
  );
}