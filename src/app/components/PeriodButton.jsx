import React from 'react';
import {Button, styled} from "@mui/material";

const StyledButton = styled(Button)(({theme}) => ({
    margin: theme.spacing(1)
}));

const PeriodButton = ({setPeriod, period}) => {
    return (
        <div>
            <StyledButton onClick={() => setPeriod(period)} variant="contained" color="inherit">
                {period}
            </StyledButton>
        </div>
    )
};

export default PeriodButton;
