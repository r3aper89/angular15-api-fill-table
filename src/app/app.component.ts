import { Component } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { TableDataService } from './services/table-data.service';
import { ButtonsComponent } from './components/buttons/buttons/buttons.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appnew';

  constructor(private tableService: TableDataService) { }

  clearTable() {
    this.tableService.clearTable();
  }

}
