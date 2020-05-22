
// debounce function
export default function debounce(func: ()=>any, wait: number, immediate: boolean) {
    var timeout: number | null;
    return function(this: (func: ()=>any, wait: number, immediate: boolean) => any) {
        var context = this;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, []);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout!);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, []);
    }
}