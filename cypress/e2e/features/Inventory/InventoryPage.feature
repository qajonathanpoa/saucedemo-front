#language: pt

Funcionalidade: Feature inventory

    Sendo um usuario possui conta criada
    Quero fazer fazer login na saucedemo
    Para que eu possa realizar minhas compras

    Esquema do Cenario: Deve logar com sucesso

        Dado que acesso a home saucedemo
            E informo o usuário <username>
            E informo a senha <password>
        Quando eu clico sobre o botao login
        Entao vejo a pagina de produtos <resultado>

        Exemplos:
            | password     | username      | resultado |
            | secret_sauce | standard_user | Products  |

    Esquema do Cenario: Deve exibir a página de login ao selecionar a opção de logout

        Dado que acesso a home saucedemo
            E informo o usuário <username>
            E informo a senha <password>
        Quando eu clico sobre o botao login
            E eu clico sobre o botao logout
        Entao vejo a pagina de login <resultado>

        Exemplos:
            | password     | username      | resultado               |
            | secret_sauce | standard_user | Accepted usernames are: |

    Esquema do Cenario: Deve exibir mensagem ao acessar página de produtos após ter feito logout

        Dado que acesso a home saucedemo
            E informo o usuário <username>
            E informo a senha <password>
        Quando eu clico sobre o botao login
            E eu clico sobre o botao logout
        Entao tento acessar a página de produtos apos efetuar logout <resultado>

        Exemplos:
            | password     | username      | resultado                                  |
            | secret_sauce | standard_user | You can only access '/inventory-item.html' |
    @focus
    Esquema do Cenario: Deve exibir carrinho vazio ao acessar sem ter adicionado itens no carrinho

        Dado que acesso a home saucedemo
            E informo o usuário <username>
            E informo a senha <password>
        Quando eu clico sobre o botao login
        Quando seleciono os produtos para o meu carrinho <produto>
        Entao deve exibir a página com a quantidade de itens do carrinho

        Exemplos:
            | password     | username      | produto               |
            | secret_sauce | standard_user | Sauce Labs Backpack   |
            | secret_sauce | standard_user | Sauce Labs Bike Light |
            | secret_sauce | standard_user | {enter}               |

