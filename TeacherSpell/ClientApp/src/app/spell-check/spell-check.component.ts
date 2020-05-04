import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spell-check',
  templateUrl: './spell-check.component.html',
  styleUrls: ['./spell-check.component.css']
})
export class SpellCheckComponent implements OnInit {

  public wordInfo: WordInfo;

  @Input() public word: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.word = '';
  }

  public setWordInfo() {
    this.http.get<WordInfo>(this.baseUrl + 'api/spelling/validate/' + this.word).subscribe(result => {
      this.wordInfo = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}

interface WordInfo {
  word: string;
  meaning: string;
}
