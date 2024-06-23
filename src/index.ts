import app from "./app";


app.get("/", (req, res) => {
  res.send("<h1>Hello Kazi Byte!, Welcome to Kazi Byte API</h1>");
});

app.get("/api", (req, res) => {
  res.send("<h1>is a api</h1>");
});



export default app;