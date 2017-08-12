import { FacebookRemakePage } from './app.po';

describe('facebook-remake App', () => {
  let page: FacebookRemakePage;

  beforeEach(() => {
    page = new FacebookRemakePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
