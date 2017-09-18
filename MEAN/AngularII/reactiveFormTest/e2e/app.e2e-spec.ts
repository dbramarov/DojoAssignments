import { ReactiveFormTestPage } from './app.po';

describe('reactive-form-test App', () => {
  let page: ReactiveFormTestPage;

  beforeEach(() => {
    page = new ReactiveFormTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
