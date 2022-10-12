const { MongoClient } = require("mongodb");

require("dotenv").config();

// Connection URL
const client = new MongoClient(process.env.MONGO_DB_URL);

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const fs = require("fs");

const addString = (filteredDocs) => {
  /* Start */
  let str = "";
  for (const key in filteredDocs) {
    const data = filteredDocs[key];
    const type = typeof filteredDocs[key];
    if (key == "createdAt" || key == "updatedAt") {
      str += `${key} : Date\n`;
    } else {
      if (type == "object") {
        if (Array.isArray(data)) {
          str += `${key} : []\n`;
        } else {
          if (data) {
            str += `${key} : {\n`;
            for (const key2 in data) {
              str += `${key2} : ${typeof data[key2]}\n`;
            }
            str += `}\n`;
          }
        }
      } else {
        str += `${key} : ${type}\n`;
      }
    }
  }
  /* Start */
  return str;
};

async function main() {
  await client.connect();
  const db = client.db(process.env.DB_NAME);
  const list = await db.listCollections().toArray();

  for (const index in list) {
    const collectionName = list[index]["name"];
    const collection = db.collection(collectionName);
    const filteredDocs = await collection.find({}).limit(1).toArray();

    const interfaceName = `I${capitalizeFirstLetter(collectionName)}`;
    let str = `interface ${interfaceName} {\n`;
    str += addString(filteredDocs[0]);
    str += "}\n";
    str += `\nexport default ${interfaceName}`;

    fs.writeFileSync(`ts/${interfaceName}.d.ts`, str);
  }

  console.log("Connected successfully to server");

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
