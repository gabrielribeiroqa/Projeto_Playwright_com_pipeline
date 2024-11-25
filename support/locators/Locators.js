const { th } = require("@faker-js/faker");

exports.Locators = class Locators {
    constructor(page) {
        this.page = page;

        this.CampoDeTexto = {
            nome: '#id_campo_nome',
            sobreNome: '#id_campo_sobrenome',
            email: '#id_campo_email',
            descricao: '#id_campo_descricao',
        };

        this.BotaoDeRadio = {
            youtube: '#id_Youtube',
            linkedin: '#id_Linkedin',
        };

        this.SelectSimples = {
            componenteSimples: '#id_campo_linguagemProgramacaoSimples',
        };

        this.SelectAvancado = {
            componenteAvancado: 'selecione',
            opcaoPython: 'role=option[name="Python"]',
        };

        this.SelectMultiplo = {
            componenteMultiplo: 'input[aria-invalid^="false"][name="multiplaSelecao"]',
        };

        this.Botao = {
            confirmar: '[data-testid="btn_confirm"]',
            resetar: '[data-testid="btn_reset"]',
        };

        this.MensagemErro = {
            formulario: 'form',
        };

        this.caixaDeSelecao = {
            cypress: '#id_checkbox_cypress',
            selenium: '#id_checkbox_selenium',
        }
        this.mensagemConfirmacao = {
            confirmacao: '.Toastify__toast-body > :nth-child(2)',
        }
    }

    // Campos de texto
    CampoDeTexto_Nome() {
        return this.page.locator(this.CampoDeTexto.nome);
    }

    CampoDeTexto_SobreNome() {
        return this.page.locator(this.CampoDeTexto.sobreNome);
    }

    CampoDeTexto_Email() {
        return this.page.locator(this.CampoDeTexto.email);
    }

    CampoDeTexto_Descricao() {
        return this.page.locator(this.CampoDeTexto.descricao);
    }

    // Botões de rádio
    BotaoDeRadio_Youtube() {
        return this.page.locator(this.BotaoDeRadio.youtube);
    }

    BotaoDeRadio_Linkedin() {
        return this.page.locator(this.BotaoDeRadio.linkedin);
    }

    // Selects
    Select_Simples() {
        return this.page.locator(this.SelectSimples.componenteSimples);
    }

    Select_Avancado() {
        return this.page.getByLabel(this.SelectAvancado.componenteAvancado);
    }

    Select_Opcao_Avancado_Python() {
        return this.page.locator(this.SelectAvancado.opcaoPython);
    }

    Select_Multiplo() {
        return this.page.locator(this.SelectMultiplo.componenteMultiplo);
    }

    // Botões
    Botao_ConfirmarTeste() {
        return this.page.locator(this.Botao.confirmar);
    }

    Botao_Resetar() {
        return this.page.locator(this.Botao.resetar);
    }

    // Mensagens de erro
    MensagemDeErro() {
        return this.page.locator(this.MensagemErro.formulario);
    }

    // Caixa de Seleção
    CaixaDeSelecaoCypress() {
        return this.page.locator(this.caixaDeSelecao.cypress)
    }

    CaixaDeSelecaoSelenium() {
        return this.page.locator(this.caixaDeSelecao.selenium)
    }
};
