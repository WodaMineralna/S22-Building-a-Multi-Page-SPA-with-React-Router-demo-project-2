import { useLoaderData, Await } from "react-router-dom";

import EventsList from "../../components/EventsList";
import { Suspense } from "react";

export default function EventsPage() {
  const data = useLoaderData();
  const eventsData = data.events;

  return (
    <Suspense
      fallback={<p style={{ textAlign: "center" }}>Loading Events data...</p>}
    >
      <Await resolve={eventsData}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch("http://192.168.1.18:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  }

  const resData = await response.json();
  return resData.events;
}

export async function loader() {
  return {
    events: loadEvents(),
  };
}
