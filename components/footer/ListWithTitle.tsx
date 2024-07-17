import { Link, List, ListItem, Typography } from "@mui/material";

interface IListWithTitle {
  title?: string;
  items: { name: string; href: string }[];
}

const ListWithTitle = ({ title, items }: IListWithTitle) => {
  return (
    <List>
      {title ?? <Typography>{title}</Typography>}
      {items.map((item, i) => (
        <ListItem key={i}>
          <Link href={item.href}>{item.name}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default ListWithTitle;
