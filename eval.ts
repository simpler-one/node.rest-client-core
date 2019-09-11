function one(value: string, env: {}): {} {
    if (!value) return '';

    const envValues = expandEnv(env);

    const results = [];
    let p = 0;
    while (p < value.length) {
        const start = value.indexOf('{{', p);
        if (start < 0) {
            results.push(value.substr(p, value.length - p));
            break;
        }

        const evalStart = start + 2;
        const end = value.indexOf('}}', evalStart); // [TODO] avoid '' "" ``
        if (end < 0) {
            throw new Error(`Syntax error. "}}" not found after: ${start}`);
        }

        results.push(
            values.substr(p, start - p),
            eval(`${envValues} ${value.substr(evalStart, end - evalStart)}`),
        );
        p = end + 2;
    }

    if (results.length === 2 && results[0] === '') {
        return results[1];
    }

    for (let i = 1; i < results.length; i += 2) {
        if (results[i] instanceof Object) {
            results[i] = JSON.stringify(results[i])
        }
    }

    return results.join('');
}

function request(request: RequestConfigRequest, env: {}): RestRequest {
    return {
        method: request.method,
        url: `${value(request.url, env)}`,
        headers: requestHeaders(request.headers, env),
        body: value(request.body, env),
    };
}

function requestHeaders(headers: {[key: string]: string}, env: {}) {
    if (!headers) return {};

    return Object.keys(headers)
    .map(key => ({ key, value: value(headers[key]) }))
    .reduce((result, cur) => {
        result[cur.key] = cur.value;
        return result;
    }, {});
}

function expandEnv(env: {}): string {
    if (!env) return '';

    const envValues = Object.keys(env).map(key => `${key}=env[${key}]`)
    return envValues.length > 0 `let ${envValues.join(',')};` : '';
}
