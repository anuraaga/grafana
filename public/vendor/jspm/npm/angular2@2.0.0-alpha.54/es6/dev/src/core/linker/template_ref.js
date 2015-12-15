/* */ 
"format cjs";
import { internalView } from './view_ref';
/**
 * Represents an Embedded Template that can be used to instantiate Embedded Views.
 *
 * You can access a `TemplateRef`, in two ways. Via a directive placed on a `<template>` element (or
 * directive prefixed with `*`) and have the `TemplateRef` for this Embedded View injected into the
 * constructor of the directive using the `TemplateRef` Token. Alternatively you can query for the
 * `TemplateRef` from a Component or a Directive via {@link Query}.
 *
 * To instantiate Embedded Views based on a Template, use
 * {@link ViewContainerRef#createEmbeddedView}, which will create the View and attach it to the
 * View Container.
 */
export class TemplateRef {
}
export class TemplateRef_ extends TemplateRef {
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
    }
    _getProtoView() {
        let elementRef = this.elementRef;
        var parentView = internalView(elementRef.parentView);
        return parentView.proto.elementBinders[elementRef.boundElementIndex - parentView.elementOffset]
            .nestedProtoView;
    }
    /**
     * Reference to the ProtoView used for creating Embedded Views that are based on the compiled
     * Embedded Template.
     */
    get protoViewRef() { return this._getProtoView().ref; }
    hasLocal(name) {
        return this._getProtoView().templateVariableBindings.has(name);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVfcmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3RlbXBsYXRlX3JlZi50cyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVJlZiIsIlRlbXBsYXRlUmVmXyIsIlRlbXBsYXRlUmVmXy5jb25zdHJ1Y3RvciIsIlRlbXBsYXRlUmVmXy5fZ2V0UHJvdG9WaWV3IiwiVGVtcGxhdGVSZWZfLnByb3RvVmlld1JlZiIsIlRlbXBsYXRlUmVmXy5oYXNMb2NhbCJdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxZQUFZLEVBQWUsTUFBTSxZQUFZO0FBSXJEOzs7Ozs7Ozs7OztHQVdHO0FBQ0g7QUFtQkFBLENBQUNBO0FBRUQsa0NBQWtDLFdBQVc7SUFDM0NDLFlBQVlBLFVBQXNCQTtRQUNoQ0MsT0FBT0EsQ0FBQ0E7UUFDUkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBVUEsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBRU9ELGFBQWFBO1FBQ25CRSxJQUFJQSxVQUFVQSxHQUFnQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7UUFDOUNBLElBQUlBLFVBQVVBLEdBQUdBLFlBQVlBLENBQUNBLFVBQVVBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO1FBQ3JEQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxjQUFjQSxDQUFDQSxVQUFVQSxDQUFDQSxpQkFBaUJBLEdBQUdBLFVBQVVBLENBQUNBLGFBQWFBLENBQUNBO2FBQzFGQSxlQUFlQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7SUFFREY7OztPQUdHQTtJQUNIQSxJQUFJQSxZQUFZQSxLQUFtQkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFckVILFFBQVFBLENBQUNBLElBQVlBO1FBQ25CSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSx3QkFBd0JBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ2pFQSxDQUFDQTtBQUNISixDQUFDQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbnRlcm5hbFZpZXcsIFByb3RvVmlld1JlZn0gZnJvbSAnLi92aWV3X3JlZic7XG5pbXBvcnQge0VsZW1lbnRSZWYsIEVsZW1lbnRSZWZffSBmcm9tICcuL2VsZW1lbnRfcmVmJztcbmltcG9ydCAqIGFzIHZpZXdNb2R1bGUgZnJvbSAnLi92aWV3JztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIEVtYmVkZGVkIFRlbXBsYXRlIHRoYXQgY2FuIGJlIHVzZWQgdG8gaW5zdGFudGlhdGUgRW1iZWRkZWQgVmlld3MuXG4gKlxuICogWW91IGNhbiBhY2Nlc3MgYSBgVGVtcGxhdGVSZWZgLCBpbiB0d28gd2F5cy4gVmlhIGEgZGlyZWN0aXZlIHBsYWNlZCBvbiBhIGA8dGVtcGxhdGU+YCBlbGVtZW50IChvclxuICogZGlyZWN0aXZlIHByZWZpeGVkIHdpdGggYCpgKSBhbmQgaGF2ZSB0aGUgYFRlbXBsYXRlUmVmYCBmb3IgdGhpcyBFbWJlZGRlZCBWaWV3IGluamVjdGVkIGludG8gdGhlXG4gKiBjb25zdHJ1Y3RvciBvZiB0aGUgZGlyZWN0aXZlIHVzaW5nIHRoZSBgVGVtcGxhdGVSZWZgIFRva2VuLiBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gcXVlcnkgZm9yIHRoZVxuICogYFRlbXBsYXRlUmVmYCBmcm9tIGEgQ29tcG9uZW50IG9yIGEgRGlyZWN0aXZlIHZpYSB7QGxpbmsgUXVlcnl9LlxuICpcbiAqIFRvIGluc3RhbnRpYXRlIEVtYmVkZGVkIFZpZXdzIGJhc2VkIG9uIGEgVGVtcGxhdGUsIHVzZVxuICoge0BsaW5rIFZpZXdDb250YWluZXJSZWYjY3JlYXRlRW1iZWRkZWRWaWV3fSwgd2hpY2ggd2lsbCBjcmVhdGUgdGhlIFZpZXcgYW5kIGF0dGFjaCBpdCB0byB0aGVcbiAqIFZpZXcgQ29udGFpbmVyLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGVtcGxhdGVSZWYge1xuICAvKipcbiAgICogVGhlIGxvY2F0aW9uIGluIHRoZSBWaWV3IHdoZXJlIHRoZSBFbWJlZGRlZCBWaWV3IGxvZ2ljYWxseSBiZWxvbmdzIHRvLlxuICAgKlxuICAgKiBUaGUgZGF0YS1iaW5kaW5nIGFuZCBpbmplY3Rpb24gY29udGV4dHMgb2YgRW1iZWRkZWQgVmlld3MgY3JlYXRlZCBmcm9tIHRoaXMgYFRlbXBsYXRlUmVmYFxuICAgKiBpbmhlcml0IGZyb20gdGhlIGNvbnRleHRzIG9mIHRoaXMgbG9jYXRpb24uXG4gICAqXG4gICAqIFR5cGljYWxseSBuZXcgRW1iZWRkZWQgVmlld3MgYXJlIGF0dGFjaGVkIHRvIHRoZSBWaWV3IENvbnRhaW5lciBvZiB0aGlzIGxvY2F0aW9uLCBidXQgaW5cbiAgICogYWR2YW5jZWQgdXNlLWNhc2VzLCB0aGUgVmlldyBjYW4gYmUgYXR0YWNoZWQgdG8gYSBkaWZmZXJlbnQgY29udGFpbmVyIHdoaWxlIGtlZXBpbmcgdGhlXG4gICAqIGRhdGEtYmluZGluZyBhbmQgaW5qZWN0aW9uIGNvbnRleHQgZnJvbSB0aGUgb3JpZ2luYWwgbG9jYXRpb24uXG4gICAqXG4gICAqL1xuICAvLyBUT0RPKGkpOiByZW5hbWUgdG8gYW5jaG9yIG9yIGxvY2F0aW9uXG4gIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgLyoqXG4gICAqIEFsbG93cyB5b3UgdG8gY2hlY2sgaWYgdGhpcyBFbWJlZGRlZCBUZW1wbGF0ZSBkZWZpbmVzIExvY2FsIFZhcmlhYmxlIHdpdGggbmFtZSBtYXRjaGluZyBgbmFtZWAuXG4gICAqL1xuICBhYnN0cmFjdCBoYXNMb2NhbChuYW1lOiBzdHJpbmcpOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVSZWZfIGV4dGVuZHMgVGVtcGxhdGVSZWYge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJvdG9WaWV3KCk6IHZpZXdNb2R1bGUuQXBwUHJvdG9WaWV3IHtcbiAgICBsZXQgZWxlbWVudFJlZiA9IDxFbGVtZW50UmVmXz50aGlzLmVsZW1lbnRSZWY7XG4gICAgdmFyIHBhcmVudFZpZXcgPSBpbnRlcm5hbFZpZXcoZWxlbWVudFJlZi5wYXJlbnRWaWV3KTtcbiAgICByZXR1cm4gcGFyZW50Vmlldy5wcm90by5lbGVtZW50QmluZGVyc1tlbGVtZW50UmVmLmJvdW5kRWxlbWVudEluZGV4IC0gcGFyZW50Vmlldy5lbGVtZW50T2Zmc2V0XVxuICAgICAgICAubmVzdGVkUHJvdG9WaWV3O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgUHJvdG9WaWV3IHVzZWQgZm9yIGNyZWF0aW5nIEVtYmVkZGVkIFZpZXdzIHRoYXQgYXJlIGJhc2VkIG9uIHRoZSBjb21waWxlZFxuICAgKiBFbWJlZGRlZCBUZW1wbGF0ZS5cbiAgICovXG4gIGdldCBwcm90b1ZpZXdSZWYoKTogUHJvdG9WaWV3UmVmIHsgcmV0dXJuIHRoaXMuX2dldFByb3RvVmlldygpLnJlZjsgfVxuXG4gIGhhc0xvY2FsKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9nZXRQcm90b1ZpZXcoKS50ZW1wbGF0ZVZhcmlhYmxlQmluZGluZ3MuaGFzKG5hbWUpO1xuICB9XG59XG4iXX0=