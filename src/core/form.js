export class Form
{
    constructor(form, controls) {
        this.form = form;
        this.controls = controls;

        console.log('form', this.form);
        console.log('controls', this.controls);
    }

    value() {

        const value = {}
        
        const controlsKeys = Object.keys(this.controls);     
        controlsKeys.forEach(control => {
           value[control] =  this.form[control].value
        });    
        
        return value;
    }
}