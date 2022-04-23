export class IProducts {
        public constructor(
                public productId?: number,
                public productName?: string,
                public categoryId?: number,
                public price?: number,
                public image?: string,
        ) { }
}
