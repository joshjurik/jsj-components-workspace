import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jsj-flat-button',
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.scss']
})
export class FlatButtonComponent implements OnInit {

  // The type of button, button by default
  @Input() btnType: string = 'button';

  // The text that displays inside of the button.
  @Input() text: string | null = null;

  // The name of the icon that displays inside of the button.
  // Only material icons will work.
  @Input() icon: string | null = null;

  // The position of the icon in the button relative to the text
  // if both have a value.
  @Input() iconPosLeft: boolean = false;

  // Sets the disabled state of the button
  @Input() isDisabled: boolean = false;

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

  // Helper funtion to display the proper text/icon combo
  // based on parent inputs.
  // This returns the html needed to properly display
  // the text/icon combo.
  public getBtnTextHtml(): string {
    if(this.icon) {
      if(this.text) {
        // I figured this was more readible than a terinary conditon given the template literals
        if(this.iconPosLeft) {
          // both text and icon exist display icon on whichever side is specified
          return `<span class="material-icons">${this.icon}</span> <span>${this.text}</span>`;
        } else {
          return `<span>${this.text}</span> <span class="material-icons">${this.icon}</span>`;
        }
      } else {
        // only an icon exists
        return `<span class="material-icons">${this.icon}</span>`;
      }
    }

    if(this.text) {
      // only text exists
      return `<span>${this.text}</span>`;
    }

    throw('Error: no button text or icon');
  }

}
