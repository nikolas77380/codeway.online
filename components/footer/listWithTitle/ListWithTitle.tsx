import { Link, Stack, Typography } from "@mui/material";
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
        <Link key={i} href={item.href} sx={style.link}>
          {item.name}
        </Link>
      ))}
    </Stack>
  );
};

export default ListWithTitle;
