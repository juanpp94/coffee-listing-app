import { Component, EventEmitter, Output } from '@angular/core';
import { FiltersStyle, ObjFilter } from 'src/app/shared/types/filterStatus';

@Component({
  selector: 'app-section-filter',
  templateUrl: './section-filter.component.html',
  styleUrls: ['./section-filter.component.scss']
})
export class SectionFilterComponent {

  @Output() updateList = new EventEmitter<string>();
  filtersStyleList: ObjFilter = FiltersStyle;
  
  
  ngOnInit() {
    
  }

  chooseFilter(filter: string) {
    this.updateList.emit(filter);
  }

  get styles() {
    if(this.filtersStyleList['active']) {
      return this.filtersStyleList['active'];
    }
    return {}
  }

 
}
