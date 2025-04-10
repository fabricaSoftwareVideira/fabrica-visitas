<?php
$host = 'localhost';
$db   = 'visitas_fabrica';
$user = 'root';
$pass = ''; // ou sua senha
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
  $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
  http_response_code(500);
  echo json_encode(['success' => false, 'message' => 'Erro na conexão com o banco']);
  exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => 'Dados inválidos']);
  exit;
}

$stmt = $pdo->prepare("INSERT INTO visitas (nome, email, empresa, motivo, foto) VALUES (?, ?, ?, ?, ?)");

$fotoBase64 = explode(',', $data['foto'])[1]; // remove o prefixo "data:image/png;base64,"
$fotoBinaria = base64_decode($fotoBase64);

try {
  $stmt->execute([
    $data['nome'],
    $data['email'],
    $data['empresa'],
    $data['motivo'],
    $fotoBinaria
  ]);
  echo json_encode(['success' => true]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
