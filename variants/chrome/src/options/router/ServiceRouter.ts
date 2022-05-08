import Route from "./Route";

export default class ServiceRoute extends Route {
    public static base = new ServiceRoute("/");
    public static settings = new ServiceRoute("settings", ServiceRoute.base);
}