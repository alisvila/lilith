import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import styled from "@emotion/styled";

interface AppBarProps {
  selected?: boolean;
}

const StickyGrid: any = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ theme, selected }: any) => ({
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    cursor: "pointer",
  },
  ...(selected && {
    backgroundColor: theme.palette.secondary[200],
    color: "white",
  }),
}));

const ListWrapper = styled("div")`
  border: 1px solid #d1d1ff;
  border-radius: 25px;
  & ul {
    border-radius: 25px;
  }
`;

const caleryList = [
  {
    id: uuid(),
    name: "1700",
    imageUrl: "/static/images/products/product_1.png",
  },
  {
    id: uuid(),
    name: "2205",
    imageUrl: "/static/images/products/product_2.png",
  },
  {
    id: uuid(),
    name: "2355",
    imageUrl: "/static/images/products/product_3.png",
  },
  {
    id: uuid(),
    name: "2505",
    imageUrl: "/static/images/products/product_4.png",
  },
  {
    id: uuid(),
    name: "1950",
    imageUrl: "/static/images/products/product_5.png",
  },
  {
    id: uuid(),
    name: "2350",
    imageUrl: "/static/images/products/product_3.png",
  },
  {
    id: uuid(),
    name: "2600",
    imageUrl: "/static/images/products/product_4.png",
  },
  {
    id: uuid(),
    name: "1900",
    imageUrl: "/static/images/products/product_5.png",
  },
  {
    id: uuid(),
    name: "2300",
    imageUrl: "/static/images/products/product_3.png",
  },
  {
    id: uuid(),
    name: "2500",
    imageUrl: "/static/images/products/product_4.png",
  },
  {
    id: uuid(),
    name: "1900",
    imageUrl: "/static/images/products/product_5.png",
  },
];

export default function MiniGridDetail(props: any) {

  return (
    <ListWrapper>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {caleryList.map((item: any) => (
          <StickyGrid
            alignItems="flex-start"
            selected={props.selected === item.id}
            key={item.id + "ss"}
            onClick={(e: any) => props.handleClick(item.id, e)}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </StickyGrid>
        ))}
      </List>
    </ListWrapper>
  );
}
