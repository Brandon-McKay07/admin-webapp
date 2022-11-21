
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  
  public categoryObservable: Observable<any[]> = new Observable();

  prodCategoryBool: boolean = true;
  productCategoryForm:FormGroup = new FormGroup({});
  loader : boolean = false;
  tempFile: any;



constructor(private CategoriesService:CategoriesService, private modalService: NgbModal, private fb:FormBuilder){}


ngOnInit(): void{
  
  this.categoryObservable = this.CategoriesService.getCategories();



}  


openProductCategoryDialog(modelRef:any, productCategoryObj = null) {
  // console.log(productCategoryObj);    
  this.initialForm(productCategoryObj);
  this.modalService.open(modelRef);
}

initialForm(productCategoryObj: any = null) {
  if (productCategoryObj === null) {
    this.productCategoryForm = this.fb.group({
      categoryName: ["", Validators.required],
      categoryDescription: ["", Validators.required],
      categoryImageUrl: ["", Validators.required],
      categoryId: [null],
      active: [true],
      addedOn: [],
    });
  } else {
    this.productCategoryForm = this.fb.group({
      categoryName: [productCategoryObj.categoryName, Validators.required],
      categoryDescription: [productCategoryObj.categoryDescription, Validators.required],
      categoryImageUrl: [productCategoryObj.categoryImageUrl, Validators.required],
      categoryId: [productCategoryObj.categoryId],
      active: [productCategoryObj.active],
    });
  }
}


checkFileType(event: any) {
  this.tempFile = event.target.files[0];
  if (
    this.tempFile.type == "image/png" ||
    this.tempFile.type == "image/jpeg" ||
    this.tempFile.type == "image/jpg"
  ) {
    // console.log("File Ok");
  } else {
    // console.log("File not Ok");
    this.tempFile = null;
    // this.toast.show("Only .png/.jpeg/.jpg file format accepted!!");
  }
}

}

