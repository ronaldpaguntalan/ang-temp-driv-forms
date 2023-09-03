import { Component } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-temp-driv-forms';

  onSubmit(f : NgForm){
    console.log(f.value)
  }

  getValue(f : FormControl){
    console.log(f);
    
  }
}
