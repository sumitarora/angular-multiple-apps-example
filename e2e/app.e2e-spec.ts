import { MatPage } from './app.po';

describe('mat App', () => {
  let page: MatPage;

  beforeEach(() => {
    page = new MatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
