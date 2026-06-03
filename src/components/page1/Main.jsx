import React from "react";
import { useTranslation } from "react-i18next";
import ss1 from "../../assets/ss1.png";
import ss2 from "../../assets/ss2.png";
import ss5 from "../../assets/ss5.png";
import Projects1 from "./Project";
import { Box } from "@mui/material";

export default function Main2() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("project1Title"),
      image: ss1,
      description: t("project1Desc"),
      location: t("project1Location"),
      date: t("project1Date"),
      badge: t("project1Badge"),
      badgeColor: "bg-green-500",
    },
    {
      title: t("project2Title"),
      image: ss2,
      description: t("project2Desc"),
      location: t("project2Location"),
      date: t("project2Date"),
      badge: t("project2Badge"),
      badgeColor: "bg-blue-500",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{t("ourProjects")}</h1>

          <nav className="text-sm text-gray-600">
            <span>{t("home")}</span>
            <span className="mx-2">-</span>
            <span className="text-gray-900">{t("allProjects")}</span>
          </nav>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />

                <div className="absolute top-4 left-4">
                  <span
                    className={`${project.badgeColor} text-white px-3 py-1 rounded-full text-sm`}
                  >
                    {project.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span>{project.location}</span>
                  <span>{project.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Projects1 />
      <img src={ss5} alt="" />
      {/* MAP */}
      <Box sx={{ width: "100%", mt: 4 }}>
        <iframe
          src="https://yandex.com/map-widget/v1/"
          width="100%"
          height="500"
          style={{ border: 0 }}
        />
      </Box>
    </>
  );
}
