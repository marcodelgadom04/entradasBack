const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./libs/sequelize");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

const routerApi = require("./routes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Proyecto de entradas");
});

async function iniciarApp() {
  try {
    await sequelize.authenticate();
    console.log("Se conecto a la base de datos.");
    await sequelize.sync();
    console.log("Sincronizo con la base de datos.");

    routerApi(app);

    app.listen(PORT, () => {
      console.log(`App ejecutandose en el puerto ${PORT}`);
    });
  } catch (err) {
    console.error("Error al iniciar:", err);
  }
}

iniciarApp();
