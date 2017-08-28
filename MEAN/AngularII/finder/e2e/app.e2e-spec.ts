import { FinderPage } from './app.po';

describe('finder App', () => {
  let page: FinderPage;

  beforeEach(() => {
    page = new FinderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
