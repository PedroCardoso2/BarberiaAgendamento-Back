import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

app.get('/api', (req: Request, res: Response) => {
    res.send('Bem-Vindo API Service');
});


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
