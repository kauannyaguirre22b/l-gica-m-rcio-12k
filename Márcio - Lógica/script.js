// Função para calcular a área do triângulo
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  
  // Função para calcular a área do círculo
  function areaCirculo(raio) {
    return Math.PI * raio ** 2;
  }
  
  // Função para calcular a área do trapézio
  function areaTrapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) * altura) / 2;
  }
  
  // Função para calcular a área do quadrado
  function areaQuadrado(lado) {
    return lado ** 2;
  }
  
  // Função para calcular a área do retângulo
  function areaRetangulo(lado1, lado2) {
    return lado1 * lado2;
  }
  
  // Lendo os valores de entrada do usuário
  let A = parseFloat(prompt("Digite o valor de A:"));
  let B = parseFloat(prompt("Digite o valor de B:"));
  let C = parseFloat(prompt("Digite o valor de C:"));
  
  // Calculando as áreas
let areaTrianguloResultado = areaTriangulo(A, C);
let areaCirculoResultado = areaCirculo(C);
let areaTrapezioResultado = areaTrapezio(A, B, C);
let areaQuadradoResultado = areaQuadrado(B);
let areaRetanguloResultado = areaRetangulo(A, B);


// Exibindo os resultados no console
console.log("TRIÂNGULO:", areaTrianguloResultado.toFixed(3));
console.log("CÍRCULO:", areaCirculoResultado.toFixed(3));
console.log("TRAPÉZIO:", areaTrapezioResultado.toFixed(3));
console.log("QUADRADO:", areaQuadradoResultado.toFixed(3));
console.log("RETANGULO:", areaRetanguloResultado.toFixed(3));