import clientPromise from "../../../lib/mongodb";
const crypto = require("crypto")

export default async function handler(req, res) {
  // console.log(req.req.body.title);

  if (req.method === "POST") {
      // const req.body = JSON.parse(req.req.body)

    const ad = {
      id: crypto.randomUUID(),
      title: req.body.title,
      work: req.body.work,
      area: req.body.area,
      description: req.body.description,
      author: req.body.author
    };

    const db = (await clientPromise).db();
    db.collection("ads").insertOne(ad)

    res.status(200).send();
  }else{
    res.status(204).send("wrong http method")
  }
}
