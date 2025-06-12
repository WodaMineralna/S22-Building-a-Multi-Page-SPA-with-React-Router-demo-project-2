import { useRouteLoaderData } from "react-router-dom";

import EventItem from "../../components/EventItem";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch(`http://192.168.1.18:8080/events/${id}`);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch the event details data." }),
      { status: 500 }
    );
  }

  return response;
}
