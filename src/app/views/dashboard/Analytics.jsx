import {Fragment, useEffect, useState} from "react";
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {Card, Grid, styled} from "@mui/material";
import RowCards from "./shared/RowCards";
import StatCards from "./shared/StatCards";
import StatCards2 from "./shared/StatCards2";
import UpgradeCard from "./shared/UpgradeCard";
import PeriodButton from "../../components/PeriodButton";
import {AttachMoney, AutoGraph} from "@mui/icons-material";
import axios from "axios";

// STYLED COMPONENTS
const ContentBox = styled("div")(({theme}) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: {margin: "16px"}
}));

const CardRoot = styled(Card)(({theme}) => ({
    marginBottom: "24px",
    textAlign: "center",
    padding: "24px !important",
    [theme.breakpoints.down("sm")]: {paddingLeft: "16px !important"}
}));

const H4 = styled("h4")(({theme}) => ({
    fontSize: "1rem",
    fontWeight: "500",
    marginBottom: "16px",
    textTransform: "capitalize",
    color: theme.palette.text.secondary
}));

export default function Analytics() {
    const [periodSides, setPeriodSides] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    const getAnalytics = async () => {
        const response = await axios.get('http://127.0.0.1:8080/dashboard', {
            params: {
                analytics_time_type: period,
                marketplace: marketplaces,
                left_side: periodSides[0].startDate,
                right_side: periodSides[0].endDate
            }
        })

        if (response.status === 200 && response.data && !response.data.error) {
            const data = response.data

            setCardList([
                {
                    name: "Продажи - возврат",
                    categoryF: "Сумма",
                    allTimeF: data.sum.value,
                    nowDurationF: data.sum.avg,
                    nowDurationPercentF: data.sum.change,
                    categoryS: "Количество",
                    allTimeS: data.count.value,
                    nowDurationS: data.count.avg,
                    nowDurationPercentS: data.count.change,
                    Icon: AttachMoney
                },
                {
                    name: "Выручка и прибыль",
                    categoryF: "Сумма",
                    allTimeF: data.without_returns_sum.value,
                    nowDurationF: data.without_returns_sum.avg,
                    nowDurationPercentF: data.without_returns_sum.change,
                    categoryS: "Количество",
                    allTimeS: data.without_returns_count.value,
                    nowDurationS: data.without_returns_count.avg,
                    nowDurationPercentS: data.without_returns_count.change,
                    Icon: AutoGraph
                }
            ])
        }

    }

    const [period, setPeriod] = useState("Год");
    const [cardList, setCardList] = useState([]);
    const [marketplaces, setMarketplaces] = useState('all')

    useEffect(() => {
        getAnalytics().then()
    }, [])
    useEffect(() => {
        getAnalytics().then()
    }, [marketplaces, period, periodSides]);

    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>

                        <Grid container spacing={3} sx={{mb: 3}}>
                            <Grid item xs={12} md={12} style={{display: 'flex'}}>

                                <PeriodButton setPeriod={setPeriod} period={'День'}/>
                                <PeriodButton setPeriod={setPeriod} period={'Неделя'}/>
                                <PeriodButton setPeriod={setPeriod} period={'Месяц'}/>
                                <PeriodButton setPeriod={setPeriod} period={'Год'}/>
                            </Grid>
                        </Grid>

                        <StatCards cardList={cardList}/>

                        <StatCards2/>

                        <H4>Выбор маркетплейса:</H4>
                        <RowCards marketplaces={marketplaces} setMarketplaces={setMarketplaces}/>

                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12} style={{placeItems: 'center'}}>
                        <CardRoot>

                            <DateRange
                                editableDateInputs={true}
                                onChange={item => {
                                    setPeriodSides([item.selection])
                                    setPeriod('период')
                                }
                                }
                                moveRangeOnFirstSelection={false}
                                ranges={periodSides}
                            />

                        </CardRoot>

                        <UpgradeCard/>

                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
}
