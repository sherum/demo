import { NarrativeModule } from './narrative.module';

describe('NarrativeModule', () => {
  let narrativeModule: NarrativeModule;

  beforeEach(() => {
    narrativeModule = new NarrativeModule();
  });

  it('should create an instance', () => {
    expect(narrativeModule).toBeTruthy();
  });
});
