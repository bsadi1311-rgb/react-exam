import { Box, Typography, TextField, Button } from "@mui/material";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import s1 from "../../assets/s1.png"

export default function Main1() {
  return (
    <>
    <div>
      <Box sx={{ p: 4, display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "space-between" , backgroundColor : "#F7F8F8"}}>
      <Box>
        <Typography variant="h4" fontWeight="bold">
          ЦЕНТРАЛЬНЫЙ ОФИС <br /> продаж{" "}
          <span className="text-[#EFA35A]"> WIN DOM</span>
        </Typography>
        <br />
        <h1 className="font-bold">Республика Татарстан, г. Казань ул. Яркая, д.31Б</h1>
<br />
        <div className="flex justify-center items-center gap-10">
          <h1><AddIcCallIcon /> +7 (962) 555-25-25</h1>
          <h1><AddIcCallIcon /> +7 (962) 555-25-25</h1>
        </div>
        <br />
        <div className="flex justify-center items-center gap-5 w-[180px]">
          <h1><YouTubeIcon /></h1>
          <h1><XIcon /></h1>
          <h1><YouTubeIcon /></h1>
          <h1><XIcon /></h1>
   
        </div>
        <br />
        <img src={s1} alt=""  className="w-[250px]"/>
      </Box>

      <Box sx={{ width: 300, p: 2, boxShadow: 2, borderRadius: 2 }}>
        <Typography fontWeight="bold">Консультация</Typography>

        <TextField fullWidth label="Имя" sx={{ mt: 2 }} />
        <TextField fullWidth label="Телефон" sx={{ mt: 2 }} />

        <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: "orange" }}>
          Отправить
        </Button>
      </Box>

    </Box>
      {/* MAP */}
      <Box sx={{ width: "100%", mt: 4 }}>
        <iframe
          src="https://yandex.com/map-widget/v1/"
          width="100%"
          height="500"
          style={{ border: 0 }}
        />
      </Box>
    </div>
    </>
  );
}
