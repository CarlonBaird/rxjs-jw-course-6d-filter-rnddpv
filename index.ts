import { Observable } from 'rxjs';

interface NewsItem {
  //our model
  category: 'Business' | 'Sports';
  content: string;
}

const newsFeed$ = new Observable<NewsItem>((subscriber) => {
  setTimeout(() => {
    subscriber.next({ category: 'Business', content: 'A' });
  }, 1000);

  setTimeout(() => {
    subscriber.next({ category: 'Sports', content: 'B' });
  }, 3000);

  setTimeout(() => {
    subscriber.next({ category: 'Business', content: 'C' });
  }, 4000);

  setTimeout(() => {
    subscriber.next({ category: 'Sports', content: 'D' });
  }, 6000);

  setTimeout(() => {
    subscriber.next({ category: 'Sports', content: 'E' });
  }, 7000);
});
