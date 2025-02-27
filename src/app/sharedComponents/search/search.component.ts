import { Component, input, OnInit, output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  origin = input('');
  inputMovie = input('');
  movie = new FormControl('');
  outputSearch = output<string | null>(); 

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    if(this.inputMovie()) {
      this.movie.setValue(this.inputMovie());
      this.search(this.inputMovie())
    }

    this.movie.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(event => {
          if (this.origin() === 'home') {
            this.outputSearch.emit(event)
          } else {
            this.router.navigate([`/home/${event}`])
          }
      });
  }

  search(event: any) {
    if (this.origin() === 'home') {
      this.outputSearch.emit(event)
    } else {
      this.router.navigate([`/home/${event}}`])
    }
  }

}
