import Abs1   from "./elements/abs1.js";
import Abs2   from "./elements/abs2.js";
import Bubble from "./elements/bubble.js";
import Circle from "./elements/circle.js";
import Flower from "./elements/flower.js";
import Lines  from "./elements/lines.js";
import Twink1 from "./elements/twink1.js";
import Twink2 from "./elements/twink2.js";
import Twink3 from "./elements/twink3.js";
import Woosh  from "./elements/woosh.js";

customElements.define('abs1-element', Abs1);
customElements.define('abs2-element', Abs2);
customElements.define('bubble-element', Bubble);
customElements.define('circle-element', Circle);
customElements.define('flower-element', Flower);
customElements.define('lines-element', Lines);
customElements.define('twink1-element', Twink1);
customElements.define('twink2-element', Twink2);
customElements.define('twink3-element', Twink3);
customElements.define('woosh-element', Woosh);

$(document).ready(function () {
    setTimeout(function () {
        $(".loading > bubble-element").last().children().addClass("slide-out-right");
        $(".loading > abs1-element").first().children().addClass("slide-out-right");
        $(".loading > flower-element").children().addClass("slide-out-right");

        $(".loading > bubble-element").first().children().addClass("slide-out-left");
        $(".loading > abs1-element").last().children().addClass("slide-out-left");
        $(".loading > .loading-title").addClass("slide-out-left");
        setTimeout(function () {
            $(".loading").remove();
            $("#me, #about, #contact").fadeIn("slow");
        }, 1000);
    }, 4000);

    if (window.matchMedia("(orientation: landscape)").matches) {
        $("#rta > svg").attr('style', '--t: 0s; --r: rotate(45deg); position: absolute; left: 30%; top: 40%; transform: var(--r)')
    }

    function callbackFunc(entries, observer) {
        entries.forEach(entry => {
            console.log(entry.target.classList);
            entry.target.classList.toggle("jello", entry.isIntersecting);
        });
    }

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    let observer = new IntersectionObserver(callbackFunc, options);

    observer.observe($(".twink:eq(0) > svg").get(0));
    observer.observe($(".twink:eq(1) > svg").get(0));
    observer.observe($(".twink:eq(2) > svg").get(0));
});