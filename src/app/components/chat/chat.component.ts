import { Component, Input, NgModule, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  user: string = "";

  @Input() chat: Array<{ message: string, isHuman: boolean }> = []

  ngOnChanges(changes: SimpleChanges) {
    // You can add additional logic here if needed
    console.log('Chat updated:', this.chat);
  }
}
