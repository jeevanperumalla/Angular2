import { AbstractControl } from "@angular/forms";

export function appleMail(control:AbstractControl){
    if(control.value.includes('@apple.com')){
        return null;
    }else{
        return {'appleMail': 'please use apple mail only'}
    }
}


