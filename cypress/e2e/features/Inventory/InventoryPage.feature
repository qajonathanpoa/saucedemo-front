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


    Esquema do Cenario: Deve exibir mensagem ao acessar página de produtos após ter feito logout

        Dado que acesso a home saucedemo
            E informo o usuário <username>
            E informo a senha <password>
        Quando eu clico sobre o botao login
            E eu clico sobre o botao logout
        Entao tento acessar a página de produtos apos efetuar logout <resultado>

        Exemplos:
            | password     | username      | resultado                                  |
            | secret_sauce | standard_user | Epic sadface: You can only access '/inventory.html' when you are logged in. |





    

