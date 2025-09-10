export class ArraySimples {
  private itens: string[];

  constructor(itens: string[]) {
    this.itens = itens;
  }

  public removeDuplicados(): string[] {
    const arrayLimpo: string[] = [];
    for (let i = 0; i < this.itens.length; i++) {
      const item: string = this.itens[i]!;
      if (!arrayLimpo.includes(item)) {
        arrayLimpo.push(item);
      }
    }
    return arrayLimpo;
  }
}
