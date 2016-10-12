import * as express from 'express';

export function Routes(app: express.Application) {
    app.get('/api/', function (req: express.Request, res: express.Response) {
        res.send('Hello World');
    });
}