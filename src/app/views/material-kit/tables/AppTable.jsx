import {styled} from "@mui/material";
import SimpleTable from "./SimpleTable";
import {SimpleCard} from "app/components";
import {useEffect, useState} from "react";
import axios from "axios";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppTable() {
  const [subscribarList, setSubscribarList] = useState([]);

  const getStorage = async () => {
    const response = await axios.get('http://127.0.0.1:8080/storage')

    if (response.status === 200 && response.data && !response.data.error) {
      const data = response.data

      setSubscribarList(data.data)
    }
  }

  useEffect(() => {
    getStorage().then()
  }, []);
  return (
    <Container>
      
      <SimpleCard title="Склад">
        <SimpleTable subscribarList={subscribarList}/>
      </SimpleCard>

    </Container>
  );
}
