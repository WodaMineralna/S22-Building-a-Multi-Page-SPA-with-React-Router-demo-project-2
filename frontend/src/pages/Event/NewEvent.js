import { redirect } from "react-router-dom";
import EventForm from "../../components/EventForm";

export default function NewEventPage() {
  return <EventForm />;
}

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://192.168.1.18:8080/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not create a new event." }),
      { status: 500 }
    );
  }

  return redirect("/events");
}
