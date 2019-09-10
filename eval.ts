one(value: string, env: {}): {} {
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


    }
}

request()

requestHeaders()

expandEnv(env: {}): string {
    if (!env) return '';

    const envValues = Object.keys(env).map(key => `${key}=env[${key}]`)
    return envValues.length > 0 `let ${envValues.join(',')}` : '';
}
