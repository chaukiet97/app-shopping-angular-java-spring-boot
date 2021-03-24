import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-ins-group-product',
  templateUrl: './ins-group-product.component.html',
  styleUrls: ['./ins-group-product.component.css']
})
export class InsGroupProductComponent implements OnInit {
  formProductsGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsGroupProductComponent>,
    // public dialog: NgDialogAnimationService,
    @Inject(MAT_DIALOG_DATA) public item: any,
  ) { }

  ngOnInit(): void {
    if (this.item.data.id) {
      this.fromConfig(this.item.data);
    }
    else {
      this.fromConfig(0);
    }
  }
  fromConfig(item: any) {
    let config = {
      id: [item.id || 0],
      name: [item.name, Validators.required]
    }
    this.formProductsGroup = this.formBuilder.group(config);


  }
  onIns() { }

}
