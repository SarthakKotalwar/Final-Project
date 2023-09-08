document.addEventListener('DOMContentLoaded', () => {
    // Handle appointment booking form submission
    const appointmentForm = document.getElementById('appointment-form');
    const appointmentList = document.getElementById('appointment-list');

    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const doctorId = document.getElementById('doctor').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const patientName = document.getElementById('patientName').value;

        // Create a new appointment item
        const appointmentItem = document.createElement('li');
        appointmentItem.textContent = `Appointment with Dr. ${doctorId} on ${date} at ${time} by ${patientName}`;
        
        // Add the new appointment to the list
        appointmentList.appendChild(appointmentItem);

        // Clear the form fields
        appointmentForm.reset();
    });
});
