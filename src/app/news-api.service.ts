import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '48cc5d6763b64c9b8c55e5b2bffbcc0a';
  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }
  initArticles() {
    //return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=' + this.api_key);

  }
  getArticlesByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=' + source + '&apiKey=' + this.api_key);
  }
}
