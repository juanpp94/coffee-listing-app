import { Component, EventEmitter, Output } from '@angular/core';
import { FiltersStyle, ObjFilter } from 'src/app/shared/types/filterStatus';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-section-filter',
  templateUrl: './section-filter.component.html',
  styleUrls: ['./section-filter.component.scss']
})
export class SectionFilterComponent {

  @Output() updateList = new EventEmitter<string>();
  filtersStyleList: ObjFilter = FiltersStyle;
  
  constructor(private productsService: ProductsService) {

  }
  
  ngOnInit() {
    
  }

  chooseFilter(filter: string) {
    this.updateList.emit(filter);


  }

  get allFilterStyles() {
    if(this.productsService.filter === "all") {
      if(this.filtersStyleList['active']) {
        return this.filtersStyleList['active'];
      }
      return {}
    }
    else {
      if(this.filtersStyleList['inactive']) {
        return this.filtersStyleList['inactive'];
      }
      return {}
    }

    
  }

  get availableFilterStyles() {
    if(this.productsService.filter === "available") {
      if(this.filtersStyleList['active']) {
        return this.filtersStyleList['active'];
      }
      return {}
    }
    else {
      if(this.filtersStyleList['inactive']) {
        return this.filtersStyleList['inactive'];
      }
      return {}
    }
    
    
  }

 
}
