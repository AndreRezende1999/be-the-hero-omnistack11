const express = require("express");
const connection = require("./database/connection");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

// routes.get("/ongs", async (req, res) => {
//   const ongs = await connection("ongs").select("*");
//   return res.json(ongs);
// });

routes.post("/session", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/incidents/:id", ProfileController.index);

module.exports = routes;
