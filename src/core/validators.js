export class Validators
{
    static required(value = '') {
        return value && value.trim()
    }

    static minLength(length) {
         return value => {           
             var validationResult = value.length >= length            
             return validationResult;
         }
    }

}