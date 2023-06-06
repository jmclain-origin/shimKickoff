export {}
declare global {
    interface Window {
        AsuHeader: {
            initGlobalHeader(properties: unknown): void;
        },
        AsuFooter: {
            initASUFooter(properties: unknown): void;
        }
    }
}
