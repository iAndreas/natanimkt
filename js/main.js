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
        $("bubble-element").last().children().addClass("slide-out-right");
        $("abs1-element").first().children().addClass("slide-out-right");
        $("flower-element").children().addClass("slide-out-right");
        $("twink3-element").last().children().addClass("slide-out-right");

        $(".loading-title").addClass("slide-out-left");
        $("bubble-element").first().children().addClass("slide-out-left");
        $("abs1-element").last().children().addClass("slide-out-left");
        $("twink3-element").first().children().addClass("slide-out-left");
    }, 4000);
});