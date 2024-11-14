import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import style from "./ListWithTitle.style";

// interface IListWithTitle {
//   title?: string;
//   items: { name: string; href: string, }[];
// }
interface IListWithTitleItem {
  name: string;
  href?: string;
  onClick?: () => void;
}

interface IListWithTitle {
  title?: string;
  items: IListWithTitleItem[];
}

const ListWithTitle = ({ title, items }: IListWithTitle) => {
  return (
    <Stack sx={style.container}>
      {title ?? <Typography sx={style.title}>{title}</Typography>}
      {items.map((item, i) => (
        <Typography
          key={i}
          component="div"
          sx={style.link}
          onClick={item.onClick}
        >
          {item.href && !item.onClick ? (
            <Link
              href={item.href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {item.name}
            </Link>
          ) : (
            <span style={{ cursor: item.onClick ? "pointer" : "default" }}>
              {item.name}
            </span>
          )}
        </Typography>
      ))}
    </Stack>
  );
};

export default ListWithTitle;
