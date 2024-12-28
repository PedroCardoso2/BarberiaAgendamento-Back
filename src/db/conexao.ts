import { Pool } from 'pg';

// Criar uma pool de conexões com o PostgreSQL
const pool = new Pool({
  user: 'meu_usuario',
  host: 'localhost',
  database: 'meu_banco',
  password: 'minha_senha',
  port: 5432,
});

// Função para fazer uma consulta SQL e retornar o resultado
const fetchData = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log(res.rows); // Exibe o resultado da consulta
  } catch (err) {
    console.error('Erro na consulta:', err);
  }
};

fetchData();
