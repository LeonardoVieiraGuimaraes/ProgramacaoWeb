import { Avatar } from "@mui/material";
import IconPessoa from "./IconPessoa";

export default function AvatarSaudacao() {
  return (
    <Avatar sx={{ bgcolor: "#1976d2", width: 64, height: 64 }}>
      <IconPessoa />
    </Avatar>
  );
}
