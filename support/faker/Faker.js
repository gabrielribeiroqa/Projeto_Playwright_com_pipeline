const { faker } = require('@faker-js/faker');

exports.Faker = class Faker {
    //GERAR NOME
    gerarNome() {
        return faker.person.firstName();
    }
    //SOBRENOME
    gerarSobrenome() {
        return faker.person.lastName();
    }
    //GERAR EMAIL
    gerarEmail(nome, sobrenome) {
        return faker.internet.email(nome, sobrenome);
    }
    //GERAR TEXTO EM LOREN IMPSUM
    // Gera um texto em Lorem Ipsum com o número especificado de palavras
    gerarTextoLoremIpsum(palavras = 20) {
        return faker.lorem.words(palavras);
    }
};

