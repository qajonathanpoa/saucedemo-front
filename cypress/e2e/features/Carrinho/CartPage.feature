#language: pt

Funcionalidade: Feature carrinho

    Sendo um usuario possui conta criada
    Quero fazer fazer login na saucedemo
    Para que eu possa verificar minhas compras no carrinho


    Esquema do Cenario: Deve exibir carrinho vazio ao acessar sem ter adicionado itens no carrinho

        Dado que acesso a home saucedemo como usuario logado
            E seleciono um ou mais de um produto para o meu carrinho <quant_produtos>
        Entao deve exibir a pagina com o valor de carrinho vazio


        Exemplos:
            | password     | username      | quant_produtos |
            | secret_sauce | standard_user |                |

    Esquema do Cenario: Deve exibir produto adicionado no carrinho ao acessar o carrinho

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de produtos da saucedemo
            E seleciono um ou mais de um produto para o meu carrinho <quant_produtos>
            E eu clico sobre o carrinho
        Entao vejo a grid de produtos na mesma quantidade do carrinho <carrinho_atualizado>

        Exemplos:
            | password     | username      | quant_produtos | carrinho_atualizado |
            | secret_sauce | standard_user | 1              | 1                   |

    Esquema do Cenario: Deve exibir produtos adicionados no carrinho ao acessar o carrinho

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de produtos da saucedemo
            E seleciono um ou mais de um produto para o meu carrinho <quant_produtos>
            E eu clico sobre o carrinho
        Entao vejo a grid de produtos na mesma quantidade do carrinho <carrinho_atualizado>

        Exemplos:
            | password     | username      | quant_produtos | carrinho_atualizado |
            | secret_sauce | standard_user | 2              | 2                   |
            | secret_sauce | standard_user | 3              | 3                   |
            | secret_sauce | standard_user | 4              | 4                   |

    Esquema do Cenario: Deve exibir no icone de carrinho quantos produtos foram adicionados no carrinho

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de produtos da saucedemo
            E seleciono um ou mais de um produto para o meu carrinho <quant_produtos>
            E eu clico sobre o carrinho
            E deve exibir a página com a quantidade de itens no carrinho <carrinho_atualizado>

        Exemplos:
            | password     | username      | quant_produtos | carrinho_atualizado |
            | secret_sauce | standard_user | 1              | 1                   |
            | secret_sauce | standard_user | 2              | 2                   |
            | secret_sauce | standard_user | 3              | 3                   |

    Esquema do Cenario: Deve exibir 1 produto adicionado ao acessar o carrinho

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de produtos da saucedemo
            E seleciono um ou mais de um produto para o meu carrinho <quant_produtos>
            E eu clico sobre o carrinho
            E vejo a grid de produtos na mesma quantidade do carrinho <quant_produtos>
        Entao deve exibir a página com a quantidade de itens no carrinho <carrinho_atualizado>

        Exemplos:
            | password     | username      | quant_produtos | quant_a_remover | carrinho_atualizado |
            | secret_sauce | standard_user | 1              | 0               | 1                   |

    Esquema do Cenario: Deve exibir no icone de carrinho quantos produtos restaram ao remover produto do carrinho

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de produtos da saucedemo
            E seleciono um ou mais de um produto para o meu carrinho <quant_produtos>
        Quando eu clico sobre o carrinho
            E vou escolher quais produtos remover <quant_a_remover>
            E deve exibir a página com a quantidade de itens no carrinho <carrinho_atualizado>
        Entao vejo a grid de produtos na mesma quantidade do carrinho <carrinho_atualizado>


        Exemplos:
            | password     | username      | quant_produtos | quant_a_remover | carrinho_atualizado |
            | secret_sauce | standard_user | 2              | 1               | 1                   |
            | secret_sauce | standard_user | 2              | 2               |                     |
            | secret_sauce | standard_user | 3              | 1               | 2                   |
            | secret_sauce | standard_user | 4              | 1               | 3                   |
            | secret_sauce | standard_user | 4              | 2               | 2                   |
            | secret_sauce | standard_user | 4              | 3               | 1                   |
            | secret_sauce | standard_user | 5              | 1               | 4                   |
            | secret_sauce | standard_user | 5              | 2               | 3                   |
            | secret_sauce | standard_user | 5              | 3               | 2                   |


    Esquema do Cenario: Deve remover produto do a partir da página de carrinho

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de produtos da saucedemo
            E seleciono um ou mais de um produto para o meu carrinho <quant_produtos>
        Quando eu clico sobre o carrinho
            E vou escolher quais produtos remover <quant_a_remover>
            E deve exibir a página com a quantidade de itens no carrinho <carrinho_atualizado>
        Entao vejo a grid de produtos na mesma quantidade do carrinho <carrinho_atualizado>

        Exemplos:
            | password     | username      | quant_produtos | quant_a_remover | carrinho_atualizado |
            | secret_sauce | standard_user | 1              | 1               |                     |
            | secret_sauce | standard_user | 3              | 2               | 1                   |

    Esquema do Cenario: Deve exibir mais de um produto adicionado ao acessar o carrinho

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de produtos da saucedemo
            E seleciono um ou mais de um produto para o meu carrinho <quant_produtos>
        Entao deve exibir a página com a quantidade de itens no carrinho <carrinho_atualizado>


        Exemplos:
            | password     | username      | quant_produtos | carrinho_atualizado |
            | secret_sauce | standard_user | 1              | 1                   |
            | secret_sauce | standard_user | 2              | 2                   |
            | secret_sauce | standard_user | 3              | 3                   |
    
    Esquema do Cenario: Deve exibir página do checkout a partir da página de carrinho

        Dado que acesso a home saucedemo como usuario logado
            E que acesso a pagina de produtos da saucedemo
            E seleciono um ou mais de um produto para o meu carrinho <quant_produtos>
            E eu clico sobre o carrinho
        Quando clico sobre o botao de checkout
        Entao sou direcionado para a pagina de checkout de produtos <resultado_checkout>

        Exemplos:
            | password     | username      | quant_produtos | resultado_checkout         |
            | secret_sauce | standard_user | 1              | Checkout: Your Information |