import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import BedIcon from "@mui/icons-material/Bed";
import BathroomIcon from "@mui/icons-material/Bathroom";

import d1 from "../../assets/d1.png";
import d2 from "../../assets/d2.png";
import d3 from "../../assets/d3.png";
import d4 from "../../assets/d4.png";
import d5 from "../../assets/d5.png";
import d6 from "../../assets/d6.png";

export default function Main6() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Все дома" },
    { id: "1floor", label: "1 этаж" },
    { id: "2floor", label: "2 этажа" },
    { id: "terrace", label: "Терраса" },
    { id: "garage", label: "Гараж" },
  ];

  const projects = [
    {
      id: 1,
      title: "Win-1",
      image: d1,
      price: "13 800 000 ₽",
      houseArea: "189 м²",
      landArea: "6.1 сот.",
      bedrooms: 5,
      floors: 2,
      features: ["terrace", "garage"],
    },
    {
      id: 2,
      title: "Win-2",
      image: d2,
      price: "13 800 000 ₽",
      houseArea: "189 м²",
      landArea: "6.1 сот.",
      bedrooms: 5,
      floors: 1,
      features: ["terrace"],
    },
    {
      id: 3,
      title: "Win-3",
      image: d3,
      price: "13 800 000 ₽",
      houseArea: "189 м²",
      landArea: "6.1 сот.",
      bedrooms: 5,
      floors: 1,
      features: ["garage"],
    },
    {
      id: 4,
      title: "Win-4",
      image: d4,
      price: "13 800 000 ₽",
      houseArea: "189 м²",
      landArea: "6.1 сот.",
      bedrooms: 5,
      floors: 1,
      features: ["terrace"],
    },
    {
      id: 5,
      title: "Win-5",
      image: d5,
      price: "13 800 000 ₽",
      houseArea: "189 м²",
      landArea: "6.1 сот.",
      bedrooms: 5,
      floors: 1,
      features: ["garage"],
    },
    {
      id: 6,
      title: "Win-6",
      image: d6,
      price: "13 800 000 ₽",
      houseArea: "189 м²",
      landArea: "6.1 сот.",
      bedrooms: 5,
      floors: 2,
      features: ["terrace", "garage"],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => {
          if (activeFilter === "1floor") return project.floors === 1;
          if (activeFilter === "2floor") return project.floors === 2;

          return project.features.includes(activeFilter);
        });

  return (
    <Box py={5} bgcolor="#f8f8f8">
      <Container maxWidth="xl">
        <Typography
          sx={{
            color: "#666",
            mb: 4,
            fontSize: "14px",
          }}
        >
          Главная → Дома → Одноэтажные дома
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            mb: 4,
          }}
        >
          {filters.map((filter) => (
            <Chip
              key={filter.id}
              label={filter.label}
              onClick={() => setActiveFilter(filter.id)}
              sx={{
                borderRadius: 0,
                background:
                  activeFilter === filter.id
                    ? "#EFA359"
                    : "#fff",
                color:
                  activeFilter === filter.id
                    ? "#fff"
                    : "#000",
                border: "1px solid #ddd",
              }}
            />
          ))}
        </Box>

        <Grid container spacing={3}>
          {filteredProjects.map((project) => (
            <Grid
              key={project.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 0,
                  boxShadow: "none",
                  border: "2px solid #1976d2",
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    height: {
                      xs: 220,
                      md: 200,
                    },
                    objectFit: "cover",
                  }}
                />

                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <Typography fontWeight="bold">
                      {project.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#EFA359",
                        fontWeight: 700,
                      }}
                    >
                      {project.price}
                    </Typography>
                  </Box>

                  <SpecItem
                    icon={<HomeIcon fontSize="small" />}
                    text={`Площадь дома: ${project.houseArea}`}
                  />

                  <SpecItem
                    icon={<CropSquareIcon fontSize="small" />}
                    text={`Площадь участка: ${project.landArea}`}
                  />

                  <SpecItem
                    icon={<BedIcon fontSize="small" />}
                    text={`Тип участка: ИЖС`}
                  />

                  <SpecItem
                    icon={<BathroomIcon fontSize="small" />}
                    text={`Количество этажей: ${project.floors}`}
                  />

                  <SpecItem
                    text={`Количество комнат: ${project.bedrooms}`}
                  />

                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      mt: 2,
                      borderRadius: 0,
                      color: "#000",
                      borderColor: "#ccc",
                      textTransform: "none",
                    }}
                  >
                    Детали проекта
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function SpecItem({ icon, text }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: 1,
        color: "#666",
        fontSize: "14px",
      }}
    >
      {icon}
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
}