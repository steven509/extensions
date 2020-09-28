import { Component } from '@angular/core';
import { MtxGridColumn, MtxGridRowSelectionFormatter } from '@ng-matero/extensions/data-grid';
import { EXAMPLE_DATA } from './data';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dev-data-grid-demo',
  templateUrl: './data-grid-demo.component.html',
  styleUrls: ['./data-grid-demo.component.scss'],
})
export class DataGridDemoComponent {
  columns: MtxGridColumn[] = [
    {
      header: this.translate.stream('name'),
      field: 'name',
      showExpand: false,
      minWidth: 200,
      sortable: true
    },
    {
      header: this.translate.stream('weight'),
      field: 'weight',
      minWidth: 100,
      maxWidth: 300,
    },
    {
      header: this.translate.stream('gender'),
      field: 'gender',
      minWidth: 100,
    },
    {
      header: this.translate.stream('mobile'),
      field: 'mobile',
      minWidth: 150,
    },
    {
      header: this.translate.stream('city'),
      field: 'city',
      minWidth: 150,
    },
    {
      header: this.translate.stream('operation'),
      field: 'operation',
      minWidth: 150,
      maxWidth: 'auto',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [
        {
          type: 'basic',
          text: this.translate.stream('delete'),
          icon: 'delete',
          tooltip: this.translate.stream('delete'),
          color: 'warn',
          pop: true,
          popTitle: this.translate.stream('confirm_delete'),
          popCloseText: this.translate.stream('close'),
          popOkText: this.translate.stream('ok'),
          click: () => {
            alert('delete');
          },
        },
      ],
    },
  ];

  list = EXAMPLE_DATA;

  multiSelectable = true;
  hideRowSelectionCheckbox = false;
  rowSelectable = true;
  rowSelected = EXAMPLE_DATA.slice(2, 3);
  rowSelectionFormatter: MtxGridRowSelectionFormatter = {
    disabled: data => data.name === 'Boron',
    hideCheckbox: data => data.name === 'John',
  };
  expandable = false;
  showSummary = false;
  columnResizable = false;

  // mat-table
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = EXAMPLE_DATA;

  constructor(public translate: TranslateService) {}

  trackByName(index: number, item: any) {
    return item.name;
  }

  toggleExpand() {
    this.columns[0].showExpand = this.expandable;
    this.columns = this.columns.filter(_ => true);
  }

  log(e: any) {
    console.log(e);
  }
}
