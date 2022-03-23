import MeetupList from "../components/meetups/MeetupList";
import React, { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tower_of_London_viewed_from_the_River_Thames.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/Castle_Neuschwanstein.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/H%C3%A4meen_linna.jpg",
    address: "34 Strasse, 12345 Barcelona",
    description: "This is a 3rd meetup",
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    //send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
};

export default HomePage;
