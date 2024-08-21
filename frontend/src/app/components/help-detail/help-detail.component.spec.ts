import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelpService } from '../../services/help.service.ts';
import { Help } from '../../models/help.ts';

@Component({
  selector: 'app-help-detail',
  templateUrl: './help-detail.component.html',
  styleUrls: ['./help-detail.component.scss']
})
export class HelpDetailComponent implements OnInit {
  help!: Help;

  constructor(private route: ActivatedRoute, private helpService: HelpService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.helpService.getHelp(id!).subscribe((data) => {
      this.help = data;
    });
  }
}
