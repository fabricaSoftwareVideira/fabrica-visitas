const SUPABASE_URL = "https://qwuhisepmwkcfszuhihj.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3dWhpc2VwbXdrY2ZzenVoaWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjI4NjcsImV4cCI6MjA2MDM5ODg2N30.h86j1nkdl80RVNMRiE4651Yk5KJSbaGTck5FZIxYTZI";

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const params = new URLSearchParams(window.location.search);
const nome = params.get("nome");
const email = params.get("email");
const empresa = params.get("empresa") || "Não informada";

document.getElementById("nome").textContent = nome || "Nome não informado";
document.getElementById("email").textContent = email || "Email não informado";
document.getElementById("empresa").textContent = empresa;

async function buscarFoto() {
  if (!email) {
    alert("Nenhum email foi informado.");
    return;
  }

  const emailLimpo = email.trim().toLowerCase();
  console.log("🔍 Buscando foto para:", emailLimpo);

  const { data, error } = await supabase
    .from("visitas")
    .select("foto_base64")
    .eq("email", emailLimpo)
    .order("data_registro", { ascending: false })
    .limit(1);

  if (error) {
    console.error("Erro ao buscar foto:", error.message);
    alert("Erro ao buscar dados.");
    return;
  }

  if (!data || data.length === 0 || !data[0].foto_base64) {
    alert("Nenhuma foto encontrada.");
    return;
  }

  let fotoBase64 = data[0].foto_base64.trim();

  if (!fotoBase64.startsWith("data:image")) {
    fotoBase64 = `data:image/jpeg;base64,${fotoBase64}`;
  }

  const img = document.getElementById("foto");

  if (!fotoBase64 || fotoBase64 === "null" || fotoBase64.length < 100) {
    img.src = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/person-circle.svg";
  } else {
    img.src = fotoBase64;
  }

  img.style.display = "block";
  console.log("✅ Foto exibida com sucesso.");
}

buscarFoto();
