import { useState } from "react";

function BookingForm() {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const resDateHandler = (event) => {
    setResDate(event.target.value);
  };
  const resTimeHandler = (event) => {
    setResTime(event.target.value);
  };
  const guestsHandler = (event) => {
    setGuests(event.target.value);
  };
  const occasionHandler = (event) => {
    setOccasion(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ resDate, resTime, guests, occasion });
  };

  const availableTimes = [
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  return (
    <form>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={resDateHandler}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time " value={resTime} onChange={resTimeHandler}>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder={1}
        min={1}
        max={10}
        id="guests"
        value={guests}
        onChange={guestsHandler}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={occasionHandler}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        onSubmit={submitHandler}
      />
    </form>
  );
}

export default BookingForm;
