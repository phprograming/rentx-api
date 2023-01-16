# Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro.

**RN**
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado como disponibilidade por padrão.
- O usuário resposável pelo cadastro deve ser um usuário administrador.

# Listagem de carros
**RF**
- Deve ser possível todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveos pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveos pelo nome da marca.
- Deve ser possível listar todos os carros disponíveos pelo nome da carro.

**RN**
- O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro.

**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário resposável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
- Deve ser possível cadastrar a imagem do carro.

**RNF**
- Utilizar o multer para upload dos arquivos.

**RN**
= O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário resposável pelo cadastro deve ser um usuário administrador.

# Alugel de carro
**RF**
- Deve ser possível cadastrar um aluguel.

**RN**
- O aluguel deve ter duração miníma de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
- O usuário deve estar logado na aplicação.