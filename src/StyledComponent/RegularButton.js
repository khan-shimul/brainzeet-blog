import { Button } from "@mui/material";
import { styled } from "@mui/styles";

const RegularButton = styled(Button)({
    fontWeight: '700',
    padding: '17px 30px',
    border: '2px solid #fff',
    borderRadius: '100px',
    '&:hover': {
        // background: '#fff'
        color: '#fff'
    },
});

export default RegularButton;