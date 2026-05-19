import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatMessage, MOCK_CHAT_MESSAGES } from '../../models/chat-message.model';

/**
 * ClassChatComponent — Class chat channel UI.
 *
 * Port-ready: In the future, messages will come from an Express.js
 * API via WebSocket. The component consumes ChatMessage[] regardless
 * of the data source (DIP).
 */
@Component({
  selector: 'app-class-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './class-chat.html',
  styleUrl: './class-chat.scss',
})
export class ClassChatComponent {
  readonly messages = signal<ChatMessage[]>([...MOCK_CHAT_MESSAGES]);
  newMessage = '';

  sendMessage(): void {
    const text = this.newMessage.trim();
    if (!text) return;

    const msg: ChatMessage = {
      id: 'm' + Date.now(),
      sender: 'Ben',
      senderAvatar: 'BN',
      content: text,
      timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
    };

    this.messages.update(msgs => [...msgs, msg]);
    this.newMessage = '';
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
