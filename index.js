import dotenv from 'dotenv';
dotenv.config();
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

import express from 'express';
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', async (req, res) => {
    const { data, error } = await supabase
    .from("visitas")
    .select("nome, email, empresa, motivo, foto_base64, data_registro")
    .order("data_registro", { ascending: false });
    console.log(data)
    res.render("home", {data});
})

app.get('/visita', async (req, res) => {
    const { data, error } = await supabase
    .from("visitas")
    .select("nome, email, empresa, motivo, foto_base64, data_registro")
    .order("data_registro", { ascending: false });
    console.log(data)
    res.render("visita", {data});
})

app.get('/crachadigital', async (req, res) => {
    const { data, error } = await supabase
    .from("visitas")
    .select("nome, email, empresa, motivo, foto_base64, data_registro")
    .order("data_registro", { ascending: false });
    console.log(data)
    res.render("crachadigital", {data});
})

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
  console.log(process.env.NOME)
})
