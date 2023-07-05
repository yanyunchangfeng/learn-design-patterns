let express = require('express');
const path = require('path');
let app = express();
app.get('/lazy', function (req, res) {
  res.sendFile(path.join(__dirname, '4.html'));
});
app.get('/images/loading.gif', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'loading.gif'));
});
app.get('/images/:name', (req, res) => {
  setTimeout(function () {
    res.sendFile(path.join(__dirname, req.path));
  }, 3000);
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '3.html'));
});
app.listen(8000);
