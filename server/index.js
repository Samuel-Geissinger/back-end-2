const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


const { getHouse, createHouse, deleteHouse, updateHouse } = require('./controller');
const port = 4004;

app.get('/api/houses', getHouse);
app.post('/api/houses', createHouse);
app.delete('/api/houses/:id', deleteHouse);
app.put('/api/houses/:id', updateHouse);




app.listen(port, () => console.log(`Running on port: ${port}`));