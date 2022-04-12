const clientPromise = require("./mongodb");

async function GetUserData(){
    const session = await getSession(context);

  const db = (await clientPromise).db();
  const data = await db
    .collection("acounts")
    .findOne({ email: session.user.email });
    delete data._id
    console.log(data)

}

export default GetUserData;