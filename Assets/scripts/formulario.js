document.addEventListener("DOMContentLoaded", () => {
    const supabaseUrl = "https://qwuhisepmwkcfszuhihj.supabase.co";
    const supabaseKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3dWhpc2VwbXdrY2ZzenVoaWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjI4NjcsImV4cCI6MjA2MDM5ODg2N30.h86j1nkdl80RVNMRiE4651Yk5KJSbaGTck5FZIxYTZI";
    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
  
    const video = document.getElementById("camera-preview");
    const canvas = document.getElementById("canvas");
    const photo = document.getElementById("captured-photo");
    const captureBtn = document.getElementById("capture-btn");
    const retakeBtn = document.getElementById("retake-btn");
    const submitBtn = document.getElementById("submit-btn");
  
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((error) => {
        console.warn("Câmera não disponível ou acesso negado:", error);
        photo.src = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/person-circle.svg";
        photo.style.display = "block";
        video.style.display = "none";
        captureBtn.style.display = "none";
        retakeBtn.style.display = "none";
      });
  
    captureBtn.onclick = () => {
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      context.beginPath();
      context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true);
      context.closePath();
      context.clip();
  
      const videoAspect = video.videoWidth / video.videoHeight;
      const canvasAspect = canvas.width / canvas.height;
      let sx, sy, sWidth, sHeight;
  
      if (videoAspect > canvasAspect) {
        sHeight = video.videoHeight;
        sWidth = sHeight * canvasAspect;
        sx = (video.videoWidth - sWidth) / 2;
        sy = 0;
      } else {
        sWidth = video.videoWidth;
        sHeight = sWidth / canvasAspect;
        sx = 0;
        sy = (video.videoHeight - sHeight) / 2;
      }
  
      context.drawImage(video, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);
      context.restore();
  
      photo.src = canvas.toDataURL("image/png");
      photo.style.display = "block";
      video.style.display = "none";
      captureBtn.style.display = "none";
      retakeBtn.style.display = "inline-block";
    };
  
    retakeBtn.onclick = () => {
      photo.style.display = "none";
      video.style.display = "block";
      captureBtn.style.display = "inline-block";
      retakeBtn.style.display = "none";
    };
  
    document.getElementById("visit-form").onsubmit = async function (e) {
      e.preventDefault();
  
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const empresa = document.getElementById("empresa").value.trim();
      const motivo = document.getElementById("motivo").value.trim();
      const foto = photo.src;
  
      if (!nome || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !foto) {
        alert("Por favor, preencha os campos obrigatórios e tire uma foto.");
        return;
      }
  
      submitBtn.disabled = true;
      document.querySelector(".progress").style.display = "block";
  
      try {
        const { data, error } = await supabase.from("visitas").insert([
          {
            nome,
            email,
            empresa,
            motivo,
            foto_base64: foto,
          },
        ]);
  
        if (error) throw error;
  
        document.querySelector(".progress").style.display = "none";
        document.getElementById("check-icon").style.display = "block";
        document.getElementById("success-message").style.display = "block";
        document.getElementById("countdown").style.display = "block";
  
        let seconds = 20;
        const interval = setInterval(() => {
          seconds--;
          document.getElementById("seconds").innerText = seconds;
          if (seconds === 0) location.reload();
        }, 1000);
      } catch (err) {
        console.error("Erro ao registrar visita:", err.message);
        alert("Erro ao registrar visita. Tente novamente.");
        document.querySelector(".progress").style.display = "none";
        submitBtn.disabled = false;
      }
    };
  });
  
  function gerarCracha() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    let empresa = document.getElementById("empresa").value.trim();
    if (!empresa) empresa = "Não informado";
  
    const params = new URLSearchParams({ nome, email, empresa });
    window.open("crachadigital.html?" + params.toString(), "_blank");
  }
  