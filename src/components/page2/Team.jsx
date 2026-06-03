import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import f1 from "../../assets/f1.png"
import f2 from "../../assets/f2.png"

export default function Team() {
  const team = [
    {
      name: "ИГОРЬ ЗАХАРОВ",
      position: "Руководитель проекта",
      image: f1,
    },
    {
      name: "ЛУИЗА НАЗИПОВА",
      position: "Главный архитектор",
      image: f2,
    },
  ];

  return (
    <Box sx={{ background: "#fff", marginTop : "20px",  py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            fontWeight: "bold",
            mb: 3,
          }}
        >
          НАША <span style={{ color: "#c9a961" }}>КОМАНДА</span>
        </Typography>

        <Box
          sx={{
            background: "#f4a261",
            color: "#fff",
            p: 2,
            mb: 4,
            borderRadius: 1,
          }}
        >
          <Typography sx={{ fontSize: "1.1rem", fontWeight: 500 }}>
            WIN DOM — это люди, разделяющие красоту и комфорт загородной жизни.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography sx={{ mb: 4, color: "gray", lineHeight: 1.6 }}>
              Наши менеджеры помогут разобраться, какой дом подойдет именно вам. 
              Подберут технологию строительства и готовый типовой проект. 
              Или разработают индивидуальное решение по вашему запросу.
            </Typography>

            <Grid container spacing={3}>
              {team.map((member, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "100%", sm: "140px" },
                        height: { xs: "200px", sm: "220px" },
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <CardContent
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        p: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          mb: 1,
                          fontSize: "1.1rem",
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Box
                        sx={{
                          background: "#f4a261",
                          color: "#fff",
                          p: 1,
                          textAlign: "center",
                          borderRadius: 1,
                        }}
                      >
                        
                        <Typography sx={{ fontSize: "0.9rem" }}>
                          {member.position}
                        </Typography>
                        
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: "100%",
                minHeight: "400px",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
                
          
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}