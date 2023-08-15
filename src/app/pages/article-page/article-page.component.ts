import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {RequestService} from "../../service/request.service";
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePageComponent implements OnInit{
  articleData = new BehaviorSubject<any>({});
  constructor(private requestService: RequestService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const parameterValue = params['id'];
      console.log('Parameter value:', parameterValue);
      this.requestService.getArticlesById(parameterValue).subscribe(data => {
        this.articleData.next(data);
      });
    });
  }

}
