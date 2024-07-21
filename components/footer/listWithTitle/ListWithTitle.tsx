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
        <Typography key={i} component="div" sx={style.link}>
          <Link
            href={item.href}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {item.name}
          </Link>
        </Typography>
      ))}
    </Stack>
  );
};

export default ListWithTitle;
