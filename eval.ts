one(value: string, env: {}): {} {
    
}

request()

requestHeaders()

expandEnv(env: {}): string {
    if (!env) return '';

    const envValues = Object.keys(env).map(key => `${key}=env[${key}]`)
    return envValues.length > 0 `let ${envValues.join(',')}` : '';
}
