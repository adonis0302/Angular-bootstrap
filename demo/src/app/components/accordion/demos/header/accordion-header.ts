import { Component, ViewEncapsulation } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
	selector: 'ngbd-accordion-header',
	standalone: true,
	imports: [NgbAccordionModule, NgIf],
	templateUrl: './accordion-header.html',
	encapsulation: ViewEncapsulation.None,
	styles: [
		`
			.custom-header::after {
				content: none;
			}
		`,
	],
})
export class NgbdAccordionHeader {}
