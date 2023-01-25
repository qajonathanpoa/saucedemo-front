#language: pt

Funcionalidade: Feature carrinho

    Sendo um usuario possui conta criada
    Quero fazer fazer login na saucedemo
    Para que eu possa verificar minhas compras no carrinho

    Esquema do Cenario: Deve exibir 1 produto adicionado ao acessar o carrinho

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de produtos da saucedemo
            E seleciono um ou mais de um produto para o meu carrinho <quant_produtos>
            E eu clico sobre o carrinho
            E vejo a grid de produtos na mesma quantidade dos produtos selecionados <quant_produtos>
        Entao deve exibir a página com a quantidade de itens no carrinho <quant_produtos>
    @focus
    Esquema do Cenario: Deve exibir no icone de carrinho quantos produtos restaram ao remover produto do carrinho

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de produtos da saucedemo
            E seleciono um ou mais de um produto para o meu carrinho <quant_produtos>
        Quando eu clico sobre o carrinho
            E vou escolher quais produtos vou remover <quant_a_remover>
            Entao vejo a grid de produtos na mesma quantidade dos produtos selecionados <quant_produtos>
        # Entao deve exibir a página com a quantidade de itens no carrinho <quant_produtos>


        Exemplos:
            | password     | username      | quant_produtos | quant_a_remover |
            | secret_sauce | standard_user | 2              | 1               |


    Esquema do Cenario: Deve exibir mais de um produto adicionado ao acessar o carrinho

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de produtos da saucedemo
            E seleciono um ou mais de um produto para o meu carrinho <quant_produtos>
        Entao deve exibir a página com a quantidade de itens no carrinho <quant_produtos>


        Exemplos:
            | password     | username      | quant_produtos |
            | secret_sauce | standard_user | 1              |
            | secret_sauce | standard_user | 2              |
            | secret_sauce | standard_user | 3              |
            | secret_sauce | standard_user | 4              |
            | secret_sauce | standard_user | 5              |
            | secret_sauce | standard_user | 6              |

    Esquema do Cenario: Deve exibir carrinho vazio ao acessar sem ter adicionado itens no carrinho

        Dado que acesso a home saucedemo como usuario logado
            E seleciono um ou mais de um produto para o meu carrinho <quant_produtos>
        Entao deve exibir a pagina com o valor de carrinho vazio


        Exemplos:
            | password     | username      | quant_produtos |
            | secret_sauce | standard_user |                |
