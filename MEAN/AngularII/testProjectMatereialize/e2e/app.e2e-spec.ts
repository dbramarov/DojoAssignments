import { TestProjectOnePage } from './app.po';

describe('test-project-one App', () => {
  let page: TestProjectOnePage;

  beforeEach(() => {
    page = new TestProjectOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
