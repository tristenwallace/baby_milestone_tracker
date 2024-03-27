import express from "express";
import bodyParser from "body-parser";

// Create an Express application
const app = express();

app.use(bodyParser.json())

console.log(process.env); // Check all environment variables

// Specify the port to listen on
const PORT = process.env.PORT || 3000;

// Define a route for HTTP GET requests to the root URL ('/')
app.get('/', (req, res) => {
  // Send a response when this route is accessed
  res.send('Server is running successfully!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});