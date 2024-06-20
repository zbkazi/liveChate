import app from "./app";

// Define port and host
const port: number = parseInt(process.env.PORT || '4003', 10);
const host = "0.0.0.0";

// Start the server
app.listen(port, host, () => {
  console.log(`Server is running on port ${port}`);
});
