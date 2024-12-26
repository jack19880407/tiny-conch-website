const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const dataFile = path.join(__dirname, 'appointments.json');

// 确保数据文件存在
if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]));
}

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());

app.post('/api/appointments', (req, res) => {
    const { name, phone, email, service, message } = req.body;
    const appointments = JSON.parse(fs.readFileSync(dataFile));
    
    const newAppointment = {
        id: Date.now(),
        name,
        phone,
        email,
        service,
        message,
        created_at: new Date().toISOString()
    };
    
    appointments.push(newAppointment);
    fs.writeFileSync(dataFile, JSON.stringify(appointments, null, 2));
    
    res.json(newAppointment);
});

app.get('/api/appointments', (req, res) => {
    const appointments = JSON.parse(fs.readFileSync(dataFile));
    res.json(appointments);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

