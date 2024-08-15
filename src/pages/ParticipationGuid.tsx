import { Button, Container, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

export const ParticipationGuide = () => {
    const nav = useNavigate();
    
    return (
        <Container>
            <Button
            variant="contained"
            size="large"
            sx={{ padding: 2, width: "25vh" }}
            onClick={() => {
                nav("/");
            }}
            >
            <Typography variant="h5">ホームへ戻る</Typography>
            </Button>
        </Container>
    )
}