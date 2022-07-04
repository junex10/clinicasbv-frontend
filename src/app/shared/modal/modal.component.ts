import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ModalComponent implements OnInit {

  @Input('title') title: string = 'Modal';
  @Input('acceptButton') acceptButton: string | null = 'Aceptar';
  @Input('closeButton') closeButton: string | null = null;

  @Output() close = new EventEmitter<any>();

  closeResult = '';
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  open = (content: any) => {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  onClose = () => {
    this.modalService.dismissAll();
    this.close.emit();
  }

}
