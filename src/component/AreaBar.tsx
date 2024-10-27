import { AppBar, Link, Toolbar } from "@mui/material";

export const AreaBar = () => {
  return (
    <AppBar
      sx={{
        maxWidth: "sm",
        position: "fixed",
        top: "calc(100% - 4rem)",
        left: "50%",
        transform: "translate(-50%, 0)",
        bottom: 0,
        zIndex: 999,
      }}
    >
      <Toolbar sx={{ textAlign: "center" }}>
        <Link href="#1" underline="none" sx={{ color: "#FFF", flexGrow: 1 }}>
          １号館
        </Link>
        <Link href="#3" underline="none" sx={{ color: "#FFF", flexGrow: 1 }}>
          ３号館
        </Link>
        <Link href="#10" underline="none" sx={{ color: "#FFF", flexGrow: 1 }}>
          10号館
        </Link>
        <Link href="#0" underline="none" sx={{ color: "#FFF", flexGrow: 1 }}>
          屋外
        </Link>
        <Link href="#EV" underline="none" sx={{ color: "#FFF", flexGrow: 1 }}>
          催し物
        </Link>
      </Toolbar>
    </AppBar>
  );
};
