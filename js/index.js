// Atividade 11 - 01

/* 

    Crie um objeto em JavaScript para colocar dois atributos de um
    produto. Atribua o preço e descrição do produto com o valor “90” e a
    descrição com o valor “Mouse”. Mostre no console o valor dos dois
    atributos.

*/

const produto = {
    preco: 90,
    descricao: 'Mouse'
}

console.log(produto.preco);
console.log(produto.descricao);


// Atividade 11 - 02

/* 

    Crie um objeto em JavaScript para colocar 5 atributos de um
    notebook. Atribua os seguintes atributos:
        Processador: i7,
        Memória: 16GB,
        Preço: 5000,
        HD: 1TB,
        SSD: 256GB
    Por fim, mostre o nome e valor de cada atributo no console,
    exatamente como está na atividade.

*/

const pecasComputador = {
    Processador: 'i7',
    Memória: '16GB',
    Preço: 5000,
    HD: '1TB',
    SSD: '256GB'
}

console.log(`Processador = ${pecasComputador.Processador}
Memória = ${pecasComputador.Memória}
Preço = ${pecasComputador.Preço}
HD = ${pecasComputador.HD}
SSD = ${pecasComputador.SSD}`);

            
// Atividade 11 - 03    

/*

    Crie um objeto para colocar nome e duas notas. Atribua nome e
    duas notas para o primeiro objeto, que será nosso primeiro aluno.
    Agora crie mais um objeto para colocar informações do nosso
    segundo aluno. Mostre as informações de cada aluno no console.
    Mostre também a média do primeiro aluno e a média do segundo
    aluno. Por fim mostre a média desta turma de 2 alunos.

*/

    const aluno = {
        nome: 'Matheus',
        nota1: 10,
        nota2: 8
    }
    const aluno2 = {
        nome: 'Pedro',
        nota1: 8,
        nota2: 6
    }

    console.log(aluno);
    console.log(aluno2);
    // console.log(`${JSON.stringify(aluno)}, ${JSON.stringify(aluno2)}`);

    const media = (aluno.nota1 + aluno.nota2) / 2;
    const media2 = (aluno2.nota1 + aluno2.nota2) / 2;

    console.log(`A media de ${aluno.nome} foi: ${media} e a média de ${aluno2.nome} foi: ${media2}`);

    console.log(`A média dos alunos é: ${(media + media2) / 2}`);


// Atividade 11 - 04

/*

    Crie cinco objetos JavaScript dentro de um Array contendo
    nome(texto), idade(número), skills (array), ou seja um total de cinco
    alunos. Agora crie uma função que receba estes cinco objetos e
    mais um parâmetro skill. Dependendo da skill enviada mostrar no
    console.log(), quais alunos têm a skill enviada por parâmetro,
    mostrar todo o objeto.
    Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar
    chamar a função enviando (alunos, “JavaScript”), precisa mostrar o
    Pedro e qual mais se encaixa nessa skill.

*/

const alunos = [
    {
        nome: "Pedro",
        idade: 27,
        skills: ["JavaScript", "TypeScript", "React"],
    },
    {
        nome: "José",
        idade: 38,
        skills: ["JavaScript", "HTML", "CSS"],
    },
    {
        nome: "Claudia",
        idade: 18,
        skills: ["CSS", "TypeScript", "React"],
    },
    {
        nome: "Brgitte",
        idade: 33,
        skills: ["JavaScript", "TypeScript", "Node"],
    },
    {
        nome: "Clodoaldo",
        idade: 64,
        skills: ["JavaScript", ".net", "php"],
    },
];

const habilidades = [];

alunos.forEach(function(aluno) {
    if(aluno.skills.find(function(linguagens){
        return linguagens === "React";
    })){
        habilidades.push(aluno);
    };

});

habilidades.forEach(function(alunos){
    console.log(alunos);
});


// Atividade 11 - 05 

/* 

    Crie um cadastro de pessoas onde o usuário informe o nome, idade
    e se está trabalhando ou não, se a pessoa estiver trabalhando
    pergunte para ele o salário que está ganhando. Para cada pessoa
    cadastrada, pergunte ao usuário se ele deseja continuar
    cadastrando ou não. No final, mostre as pessoas que estão
    desempregadas, as pessoas que estão empregadas separadas
    pelas que ganham mais que 2500 e menos que 2500.

    Exemplo de resultado:
    
        Pessoas desempregadas:
        Nome: Alessandro, Idade: 28
        Nome: Alessandro, Idade: 28

        Pessoas empregadas com salários menores que 2500:
        Nome: Alessandro, Idade: 28, Salário: 1500
        Nome: Alessandro, Idade: 28, Salário: 2400

        Pessoas empregadas com salários maiores que 2500:
        Nome: Alessandro, Idade: 28, Salário: 2700
        Nome: Alessandro, Idade: 28, Salário: 3000

*/

function cadastroPessoas() {
    const cadastrados = [];
    let continuar = true;

    do {
        
        let nome = prompt('Informe aqui seu nome:');
        let idade = Number(prompt('Informe aqui sua idade:'));
        let salario = 0;
        let trabalha = confirm('Está trabalhando no momento?');
        if (trabalha) {
            salario = Number(prompt('Informe aqui o valor do seu salário:'));
        } else {
            alert('Obigado por suas respostas!');
        }

        const pessoa = {
            nome: nome,
            idade: idade,
            trabalha: trabalha,
            salario: salario
        }

        cadastrados.push(pessoa);

        continuar = confirm('Deseja seguir cadastrando?');

    } while (continuar);

    let desempregado = cadastrados.filter(function(pessoa){
    
    if (!pessoa.trabalha) {
        return true;
    }
    });

    console.log(desempregado);
    console.log(' => Pessoas desempregadas');

    desempregado.forEach(pessoaInformada => {

        console.log(`\n Nome: ${pessoaInformada.nome}, Idade: ${pessoaInformada.idade} \n`);
    });


    const menorQue2500 = cadastrados.filter(function(pessoa){
        return pessoa.salario < 2500 && pessoa.salario != 0;
    });

    console.log('=> Pessoas empregadas com salario menor que 2500:');

    menorQue2500.forEach(pessoa => {
        console.log(`\n Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario} \n`);
    });

    
    const maiorQue2500 = cadastrados.filter(function(pessoa){
        return pessoa.salario > 2500 && pessoa.salario != 0;
    });

    console.log('=> Pessoas empregadas com salario maior que 2500:');

    maiorQue2500.forEach(pessoa => {
        console.log(`\n Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario} \n`);
    });

}

cadastroPessoas();