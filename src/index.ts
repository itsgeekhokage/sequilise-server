import express from 'express';
import roleRoute from "./routes/roleRoute";
import controlsRoute from "./routes/controlsRoute";
import cors from "cors";

import { setUpAssociations } from "./models/association";
import sequelize from "./db/mysql"; // Your Sequelize instance
import Role from "./models/roleModel";
import AccessControl from "./models/accessControlModel";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

Role.initialize(sequelize);
AccessControl.initialize(sequelize);

// Set up associations
setUpAssociations(sequelize);

app.use("/roles", roleRoute);
app.use("/controls", controlsRoute)

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

sequelize
  .sync({})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });