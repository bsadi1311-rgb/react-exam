import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
} from "@mui/material";

export default function Mortgage() {
  const mortgages = [
    {
      id: 1,
      title: "ИПОТЕЧНЫЕ КРЕДИТЫ",
      text: "Бесплатно подберём базовую ипотечную программу",
      rate: "13,7%",
      first: "10%",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    },
    {
      id: 2,
      title: "СЕМЕЙНАЯ ИПОТЕКА",
      text: "Используем материнский капитал",
      rate: "4%",
      first: "15%",
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300",
    },
    {
      id: 3,
      title: "IT СПЕЦИАЛИСТАМ",
      text: "Льготная ипотека для IT сотрудников",
      rate: "4%",
      first: "15%",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    },
    {
      id: 4,
      title: "ГОСПОДДЕРЖКА 2023",
      text: "Актуальные предложения",
      rate: "6%",
      first: "15%",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
  ];

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 3 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={1}
      >
        ПОДБЕРЁМ РЕШЕНИЯ{" "}
        <span style={{ color: "#EFA35A" }}>
          ПО ИПОТЕКЕ
        </span>{" "}
        УЖЕ СЕГОДНЯ
      </Typography>

      <Typography mb={4}>
        Выберите подходящий вариант и наши
        специалисты подготовят для вас
        актуальные предложения
      </Typography>

<Grid container spacing={3}>
  {mortgages.map((item) => (
    <Grid
      key={item.id}
      size={{ xs: 12, md: 6 }}
    >
      <Card
        sx={{
          display: "flex",
          height: 280,
          border: "1px solid #EFA35A",
          boxShadow: "none",
          borderRadius: 0,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "55%",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              fontWeight={700}
              fontSize={28}
              mb={1}
            >
              {item.title}
            </Typography>

            <Typography
              fontSize={14}
              color="text.secondary"
              mb={3}
            >
              {item.text}
            </Typography>

            <Box display="flex" gap={5}>
              <Box>
                <Typography
                  fontWeight={700}
                  fontSize={30}
                >
                  от {item.rate}
                </Typography>

                <Typography fontSize={12}>
                  Ставка по ипотеке
                </Typography>
              </Box>

              <Box>
                <Typography
                  fontWeight={700}
                  fontSize={30}
                >
                  от {item.first}
                </Typography>

                <Typography fontSize={12}>
                  Первоначальный взнос
                </Typography>
              </Box>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#EFA35A",
              width: "fit-content",
              borderRadius: 0,
              px: 3,
            }}
          >
            Получить расчёт
          </Button>
        </Box>

        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            width: "45%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Card>
    </Grid>
  ))}
</Grid>
    </Box>
  );
}