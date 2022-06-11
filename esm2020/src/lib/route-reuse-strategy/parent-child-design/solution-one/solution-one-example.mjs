import { Component } from '@angular/core';
import { AbstractMasterComponent } from '../abstract-master.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
/**
 * @title RouteReuseStrategy - Parent Child Design - Solution One
 */
export class SolutionOneExample extends AbstractMasterComponent {
    constructor() {
        super();
        this.displayName = 'Solution One';
    }
}
SolutionOneExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionOneExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SolutionOneExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: SolutionOneExample, selector: "tmdjr-solution-one", usesInheritance: true, ngImport: i0, template: "<div class=\"solution-parent\">\n  <h2>{{displayName}}: <i>Parent Test 1</i></h2>\n  <div class=\"nav\"> \n     <ng-container *ngFor=\"let random of randoms\"> \n        <div class=\"nav-item\" [routerLink]=\"['', { outlets: { 'parent-child-design-details-outlet': [ displayName, random] } }]\">\n          Go to {{random}}\n        </div>\n     </ng-container> \n  </div>\n  \n  <router-outlet name=\"parent-child-design-details-outlet\"></router-outlet>\n</div>", styles: [".solution-parent{display:block;border:1px solid #066e98;padding:10px;margin-bottom:10px}.solution-parent .nav{display:flex;flex-direction:row;gap:10px;margin-bottom:10px}.solution-parent .nav .nav-item{background-color:#000;color:#fff;padding:5px 10px;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "directive", type: i2.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SolutionOneExample, decorators: [{
            type: Component,
            args: [{ selector: 'tmdjr-solution-one', template: "<div class=\"solution-parent\">\n  <h2>{{displayName}}: <i>Parent Test 1</i></h2>\n  <div class=\"nav\"> \n     <ng-container *ngFor=\"let random of randoms\"> \n        <div class=\"nav-item\" [routerLink]=\"['', { outlets: { 'parent-child-design-details-outlet': [ displayName, random] } }]\">\n          Go to {{random}}\n        </div>\n     </ng-container> \n  </div>\n  \n  <router-outlet name=\"parent-child-design-details-outlet\"></router-outlet>\n</div>", styles: [".solution-parent{display:block;border:1px solid #066e98;padding:10px;margin-bottom:10px}.solution-parent .nav{display:flex;flex-direction:row;gap:10px;margin-bottom:10px}.solution-parent .nav .nav-item{background-color:#000;color:#fff;padding:5px 10px;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sdXRpb24tb25lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1leGFtcGxlcy9zcmMvbGliL3JvdXRlLXJldXNlLXN0cmF0ZWd5L3BhcmVudC1jaGlsZC1kZXNpZ24vc29sdXRpb24tb25lL3NvbHV0aW9uLW9uZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ya3Nob3AtZXhhbXBsZXMvc3JjL2xpYi9yb3V0ZS1yZXVzZS1zdHJhdGVneS9wYXJlbnQtY2hpbGQtZGVzaWduL3NvbHV0aW9uLW9uZS9zb2x1dGlvbi1vbmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFdkU7O0dBRUc7QUFNSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsdUJBQXVCO0lBRTdEO1FBQWdCLEtBQUssRUFBRSxDQUFDO1FBRHhCLGdCQUFXLEdBQVcsY0FBYyxDQUFDO0lBQ1osQ0FBQzs7K0dBRmYsa0JBQWtCO21HQUFsQixrQkFBa0IsaUZDWC9CLGlkQVdNOzJGREFPLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TWFzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtbWFzdGVyLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQHRpdGxlIFJvdXRlUmV1c2VTdHJhdGVneSAtIFBhcmVudCBDaGlsZCBEZXNpZ24gLSBTb2x1dGlvbiBPbmVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG1kanItc29sdXRpb24tb25lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NvbHV0aW9uLW9uZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zb2x1dGlvbi1vbmUtZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTb2x1dGlvbk9uZUV4YW1wbGUgZXh0ZW5kcyBBYnN0cmFjdE1hc3RlckNvbXBvbmVudCB7XG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSAnU29sdXRpb24gT25lJztcbiAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJzb2x1dGlvbi1wYXJlbnRcIj5cbiAgPGgyPnt7ZGlzcGxheU5hbWV9fTogPGk+UGFyZW50IFRlc3QgMTwvaT48L2gyPlxuICA8ZGl2IGNsYXNzPVwibmF2XCI+IFxuICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByYW5kb20gb2YgcmFuZG9tc1wiPiBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1pdGVtXCIgW3JvdXRlckxpbmtdPVwiWycnLCB7IG91dGxldHM6IHsgJ3BhcmVudC1jaGlsZC1kZXNpZ24tZGV0YWlscy1vdXRsZXQnOiBbIGRpc3BsYXlOYW1lLCByYW5kb21dIH0gfV1cIj5cbiAgICAgICAgICBHbyB0byB7e3JhbmRvbX19XG4gICAgICAgIDwvZGl2PlxuICAgICA8L25nLWNvbnRhaW5lcj4gXG4gIDwvZGl2PlxuICBcbiAgPHJvdXRlci1vdXRsZXQgbmFtZT1cInBhcmVudC1jaGlsZC1kZXNpZ24tZGV0YWlscy1vdXRsZXRcIj48L3JvdXRlci1vdXRsZXQ+XG48L2Rpdj4iXX0=