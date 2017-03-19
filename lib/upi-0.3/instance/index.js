"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atom_1 = require("atom");
const error_1 = require("../error");
exports.UPIError = error_1.UPIError;
const Menu = require("./menu");
const Messages = require("./messages");
const Events = require("./events");
const Tooltips = require("./tooltips");
const Controls = require("./controls");
const Params = require("./params");
class UPIInstance {
    constructor(pluginManager, pluginName) {
        this.disposables = new atom_1.CompositeDisposable();
        this.destroyed = false;
        this.menu = Menu.create(this.disposables);
        this.messages = Messages.create(pluginName, pluginManager);
        this.tooltips = Tooltips.create(pluginName, pluginManager, this.disposables);
        this.events = Events.create(pluginManager, this.disposables);
        this.controls = Controls.create(pluginManager);
        this.params = Params.create(pluginName, pluginManager);
    }
    destroy() {
        this.disposables.dispose();
        this.destroyed = true;
    }
    check() {
        if (this.destroyed) {
            throw new error_1.UPIError('This UPI interface was destroyed');
        }
        return this;
    }
}
exports.UPIInstance = UPIInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXBpLTAuMy9pbnN0YW5jZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUF3QztBQUV4QyxvQ0FBaUM7QUFDekIsb0NBQVE7QUFFaEIsK0JBQThCO0FBQzlCLHVDQUFzQztBQUN0QyxtQ0FBa0M7QUFDbEMsdUNBQXNDO0FBQ3RDLHVDQUFzQztBQUN0QyxtQ0FBa0M7QUFJbEM7SUFTRSxZQUFhLGFBQTRCLEVBQUUsVUFBa0I7UUFDM0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLDBCQUFtQixFQUFFLENBQUE7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFFdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFBO1FBRTFELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM1RSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBRU0sT0FBTztRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7SUFDdkIsQ0FBQztJQUVNLEtBQUs7UUFDVixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLElBQUksZ0JBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO1FBQ3hELENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFBO0lBQ2IsQ0FBQztDQUNGO0FBakNELGtDQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9zaXRlRGlzcG9zYWJsZX0gZnJvbSAnYXRvbSdcbmltcG9ydCB7UGx1Z2luTWFuYWdlcn0gZnJvbSAnLi4vLi4vcGx1Z2luLW1hbmFnZXInXG5pbXBvcnQge1VQSUVycm9yfSBmcm9tICcuLi9lcnJvcidcbmV4cG9ydCB7VVBJRXJyb3J9XG5cbmltcG9ydCAqIGFzIE1lbnUgZnJvbSAnLi9tZW51J1xuaW1wb3J0ICogYXMgTWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcydcbmltcG9ydCAqIGFzIEV2ZW50cyBmcm9tICcuL2V2ZW50cydcbmltcG9ydCAqIGFzIFRvb2x0aXBzIGZyb20gJy4vdG9vbHRpcHMnXG5pbXBvcnQgKiBhcyBDb250cm9scyBmcm9tICcuL2NvbnRyb2xzJ1xuaW1wb3J0ICogYXMgUGFyYW1zIGZyb20gJy4vcGFyYW1zJ1xuXG5leHBvcnQgdHlwZSBUVG9vbHRpcEhhbmRsZXJTcGVjID0ge3ByaW9yaXR5OiBudW1iZXIsIGhhbmRsZXI6IFRvb2x0aXBzLlRUb29sdGlwSGFuZGxlcn1cblxuZXhwb3J0IGNsYXNzIFVQSUluc3RhbmNlIHtcbiAgcHVibGljIG1lbnU6IE1lbnUuSU1haW5JbnRlcmZhY2VcbiAgcHVibGljIG1lc3NhZ2VzOiBNZXNzYWdlcy5JTWFpbkludGVyZmFjZVxuICBwdWJsaWMgZXZlbnRzOiBFdmVudHMuSU1haW5JbnRlcmZhY2VcbiAgcHVibGljIHRvb2x0aXBzOiBUb29sdGlwcy5JTWFpbkludGVyZmFjZVxuICBwdWJsaWMgY29udHJvbHM6IENvbnRyb2xzLklNYWluSW50ZXJmYWNlXG4gIHB1YmxpYyBwYXJhbXM6IFBhcmFtcy5JTWFpbkludGVyZmFjZVxuICBwcml2YXRlIGRpc3Bvc2FibGVzOiBDb21wb3NpdGVEaXNwb3NhYmxlXG4gIHByaXZhdGUgZGVzdHJveWVkOiBib29sZWFuXG4gIGNvbnN0cnVjdG9yIChwbHVnaW5NYW5hZ2VyOiBQbHVnaW5NYW5hZ2VyLCBwbHVnaW5OYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRpc3Bvc2FibGVzID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKVxuICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2VcblxuICAgIHRoaXMubWVudSA9IE1lbnUuY3JlYXRlKHRoaXMuZGlzcG9zYWJsZXMpXG4gICAgdGhpcy5tZXNzYWdlcyA9IE1lc3NhZ2VzLmNyZWF0ZShwbHVnaW5OYW1lLCBwbHVnaW5NYW5hZ2VyKVxuXG4gICAgdGhpcy50b29sdGlwcyA9IFRvb2x0aXBzLmNyZWF0ZShwbHVnaW5OYW1lLCBwbHVnaW5NYW5hZ2VyLCB0aGlzLmRpc3Bvc2FibGVzKVxuICAgIHRoaXMuZXZlbnRzID0gRXZlbnRzLmNyZWF0ZShwbHVnaW5NYW5hZ2VyLCB0aGlzLmRpc3Bvc2FibGVzKVxuICAgIHRoaXMuY29udHJvbHMgPSBDb250cm9scy5jcmVhdGUocGx1Z2luTWFuYWdlcilcbiAgICB0aGlzLnBhcmFtcyA9IFBhcmFtcy5jcmVhdGUocGx1Z2luTmFtZSwgcGx1Z2luTWFuYWdlcilcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmRpc3Bvc2FibGVzLmRpc3Bvc2UoKVxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZVxuICB9XG5cbiAgcHVibGljIGNoZWNrICgpIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgIHRocm93IG5ldyBVUElFcnJvcignVGhpcyBVUEkgaW50ZXJmYWNlIHdhcyBkZXN0cm95ZWQnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG4iXX0=