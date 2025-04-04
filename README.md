## Aplicativo para Registro de Visitas na Fábrica de Software

O objetivo deste projeto é desenvolver um aplicativo web para registro de visitas na fábrica de software do Instituto Federal Catarinense, campus Videira.

### **Histórias de Usuário**

As histórias de usuário a seguir foram elaboradas para atender às necessidades dos visitantes e administradores da fábrica de software, visando garantir um processo de registro de visitas eficiente, seguro e amigável.

### **História 1: Registrar visita via QR Code**

**Título:** Como visitante, quero escanear um QR Code para iniciar o processo de registro de visita na fábrica de software

**Descrição:** O visitante deve poder utilizar seu próprio dispositivo móvel para iniciar o processo de registro através de um QR Code disponibilizado na entrada da fábrica, proporcionando uma experiência rápida e sem contato.

**Critérios de Aceitação:**

- Ao escanear o QR Code com qualquer aplicativo de leitura, o visitante é direcionado para a aplicação web de registro
- A aplicação solicita permissão para acessar a câmera e a localização do dispositivo
- É exibido um formulário intuitivo com campos obrigatórios (nome e e-mail) e opcionais (empresa, motivo da visita)
- O visitante pode capturar sua foto através da câmera frontal do dispositivo, com prévia antes de confirmar
- O sistema valida os dados inseridos antes de enviar (formato de e-mail válido, nome não vazio)
- Ao confirmar, o sistema exibe um indicador de progresso durante o processo de salvamento
- Uma confirmação visual clara (ícone de check verde com animação) e textual ("Visita registrada com sucesso!") é exibida
- **Desafio**: O visitante recebe a opção de gerar um crachá digital temporário após o registro bem-sucedido

**Definição de Pronto:**

- O registro é salvo no banco de dados com timestamp automático
- A interface é responsiva e funciona em dispositivos iOS e Android

**Prioridade:** Alta
