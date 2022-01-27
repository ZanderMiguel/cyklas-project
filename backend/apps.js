const express = require('express');

const apps = express();

apps.listen(3000);

apps.get('/', (req, res) => {

    res.send('<p>home page</p>');

});