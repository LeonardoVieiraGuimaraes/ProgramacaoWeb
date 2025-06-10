import { Box, Card, Stack } from "@mui/material";

export default function HomeLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ minWidth: 350, p: 3, boxShadow: 4 }}>
        <Stack spacing={2} alignItems="center">
          {children}
        </Stack>
      </Card>
    </Box>
  );
}
