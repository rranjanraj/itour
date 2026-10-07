const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const users = [
  { email: "demo@itour.com", password: "fly1234", name: "Demo Traveller" }
];

app.post("/api/login", (req, res) => {
  const email = String(req.body.email || "").toLowerCase();
  const password = req.body.password;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ ok: false, message: "Email or password is incorrect." });
  }
  res.json({ ok: true, message: "Welcome aboard, " + user.name + "!" });
});

app.listen(3000, () => {
  console.log("Server chal raha hai: http://localhost:3000");
});