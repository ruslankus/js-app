export class Form
{
    constructor(form, controls) {
        this.form = form;
        this.controls = controls;       
    }

    value() {

        const value = {}
        
        const controlsKeys = Object.keys(this.controls);     
        controlsKeys.forEach(control => {
           value[control] =  this.form[control].value
        });    
        
        return value;
    }


    clear() {
        const controlsKeys = Object.keys(this.controls);
        controlsKeys.forEach(control => {
             this.form[control].value = "";
        });   
    }


    isValid()
    {      
        let isFormValid =  true;
        const controlsKeys = Object.keys(this.controls); 
        controlsKeys.forEach( control => { 
            clearErrors(this.form[control]);           
            const validators = this.controls[control];
            let isValid = true;
            validators.forEach(validator => {
                isValid = validator(this.form[control].value) && isValid                
            })

            if(!isValid) {
                setError(this.form[control]);
            }     

            isFormValid = isFormValid && isValid;
        });

        return isFormValid;
    }


}

function setError($control)
{
    
    $control.classList.add('invalid');
    const error = `<p class="validation-error">Enter valid value!</p>`
    $control.insertAdjacentHTML('afterend', error);
}

function clearErrors($control)
{
    $control.classList.remove('invalid');    
    if($control.nextSibling) {
        $control.closest('.form-control').removeChild($control.nextSibling);
    }

        
    
}