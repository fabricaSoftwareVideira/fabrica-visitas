CREATE TABLE visitas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  empresa VARCHAR(100),
  motivo TEXT,
  foto_base64 TEXT, -- imagem capturada em base64
  data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

const SUPABASE_URL = "https://qwuhisepmwkcfszuhihj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3dWhpc2VwbXdrY2ZzenVoaWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjI4NjcsImV4cCI6MjA2MDM5ODg2N30.h86j1nkdl80RVNMRiE4651Yk5KJSbaGTck5FZIxYTZI";
