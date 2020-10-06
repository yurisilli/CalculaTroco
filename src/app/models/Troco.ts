import { ItemTroco } from './ItemTroco';

export class Troco {

    constructor(
        public mensagem?: string,
        public vlrCompra?: number,
        public vlrPago?: number,
        public vlrTroco?: number,
        public itensTroco?: ItemTroco[]
    ) { }

}