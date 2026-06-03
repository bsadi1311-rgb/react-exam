import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header2 from "./hooll";
import k1 from "../assets/k1.png"

export default function Header() {
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();

const navItems = [
  { id: 1, name: t("home"), path: "/" },
  { id: 2, name: t("nasha"), path: "/nasha" },
  { id: 3, name: t("houses"), path: "/houses" },
  { id: 4, name: t("contact"), path: "/contact" },
  { id: 5, name: t("nasha comanda"), path: "/comanda" },
  { id: 6, name: t("odnadom"), path: "/odnadom" },
];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#fff",
          color: "#000",
          boxShadow: 0,
          marginBottom : "20px"
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: 700 }}>
            <img src={k1} alt="" />
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color="inherit"
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              size="small"
              onClick={() => i18n.changeLanguage("ru")}
            >
              RU
            </Button>

            <Button
              size="small"
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </Button>
          </Box>

          <Button
            variant="outlined"
            sx={{
              display: { xs: "none", md: "flex" },
              borderColor: "#EFA35A",
              color: "#EFA35A",
            }}
          >
            {t("call")}
          </Button>

          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 260,
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Button>
          ))}

          <Button
            variant="outlined"
            sx={{
              borderColor: "#EFA35A",
              color: "#EFA35A",
            }}
          >
            {t("call")}
          </Button>
        </Box>
      </Drawer>

      <Header2 />
    </>
  );
}