import {Box, Card, Grid, styled} from "@mui/material";
import {Small} from "app/components/Typography";

const ContentBox = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center"
}));

const H3 = styled("h3")(() => ({
  margin: 0,
  fontWeight: "500",
  marginLeft: "12px"
}));

const H1 = styled("h1")(() => ({
  flexGrow: 1,
}));

const Heading = styled("h6")(({theme}) => ({
  margin: 0,
  marginTop: "4px",
  fontSize: "14px",
  fontWeight: "500",
  color: theme.palette.primary.main
}));

export default function StatCards({cardList}) {

  return (
      <Grid container spacing={3} sx={{mb: 3}}>
        {cardList.map(({id,
                         categoryF,
                         allTimeF,
                         nowDurationF,
                         nowDurationPercentF,
                         categoryS,
                         allTimeS,
                         nowDurationS,
                         nowDurationPercentS,
                         Icon,
                         name
                       }) => (
            <Grid item xs={12} md={6} key={id}>
              <Card elevation={3} sx={{p: 2}}>
                <ContentBox>

                  <Icon className="icon"/>
                  <H3 color="#08ad6c"> {name} </H3>

                </ContentBox>

                <ContentBox>

                  <H1 style={{margin: "0"}}>
                    <Box ml="12px">
                      <Small>{categoryF}</Small>
                      <Heading>{allTimeF} руб</Heading>
                      <Heading>{nowDurationF} руб</Heading>
                      <Heading>{nowDurationPercentF}%</Heading>
                    </Box>
                  </H1>


                  <H1 style={{margin: "0"}}>
                  <Box ml="12px">
                    <Small>{categoryS}</Small>
                    <Heading>{allTimeS} у.е.</Heading>
                    <Heading>{nowDurationS} у.е.</Heading>
                    <Heading>{nowDurationPercentS}%</Heading>
                  </Box>
                  </H1>

                </ContentBox>
              </Card>
            </Grid>
        ))}
      </Grid>
  );
}
