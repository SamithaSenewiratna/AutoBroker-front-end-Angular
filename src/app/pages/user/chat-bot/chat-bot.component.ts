import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../common/navbar/navbar.component';
import { FooterComponent } from "../../../common/footer/footer.component";

@Component({
  selector: 'app-chat-bot',
  standalone: true,  
  imports: [CommonModule, NavbarComponent, FooterComponent, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css'], 
})
export class ChatBotComponent {
  userInput: string = '';

  toggleChatbot(): void {
    const modal = document.getElementById('chatbotModal');
    if (modal?.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    } else {
      modal?.classList.add('hidden');
      modal?.classList.remove('flex');
    }
  }

  sendMessage(): void {
    const message = this.userInput.trim();
    if (!message) return;

    this.addMessage('user', message);
    this.callAIModel(message);

    this.userInput = '';
  }

  addMessage(sender: string, message: string): void {
    const chatBox = document.getElementById('chat-box');
    if (!chatBox) return;

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('mb-2', 'text-sm');

  
    if (sender === 'ai') {
      messageDiv.classList.add('text-white');
      messageDiv.innerText = `🤖 ${message}`;
    } else {
      messageDiv.classList.add('text-blue-300');
      messageDiv.innerText = `🧑 ${message}`;
    }

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  async callAIModel(userInput: string): Promise<void> {
    const myHeaders = new Headers({ "Content-Type": "application/json" });

    const raw = JSON.stringify({
      contents: [
        {
          parts: [{ text: userInput }]
        }
      ]
    });

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD5gaqNruHjDMPmTK6ag2RMM7MtrmpoZvQ",
        { method: "POST", headers: myHeaders, body: raw }
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();
      console.log('API result:', result);

      const aiResponse =
        result?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I didn't understand that. Can you please clarify?";

      this.addMessage('ai', aiResponse);
    } catch (error) {
      console.error('Fetch Error:', error);
      this.addMessage('ai', "Oops! Something went wrong. Please try again.");
    }
  }
}
