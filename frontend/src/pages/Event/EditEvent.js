import { useParams } from "react-router-dom";

export default function EditEventPage() {
  const params = useParams();
  return (
    <>
      <h2>Editing the event</h2>
      <p>{params.id}</p>
    </>
  );
}
