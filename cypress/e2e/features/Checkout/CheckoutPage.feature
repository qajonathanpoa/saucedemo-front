#language: pt

Funcionalidade: Feature checkout

    Sendo um usuario possui conta criada
    Quero acessar a pagina de checkout
    Para que eu possa realizar o pagamento de minhas compras

    Esquema do Cenario: Deve exibir mensagem ao prosseguir sem preencher identificação

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de checkout
        Quando clico sobre o botao continue
        Entao devo ser obrigado a preencher os campos obrigatorios <campo_obrigatorio>

        Exemplos:
            | primeiro_nome | ultimo_nome | cep     | campo_obrigatorio      |
            | {enter}       | {enter}     | {enter} | First Name is required |

    Esquema do Cenario: Deve exibir mensagem ao prosseguir sem preencher primeiro nome

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de checkout
            E preencho o ultimo nome <ultimo_nome>
        Quando clico sobre o botao continue
        Entao devo ser obrigado a preencher os campos obrigatorios <campo_obrigatorio>

        Exemplos:
            | primeiro_nome | ultimo_nome | cep    | campo_obrigatorio      |
            | {enter}       | qwe         | 012345 | First Name is required |


    Esquema do Cenario: Deve exibir mensagem ao prosseguir sem preencher ultimo nome

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de checkout
            E preencho o primeiro nome <primeiro_nome>
        Quando clico sobre o botao continue
        Entao devo ser obrigado a preencher os campos obrigatorios <campo_obrigatorio>

        Exemplos:
            | primeiro_nome | ultimo_nome | cep    | campo_obrigatorio     |
            | qwe           | {enter}     | 012345 | Last Name is required |

    Esquema do Cenario: Deve exibir mensagem ao prosseguir sem preencher cep

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de checkout
            E preencho o primeiro nome <primeiro_nome>
            E preencho o ultimo nome <ultimo_nome>
        Quando clico sobre o botao continue
        Entao devo ser obrigado a preencher os campos obrigatorios <campo_obrigatorio>

        Exemplos:
            | primeiro_nome | ultimo_nome | cep    | campo_obrigatorio       |
            | qwe           | qwe         | 012345 | Postal Code is required |

    Esquema do Cenario: Deve exibir página de revisão da compra ao prosseguir com identificação válida

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de checkout
            E preencho o primeiro nome <primeiro_nome>
            E preencho o ultimo nome <ultimo_nome>
            E prencho o codigo postal <cep>
            E clico sobre o botao continue
        Entao sou direcionado para a pagina de checkout passo dois <validacao_label>

        Exemplos:
            | primeiro_nome | ultimo_nome | cep    | validacao_label    |
            | qwe           | qwe         | 012345 | Checkout: Overview |


    Esquema do Cenario: Exibição da página de compra finalizada

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de checkout
            E preencho o primeiro nome <primeiro_nome>
            E preencho o ultimo nome <ultimo_nome>
            E prencho o codigo postal <cep>
            E clico sobre o botao continue
            E sou direcionado para a pagina de checkout passo dois <validacao_label>
            E clico sobre o botao finish
        Entao sou redirecionado para a pagina de compra finalizada <validacao_label_finish>

        Exemplos:
            | primeiro_nome | ultimo_nome | cep    | validacao_label    | validacao_label_finish                                                                  |
            | qwe           | qwe         | 012345 | Checkout: Overview | THANK YOU FOR YOUR ORDER                                                                |
            | qwe           | qwe         | 012345 | Checkout: Overview | Your order has been dispatched, and will arrive just as fast as the pony can get there! |
