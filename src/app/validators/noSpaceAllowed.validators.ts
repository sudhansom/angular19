import { AbstractControl } from "@angular/forms";

export const noSpaceAllowed = (control: AbstractControl)=>{
  if(control.value && control.value.includes(' ')){
    return {noSpaceAllowed: true}
  }
  else {
    return null
  }
}
