const { MongoClient } = require("mongodb");

require("dotenv").config();

// Connection URL
const client = new MongoClient(process.env.MONGO_DB_URL);

const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const fs = require("fs");

const getTypeString = (data, str, key) => {
  const type = typeof data;
  if (type == "object") {
    if (Array.isArray(data)) {
      str += `${key} : any[] // todo will fix it\n`;
    } else {
      if (data) {
        if (isObjectEmpty(data)) {
          str += `${key} : any //todo will fix it\n`;
        } else {
          str += `${key} : {\n ${addString(data)} }\n`;
        }
      }
    }
  } else {
    str += `${key} : ${type}\n`;
  }
  return str;
};

const addString = (filteredDocs) => {
  /* Start */
  let str = "";
  for (const key in filteredDocs) {
    if (key != "_id") {
      const data = filteredDocs[key];
      if (key == "createdAt" || key == "updatedAt") {
        str += `${key} : Date\n`;
      } else {
        str = getTypeString(data, str, key);
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
    console.log(`Init generate ${interfaceName}...`);
    let str = `interface ${interfaceName} {\n ${addString(filteredDocs[0])} }`;
    str += `\nexport default ${interfaceName}`;

    fs.writeFileSync(`ts/${interfaceName}.d.ts`, str);
    console.log(`Generate ${interfaceName} complete.`);
  }

  console.log("Connected successfully to server");

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
