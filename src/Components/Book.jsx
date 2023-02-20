import {useState} from "react";
import { useBookContext } from "./BookProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Book() {
    const { bookToday, setBookToday,name,email,phone } = useBookContext();
    const handleStartDateChange = (date) => {
      setBookToday(date);
    };
    console.log(bookToday);
    return (
      <div className="calender">
        <label htmlFor="startDate">Check-in Date:</label>
        <DatePicker
          disabled={!name || !email || !phone}
          selected={bookToday}
          onChange={handleStartDateChange}
          name="startDate"
          dateFormat="dd/MM/yyyy"
          placeholderText="Select the Date"
          showTimeSelect
          timeFormat="p"
          timeIntervals={15}
        />
      </div>
    );
  }