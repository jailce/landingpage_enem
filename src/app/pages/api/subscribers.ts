import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const csvFilePath = path.join(process.cwd(), 'subscribers.csv');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ message: 'Email inválido.' });
    }

    // Grava o e-mail no arquivo CSV
    const csvLine = `${email}\n`;

    fs.appendFile(csvFilePath, csvLine, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Erro ao gravar no arquivo.' });
      }
      res.status(200).json({ message: 'Email salvo com sucesso!' });
    });
  } else {
    // Método não permitido
    res.setHeader('Allow', ['POST']);
    res.status(404).end(`Método ${req.method} não permitido.`);
  }
}
