import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jsj-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss']
})
export class RoundButtonComponent implements OnInit {

    // The type of button, button by default
    @Input() btnType: string = 'button';

    // The name of the icon that displays inside of the button.
    // Only material icons will work.
    @Input() icon: string = 'add';
  
    // Sets the disabled state of the button
    @Input() isDisabled: boolean = false;

    @Input() isSmallBtn: boolean = true;
  
    // The on click event.
    @Output() handleBtnClick: EventEmitter<Event> = new EventEmitter();
  
    // Key press event for accessibility.
    // Event.key is the key pressed.
    @Output() handleKeyPress: EventEmitter<Event> = new EventEmitter();
  
    constructor() { }
  
    public ngOnInit(): void {
    }
  
    // Only emit the click event, the parent should
    // be handling business logic.
    public btnClicked(event: Event): void {
      this.handleBtnClick.emit(event);
    }
  
    // Only emit the key press event, the parent should
    // be handling the business logic.
    public keyPressed(event: Event): void {
      this.handleKeyPress.emit(event);
    }
}
