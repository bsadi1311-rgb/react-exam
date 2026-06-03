import React, { useState } from "react";
import d1 from "../../assets/d1.png"
import d2 from "../../assets/d2.png"
import d3 from "../../assets/d3.png"
import d4 from "../../assets/d4.png"
import d5 from "../../assets/d5.png"
import d6 from "../../assets/d6.png"
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
  IconButton,
  Tooltip,
  Zoom,
  Fade,
} from "@mui/material";
import {
  Home,
  CropSquare,
  Bed,
  Bathroom,
  FilterList,
  Favorite,
  Share,
  Visibility,
} from "@mui/icons-material";

export default function CardBox() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [favorites, setFavorites] = useState([]);

  const filters = [
    { id: "all", label: "Все проекты" },
    { id: "1floor", label: "1-этажные" },
    { id: "2floor", label: "2-этажные" },
    { id: "terrace", label: "Терраса" },
    { id: "garage", label: "Гараж" },
  ];

  const projects = [
    {
      id: 1,
      title: "Win-1",
      image: d1,
      price: "12 000 000 ₽",
      houseArea: "179 м²",
      landArea: "6 сот",
      material: "Кирпич",
      bedrooms: 3,
      bathrooms: 2,
      floors: 2,
      features: ["terrace", "garage"],
    },
    {
      id: 2,
      title: "Win-2",
      image: d2,
      price: "12 500 000 ₽",
      houseArea: "159 м²",
      landArea: "6 сот",
      material: "Кирпич",
      bedrooms: 3,
      bathrooms: 2,
      floors: 2,
      features: ["terrace"],
    },
    {
      id: 3,
      title: "Win-3",
      image: d3,
      price: "13 000 000 ₽",
      houseArea: "179 м²",
      landArea: "6 сот",
      material: "Кирпич",
      bedrooms: 3,
      bathrooms: 2,
      floors: 2,
      features: ["garage"],
    },
    {
      id: 4,
      title: "Win-4",
      image: d4,
      price: "12 500 000 ₽",
      houseArea: "179 м²",
      landArea: "6 сот",
      material: "Кирпич",
      bedrooms: 3,
      bathrooms: 2,
      floors: 2,
      features: ["terrace", "garage"],
    },
    {
      id: 5,
      title: "Win-5",
      image: d5,
      price: "12 000 000 ₽",
      houseArea: "179 м²",
      landArea: "6 сот",
      material: "Кирпич",
      bedrooms: 3,
      bathrooms: 2,
      floors: 1,
      features: ["terrace"],
    },
    {
      id: 6,
      title: "Win-6",
      image: d6,
      price: "12 500 000 ₽",
      houseArea: "179 м²",
      landArea: "6 сот",
      material: "Кирпич",
      bedrooms: 3,
      bathrooms: 2,
      floors: 2,
      features: ["garage"],
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => {
          if (activeFilter === "1floor") return project.floors === 1;
          if (activeFilter === "2floor") return project.floors === 2;
          return project.features.includes(activeFilter);
        });

  return (
    <Box sx={{ minHeight: "100vh", background: "#fafafa", py: { xs: 3, md: 6 } }}>
      <Container maxWidth="xl">
       

        <Box
          sx={{
            mb: 4,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            alignItems: "center",
          }}
        >
       
          {filters.map((filter) => (
            <Chip
              key={filter.id}
              label={filter.label}
              onClick={() => setActiveFilter(filter.id)}
              sx={{
                background:
                  activeFilter === filter.id ? "#EFA359" : "#fff",
                color: activeFilter === filter.id ? "#fff" : "#333",
                border: "1px solid #ddd",
                cursor: "pointer",
                fontSize: { xs: "0.8rem", md: "0.9rem" },
                transition: "all 0.3s",
                "&:hover": {
                  background:
                    activeFilter === filter.id ? "#EFA359" : "#fff5f0",
                },
              }}
            />
          ))}
        
        </Box>
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{marginLeft : "60px"}}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} lg={4} key={project.id}>
              <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
                <Card
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    height: "80%",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      transform: "translateY(-5px)",
                    },
                    background: "#fff",
                  }}
                >
                  <Box sx={{ position: "relative", width: "350px"}}>
                    <CardMedia
                      component="img"
                      height={220}
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: "transform 0.5s ease",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    />
                    
                    {/* Action buttons */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        display: "flex",
                        gap: 0.5,
                      }}
                    >
                      <Tooltip title="В избранное">
                        <IconButton
                          onClick={() => toggleFavorite(project.id)}
                          size="small"
                          sx={{
                            bgcolor: "white",
                            "&:hover": { bgcolor: "#ffebee" },
                          }}
                        >
                          <Favorite
                            sx={{
                              fontSize: 18,
                              color: favorites.includes(project.id)
                                ? "error.main"
                                : "gray",
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Поделиться">
                        <IconButton
                          size="small"
                          sx={{
                            bgcolor: "white",
                            "&:hover": { bgcolor: "#e3f2fd" },
                          }}
                        >
                          <Share sx={{ fontSize: 18, color: "gray" }} />
                        </IconButton>
                      </Tooltip>
                    </Box>

                    {/* Price tag */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        background: "#EFA359",
                        color: "#fff",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      {project.price}
                    </Box>
                  </Box>

                  <CardContent sx={{ flex: 1, p: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        fontSize: "1.1rem",
                      }}
                    >
                      {project.title}
                    </Typography>

                    {/* Specs */}
                    <Box sx={{ mb: 2 }}>
                      <SpecItem
                        icon={<Home sx={{ fontSize: 16 }} />}
                        label={`Площадь дома: ${project.houseArea}`}
                      />
                      <SpecItem
                        icon={<CropSquare sx={{ fontSize: 16 }} />}
                        label={`Площадь участка: ${project.landArea}`}
                      />
                      <SpecItem
                        icon={<Bed sx={{ fontSize: 16 }} />}
                        label={`Количество спален: ${project.bedrooms}`}
                      />
                      <SpecItem
                        icon={<Bathroom sx={{ fontSize: 16 }} />}
                        label={`Количество санузлов: ${project.bathrooms}`}
                      />
                      <SpecItem
                        label={`Материал: ${project.material}`}
                      />
                    </Box>

                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        color: "#EFA359",
                        borderColor: "#EFA359",
                        textTransform: "none",
                        borderRadius: 1,
                        py: 1,
                        "&:hover": {
                          background: "#EFA359",
                          color: "#fff",
                        },
                      }}
                    >
                      Детали проекта
                    </Button>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function SpecItem({ icon, label }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 0.8,
        fontSize: "0.85rem",
        color: "gray",
      }}
    >
      {icon && <Box sx={{ mr: 1, color: "#EFA359" }}>{icon}</Box>}
      {label}
    </Box>
  );
}