# AdminWebapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:64611/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

json files are used to create the dummy data in the back-end

services are used to comput edata across components
Example:

export class ProductsService {

constructor(private HttpClient: HttpClient) { }

getProducts(){
return this.HttpClient.get<any[]>('../../assets/json/products.json')
}
}

services are then called using observable within the coresponding component.ts file for example products.services.ts would correspon with products.components.ts. That is where the observables are called...see bellow

product observable:

public prodObservable: Observable<any[]> = new Observable();

Category Observable:
public categoryObservable: Observable<any[]> = new Observable();

in the corresponding HTML file the Observable is used and called within the code to generate the dummby data from the Json files

this is with the use of the \*ngFor statement

example:

\*ngFor="let prod of prodObservable | async; index as idx

this ^^ within the code allows the product observable to generaste the dummy data

router link is used to call click commands within the code and helps make the pages dynamic for ecample

[routerLink]="['./', 'categories']

this can be called within a <button> tag to make the click affect generate the information within the /categories file path
