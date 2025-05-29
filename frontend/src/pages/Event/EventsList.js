import EventsList from "../../components/EventsList";

const DUMMY_EVENTS = [
  { id: "event1", image: null, title: "dummy_title", date: "01-01-2025" },
  { id: "event2", image: null, title: "swag", date: "25-05-2020" },
];

export default function EventsListPage() {
  return <EventsList events={DUMMY_EVENTS} />;
}
