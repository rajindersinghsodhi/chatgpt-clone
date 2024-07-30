import { Component, Output, EventEmitter, output, Input, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatgpt-clone';
  message:string = "";
  chat:Array<{message: string, isHuman: boolean}> = [];
  isHuman:boolean = true;

  onSubmit(event: Event) {
    if (this.message.trim()) {
      this.chat.push({message: this.message, isHuman: this.isHuman });
      this.message = '';  // Clear the input after submitting
      this.isHuman = !this.isHuman; // Toggle between human and bot
    }
  }
}
