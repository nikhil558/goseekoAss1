const express = require("express");
const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();
const dbPath = path.join(__dirname, "goseeko.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(5000, () => {
      console.log("Server Running at http://localhost:8080/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();

dbtoResponse = (dbObj) => ({
  courseName: dbObj.course_name,
});

dbtoResponseStreams = (dbObj) => ({
  stream1: dbObj.stream1,
  stream2: dbObj.stream2,
  stream3: dbObj.stream3,
});

dbtoResponseUniversity = (dbObj) => ({
  universityName: dbObj.university_name,
});

// Get courses API
app.get("/course", async (request, response) => {
  const getResults = `
    SELECT
      *
    FROM
      course;`;
  const Array1 = await db.all(getResults);
  response.send(Array1);
});

//Get streams API
app.get("/streams/:stream", async (request, response) => {
  const { stream } = request.params;
  const getResults = `
    SELECT 
    *
    FROM 
    streams
    WHERE
    course_name="${stream}"`;
  const Array1 = await db.all(getResults);
  response.send(Array1);
});

//GET Universitys API
app.get("/universitys", async (request, response) => {
  const getResults = `
    SELECT
      *
    FROM
      university;`;
  const Array1 = await db.all(getResults);
  response.send(Array1);
});
