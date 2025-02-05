import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  standalone:true,
  styleUrl: './index.component.css'
})
export class IndexComponent {

}

