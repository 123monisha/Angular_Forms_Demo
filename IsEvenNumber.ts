import { AbstractControl,ValidationErrors}  from "@angular/forms";
export class IsEvenNumber
{
    static isNumberEven(control:AbstractControl):ValidationErrors|null{
        if(control.value%2!==0)
        {
            return {isNumberEven:true}
        }
        else{
            return null;
        }
    }

}
