import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { StateService } from 'src/app/services/state.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-admin-manage-product',
  templateUrl: './admin-manage-product.component.html',
  styleUrls: ['./admin-manage-product.component.css']
})


export class AdminManageProductComponent implements OnInit {
  public productName: string;
  public price: number;
  public image: string;
  public categoryId: number;
  public productId: string;
  public isAdminEdit: boolean = false
  public path: number = 0


  


  constructor(public stateService: StateService, public productServices: ProductService, private uploadService: UploadFileService) {
    this.productName = this.stateService.productToEdit.productName
    this.price = this.stateService.productToEdit.price
    this.image = this.stateService.productToEdit.image
    this.categoryId = this.stateService.productToEdit.categoryId
    this.productId = this.stateService.productToEdit.productId
  }

  ngOnInit(): void {
    console.log(this.stateService.productToEdit);
  }
  public onCloseManageClick() {
    this.stateService.isManageProductClicked = false
  }

  public onUpdateProductClick() {
    let newProductDetails = { productName: this.productName, price: this.price, categoryId: this.categoryId, image: this.image, productId: this.productId }
    console.log(newProductDetails);

    const observable = this.productServices.updateProduct(newProductDetails)
    observable.subscribe((successfulServerRequestData) => {

      console.log(successfulServerRequestData);
      this.stateService.getAllProduct()
      this.stateService.isManageProductClicked = false
      console.log("Update Successfull!");
      this.stateService.toast.success(`Update Successfull!`);

    }, ServerErrorResponse => {
      this.stateService.isServerError = this.stateService.isServerError ? true : true;
      this.stateService.serverError = JSON.parse(JSON.stringify(ServerErrorResponse.error.error))
      console.log(this.stateService.isServerError);
    })
  }


  public onAddNewProductClick() {
    let newProduct = { productName: this.productName, price: this.price, categoryId: this.categoryId, image: this.image }
    console.log(newProduct);

    const observable = this.productServices.addNewProduct(newProduct)
    observable.subscribe((successfulServerRequestData) => {
      console.log(successfulServerRequestData);
      this.stateService.getAllProduct()
      this.stateService.isManageProductClicked = false
      console.log("New product added!");
      this.stateService.toast.success(`New product added!`);


    }, ServerErrorResponse => {
      this.stateService.isServerError = this.stateService.isServerError ? true : true;
      this.stateService.serverError = JSON.parse(JSON.stringify(ServerErrorResponse.error.error))
      console.log(this.stateService.isServerError);
    })
  }

  public onOptionSelected(event: any) {
    this.categoryId = event.target.value;
    console.log(this.categoryId);
  }

  public onClearEditToProductClick() {
    this.productName = ""
    this.price = 0
    this.categoryId = 0
    this.productName = ""
    this.image = ""
    this.stateService.productToEdit = ""

      console.log(this.stateService.productToEdit);
  }

}





