import React from "react";
import { connect } from "@/dbConfig/dbConfig.js";
import Feedback from "@/models/feedbackModel";
import User from "@/models/userModel";

async function handler(req, res) {
  await connect();
  if (req.method === "POST") {
    const reqBody = await req.body;
    const { title, body, author } = reqBody;
    console.log(author)
    const user = await User.findById(author.id);
    const proposedNewFeedback = { ...reqBody, author: user };
    const newFeedback = new Feedback(proposedNewFeedback);
    newFeedback.save().then(function (savedFeedback) {
      res.status(200).send("New Feedback successsfully saved.");
    });
  }
  if (req.method === "GET") {
    try {
      const feedbacks = await Feedback.find({}).populate(
        "author",
        "id email username"
      );

      res.status(200).send(feedbacks);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
  if (req.method === 'PUT') {
    try {
      const { id, title, body } = await req.body.feedback;
      console.log(req.body.feedback);
      const updatedFeedback = await Feedback.findByIdAndUpdate(
        id,
        { title, body },
        { new: true }
      );
      console.log(updatedFeedback);
      res.status(200).send("Feedback updated successfully.");
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
  if (req.method === "DELETE") {
    try {
      const { id } = await req.body;
      const deletedFeedback = await Feedback.findByIdAndDelete(id);
      console.log(deletedFeedback);
      res.status(200).send("Feedback deleted successfully.");
    } catch (err) {
      console.log(err);
    }
  }
}

export default handler;
