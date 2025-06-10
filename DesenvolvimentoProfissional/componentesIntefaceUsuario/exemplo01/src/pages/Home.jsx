import * as React from "react";
import { useState } from "react";
import HomeLayout from "./HomeLayout";
import AvatarSaudacao from "../components/AvatarSaudacao";
import SaudacaoForm from "../components/SaudacaoForm";

function Home() {
  const [nome, setNome] = useState("");

  return (
    <HomeLayout>
      <AvatarSaudacao />
      <SaudacaoForm nome={nome} setNome={setNome} />
    </HomeLayout>
  );
}

export default Home;
