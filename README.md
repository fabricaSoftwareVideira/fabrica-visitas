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

- O registro é salvo no Firebase Firestore com timestamp automático
- Testes de integração verificam o fluxo completo de registro
- A interface é responsiva e funciona em dispositivos iOS e Android

**Prioridade:** Alta

### **História 2: Verificação de geolocalização**

**Título:** Como administrador, quero garantir que os registros de visita ocorram apenas dentro do perímetro da fábrica

**Descrição:** Para garantir a autenticidade dos registros e prevenir fraudes, o sistema deve verificar se o visitante está fisicamente presente na fábrica no momento do registro.

**Critérios de Aceitação:**

- O aplicativo solicita permissão para acessar a localização do usuário de forma clara, explicando o motivo
- O sistema obtém as coordenadas GPS do visitante com precisão mínima de 10 metros
- A localização é comparada com as coordenadas da fábrica, considerando um raio configurável (padrão: 50 metros)
- Se o visitante estiver fora do perímetro permitido, é exibida uma mensagem específica: "Para registrar sua visita, você precisa estar nas dependências da fábrica de software"

**Definição de Pronto:**

- Função implementada com tratamento de erros e casos extremos (GPS desativado, permissão negada)
- Documentação clara sobre o funcionamento da verificação geográfica

**Prioridade:** Média

### **História 3: Gestão de dados de visitas**

**Título:** Como administrador, quero um sistema robusto para armazenar e gerenciar os registros de visitas

**Descrição:** O sistema deve armazenar de forma segura e organizada todos os dados de visitas, permitindo fácil acesso, consulta e exportação por parte dos administradores.

**Critérios de Aceitação:**

- Cada registro de visita contém os seguintes dados:
  - ID único (gerado automaticamente)
  - Nome completo do visitante (obrigatório)
  - E-mail (obrigatório, com validação de formato)
  - Empresa/Instituição (opcional)
  - Motivo da visita (opcional)
  - Data e hora de entrada (gerado automaticamente)
  - Data e hora de saída (opcional, para check-out)
  - Coordenadas geográficas (latitude e longitude)
  - Precisão da localização (em metros)
  - Foto do visitante (opcional)
- O sistema implementa regras de segurança no Firebase para proteger os dados
- Dados são armazenados em conformidade com a LGPD, com política de retenção definida.

**Prioridade:** Alta

### **História 4: Sistema de notificações**

**Título:** Como administrador, quero receber notificações automáticas sobre novos registros de visitas

**Descrição:** O sistema deve enviar notificações automáticas para os administradores sempre que uma nova visita for registrada, permitindo acompanhamento em tempo real.

**Critérios de Aceitação:**

- Após o registro bem-sucedido, o sistema envia automaticamente e-mail para os endereços configurados (padrão: `fabricadesoftware.videira@ifc.edu.br`)
- O e-mail inclui todas as informações do visitante em formato legível
- A foto do visitante é anexada ao e-mail quando disponível

**Definição de Pronto:**

- Implementação usando Firebase Functions para processamento assíncrono

**Prioridade:** Baixa

### **História 5: Interface responsiva para registro de visitas**

**Título:** Como visitante, quero uma experiência de usuário intuitiva e acessível para registrar minha visita

**Descrição:** A interface de registro deve ser amigável, rápida e funcionar bem em qualquer dispositivo, priorizando simplicidade e acessibilidade.

**Critérios de Aceitação:**

- Interface implementada com design responsivo para mobile.
- Tempo de carregamento inicial menor que 2 segundos em conexões 4G
- Feedback visual e textual para todas as ações do usuário
- Campos com validação em tempo real e mensagens de erro específicas
- Botões com tamanho adequado para uso em dispositivos touchscreen

**Definição de Pronto:**

- Testes em múltiplos navegadores (Chrome, Safari, Firefox, Edge)
- Testes de usabilidade com pelo menos 5 usuários reais

**Prioridade:** Baixa

### **História 6: Painel administrativo de visitas**

**Título:** Como administrador, quero um painel para visualizar, filtrar e exportar os registros de visitas

**Descrição:** Os administradores precisam de uma interface dedicada para gerenciar os registros de visitas, com recursos de busca e filtragem.

**Critérios de Aceitação:**

- Painel protegido por autenticação segura (Firebase Authentication)
- Listagem de todas as visitas com paginação e ordenação configurável
- Visualização detalhada de cada registro com todos os dados

**Definição de Pronto:**

- Interface responsiva com design consistente
- Documentação de uso do painel administrativo

**Prioridade:** Baixa
