import {Box, styled} from "@mui/material";

import SimpleCard from "app/components/SimpleCard";

import SaleInDay from "./saleinday";
import axios from "axios";
import {useEffect, useState} from "react";
import PieSaLe from "./salemarketPie";
import SaleCategory from "./saleincategory";

// STYLED COMPONENT
const Container = styled("div")(({ theme }) => ({
  margin: 30,
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": { marginBottom: 30, [theme.breakpoints.down("sm")]: { marginBottom: 16 } }
}));

export default function AppEchart() {

    const [saleInCategory, setSaleInCategory] = useState([]);
    const [saleMarket, setSaleMarket] = useState([]);
    const [saleInDay, setSaleInDay] = useState([]);

    const getAnalytics = async () => {
        const response = await axios.get('http://127.0.0.1:8080/charts')
        if (response.status === 200 && response.data) {
            const data = response.data
            console.log(data.sales_by_date)
            setSaleInCategory(data.sales_by_tariff)
            setSaleMarket(data.sales_by_marketplace)
            setSaleInDay(data.sales_by_date)
        }

    }

    useEffect(() => {
        getAnalytics().then()
    }, []);

  return (
    <Container>
        <div style={{fontSize: 30}}>За текущий год:</div>
      <SimpleCard title="Выручка со всех маркетплейсов">
        <SaleInDay data={saleInDay}/>
      </SimpleCard>

      <Box sx={{ py: "12px" }} />

      <SimpleCard title="Выручка Со Всех Маркетплейсов">
        <PieSaLe data={saleMarket}/>
      </SimpleCard>

      <Box sx={{ py: "12px" }} />

      <SimpleCard title="Продажи по тарифам">
        <SaleCategory data={saleInCategory}/>
      </SimpleCard>

    </Container>
  );
}
