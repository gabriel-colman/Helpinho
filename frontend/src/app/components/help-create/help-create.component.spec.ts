import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelpService } from '../../services/help.service.js';

@Component({
  selector: 'app-help-create',
  templateUrl: './help-create.component.html',
  styleUrls: ['./help-create.component.scss']
})
export class HelpCreateComponent {
  helpForm: FormGroup;

  constructor(private fb: FormBuilder, private helpService: HelpService) {
    this.helpForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      goal: [0, [Validators.required, Validators.min(1)]],
      creatorName: ['', Validators.required],
      category: ['', Validators.required],
      deadline: ['', Validators.required],
      bankInfo: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.helpForm.valid) {
      this.helpService.createHelp(this.helpForm.value).subscribe(() => {
        // Redirecionar após criação
      });
    }
  }
}
