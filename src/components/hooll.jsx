import { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import s4 from "../assets/s4.png";


export default function Header2() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlayVideo(true);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  return (
   <>
    <AppBar
      position="relative"
      sx={{
        height: "100vh",
        boxShadow: "none",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND */}
      {playVideo ? (
        <video
          ref={videoRef}
          controls
          muted
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${s4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.45)",
        }}
      />

      {/* HEADER */}
      <Toolbar sx={{ justifyContent: "space-between", zIndex: 2, position: "relative" }}>
        <Typography component={Link} to="/" sx={{ color: "#fff", fontWeight: 700 }}>
          WIN DOM
        </Typography>
      </Toolbar>

      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 4,
          color: "#fff",
        }}
      >
        <Typography>СТРОИТЕЛЬНАЯ КОМПАНИЯ</Typography>

        <Typography sx={{ fontSize: 80, fontWeight: 800, color: "#EFA35A" }}>
          WIN
        </Typography>

        <Typography sx={{ maxWidth: 500, mb: 3 }}>
          Мы строим дома и коттеджи
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            onClick={handlePlay}
            sx={{ bgcolor: "#EFA35A" }}
          >
            Смотреть видео
          </Button>
        </Box>
      </Box>
    </AppBar>
  
   </>
  );
}