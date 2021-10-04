# Hogwarts Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

# Challenge
The Hogwarts School of Witchcraft and Wizardry needs to deploy its institutional portal, initially the requirement is to be able to catalog all the influential people of its school for this reason they require a portfolio with the following sections

## Character section
 The wizarding house can be selected through a drop-down list (slytherin, gryffindor, ravenclaw and hufflepuff) for each house the characters must be consulted using the public API: http://hp-api.herokuapp.com/api/characters / house / {{housename}}, the list of characters must be shown in a table with the following columns: name, patronus, age and image.

## Students section
The list of students can be consulted through the public API http://hp-api.herokuapp.com/api/characters/students, the information obtained must be shown in a table with the following columns: name, patronus, age and image .
There must be an option that allows adding a new student request, these requests must be stored locally and displayed on a new screen, it is recommended to use Reactive Forms.

## Teachers section
The list of teachers can be consulted through the public API, http://hp-api.herokuapp.com/api/characters/staff the information obtained must be shown in a table with the following columns: name, patronus, age and image .

## Considerations
- Use a Framework such as Bootstrap or Material (https://getbootstrap.com/, https://material.angular.io/):
  - **Angular Material** was used.
- Filters and/or sorting:
  - With the support of the Angular Material Table, the **Filter**, the **Sorting** and a **Paginator** were added.
- Use of **KISS**, **DRY** and **SOLID** principles:
   - **KISS**: 97%.
   - **DRY**: 98%.
   - **SOLID**: 80%.
- Documentation
  - Coming soon...
- **Unit tests**
  - Se agregó el unit test '**Verify that the data is being displayed**' el cual verifica que el table muestre la data de profesores correctamente (https://github.com/hsibrian1/hogwarts-project/blob/main/src/app/pages/teachers/teachers.component.spec.ts).
  - Added the unit test '**Check the sort instance of MatSort**' which verifies that the sort of our dataSource is an instance of MatSort (https://github.com/hsibrian1/hogwarts-project/blob/main/src/app/components/table-hogwarts/table-hogwarts.component.spec.ts).
  - New tests coming soon...
