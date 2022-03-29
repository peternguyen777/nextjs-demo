import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";

const NewMeetupPage = () => {
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "applications/json",
      },
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <Fragment>
      <Head>
        <title>Add Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
