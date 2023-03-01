import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.css']
})

export class EntityFormComponent {
  @Input() entity?: any

  ngOnInit(): void {
    
  }


}