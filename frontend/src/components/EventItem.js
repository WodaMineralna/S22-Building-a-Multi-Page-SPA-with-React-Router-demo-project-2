import { useSubmit, useNavigation, Link } from "react-router-dom";

import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const navigation = useNavigation();
  const submit = useSubmit();

  const isDeleting = navigation.state === "submitting";

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "DELETE" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit" disabled={isDeleting}>
          Edit
        </Link>
        <button onClick={startDeleteHandler} disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </menu>
    </article>
  );
}

export default EventItem;
