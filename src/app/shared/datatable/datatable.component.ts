import { Component, OnInit, Input, ViewEncapsulation, OnChanges, Output, EventEmitter } from '@angular/core';
import { Constants } from 'src/app/shared';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DatatableComponent implements OnChanges {

  @Input('options') options: {} = {};
  @Input('language') language: {} = {};

  @Input('data') data: any[] = [];
  @Input('total') total: number = 0;
  @Input('page') page: number = 1;
  @Input('perPage') perPage: number = Constants.PER_PAGE;

  @Output() next = new EventEmitter<number>();

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnChanges(): void {
    this.dtOptions = {
      ...this.options,
      pageLength: Constants.PER_PAGE_WEB,
      responsive: true,
      pagingType: 'numbers',
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ Elementos",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
       /* paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },*/
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        },
        ...this.language
      }
    };

  }

  pageChange = (page: any) => {
    this.page = page;
    this.next.emit(page);
  }

}
