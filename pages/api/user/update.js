// const clientPromise = require("../../lib/mongodb")
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const user = {
      id: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      area: req.body.area,
      offers: req.body.offers,
      phone: req.body.contact.phone,
      email: req.body.contact.email,
    };

    const db = (await clientPromise).db();
    db.collection("acounts").updateOne(
      { id: user.id },
      { $set: user },
      { upsert: true }
    );

    res.status(200).send();
  }
}
