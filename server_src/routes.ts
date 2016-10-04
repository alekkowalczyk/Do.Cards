import * as express from 'express';

export function Routes(app: express.Application) {
    app.get('/api/', function (req, res) {
        res.send('Hello World');
    });
}