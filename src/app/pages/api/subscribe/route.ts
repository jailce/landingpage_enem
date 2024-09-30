import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const csvFilePath = path.join(process.cwd(), 'data', 'subscribers.csv'); // Ajuste o caminho aqui

// Exportando o método POST
export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return NextResponse.json({ message: 'Email inválido.' }, { status: 400 });
  }

  const csvLine = `${email}\n`;

  // Grava o e-mail no arquivo CSV
  fs.appendFile(csvFilePath, csvLine, (err) => {
    if (err) {
      return NextResponse.json({ message: 'Erro ao gravar no arquivo.' }, { status: 500 });
    }
  });

  return NextResponse.json({ message: 'Email salvo com sucesso!' }, { status: 200 });
}
