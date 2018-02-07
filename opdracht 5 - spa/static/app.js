// Create local scope
(function() {
  //Init Aplication
  var app = {
    init: function() {
      routers.init();
    },
    rootElement: document.body
  };

  // Handle routes and states
  var routers = {
    init: function() {
      window.addEventListener("hashchange",function(event){
        var route = location.hash.substr(1);;
        sections.toggle(route);
      });
    }
  }

  // Render / toggle sections
  var sections = {
    sections: app.rootElement.querySelectorAll("body>section"),
    toggle: function(route) {
      for (let i = 0; i < this.sections.length; i++) {
        this.sections[i].classList.remove("active");
        if (this.sections[i].id == route) {
          this.sections[i].classList.add("active")
        }
      }
    }
  }

  // Start the Aplication
  app.init();

})();
