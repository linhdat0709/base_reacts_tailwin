interface AppConfig {
    name: string,
    github: {
        title: string,
        url: string
    },
    author: {
        name: string,
        url: string
    },
}

export const appConfig: AppConfig = {
    name: "Sample App",
    github: {
        title: "React Shadcn Starter",
        url: "https://github.com/linhdat0709/base_reacts_tailwin",
    },
    author: {
        name: "hayyi",
        url: "https://github.com/hayyi2/",
    }
}