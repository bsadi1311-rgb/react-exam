import {
  Box,
  Button,
  Typography,
} from "@mui/material";

export default function News() {
  const news = [
    {
      id: 1,
      title: "Интерьерные решения от наших дизайнеров",
      date: "01.06.2023",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      big: true,
    },
    {
      id: 2,
      title: "Последние предложения в Изумрудный Village",
      date: "26.05.2023",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
    {
      id: 3,
      title: "Таунхаусы по цене двушки",
      date: "21.05.2023",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    },
    {
      id: 4,
      title: "Карта посёлка Изумрудный Village",
      date: "12.05.2023",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
    {
      id: 5,
      title: "Открытие теннисного корта",
      date: "02.05.2023",
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6",
    },
  ];

  function NewsCard(item) {
    return (
      <Box
        key={item.id}
        sx={{
          position: "relative",
          height: item.big ? 420 : 250,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,.8), transparent)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            left: 20,
            bottom: 20,
            color: "#fff",
          }}
        >
          <Typography fontSize={22} fontWeight={600}>
            {item.title}
          </Typography>

          <Typography>{item.date}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box maxWidth="1200px" mx="auto" p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
       <h1 className="text-4xl font-bold mt-20 mb-20"> НОВОСТИ КОМПАНИИ</h1>

      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "2fr 1fr",
          },
          gap: 2,
        }}
      >
        {news.map(NewsCard)}
      </Box>
    </Box>
  );
}