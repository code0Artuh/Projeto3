# Projeto Final M03-BackEnd

<div>
    <img align="right" alt="Rafa-yoda" height="120" width="200" src="https://developers.giphy.com/branch/master/static/api-512d36c09662682717108a38bbb5c57d.gif">
</div>
Projeto final do módulo 03 utilizando o padrão MVC e integração entre back e front.

API criada com node, express e mongoDB.

contem 5 rotas com as seguintes propriedades:

modelos para incerção dos dados.

Alunos:

    nome: { type: String, required: true},
    idade: { type: Number, required: true},    
    turma: { type: String, required: true},
    niver: { type: String, required: false},
    responsavel : { type: String, required: false}.

Disciplinas:

    nome: { type: String, required: true},
    professor: { type: String, required: true},
    turma: { type: String, required: true}.

Livros:

    titulo: { type: String, required: true},
    edicao: { type: Number, required: true},
    ano: { type: Number, required: true},
    autor : { type: String, required: true},
    disciplina: { type: String, required: true}.

Professores:

    nome: { type: String, required: true},
    turma: { type: String, required: true},
    disciplina: { type: String, required: true}.
    
Responsaveis:

    nome: { type: String, required: true},
    aluno: { type: String, required: true}.


# Cada rota contem as opções criar, listar todos, listar por id, editar por id e deletar por id.

Tabela das rotas:

Alunos:

    /aluno/listall
    /aluno/listid/id
    /aluno/update/id
    /aluno/delete/id

Disciplinas:

    /disciplina/add
    /disciplina/listall
    /disciplina/listid/id
    /disciplina/update/id
    /disciplina/delete/id


Livros:

    /livro/add
    /livro/listall
    /livro/listid/id
    /livro/update/id
    /livro/delete/id
    
Professores:
    
    /professor/add
    /professor/listall
    /professor/listid/id
    /professor/update/id
    /professor/delete/id
    
Responsaveis:

    /responsavel/add
    /responsavel/listall
    /responsavel/listid/id
    /responsavel/update/id
    /responsavel/delete/id
# Funcionamento das rotas, instruções validas para todas as 5 rotas.

add:
    utilizando a rota add você consegue adicionar objetos no banco de dados, você precisa seguir o modelo de dados mencionado
    no inicio deste documento, tambem encontrara os modelos detalhados dentro da pasta models do projeto onde contem um arquivo para cada rota.

listall:
    utilizando a rota listall você consegue puxar todos os objetos salvos dentro do banco de dados e lista todos eles em formato json.

listid:
    utilizando a rota listid você consegue puxar um unico objeto especificado pelo id e recebe ele em formato json.

update:
    utilizando a rota update você consegue alterar as propriedades de um objeto já existente no banco de dados,devemos nos atentar em seguir
    os mesmos padrões de inserção de dados do add seguindo as orientações dos models de cada rota existente no projeto da api.

delete:
    utilizando a rota delete você consegue apagar um objeto especifico de dentro do banco de dados apontando ele pelo id.

# O projeto contem uma collection para ser utilizada na extensão thunder client para realizar testes de conexão em todas as rotas.

# O projeto esta rodando com o mongoDB, siga o env.bkp para utilizar o dotenv caso queira, basta seguir o conteudo do arquivo para realizar a conexão com o DB.
