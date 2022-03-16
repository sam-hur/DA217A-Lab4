const express = require('express');
const app = express();
const open = require('open');

const PORT = process.env.PORT || 12345;
const HOST = 'http://localhost'

app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}. See ${HOST}:${PORT}`);
    open(`${HOST}:${PORT}`);
});

