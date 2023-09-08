const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// In-memory data storage (replace with a database in a real project)
const doctors = [
  { id: 1, name: 'Dr. Smith' },
  { id: 2, name: 'Dr. Johnson' },
  // Add more doctors
];

const appointments = [];

// Define API routes
app.get('/api/doctors', (req, res) => {
  res.json(doctors);
});

app.post('/api/appointments', (req, res) => {
  const { doctorId, date, time, patientName } = req.body;

  // Check doctor availability (not implemented in this example)
  // Add more validation and error handling in a real project

  const appointment = {
    id: appointments.length + 1,
    doctorId,
    date,
    time,
    patientName,
  };

  appointments.push(appointment);
  res.json(appointment);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
