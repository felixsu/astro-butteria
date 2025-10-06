/// <reference types="astro/client" />

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
    readonly STRAPI_URL: string;
    readonly STRAPI_TOKEN: string;
}