import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {fetchDataByTitle, fetchDataBySummary} from "../../store/articles/actions";
import {selectArticlesTitleDate, selectArticlesSummaryDate} from "../../store/articles/selectors";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  constructor(private store: Store) {}

  titleData = [];
  summaryData = [];
  inputValue: string = '';

  onEnterKey() {
    const trimmedString = this.inputValue.replace(/\s+/g, ' ').trim();
    const searchValue = trimmedString.split(' ').join(',')
    this.store.dispatch(fetchDataByTitle(searchValue));
    this.store.dispatch(fetchDataBySummary(searchValue));
  }
  ngOnInit(): void {
    this.store.dispatch(fetchDataByTitle());
    // @ts-ignore
    const storeTitle = this.store.select(selectArticlesTitleDate).subscribe(data => {
      // @ts-ignore
      this.titleData = data;
      // @ts-ignore
      console.log(data[0])
    })

    // @ts-ignore
    const storeSummary = this.store.select(selectArticlesSummaryDate).subscribe(data => {
      // @ts-ignore
      this.summaryData = data;
      // @ts-ignore
      console.log(data[0])
    })
  }

}
