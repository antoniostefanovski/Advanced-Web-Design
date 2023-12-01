function compactObject(obj) {

    if(obj == null) return null;

    if(typeof obj !== 'object') return obj;

    if(Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }

    let compacted = {};

    for(const key in obj) {

        let value = compactObject(obj[key]);

        if(Boolean(value)) compacted[key] = value;

    }

    return compacted;

}