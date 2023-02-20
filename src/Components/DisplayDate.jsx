import { useBookContext } from "./BookProvider";

export default function DisplayDate() {
  const { bookToday,phone } = useBookContext();
  return (
    <div style={{textAlign:"center"}}>
      <h3>Today's Bookings:</h3>
      {bookToday ? (
        <p>{bookToday.toLocaleString()}</p>
        
      ) : (
        <p>No bookings for today.</p>
      )}
    </div>
  );
}
