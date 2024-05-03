import express from 'express';
import { controllerWrapper } from './utils/controllerWrapper';

import { HelloController } from './useCases/hello/hello.controller';

const createApp = async () => {
    const app = express();

    app.use(express.json());
    app.get('/hello', controllerWrapper(HelloController));

    return app;
}