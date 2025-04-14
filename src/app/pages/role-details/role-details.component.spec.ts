import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoleDetailsComponent } from './role-details.component';
import { Router } from '@angular/router';

describe('RoleDetailsComponent', () => {
  let component: RoleDetailsComponent;
  let fixture: ComponentFixture<RoleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleDetailsComponent], // ⬅️ Import standalone component directly
      providers: [
        {
          provide: Router,
          useValue: {
            getCurrentNavigation: () => ({
              extras: {
                state: {
                  role: {
                    name: 'Test Role',
                    description: 'Test role description'
                  }
                }
              }
            })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RoleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load role from router state', () => {
    expect(component.role).toBeDefined();
    expect(component.role.name).toBe('Test Role');
  });

  it('should populate securityLevels', () => {
    expect(component.securityLevels.length).toBeGreaterThan(0);
  });
});
