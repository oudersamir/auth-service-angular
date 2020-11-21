import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Validation {
   static  noBlancContent(control:AbstractControl) :ValidationErrors |null{
        if((control.value as string).indexOf(' ') >=0)
        return {
            cannotContentSpace:true
        }
        return null;
    }
}