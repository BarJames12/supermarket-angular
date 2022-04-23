class ServerError extends Error{

    // Actual usage :    
    // 1. THE USERS throws the error, due to a failed validation.
    // in such a case, the user ONLY supplies the : errorType + (optional) the message   
    // 2. A 3rd party exception occurs, in such a case we'd like to wrap that exception 
    // with a ServerError, YET (!!) without losing the information on the INITIAL 
    // cause (the first error). So the 2nd version is when we WRAP an internal (inner) exception
    constructor(errorType, message, innerError){
        super(message)
        this.errorType = errorType;
        this.innerError = innerError;
    }

    [Symbol.iterator]() {
        let current = this;
        let done = false;
        const iterator = {
            next() {
                const val = current;
                if (done) {
                    return { value: val, done: true };
                }
                current = current.cause;
                if (!val.cause) {
                    done = true;
                }
                return { value: val, done: false };
            }
        };
        return iterator;
    }
    get why() {
        let _why = '';
        for (const e of this) {
            _why += `${_why.length ? ' <- ' : ''}${e.name}: ${e.message}`;
        }
        return _why;
    }
}

module.exports = ServerError