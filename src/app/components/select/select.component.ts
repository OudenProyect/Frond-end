import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input('options') options: any[] = [];
  @Output() change: EventEmitter<any> = new EventEmitter();
  isOpen = false;
  arrowIcon = faChevronDown;
  selectedOption: any = 'Indiferent';

  ngOnInit(): void {}

  showInput() {
    this.isOpen = !this.isOpen;
  }

  selectOption(selected: any) {
    this.selectedOption = selected;
    this.change.emit(selected);
    console.log({
      select: selected,
    });

    this.showInput();
  }
}
