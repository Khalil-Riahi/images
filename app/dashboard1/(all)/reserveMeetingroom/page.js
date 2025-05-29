"use client";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard"; // adjust the path

const RoomList = () => {
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [Reservations,setReservations]=useState([])
  const [active,setActive]=useState(true)

  useEffect(() => {
    async function getMeetingRoom() {
      try {
        const response = await fetch("http://localhost:8000/ELACO/table/meetingRoom");
        if (!response.ok) {
          throw new Error("Error fetching meeting rooms");
        }
        const data = await response.json();
        setMeetingRooms(data.meetingRoom);
      } catch (err) {
        console.error(err);
      }
    }

    getMeetingRoom();
  }, []);
  useEffect(() => {
    async function getReservations() {
      try {
        const response = await fetch("http://localhost:8000/ELACO/booking/getReservation");
        if (!response.ok) {
          throw new Error("Error fetching Reservations ");
        }
        const data = await response.json();
        setReservations(data.data);
      } catch (err) {
        console.error(err);
      }
    }

    getReservations();
  }, [active]);
  function nn(){
    // setActive(false)
    setActive(prevActive => !prevActive)
  }
  const images = [
    "/meetingRoom1.jpg",
    "/meetingRoom2.jpg"
  ];

  return (
    <div className="flex flex-col ">
      {meetingRooms.map((room, index) => (
        <RoomCard key={room._id} room={room} image={images[index % images.length]} reservation={Reservations[index % Reservations.length ]}  ff={nn} />
      ))}
    </div>
  );
};

export default RoomList;
