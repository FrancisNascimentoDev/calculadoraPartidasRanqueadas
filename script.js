// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
  }
  
  // Função para determinar o nível com base nas vitórias
  function determinarNivel(vitorias) {
    if (vitorias < 10) {
      return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      return "Lendário";
    } else if (vitorias >= 101) {
      return "Imortal";
    } else {
      return "Nível desconhecido";
    }
  }
  
  // Manipula o envio do formulário
  document.getElementById('rankedForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
  
    // Obtém os valores do formulário
    let vitorias = parseInt(document.getElementById('vitorias').value);
    let derrotas = parseInt(document.getElementById('derrotas').value);
  
    // Chama a função calcularSaldo para obter o saldo de vitórias
    let saldo = calcularSaldo(vitorias, derrotas);
  
    // Determina o nível do jogador com base nas vitórias
    let nivel = determinarNivel(vitorias);
  
    // Exibe o resultado na página
    document.getElementById('resultado').innerHTML = `O Herói tem saldo de ${saldo} vitórias e está no nível ${nivel}.`;
  });
  