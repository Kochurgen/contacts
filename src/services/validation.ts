class Validation {
    isEmpty(value:string){
        return value.length!==0
    }
}

const validation = new Validation();

export default validation;
