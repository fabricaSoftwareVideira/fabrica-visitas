const latitudePermitida = -27.026361;
const longitudePermitida = -51.144500;
const raioPermitido = 500;

function calcularDistancia(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const toRad = (graus) => (graus * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

document.getElementById("btn-verificar").onclick = function () {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const dist = calcularDistancia(lat, lon, latitudePermitida, longitudePermitida);
      console.log(`Usuário está em: Lat ${lat}, Lon ${lon}`);
      console.log(`Distância até o local permitido: ${dist.toFixed(2)} metros`);
      if (dist <= raioPermitido) {
        window.location.href = "formulario.html";
      } else {
        document.getElementById("acesso-negado").style.display = "block";
      }
    },
    (err) => {
      console.warn("Erro ao obter localização:", err);
      document.getElementById("acesso-negado").style.display = "block";
    }
  );
};
