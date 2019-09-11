export enum ConfigType {
    Group = 'group',
    Request = 'request',
}

export interface Headers {
    [key: string]: string;
}


export interface ConfigItem {
    name: string;
    type: string;
}

export interface GroupConfigItem extends ConfigItem {
    items: ConfigItem[];
}

export interface RequestConfigItem extends Config {
    url: string;
    method: string;
    headers: Headers;
    body: string;
}
