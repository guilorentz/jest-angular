import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Checks that a value is what you expect. It uses Object.is to check strict equality. Don't use toBe with floating-point numbers.

  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  //Used when you want to check that two objects have the same value. This matcher recursively checks the equality of all fields, rather than checking for object identity.

  it('object values', () => {
    const data = { name: 'Angular' };
    expect(data).toEqual({ name: 'Angular' });
  });

  //Truthiness
  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  //Numbers

  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  it('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); //This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); //This works Using exact equality with floating point numbers is a bad idea. Rounding means that intuitive things fail. The default for numDigits is 2.
  });

  //Strings

  it('there is no A in cruzeiro', () => {
    expect('cruzeiro').not.toMatch(/D/); //Check that a string matches a regular expression.
  });

  it('there is sul in cruzeiro do sul', () => {
    expect('cruzeiro do sul').toMatch(/sul/);
  });

  //Arrays and iterables
  it('the shopping list has milk on it', () => {
    const shoppingList = [
      'tomato sauce',
      'pasta',
      'bread',
      'orange juice',
      'milk',
    ];

    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  //Exceptions
  it('compiling goes as expected', () => {
    expect(() => component.compileCode()).toThrow(); //Used to test that a function throws when it is called.
    expect(() => component.compileCode()).toThrow(Error);

    //You can also use the exact error message or a regexp
    expect(() => component.compileCode()).toThrow('you are using old Angular');
    expect(() => component.compileCode()).toThrow(/Angular/);
  });
});
