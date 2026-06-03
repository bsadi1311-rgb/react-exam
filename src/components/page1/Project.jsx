import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Projects1() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t("winterHill"),
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      location: t("location1"),
    },
    {
      id: 2,
      title: t("usadyVillage"),
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      location: t("location2"),
    },
    {
      id: 3,
      title: t("konstantinovka"),
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      location: t("location3"),
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#fff",
        py: { xs: 4, md: 6 },
        px: 2,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{
            textAlign: "center",
            color: "gray",
            mb: 6,
            fontSize: "0.9rem",
          }}
        >
          {t("home")} - {t("allProjects")}
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                  },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    height: 250,
                    objectFit: "cover",
                  }}
                />

                <CardContent
                  sx={{
                    flexGrow: 1,
                    p: 2.5,
                    background: "#fff",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        fontSize: "1.1rem",
                        color: "#1a1a1a",
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#c9a961",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                      }}
                    >
                      {t("allSold")}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                      fontSize: "0.9rem",
                    }}
                  >
                    <LocationOn
                      sx={{
                        fontSize: 18,
                        mr: 0.5,
                        color: "#c9a961",
                      }}
                    />
                    {project.location}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}