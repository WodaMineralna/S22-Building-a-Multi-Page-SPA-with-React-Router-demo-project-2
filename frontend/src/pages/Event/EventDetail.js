import { useParams, Link } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h3>{params.id}</h3>
      <p>
        <Link to="edit">Edit</Link>
      </p>
    </>
  );
}
