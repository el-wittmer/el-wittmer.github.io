import type { Route } from "../../types/app/routes/+types/home";
import { Welcome } from "../welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "El/Wittmer" },
    { name: "description", content: "El/Wittmer's personal website" },
  ];
}

export default function Home() {
  return <Welcome />;
}
