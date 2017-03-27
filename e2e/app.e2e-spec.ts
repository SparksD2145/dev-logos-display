import { LogosPage } from './app.po';

describe('logos App', () => {
  let page: LogosPage;

  beforeEach(() => {
    page = new LogosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
