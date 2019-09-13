export enum ConfigType {
    Group = 'group',
    Request = 'request',
}

export interface Headers {
    [key: string]: string;
}


export interface ConfigItem {
    name: string;
    type: ConfigType;
}

export interface GroupConfig extends ConfigItem {
    type: ConfigType.Group;
    items: ConfigItem[];
}

export interface RequestConfig extends ConfigItem {
    type: ConfigType.Request;
    url: string;
    method: string;
    headers: Headers;
    body: string;
}
