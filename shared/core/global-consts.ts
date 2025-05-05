
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).global = window;

export class GlobalConsts {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static readonly environment: any = {
    production: false,
  };

  public static get window(): Window {
    return window;
  }

  public static get document(): Document {
    return window.document;
  }

  // Pagination Constants
  public static readonly PAGE_SIZE_OPTIONS: number[] = [5, 10, 20, 50, 100];
  public static readonly DEFAULT_PAGE_SIZE: number = 10;

  public static isEmbedded(w: Window = window): boolean {
    // This check is primarily so we can serve up a different experience when the application embedded in an iframe
    // https://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
    try {
      return w.self !== w.top;
    } catch (e) {
      return true;
    }
  }
}
