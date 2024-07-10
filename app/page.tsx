import Image from "next/image";
import styles from "./page.module.css";
import { Typography } from "@mui/material";
import ChooseUs from "@/src/components/ChooseUs/ChooseUs";
export default function Home() {
  return (
    <main>
      <ChooseUs />
    </main>
  );
}
