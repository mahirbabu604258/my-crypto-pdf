const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const exactHash = "8ab69bd8ff762feb4d2aa9d78114a5e60822fd7aa0cfc455a01e78668b645b97";

app.get('/:hash', (req, res) => {
    if (req.params.hash === exactHash) {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename="verified.pdf"');
        res.sendFile(path.join(__dirname, 'document.pdf'));
    } else {
        res.status(404).send('Access Denied: Invalid Hash.');
    }
});

app.use((req, res) => { res.status(404).send('Access Denied.'); });
app.listen(PORT);
