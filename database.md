CREATE TABLE visitas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  empresa VARCHAR(100),
  motivo TEXT,
  foto_base64 TEXT, -- imagem capturada em base64
  data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);