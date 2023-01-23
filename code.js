import hamburgerF from "./hamburgers.js";
import { clock } from "./watch.js";
import { control, shortcuts } from "./keyboard_events.js";
import { countdown } from "./countdown.js";
import { scrollTop } from "./scroll.js";
import darkMode from "./dark_mode.js";
import responsibleRD from "./js_responsive_design.js";
import responsive_test from "./Responsive_test.js";
import deviceDetection from "./device_detection.js";
import connDet from "./connection_detection.js";
import location from "./location.js";
import searchFilter from "./search_filter.js";
import lottery from "./lottery.js";
import slider from "./slider.js";
document.addEventListener("DOMContentLoaded", (e)=>{
  hamburgerF(".hamburger-menu", ".menu-container", ".hamburger", ".menu-list li a");
  clock(".timerStart", ".timerStop", ".alarmStart", ".alarmStop");
  control("w","s","a","d", "ball", "background");
  shortcuts();
  countdown(".mainText", new Date("Sun Feb 5 2023 00:00:00 GMT-0300"),"Happy Birthday to me!");
  scrollTop(".scrollTop", 350);
  // responsibleRD(".item1",
  // "(min-width:600px",
  //   '<iframe width="560" height="315" src="https://www.youtube.com/embed/2-W7IUjvNfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  //    '<a href="https://youtu.be/2-W7IUjvNfk">See video</a>');
  // responsibleRD(".item2",
  // "(min-width:600px",
  //  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8428.48360793936!2d-65.59988107433577!3d-27.352570043607173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423cf606d2c1f93%3A0x9a3e0dd70a67d834!2sUniversidad%20Tecnologica%20Nacional(UTN%20FRT)!5e0!3m2!1ses-419!2sar!4v1673843623532!5m2!1ses-419!2sar" width="560" height="315" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  //  '<a href="https://goo.gl/maps/7PHnHFFbAKU3QtqbA">See Map</a>');
  responsive_test("form",".submit", ".closePage");
  deviceDetection("devdet");
  connDet("connectionStatus", "device-status");
  location(".show-location");
  searchFilter("search_input");
  lottery(".lottery-competitor", ".lottery-button");
  slider(".left",".right",".content-slider");
});

darkMode(".darkMode", "body");