import { Component } from '@angular/core';
import { NavbarComponent } from "../../../common/navbar/navbar.component";
import { FooterComponent } from "../../../common/footer/footer.component";


@Component({
  selector: 'app-chat-bot',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {
  toggleChatbot() {
    const modal = document.getElementById('chatbotModal');
    if (modal?.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    } else {
      modal?.classList.add('hidden');
      modal?.classList.remove('flex');
    }
  }
  

}
