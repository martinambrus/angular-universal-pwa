const express = require('express');

const app = express();

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', 'dist');

app.use('/', express.static('dist', { index: false }));

app.get('/**', (req, res) => {
    var basePath;
    if(req.headers['host'] && req.headers['host'].indexOf(".amazonaws.com") > -1)
        basePath = '/production/';
    else
        basePath = '/';
    res.render('./index', {req, res, basePath: basePath });
});


module.exports=app;
