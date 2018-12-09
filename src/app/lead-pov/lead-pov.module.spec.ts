import { LeadPovModule } from './lead-pov.module';

describe('LeadPovModule', () => {
  let leadPovModule: LeadPovModule;

  beforeEach(() => {
    leadPovModule = new LeadPovModule();
  });

  it('should create an instance', () => {
    expect(leadPovModule).toBeTruthy();
  });
});
