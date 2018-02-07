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
      // Check if the window already has a hash and change active sections corspodending the hash
      if (window.location.hash) {
        sections.toggle(location.hash.substr(1));
      }

      // Listing to hashchange
      window.addEventListener("hashchange",function(){
        var route = location.hash.substr(1);
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
        // Checking if the id is the same as the route
        if (this.sections[i].id == route) {
          this.sections[i].classList.add("active");
        }
      }
    }
  }

  // Start the Aplication
  app.init();

})();
