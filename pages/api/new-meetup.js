// /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    const client = await MongoClient.connect(
      "mongodb+srv://admin-ptr:8muJ9R21jszd0fi8@cluster0.jlbfs.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup Insered!" });
  }
}

export default handler;
