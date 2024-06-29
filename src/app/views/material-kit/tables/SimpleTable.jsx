import {
  Box,
  Table,
  styled,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from "@mui/material";

// STYLED COMPONENT
const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } }
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } }
  }
}));

const marketplaces = ['Yandex Market', 'Sber Market', 'Ozon', 'Aliexpress', 'Wilberries']

export default function SimpleTable({subscribarList}) {
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="center">Количество товара</TableCell>
            <TableCell align="center">Маркетплейс</TableCell>
            <TableCell align="center">Рейтинг</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, id) => (
            <TableRow key={id}>
              <TableCell align="left">{subscriber.id}</TableCell>
              <TableCell align="center">{subscriber.count}</TableCell>
              <TableCell align="center">{marketplaces[subscriber.market]}</TableCell>
              <TableCell align="center">{subscriber.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
}
