"use client";
import { Box, Typography } from "@mui/material";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
const OfferWay = () => {
  const pathRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: pathRef,
    offset: ["start end", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 1], [0, 1]);
  const pointLength = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const smoothPathLength = useSpring(pathLength, {
    stiffness: 50,
    damping: 40,
  });
  const smoothPointLength = useSpring(pointLength, {
    stiffness: 50,
    damping: 40,
  });

  return (
    <Box
      ref={pathRef}
      sx={{
        width: "100%",
        maxWidth: "1700px",
        m: "auto",
        height: "1650px",
        position: "relative",
        mb: "-100px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 100,
          left: 0,
          right: 0,
          width: 1,
          height: 1,
          textAlign: "center",
          "& svg": {
            display: "inline-block",
            height: "100%",
          },
        }}
      >
        <svg
          viewBox="0 0 1447 1946"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
        >
          <motion.path
            id="mainVector"
            d="M1243.5 125.5C1253.5 157 1295.5 162 1254 171C1212.5 180 1132.43 174.5 1081 174.5C1008 174.5 323.5 181 136.5 282.5C-50.4999 384 26.5 549 136.5 559.5C246.5 570 1056 617.5 1243.5 759.5C1431 901.5 1316.5 1039 1207.5 1066C1098.5 1093 382 1030.5 165.5 1167.5C-51 1304.5 2.49995 1460.5 213.5 1490C424.5 1519.5 830.5 1519.5 746.5 1932.5"
            stroke="#A855F7"
            strokeWidth="4"
            strokeLinejoin="round"
            style={{ pathLength: smoothPathLength }}
          />
          <motion.path
            id="point"
            d="M1276.16 39.5325C1276.16 60.7725 1245.75 78.4725 1243.86 114.315C1243.86 78.4725 1212 59.445 1212 39.5325C1212 19.62 1228.37 9.00001 1243.86 9C1259.35 8.99999 1276.16 18.2925 1276.16 39.5325Z"
            stroke="#A855F7"
            strokeWidth="4"
            strokeLinejoin="round"
            style={{ pathLength: smoothPointLength }}
          />
          <path
            id="dashedVector"
            d="M1243.5 125.5C1253.5 157 1295.5 162 1254 171C1212.5 180 1132.43 174.5 1081 174.5C1008 174.5 323.5 181 136.5 282.5C-50.4999 384 26.5 549 136.5 559.5C246.5 570 1056 617.5 1243.5 759.5C1431 901.5 1316.5 1039 1207.5 1066C1098.5 1093 382 1030.5 165.5 1167.5C-51 1304.5 2.49995 1460.5 213.5 1490C424.5 1519.5 830.5 1519.5 746.5 1932.5"
            stroke="#12141D"
            strokeWidth="6"
            strokeLinejoin="round"
            strokeDasharray="8 16"
          />
          <motion.path
            id="rightVector"
            d="M1244.5 1C1259.9 0.999994 1282 9.5 1285.24 33.5C1288.48 57.5 1270 70 1252 108C1234 146 1321.76 175.12 1285.24 183.04C1248.72 190.96 1125.26 190.5 1080 190.5C1015.76 190.5 311.165 204.56 146.605 293.88C-17.9549 383.2 49.805 528.4 146.605 537.64C243.405 546.88 1054.86 607.56 1247.68 738.28C1440.5 869 1382 1060.06 1208 1086C1034 1111.94 368.02 1062.94 177.5 1183.5C-13.0199 1304.06 25.3199 1442.54 211 1468.5C396.68 1494.46 854 1501 765 1932.5"
            stroke="#A855F7"
            strokeWidth="4"
            strokeLinejoin="round"
            style={{ pathLength: smoothPathLength }}
          />
          <motion.path
            id="leftVector"
            d="M1244.5 1C1225.07 1.00001 1202 13 1202 41C1202 69 1239.93 90 1237.5 124C1235.07 158 1281 155.5 1232 161C1183 166.5 1144 161 1078.5 161C1013 161 337.07 155.865 129.5 268.53C-78.0697 381.195 7.4003 564.345 129.5 576C251.6 587.655 1088 653 1235.5 777C1383 901 1315.5 1013.5 1204.5 1046C1093.5 1078.5 394.604 998.924 154.289 1150.99C-86.026 1303.07 -26.641 1476.23 207.569 1508.97C441.779 1541.72 810 1538 732 1931.5"
            stroke="#A855F7"
            strokeWidth="4"
            strokeLinejoin="round"
            style={{ pathLength: smoothPathLength }}
          />
        </svg>
      </Box>
      <Box
        style={{
          textAlign: "end",
          paddingTop: "50px",
          alignContent: "end",
          marginRight: "200px",
        }}
      >
        <Typography variant="body2" sx={{ m: "25px" }}>
          Что я предлагаю
        </Typography>
        <Typography variant="h3" sx={{ m: "25px", ml: "30%" }}>
          Если ты новичок начни прямо здесь Легкий старт 1.0{" "}
        </Typography>
        <Typography variant="h6" sx={{ mt: "15px ", mr: "25px", ml: "50%" }}>
          Это мой авторский курс для самого начала где я обьясню как работает
          интеренет и как делать простые страницы использую базовые технологии
          для этого
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "left",
          mt: "150px",
          pt: "50px",
          alignContent: "flex-start",
          ml: "200px",
        }}
      >
        <Typography variant="body2" sx={{ m: "25px" }}>
          Что я предлагаю
        </Typography>
        <Typography variant="h3" sx={{ m: "25px", mr: "30%" }}>
          Если ты бывалый или уже прошел начальный курс продолжи тут Полный курс
          2.0
        </Typography>
        <Typography variant="h6" sx={{ mt: "15px ", ml: "25px", mr: "50%" }}>
          Этот курс нацелен на углублённое обучение JavaScript и React. После
          него ты сможешь полноценно делать современные сайты под ключ.
        </Typography>
      </Box>
      <Box
        sx={{
          mt: "100px",
          textAlign: "end",
          pt: "50px",
          alignContent: "end",
          mr: "200px",
        }}
      >
        <Typography variant="body2" sx={{ m: "25px" }}>
          Что я предлагаю
        </Typography>
        <Typography variant="h3" sx={{ m: "25px", ml: "30%" }}>
          После прохождения курсов я тебе направлю и помогу подготовиться к
          поиску работы.
        </Typography>
        <Typography variant="h6" sx={{ mt: "15px ", mr: "25px", ml: "50%" }}>
          Что-то про резюме и возможное собеседование
        </Typography>
      </Box>

      <Box
        sx={{
          mt: "200px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ textAlign: "end", width: "45%" }}>
          <Typography variant="body2" sx={{ m: "25px" }}>
            Что я предлагаю
          </Typography>
          <Typography variant="h3" sx={{ m: "25px" }}>
            После прохождения курсов можешь устроиться на мой комерческий проект
          </Typography>
          <Typography variant="h6" sx={{ m: "25px " }}>
            Что-то про резюме и возможное собеседование
          </Typography>
        </Box>
        <Box sx={{ textAlign: "left", width: "45%" }}>
          <Typography variant="body2" sx={{ m: "25px" }}>
            Что я предлагаю
          </Typography>
          <Typography variant="h3" sx={{ m: "25px" }}>
            После прохождения курсов можешь полность подготовленным устраиваться
            на работу
          </Typography>
          <Typography variant="h6" sx={{ m: "25px " }}>
            Что-то про резюме и возможное собеседование
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OfferWay;
