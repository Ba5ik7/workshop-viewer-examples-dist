/**
 ******************************************************************************
 * DO NOT MANUALLY EDIT THIS FILE. THIS FILE IS AUTOMATICALLY GENERATED.
 ******************************************************************************
 */

export interface LiveExample {
  /** Title of the example. */
  title: string;
  /** Name of the example component. */
  componentName: string;
  /** Selector to match the component of this example. */
  selector: string;
  /** Name of the primary file of this example. */
  primaryFile: string;
  /** List of files which are part of the example. */
  files: string[];
  /** Path to the directory containing the example. */
  packagePath: string;
  /** List of additional components which are part of the example. */
  additionalComponents: string[];
  /** NgModule that declares this example. */
  module: NgModuleInfo;
}

export interface NgModuleInfo {
  /** Name of the NgModule. */
  name: string;
  /**
   * Import specifier that resolves to this module. The specifier is not scoped to
   * `@angular/components-examples` because it's up to the consumer how the module is
   * imported. For example, in the docs app, modules are lazily imported from `fesm2015/`.
   */
  importSpecifier: string;
}

export const EXAMPLE_COMPONENTS: {[id: string]: LiveExample} = {
  "solution-one": {
    "packagePath": "lib/route-reuse-strategy/parent-child-design/solution-one",
    "title": "RouteReuseStrategy - Parent Child Design - Solution One",
    "componentName": "SolutionOneExample",
    "files": [
      "solution-one-example.ts",
      "./solution-one-example.html",
      "./solution-one-example.css"
    ],
    "selector": "tmdjr-solution-one",
    "additionalComponents": [],
    "primaryFile": "solution-one-example.ts",
    "module": {
      "name": "ParentChildDesignModule",
      "importSpecifier": "lib/route-reuse-strategy/parent-child-design"
    }
  },
  "solution-three": {
    "packagePath": "lib/route-reuse-strategy/parent-child-design/solution-three",
    "title": "RouteReuseStrategy - Parent Child Design - Solution Three",
    "componentName": "SolutionThreeExample",
    "files": [
      "solution-three-example.ts",
      "./solution-three-example.html",
      "./solution-three-example.css"
    ],
    "selector": "tmdjr-solution-three",
    "additionalComponents": [],
    "primaryFile": "solution-three-example.ts",
    "module": {
      "name": "ParentChildDesignModule",
      "importSpecifier": "lib/route-reuse-strategy/parent-child-design"
    }
  },
  "solution-two": {
    "packagePath": "lib/route-reuse-strategy/parent-child-design/solution-two",
    "title": "RouteReuseStrategy - Parent Child Design - Solution Two",
    "componentName": "SolutionTwoExample",
    "files": [
      "solution-two-example.ts",
      "./solution-two-example.html",
      "./solution-two-example.css"
    ],
    "selector": "tmdjr-solution-two",
    "additionalComponents": [],
    "primaryFile": "solution-two-example.ts",
    "module": {
      "name": "ParentChildDesignModule",
      "importSpecifier": "lib/route-reuse-strategy/parent-child-design"
    }
  }
};