import $ from 'jquery';
import gsap from "../../vendor/gsap/dist/gsap";
import TweenLite from "../../vendor/gsap/dist/gsap";
import Draggable from "../../vendor/gsap/dist/Draggable";
gsap.registerPlugin(Draggable); 

export function initSplitters () {
  if($('.resizable').length === 0) {
    return;
  }
  var body = document.body;
  var resizables = $(".resizable-container").map(createResizable);
  var requestId = null;

  TweenLite.set(".workspace", { autoAlpha: 1 });
  $(window).resize(requestResize);

  function createResizable(index, element) {
    var container = $(element);
    var panels = container.children(".resizable");

    var panelA = panels[0];
    var panelB = panels[1];
    var bar = container.children(".resize-bar")[0];
    
    var isColumn = (container.data("resize-type") === "column");
    var basis = container.data("resize-basis");
    var rect = element.getBoundingClientRect();
      
    var resizable = {
      resized: false
    };
      
    var cursor;
    
    if (isColumn) {    
      cursor = "col-resize";
      TweenLite.set(bar, { xPercent: -50 });
      
    } else {    
      cursor = "row-resize";
      TweenLite.set(bar, { yPercent: -50 });
    }
   
    var draggable = new Draggable(bar, {
      cursor: cursor,
      bounds: container,    
      onDrag: resizePanels,
      onPress: setAbsolute,
      onRelease: setRelative
    });
    
    setAbsolute.call(draggable);
    resizePanels.call(draggable);
    setRelative.call(draggable);
    
    function resizePanels() {
          
      basis = ((isColumn ? this.x / rect.width : this.y / rect.height) * 100);
      
      if (panelA) {
        panelA.style.flexBasis = basis + "%";
      }

      if (panelB) {
        panelB.style.flexBasis = (100 - basis) + "%";   
      } 
    }
    
    function setAbsolute() {
          
      body.style.cursor = cursor;
      
      if (resizable.resized) {
        rect = element.getBoundingClientRect();
        resizable.resized = false;
      }
      
      if (isColumn) {
        TweenLite.set(bar, { left: 0, x: basis * rect.width / 100 });
      } else {
        TweenLite.set(bar, { top: 0, y: basis * rect.height / 100 });
      }
      
      this.update();
    }
    
    function setRelative() {
      
      body.style.cursor = "inherit";
      if (isColumn) {      
        TweenLite.set(bar, { x: 0, left: basis + "%" });      
      } else {
        TweenLite.set(bar, { y: 0, top: basis + "%" });
      }
    }
      
    return resizable;
  }

  function requestResize() {
    cancelAnimationFrame(requestId);
    requestId = requestAnimationFrame(resize);
  }

  function resize() {
    
    var total = resizables.length;
    
    for (var i = 0; i < total; i++) {
      resizables[i].resized = true;
    }
  }
}
