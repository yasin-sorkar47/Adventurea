import { useLoaderData } from "react-router-dom";
import Adventure from "./Adventure";

export default function Adventures() {
  const data = useLoaderData();

  const adventures = data.adventures;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {adventures?.map((adventure) => (
        <Adventure key={adventure.id} adventure={adventure} />
      ))}
    </div>
  );
}
