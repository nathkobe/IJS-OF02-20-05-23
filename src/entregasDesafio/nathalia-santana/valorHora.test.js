const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe ("Calcular Valor Por Hora", () => {
  test("Salário mínimo de 1300 reais", () => {
    const valorPorHoraReal = calcularValorPorHora(1300)
    const valorPorHoraEsperado = 8
    const zero = 0 

    expect(calcularValorPorHora(1300)).toBe(8)
    expect(calcularValorPorHora(1300)).toBeGreaterThan(0)
  })
})