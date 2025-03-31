// import React, { useState } from "react";

// const BookingForm = (props) => {
//   const [occasion, setOccasion] = useState("");
//   const [guests, setGuests] = useState("");
//   const [date, setDate] = useState("");
//   const [times, setTimes] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.submitForm({ date, times, guests, occasion });
//   };

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//     props.dispatch(e.target.value); // Ensure correct value is dispatched
//   };

//   return (
//     <header>
//       <section>
//         <form onSubmit={handleSubmit}>
//           <fieldset className="formField">
//             {/* Date Selection */}
//             <div>
//               <label htmlFor="book-date">Choose Date:</label>
//               <input
//                 id="book-date"
//                 value={date}
//                 onChange={handleDateChange}
//                 type="date"
//                 required
//               />
//             </div>

//             {/* Time Selection */}
//             <div>
//               <label htmlFor="book-time">Choose Time:</label>
//               <select
//                 id="book-time"
//                 value={times}
//                 onChange={(e) => setTimes(e.target.value)}
//                 required
//               >
//                 <option value="">Select a Time</option>
//                 {props.availableTimes?.map((time) => (
//                   <option key={time} value={time}>
//                     {time}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Guests Selection */}
//             <div>
//               <label htmlFor="book-guests">Number of Guests:</label>
//               <input
//                 id="book-guests"
//                 min="1"
//                 value={guests}
//                 onChange={(e) => setGuests(e.target.value)}
//                 type="number"
//                 placeholder="0"
//                 max="10"
//                 required
//               />
//             </div>

//             {/* Occasion Selection */}
//             <div>
//               <label htmlFor="book-occasion">Occasion:</label>
//               <select
//                 id="book-occasion"
//                 value={occasion}
//                 onChange={(e) => setOccasion(e.target.value)}
//                 required
//               >
//                 <option value="">Select an Option</option>
//                 <option>Birthday</option>
//                 <option>Anniversary</option>
//               </select>
//             </div>

//             {/* Submit Button */}
//             <div className="btnReceive">
//               <input
//                 aria-label="Make Your Reservation"
//                 type="submit"
//                 value="Make Your Reservation"
//               />
//             </div>
//           </fieldset>
//         </form>
//       </section>
//     </header>
//   );
// };

// export default BookingForm;

import React, { useState } from "react";

const BookingForm = ({ availableTimes = [], submitForm, dispatch }) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, times, guests, occasion });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    if (dispatch) {
      dispatch(e.target.value); // Ensure dispatch is passed
    } else {
      console.warn("dispatch function is not provided.");
    }
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset className="formField">
            {/* Date Selection */}
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={date}
                onChange={handleDateChange}
                type="date"
                required
              />
            </div>

            {/* Time Selection */}
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
              >
                <option value="">Select a Time</option>
                {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
                  availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))
                ) : (
                  <option disabled>No Available Times</option>
                )}
              </select>
            </div>

            {/* Guests Selection */}
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value, 10) || 1)}
                type="number"
                placeholder="1"
                max="10"
                required
              />
            </div>

            {/* Occasion Selection */}
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="">Select an Option</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="btnReceive">
              <input
                aria-label="Make Your Reservation"
                type="submit"
                value="Make Your Reservation"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
