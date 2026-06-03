import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import f5 from "../../assets/f5.png";
import f6 from "../../assets/f6.png";
import f7 from "../../assets/f7.png";
import f8 from "../../assets/f8.png";
import f9 from "../../assets/f9.png";
import f10 from "../../assets/f10.png";
import f11 from "../../assets/f11.png";

export default function Main4() {
  const team = [
    {
      name: "Алёна Денисова",
      position: "Руководитель отдела продаж",
      image: f3,
    },
    {
      name: "Евгений Соколов",
      position: "Исполнительный директор",
      image: f4,
    },
    {
      name: "Екатерина Смирнова",
      position: "Руководитель отдела маркетинга",
      image: f5,
    },
    {
      name: "Игорь Семёнов",
      position: "Менеджер по продажам",
      image: f6,
    },
    {
      name: "Иван Петров",
      position: "Менеджер по продажам",
      image: f7,
    },
    {
      name: "Анна Фёдорова",
      position: "Бухгалтер",
      image: f8,
    },
    {
      name: "Алексей Кузин",
      position: "Начальник участка",
      image: f9,
    },
    {
      name: "Николай Васильев",
      position: "Прораб",
      image: f10,
    },
    {
      name: "Роман Соколов",
      position: "Прораб",
      image: f11,
    },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: "#fff", marginTop: "-150px" }}>
      {/* Left sidebar */}
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          width: { lg: "90px", xl: "50px" },
          background: "#EFA359",
          flexShrink: 0,
        }}
      />

      <Box sx={{ flex: 1, py: { xs: 3, md: 5 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ margin: "auto", }}>
                <Card
                  sx={{
                    boxShadow: "none",
                    borderRadius: 0,
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background: "#fff",
                    
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: 280, sm: 320, md: 350 },
                      overflow: "hidden",
                      background: "#f5f5f5",
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                      }}
                    />
                  </Box>

                  <CardContent
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      p: { xs: 1.5, md: 2 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: { xs: "0.95rem", md: "1rem" },
                      }}
                    >
                      {member.name}
                    </Typography>

                    <Typography
                      sx={{
                        color: "gray",
                        textAlign: "center",
                        mb: 2,
                        fontSize: { xs: "0.8rem", md: "0.9rem" },
                      }}
                    >
                      {member.position}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        mt: "auto",
                      }}
                    >
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{
                          background: "#EFA359",
                          borderRadius: 0,
                          textTransform: "none",
                          "&:hover": {
                            background: "#EFA359",
                          },
                        }}
                      >
                        Написать
                      </Button>

                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          borderRadius: 0,
                          textTransform: "none",
                          color: "#333",
                          borderColor: "#ccc",
                          "&:hover": {
                            borderColor: "#EFA359",
                          },
                        }}
                      >
                        Оставить отзыв
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Right sidebar */}
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          width: { lg: "90px", xl: "50px" },
          background: "#EFA359",
          flexShrink: 0,
        }}
      />
    </Box>
  );
}