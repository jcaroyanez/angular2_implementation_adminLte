import { AppAngular2Page } from './app.po';

describe('app-angular2 App', () => {
  let page: AppAngular2Page;

  beforeEach(() => {
    page = new AppAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
