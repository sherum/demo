import { HabitualDomainModule } from './habitual-domain.module';

describe('HabitualDomainModule', () => {
  let habitualdomainModule: HabitualDomainModule;

  beforeEach(() => {
    habitualdomainModule = new HabitualDomainModule();
  });

  it('should create an instance', () => {
    expect(habitualdomainModule).toBeTruthy();
  });
});
