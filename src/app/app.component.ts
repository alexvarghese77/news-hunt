import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mArticles: Array<any>;
  mSources: Array<any>;
  mCategory: Array<any> = [
    {
      key: "Top Head Lines",
      value: "top-headlines"
    },
    {
      key: "Business",
      value: "business"
    },
    {
      key: "entertainment",
      value: "entertainment"
    },
    {
      key: "Business",
      value: "business"
    },
    {
      key: "General",
      value: "general"
    },
    {
      key: "Health",
      value: "health"
    },
    {
      key: "Science",
      value: "science"
    },
    {
      key: "Sports",
      value: "sports"
    },
    {
      key: "Technology",
      value: "technology"
    }]
  constructor(private newsapi: NewsApiService) { }

  ngOnInit() {
    // Load articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //Load sourse
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}

