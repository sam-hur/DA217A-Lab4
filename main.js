const express = require('express');
const app = express();

const PORT = process.env.PORT || 12345;

app.use(express.json());
app.use(express.static('client'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

