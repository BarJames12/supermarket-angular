export class EditProductModel {
    public constructor(
        public productName: string,
        public price: number,
        public categoryId: string,
        public image: string,    
    ) { }

}