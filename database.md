CREATE DATABASE IF NOT EXISTS visitas_fabrica;
USE visitas_fabrica;

CREATE TABLE visitas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  empresa VARCHAR(100),
  motivo TEXT,
  foto LONGBLOB, -- a imagem capturada em base64 convertida para blob
  data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
