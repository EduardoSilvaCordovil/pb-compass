class Carrinho {
  constructor(itens, qtd, valorTotal) {
    this.itens = itens;
    this.qtd = qtd;
    this.valorTotal = valorTotal;
  }

  addItem(item) {
    let contador = 0;

    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.qtd) {
        this.itens[itemCarrinho].qtd += qtd;
        contador = 1;
      }
    }
    if (contador == 0) {
      this.itens.push(item);
    }
    this.qtd += item.qtd;
    this.valorTotal += item.preco * item.qtd;
  }

  removerItem(item) {
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.qtd) {
        let obj = this.itens[itemCarrinho];
        let index = this.findIndex(function (obj) {
          return obj.id == item.id;
        });
        his.qtd -= this.itens[itemCarrinho].qtd;
        this.valorTotal +=
          this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
        this.itens.splice(index, 1);
      }
    }
  }
}

let carrinho = new Carrinho(
  [
    {
      id: 1,
      nome: "Camisa",
      qtd: 1,
      preco: 20,
    },
    {
      id: 2,
      nome: "Calça",
      qtd: 1,
      preco: 50,
    },
  ],
  3,
  120
);
console.log(carrinho);
carrinho.addItem({ id: 1, nome: "Camisa", qtd: 2, preco: 20 });
console.log(carrinho);
carrinho.addItem({ id: 3, nome: "Boné", qtd: 1, preco: 15 });
console.log(carrinho);
carrinho.removerItem({ id: 1, nome: "Camisa", qtd: 2, preco: 20 });
console.log(carrinho);