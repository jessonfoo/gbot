function coalesce() {
        args = Object.keys(arguments).map(e=>arguments[e]);
        const types = ["object","boolean","number","string","symbol","function"]



        // if first argument is a valid type do a specified coalesce
        if(typeof args[0] === 'string' && types.indexOf(args[0]) !== -1 ){
            var type = args.shift();
        }
        var len = args.length;
        for (var i=0; i<len; i++) {

            // check for null coalesce first
            if(args[i] !== null && args[i] !== undefined ) {
                // if type is not defined return first truthy argument else match type
                if(!type || (typeof args[i] == type)) {
                    return args[i];                    
                }  
            }
        }
        return null;
}

