# Calculadora de Partidas Ranqueadas

## Descrição

Este projeto é uma calculadora de partidas ranqueadas, onde o usuário pode inserir a quantidade de vitórias e derrotas de um jogador e obter o saldo de vitórias e o nível de ranque do jogador, baseado na quantidade de vitórias.

A calculadora exibe o saldo de vitórias e determina o nível do jogador de acordo com o número de vitórias.

### Níveis de Ranque

- Menos de 10 vitórias: Ferro
- Entre 11 e 20 vitórias: Bronze
- Entre 21 e 50 vitórias: Prata
- Entre 51 e 80 vitórias: Ouro
- Entre 81 e 90 vitórias: Diamante
- Entre 91 e 100 vitórias: Lendário
- Mais de 101 vitórias: Imortal

## Funcionalidades

- **Cálculo do saldo de vitórias**: A função `calcularSaldo` calcula a diferença entre vitórias e derrotas.
- **Determinação do nível de ranque**: A função `determinarNivel` retorna o nível de ranque com base no número de vitórias.
- **Responsividade**: A interface é totalmente responsiva, adaptando-se a dispositivos móveis, tablets e desktops.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização e responsividade.
- **JavaScript**: Lógica de cálculo e interação com o usuário.

## Instruções

1. O usuário insere o número de vitórias e derrotas no formulário.
2. Ao clicar no botão "Calcular", a calculadora exibe o saldo de vitórias e o nível do jogador.

## Responsividade

- **Desktop (>= 1024px)**: A página utiliza uma largura fixa de 600px e fontes maiores para melhor visualização.
- **Tablet (768px - 1023px)**: A página usa 90% da largura da tela e ajusta as fontes.
- **Mobile (< 768px)**: A página usa 100% da largura da tela, com ajustes nas fontes e espaçamentos para otimização do layout.

## Exemplos de Saída

Ao inserir o número de vitórias e derrotas, o resultado será exibido no formato:

```plaintext
O Herói tem saldo de X vitórias e está no nível {Nível}.
