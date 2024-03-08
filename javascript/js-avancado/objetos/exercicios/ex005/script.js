class Conta {
  constructor(saldoCC, saldoCP, juro) {
    this.saldoCC = saldoCC;
    this.saldoCP = saldoCP;
    this.juros = juros;
  }

  deposito(valor) {
    this.saldoCC += valor;
  }

  saque(valor) {
    this.saldoCP -= valor;
  }

  transferenciaCP(valor) {
    this.saldoCC -= valor;
    this.saldoCP += valor;
  }

  transferenciaCC(valor) {
    this.saldoCC -= valor;
    this.saldoCP += valor;
  }

  jurosDeAniversario() {}
}

let conta = new Conta(1000, 5000, 1);
console.log(conta);
conta.saque(500);
console.log(conta);
conta.deposito(5000);
console.log(conta);
conta.transferenciaCP(3000);
console.log(conta);
