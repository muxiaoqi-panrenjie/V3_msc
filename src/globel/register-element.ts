import "element-plus/dist/index.css";
import { ElButton, ElCard, ElBacktop } from "element-plus";

const components = [ElButton, ElCard, ElBacktop];

export default function (app: any): void {
  for (const component of components) {
    // 全局注册组件
    app.component(component.name, component);
  }
}
