import { Button, Card, Container, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import bgimg from "../assets/images/bg/home.png";

export const ParticipationGuide = () => {
    const nav = useNavigate();

    return (
        <Container
            sx={{
                minHeight: "100vh",
                padding: "10px",
                backgroundImage: `url(${bgimg})`,
                backgroundSize: "auto 100vh",
                backgroundPosition: "center top",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
        >
            <Card sx={{
                borderRadius: "20px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Typography variant="h4">参加方法</Typography>
                <Typography variant="h6">
                    {/* ここに説明を書く。 */}
                    test text test text test text test text test text test <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />ddd
                </Typography>
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
            </Card>
        </Container>
    )
}