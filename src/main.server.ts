import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';
import * as awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';

import { ServerAppModule } from './app/server-app.module';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { enableProdMode } from '@angular/core';

enableProdMode();
export const app = express();

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());

app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModule
}));

app.set('view engine', 'html');
app.set('views', 'dist');

app.use('/', express.static('dist', { index: false }));

// Server static files from /browser
app.get('*.*', express.static('dist'));

/*app.get('/!**', (req, res) => {
    if (req.headers.host.indexOf('angular-universal-pwa.maciejtreder.com') > -1 && req.headers.host !== 'www.angular-universal-pwa.maciejtreder.com') {
        res.writeHead (301, {Location: 'https://www.angular-universal-pwa.maciejtreder.com'});
        res.end();
        return;
    }
    res.render('index', {req, res});
});*/

// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render('index', { req, res });
});

// redirection from safari notification to given external page
app.get('/redirect/**', (req, res) => {
  const location = req.url.substring(10);
  res.redirect(301, location);
});

app.post('/testPost', (req, res) => {
  res.status(200).send({receivedValue: req.body.exampleKey});
});
