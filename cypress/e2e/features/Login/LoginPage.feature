#language: pt

Funcionalidade: Feature login

    Sendo um usuario que não possui conta criada
    Quero fazer o meu cadastro na saucedemo
    Para que eu possa realizar minhas compras

    Esquema do Cenario: Deve exibir mensagem ao logar sem informar o campo usuario e senha

        Dado que acesso a home saucedemo
            E informo o usuário <username>
            E informo a senha <password>
        Quando eu clico sobre o botao login
        Entao vejo a mensagem <resultado>

        Exemplos:
            | password    | username | resultado                                                   |
            | 123         |          | Username is required                                        |
            | aaa         |          | Username is required                                        |
            | {backspace} | qwe      | Password is required                                        |
            | *           | 12       | Username and password do not match any user in this service |


    Esquema do Cenario: Deve exibir mensagem ao logar com usuário bloqueado

        Dado que acesso a home saucedemo
            E informo o usuário <username>
            E informo a senha <password>
        Quando eu clico sobre o botao login
        Entao vejo a mensagem <resultado>

        Exemplos:
            | password     | username        | resultado                             |
            | secret_sauce | locked_out_user | Sorry, this user has been locked out. |


    Esquema do Cenario: Deve exibir mensagem ao acessar página de produtos sem estar autenticado

        Dado que acesso a pagina de produtos da saucedemo
        Entao observo a mensagem <resultado>

        Exemplos:
            | password | username | resultado           |
            | {alt}    | {alt}    | You can only access |

    Esquema do Cenario: Deve exibir mensagem ao acessar página de produtos sem estar autenticado

        Dado que acesso a pagina de produtos da saucedemo
        Entao observo a mensagem <resultado>

        Exemplos:
            | password | username | resultado           |
            | {alt}    | {alt}    | You can only access |

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