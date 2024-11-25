const { expect } = require('@playwright/test');
const { Faker } = require('../faker/Faker');
const { Locators } = require('../locators/Locators');

const faker = new Faker();

exports.TestePage = class TestePage {
    constructor(page) {
        this.page = page;
        const loc = new Locators(page);

        // LOCATORS

        // campo de texto
        this.campoNome = loc.CampoDeTexto_Nome();
        this.campoSobreNome = loc.CampoDeTexto_SobreNome();
        this.campoEmail = loc.CampoDeTexto_Email();
        this.campoDescricao = loc.CampoDeTexto_Descricao();

        // botão de radio
        this.botaoYoutube = loc.BotaoDeRadio_Youtube();
        this.botaoLinkedin = loc.BotaoDeRadio_Linkedin();

        // campo select
        this.selectSimples = loc.Select_Simples();
        this.selectAvancado = loc.Select_Avancado();
        this.selectAvancadoPython = loc.Select_Opcao_Avancado_Python();
        this.selectMultiplo = loc.Select_Multiplo();

        // botoes
        this.btnConfirmarTeste = loc.Botao_ConfirmarTeste();
        this.btnResetar = loc.Botao_Resetar();

        // campo de erro
        this.msgDeErroNoFormulario = loc.MensagemDeErro()

        // caixa de seleção
        this.caixaDeSelecaoCypress = loc.CaixaDeSelecaoCypress()
        this.caixaDeSelecaoSelenium = loc.CaixaDeSelecaoSelenium()

    }

    // campos de texto
    async preencherCampoNome() {
        const nome = faker.gerarNome();
        await expect(this.campoNome).toBeVisible();
        await expect(this.campoNome).toBeEmpty()
        await this.campoNome.fill(nome);
    }

    async preencherCampoSobreNome() {
        const sobrenome = faker.gerarSobrenome();
        await expect(this.campoSobreNome).toBeVisible();
        await expect(this.campoSobreNome).toBeEmpty()
        await this.campoSobreNome.fill(sobrenome);
    }

    async preencherCampoEmail() {
        const nome = faker.gerarNome();
        const sobrenome = faker.gerarSobrenome();
        const email = faker.gerarEmail(nome, sobrenome);
        await expect(this.campoEmail).toBeVisible();
        await expect(this.campoEmail).toBeEmpty()
        await this.campoEmail.fill(email);
    }

    async preencherCampoDescricao() {
        const descricao = faker.gerarTextoLoremIpsum();
        await expect(this.campoDescricao).toBeVisible();
        await expect(this.campoDescricao).toBeEmpty()
        await this.campoDescricao.fill(descricao);
    }

    // botões de radio
    async selecionarBotaoDeRadioYoutube() {
        await expect(this.botaoYoutube).toBeVisible();
        await this.botaoYoutube.check();
    }

    async selecionarBotaoDeRadioLinkedin() {
        await expect(this.botaoLinkedin).toBeVisible();
        await this.botaoLinkedin.check();
    }

    // campos de select 
    async selecionarSelectSimples() {
        await expect(this.selectSimples).toBeVisible();
        await this.selectSimples.selectOption('javascript');
    }

    async selecionarSelectAvancado() {
        await expect(this.selectAvancado).toBeVisible();
        await this.selectAvancado.click();
        await expect(this.selectAvancadoPython).toBeVisible();
        await this.selectAvancadoPython.click();
    }

    async selecionarSelectMultiplo() {
        const tags = ['C#', 'Python', 'JavaScript'];
        for (const tag of tags) {
            await expect(this.selectMultiplo).toBeVisible();
            await this.selectMultiplo.fill(tag);
            await this.selectMultiplo.press('ArrowDown')
            await this.selectMultiplo.press('Enter');
        }
    }

    //botão confirmar teste
    async clicarBotaoConfirmarTeste() {
        await expect(this.btnConfirmarTeste).toBeVisible();
        await expect(this.btnConfirmarTeste).toBeEnabled()
        await this.btnConfirmarTeste.click();
    }

    //botão resetar
    async clicarBotaoResetar() {
        await expect(this.btnResetar).toBeVisible();
        await expect(this.btnResetar).toBeEnabled()
        await this.btnResetar.click();
    }

    //mensagem de erro
    async validarMensagemErroNome() {
        const msgObrigatoriaNome = 'O nome é obrigatório'
        const locatorMsgNome = await this.msgDeErroNoFormulario
        await expect(locatorMsgNome).toContainText(msgObrigatoriaNome)
    }

    async validarMensagemErroSobreNome() {
        const msgObrigatoriaSobreNome = 'O sobrenome é obrigatório.'
        const locatorMsgSobreNome = await this.msgDeErroNoFormulario
        await expect(locatorMsgSobreNome).toContainText(msgObrigatoriaSobreNome)
    }

    async validarMensagemErroDescricao() {
        const msgObrigatoriaDescricao = 'A descricao é obrigatória.'
        const locatorMsgDescricao = await this.msgDeErroNoFormulario
        await expect(locatorMsgDescricao).toContainText(msgObrigatoriaDescricao)
    }

    async validarMensagemErroEmail() {
        const msgObrigatoriaEmail = 'O email é obrigatório'
        const locatorMsgEmail = await this.msgDeErroNoFormulario
        await expect(locatorMsgEmail).toContainText(msgObrigatoriaEmail)
    }
    async validarMensagemErroBotaoDeRadio() {
        const msgObrigatoriaBotaoDeRadio = 'Selecionar uma rede social é obrigatório.'
        const locatorMsgBotaoDeRadio = await this.msgDeErroNoFormulario
        await expect(locatorMsgBotaoDeRadio).toContainText(msgObrigatoriaBotaoDeRadio)
    }

    // caixa de seleção
    async selecionarCaixaDeSelecao() {
        await expect(this.caixaDeSelecaoCypress).toBeVisible()
        await expect(this.caixaDeSelecaoCypress).toBeEmpty()
        await this.caixaDeSelecaoCypress.check()
        await this.caixaDeSelecaoCypress.uncheck()

        await expect(this.caixaDeSelecaoSelenium).toBeVisible()
        await expect(this.caixaDeSelecaoSelenium).toBeEmpty()
        await this.caixaDeSelecaoSelenium.click()
    }

};
