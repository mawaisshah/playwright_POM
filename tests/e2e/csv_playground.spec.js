const { test } = require("@playwright/test");
const csv = require("@fast-csv/parse");
const path = require("path");
import { writeToPath } from "fast-csv";

test("CSV Read & Write Test", async () => {
  //READING
  let myObj = new Promise((resolve) => {
    let dataArray = [];
    csv.parseFile(path.resolve("D:/playwright_POM/read-csv.csv"), { headers: true })
      .on("data", (data) => {
        dataArray.push(data);
      })
      .on("end", () => {
        resolve(dataArray);
      });
  });

  let output = await myObj;
  console.log(output);

  //WRITING
  // const arr = Array.from(output);
  const arr = [];
  await arr.unshift({ Salary: "Salary", Expierence: "Expierence", Role: "Role" });
  await arr.push(
    {
      Salary: "100K",
      Expierence: "2 Years",
      Role: "Project Lead",
    });
 writeToPath("./write-csv.csv", arr);
 console.log(arr);

});

