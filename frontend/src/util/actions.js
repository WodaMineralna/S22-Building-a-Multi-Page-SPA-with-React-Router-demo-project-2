import { redirect } from "react-router-dom";

export async function eventAction({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://192.168.1.18:8080/events";

  if ((method === "PATCH" || method === "DELETE") && params.id) {
    const id = params.id;
    url += `/${id}`;
  }

  const response = await fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });

  // 422 - validation errors
  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: `An error occured! Could not handle the ${method} Request.`,
      }),
      { status: 500 }
    );
  }

  return redirect("/events");
}
