import { Component, OnInit } from '@angular/core';
import { HelpService } from '../../services/help.service.js';
import { Help } from '../../models/help.ts';

@Component({
  selector: 'app-help-list',
  templateUrl: './help-list.component.html',
  styleUrls: ['./help-list.component.scss']
})
export class HelpListComponent implements OnInit {
  helps: Help[] = [];
  filteredHelps: Help[] = [];

  constructor(private helpService: HelpService) {}

  ngOnInit(): void {
    this.getHelps();
  }

  getHelps(): void {
    this.helpService.getHelps().subscribe((data) => {
      this.helps = data;
      this.filteredHelps = data;
    });
  }

  search(term: string): void {
    this.filteredHelps = this.helps.filter(help => help.title.toLowerCase().includes(term.toLowerCase()));
  }

  // Adicionar métodos para ordenação e filtros aqui
}
