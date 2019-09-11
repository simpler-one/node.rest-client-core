function one(value: string, env: {}): {} {
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
        const end = value.indexOf('}}', evalStart);

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

function request()

function requestHeaders()

function expandEnv(env: {}): string {
    if (!env) return '';

    const envValues = Object.keys(env).map(key => `${key}=env[${key}]`)
    return envValues.length > 0 `let ${envValues.join(',')};` : '';
}
