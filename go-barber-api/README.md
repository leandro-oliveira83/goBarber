# Recuperação de senha

**RF**
- O usuário deve poder recuperar usa senha informando o seu email;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;
**RNF**
- Utilizar Mailtrap para testar o envios em ambiente de dev;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**
- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ou resetar sua senha;

# Atualização do perfil
**RF**
- O usuário deve poder atualizar o seu nome, email e senha;

**RN**
- O usuário não pode alterar o seu e-mail para um email existente já utilizado por outro usuário;
- Para atualizar a sua senha o usuário precisa confirmar a sua senha atual;
- para atualizar a sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador
**RF**
- O usuário deve poder listar os seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**
- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações dos prestador devem ser armazenadas no MongoDB;
- As notificações dos prestador devem ser enviadas em tempo-real via socket.io;

**RN**
- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços
**RF**
- O usuário deve poder lista todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;
**RNF**
- A listagem de prestadores devem ser armazenas em cache;

**RN**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (primeiro às 8 e o último as 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

