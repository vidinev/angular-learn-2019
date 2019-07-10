const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/angular-app'));

app.get('/ngsw-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/ngsw-worker.js'));
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/angular-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
