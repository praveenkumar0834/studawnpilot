import { Directive, ElementRef, Input } from "@angular/core";
export var FocusDirective = (function () {
    function FocusDirective(el) {
        this.el = el;
    }
    FocusDirective.prototype.ngAfterViewInit = function () {
        if (this.value === "0") {
            return;
        }
        this.el.nativeElement.focus();
    };
    FocusDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[mydpfocus]"
                },] },
    ];
    FocusDirective.ctorParameters = [
        { type: ElementRef, },
    ];
    FocusDirective.propDecorators = {
        'value': [{ type: Input, args: ["mydpfocus",] },],
    };
    return FocusDirective;
}());
//# sourceMappingURL=my-date-picker.focus.directive.js.map