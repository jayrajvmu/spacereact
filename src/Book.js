import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Book.css";
const Book = () => {
  const [data, setData] = useState();
  const [wing, setWing] = useState();
  const [shift, setShift] = useState();
  const [getwing, setGetwing] = useState();
  const [getshift, setGetshift] = useState();
  const [getdate, setGetdate] = useState();
  const [getseat, setGetseat] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [empId, setempId] = useState();
  const [bookingResponse, setBookingResponse] = useState();
  const [resultPop, setResultPop] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  function handleClose() {
    setResultPop((resultPop) => !resultPop);
  }

  const getSeatData = (wing, date, shift) => {
    let datas = {
      wing: wing,
      date: `${date}`,
      shift: `${shift}`,
    };
    axios.post("http://localhost:5000/availablity", datas).then((response) => {
      if (response.status == 200) {
        setData(response.data);
        console.log(response.data);
      }
    });
  };

  const fetchapi = () => {
    getSeatData(getwing, getdate, getshift);
  };
  const getWings = () => {
    axios.get("http://localhost:5000/availablity/wings").then((response) => {
      if (response.status == 200) {
        setWing(response.data.wings);
      }
    });
  };
  const getShifts = () => {
    axios.get("http://localhost:5000/availablity/shifts").then((response) => {
      if (response.status == 200) {
        setShift(response.data.shifts);
      }
    });
  };
  useEffect(() => {
    getSeatData();
    getWings();
    getShifts();
  }, []);
  const callBooking = (e) => {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);
    bookSeat();
  };
  const bookSeat = () => {
    let bookData = {
      desk_id: `${getseat}`,
      emp_id: `${empId}`,
      date: `${getdate}`,
      shift: `${getshift}`,
      booked_by: `${empId}`,
      booking_type: 0,
    };
    axios.post("http://localhost:5000/booking", bookData).then((response) => {
      setBookingResponse(response.data.message);
      setResultPop(true);
      
    });
  };
  const testa = (e) => {
    setGetseat(e.target.id);
    setIsOpen(true);
  };
  return (
    <div className="container">
      <div className="header">
        <div className="wings-coloum">
          <label>
            Select Wing
            <select onClick={(e) => setGetwing(e.target.value)}>
              {wing != undefined &&
                wing.map((wings) => {
                  return <option value={wings.id}>{wings.wingname}</option>;
                })}
            </select>
          </label>
        </div>
        <div className="shift-coloum">
          <label>
            Select Shift
            <select onChange={(e) => setGetshift(e.target.value)}>
              {shift != undefined &&
                shift.map((shifts) => {
                  return <option value={shifts.id}>{shifts.shiftname}</option>;
                })}
            </select>
          </label>
        </div>
        <div className="shift-coloum">
          <label>
            Select Date
            <input type="date" onChange={(e) => setGetdate(e.target.value)} />
          </label>
        </div>
        <div className="submit-coloum">
          <button onClick={fetchapi}>Submit</button>
        </div>
      </div>

      <div className="wing">
        {data != undefined &&
          data.wings.map((wing, index) => {
            return (
              <div key={wing.tableid} className="tableC">
                {wing.seats.map((seat) => {
                  return (
                    // <div
                    //   key={seat.seatid}
                    //   className="seat"
                    //   onClick={testa}
                    //   id={seat.seatid}
                    // >
                    //   {seat.seatid}
                    // </div>


seat.availability==0 ?  <div
  key={seat.seatid}
  className="seat"
  onClick={testa}
  id={seat.seatid}
>
  {seat.seatid}
</div>
      : seat.availability==1 ?  <div
      key={seat.seatid}
      className="seat orange"
      onClick={testa}
      id={seat.seatid}
    >
      {seat.seatid}
    </div>
      :  <div
      key={seat.seatid}
      className="seat red"
      onClick={testa}
      id={seat.seatid}
    >
      {seat.seatid}
    </div>
                  );
                })}
              </div>
            );
          })}
      </div>

      {isOpen && (
        <div className="fix">
          <div className="form">
            <span onClick={toggle}>
              {" "}
              <button>X</button>
            </span>
            <form>
              <h1>Fill to Book Seat </h1>
              <label>
                Desk Id
                <input type="text" value={getseat} required disabled />
              </label>
              <label>
                Employee ID
                <input
                  type="text"
                  required
                  onChange={(e) => setempId(e.target.value)}
                />
              </label>

              <label>
                Date
                <input type="date" value={getdate} required disabled />
              </label>

              <button onClick={callBooking}>Book</button>
            </form>
          </div>
        </div>
      )}

      {resultPop && (
        <div className="form pop">
          <span onClick={handleClose}> X</span>
          <div>
            <p>{bookingResponse}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Book;
