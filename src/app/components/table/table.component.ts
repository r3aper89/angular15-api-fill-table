import { Component, OnInit } from '@angular/core';
import { TableDataService } from 'src/app/services/table-data.service';
import { TableItem } from 'src/app/models/table-item.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  tableData: TableItem[] = [];
  idTableData: TableItem[] = [];
  showAllApiDataTable = false;
  showAddIdTableData = false;

  constructor(private tableDataService: TableDataService) {}

  ngOnInit(): void {
    // Initialize data here if needed
  }
  fetchAllData(): void {
    this.tableDataService.getAllData().subscribe(
      (data: TableItem[]) => {
        console.log('Data:', data);
        this.tableData = data;
        this.showAddIdTableData = false;
        this.showAllApiDataTable = true;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  fetchDataById(id: number): void {
    this.tableDataService.getDataById(id).subscribe(
      (data: TableItem[]) => {
        console.log('Data for ID', id, ':', data);
        this.idTableData = [...this.idTableData, ...data]; // Append the fetched data to the existing idTableData array
        this.showAllApiDataTable = false;
        this.showAddIdTableData = true;
      },
      (error) => {
        console.error('Error fetching data for ID', id, ':', error);
      }
    );
  }

  clearTable(): void {
    this.idTableData = []; // Clear the idTableData array by assigning an empty array
  }
}
