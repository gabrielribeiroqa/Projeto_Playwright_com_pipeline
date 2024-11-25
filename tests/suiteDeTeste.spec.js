
const { test, expect } = require('@playwright/test');
const { TestePage } = require('../support/pages/TestePage');
const dotenv = require('dotenv');

dotenv.config();

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL);
    await expect(page).toHaveTitle(/Mentoria de automação/);
});

test.describe('Automação de Teste com Playwright', () => {

    test('Tentar eniviar o formulário sem preencher os campos obrigatórios', async ({ page }) => {
        const testePage = new TestePage(page);

        await test.step('Dado que eu esteja no site do QAutomatizado', async () => { });

        await test.step('Quando clicar no botão confirmar teste sem preencher ou selecionar nenhum campo obrigatório', async () => { });
        await testePage.clicarBotaoConfirmarTeste()

        await test.step('Então o formulário não pode ser enviado e tem que aparecer as mensagens obrigatórias', async () => { });
        
        await testePage.validarMensagemErroNome()
        await testePage.validarMensagemErroSobreNome()
        await testePage.validarMensagemErroEmail()
        await testePage.validarMensagemErroDescricao()
        await testePage.validarMensagemErroBotaoDeRadio()

        const mensagemObrigatoria = test.info().title;
        await page.screenshot({ path: `screenshot-mensagemObrigatoria-${mensagemObrigatoria}.png`, fullPage: true })

        await test.step('E quando clicar no botão redefinir o formulário tem que ser atualizado novamente', async () => { });
        await testePage.clicarBotaoResetar()
    })

    test('Preencher os campos de textos', async ({ page }) => {
        const testePage = new TestePage(page);

        await test.step('Dado que eu esteja no site do QAutomatizado', async () => { });

        await test.step('Quando preencho o campo de texto com o nome', async () => { });
        await testePage.preencherCampoNome();

        await test.step('E preencho o campo de texto com o sobrenome', async () => { });
        await testePage.preencherCampoSobreNome();

        await test.step('E preencho o campo de texto com o email', async () => { });
        await testePage.preencherCampoEmail();

        await test.step('E preencho o campo de texto com uma descrição', async () => { });
        await testePage.preencherCampoDescricao();

        await test.step('Então todos os campos de textos são preenchidos', async () => { });
        const camposDeTextoPreenchidos = test.info().title;
        await page.screenshot({ path: `screenshot-camposDeTextoPreenchidos-${camposDeTextoPreenchidos}.png`, fullPage: true })

    });

    test('Selecionar os botões de radio', async ({ page }) => {
        const testePage = new TestePage(page);

        await test.step('Dado que eu esteja no site do QAutomatizado', async () => { });

        await test.step('Quando seleciono o botão de radio Youtube', async () => { });
        await testePage.selecionarBotaoDeRadioYoutube()

        await test.step('E seleciono o botão de radio Linkedin', async () => { });
        await testePage.selecionarBotaoDeRadioLinkedin()

        await test.step('Então os botães de radio são selecionados', async () => { });
        const botaoDeRadioSelecionado = test.info().title;
        await page.screenshot({ path: `screenshot-botaoDeRadioSelecionado-${botaoDeRadioSelecionado}.png`, fullPage: true })

    });

    test('Selecionar select simples, avançado e multiplo', async ({ page }) => {
        const testePage = new TestePage(page);

        await test.step('Dado que eu esteja no site do QAutomatizado', async () => { });

        await test.step('E seleciono o JavaScript no select Simples', async () => { });
        await testePage.selecionarSelectSimples()
        const javaScriptSelecionado = test.info().title;
        await page.screenshot({ path: `screenshot-javaScriptSelecionado-${javaScriptSelecionado}.png`, fullPage: true })

        await test.step('E seleciono o Python no select Avançado', async () => { });
        await testePage.selecionarSelectAvancado()
        const pythontSelecionado = test.info().title;
        await page.screenshot({ path: `screenshot-pythontSelecionado-${pythontSelecionado}.png`, fullPage: true })

        await test.step('E seleciono todas as opções do select Multiplo', async () => { });
        await testePage.selecionarSelectMultiplo()
        const todasOpcaoesDoSelectMultiploSelecionado = test.info().title;
        await page.screenshot({ path: `screenshot-todasOpcaoesDoSelectMultiploSelecionado-${todasOpcaoesDoSelectMultiploSelecionado}.png`, fullPage: true })
    })

    test('Selecionar a caixa de Seleção', async ({ page }) => {
        const testePage = new TestePage(page);

        await test.step('Dado que eu esteja no site do QAutomatizado', async () => { });

        await test.step('E seleciono as opções da caixa de seleção', async () => { });
        await testePage.selecionarCaixaDeSelecao()

        const caixaDeSelecaoSelecionado = test.info().title;
        await page.screenshot({ path: `screenshot-caixaDeSelecaoSelecionado-${caixaDeSelecaoSelecionado}.png`, fullPage: true })

    })

    test('Enviar o Formulario', async ({ page }) => {
        const testePage = new TestePage(page);

        await test.step('Dado que eu esteja no site do QAutomatizado', async () => { });

        await test.step('Quando clicar no botão confirmar teste', async () => { });
        
        await testePage.preencherCampoNome();
        await testePage.preencherCampoSobreNome();
        await testePage.preencherCampoEmail();
        await testePage.preencherCampoDescricao();
        await testePage.selecionarBotaoDeRadioYoutube()
        await testePage.selecionarSelectSimples()
        await testePage.selecionarSelectAvancado()
        await testePage.selecionarSelectMultiplo()
        await testePage.selecionarCaixaDeSelecao()
        await testePage.clicarBotaoConfirmarTeste()

        const formularioEnviado = test.info().title;
        await page.screenshot({ path: `screenshot-formularioEnviado-${formularioEnviado}.png`, fullPage: true })

        await test.step('Então o formulario é enviado e clico no botão resetar para reiniciar o formulário', async () => { });
        await testePage.clicarBotaoResetar()
    })
});
