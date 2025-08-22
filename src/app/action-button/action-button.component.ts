import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="action-button-container">
      <button 
        [class]="buttonClass"
        [disabled]="disabled || loading"
        (click)="onButtonClick()">
        
        <span class="icon" *ngIf="icon && !loading">{{ icon }}</span>
        <span class="loading-spinner" *ngIf="loading">⏳</span>
        <span class="button-text">{{ text }}</span>
        <span class="badge" *ngIf="badge">{{ badge }}</span>
      </button>
      
      <div class="button-description" *ngIf="description">
        {{ description }}
      </div>
    </div>
  `,
  styles: [`
    .action-button-container {
      display: inline-block;
    }
    
    button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      border: 2px solid #007acc;
      background-color: #007acc;
      color: white;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    button:hover:not(:disabled) {
      background-color: #005999;
      transform: translateY(-2px);
    }
    
    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
    
    .loading-spinner {
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .badge {
      background-color: #ff4444;
      color: white;
      border-radius: 10px;
      padding: 2px 6px;
      font-size: 12px;
      font-weight: bold;
    }
    
    .button-description {
      margin-top: 4px;
      font-size: 12px;
      color: #666;
      text-align: center;
    }
  `]
})
export class ActionButtonComponent {
  @Input() text: string = 'Action';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() badge: string = '';
  @Input() description: string = '';
  @Input() buttonClass: string = '';
  
  @Output() buttonClick = new EventEmitter<void>();
  
  onButtonClick() {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit();
    }
  }
}