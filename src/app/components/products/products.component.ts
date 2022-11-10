import { ViewChild, Component, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import { ItemInterface, ITEMS } from 'src/assets/data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'shortcode', 'price', 'quantity', 'actions'];
  dataSource = new MatTableDataSource<ItemInterface>(ITEMS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  faPenToSquare =faPenToSquare;
  faTrash =faTrash;
  
  constructor() { }
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  ngOnInit(): void { }

}