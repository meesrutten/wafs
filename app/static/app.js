// Create local scope
(function() {
  //Init Aplication
  var app = {
    init: function() {
      routers.init();
      xhr.request();
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


  var xhr = {
    apiBasisUrl: "http://api.themoviedb.org/3/movie/76341",
    apiKey: "d9a167a57e748b4a804b41f0186b2339",
    data: {},
    request: function() {
      var request = new XMLHttpRequest();
      request.open('GET', `${this.apiBasisUrl}?api_key=${this.apiKey}`, true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
         // Success!
          this.data = JSON.parse(request.responseText);
          console.log(this.data);
        } else {
         // We reached our target server, but it returned an error

        }
      };

      request.onerror = function() {
       // There was a connection error of some sort
      };

      request.send();
    }
  }

  // Start the Aplication
  app.init();

})();
