import registerElement from "./register-element";
export function registerapp(app: any) {
  app.use(registerElement);
}
