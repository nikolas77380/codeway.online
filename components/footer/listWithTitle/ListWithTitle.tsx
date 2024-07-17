import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import style from "./ListWithTitle.style";

interface IListWithTitle {
  title?: string;
  items: { name: string; href: string }[];
}

const ListWithTitle = ({ title, items }: IListWithTitle) => {
  return (
    <Stack>
      {title ?? <Typography sx={style.title}>{title}</Typography>}
      {items.map((item, i) => (
        <Link key={i} href={item.href} style={{ textDecoration: "none" }}>
          <Typography component="div" sx={style.link}>
            {item.name}
          </Typography>
        </Link>
      ))}
    </Stack>
  );
};

export default ListWithTitle;
