import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/2/29/H%C3%A4meen_linna.jpg'
      title='Our first meetup'
      address='Some Street 5, 12345 Some City'
      description='The meetup description'
    />
  );
};

export default MeetupDetails;
