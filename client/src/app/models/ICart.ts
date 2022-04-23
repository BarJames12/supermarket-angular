export class ICart {
    public constructor(
        public cartId?: number,
        public productId?: number,
        public productName?: string,
        public amount?: number,
        public price?: number,
        public totalPrice?: number,
        public image?: string,
    ) { }
}