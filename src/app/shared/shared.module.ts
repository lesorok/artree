import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const components: any[] = [
]

@NgModule({
    imports: [CommonModule],
    exports: [...components],
    declarations: [...components],
    providers: [],
})
export class SharedModule { }
