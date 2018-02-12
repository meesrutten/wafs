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
      routie({
        'start': function() {
          sections.toggle(arguments.callee.name);
        },
        'popular': function() {
          sections.toggle(arguments.callee.name);
          xhr.request("popular");
        },
        'movie/:movieId': function (movieId) {
          console.log(movieId);
          sections.toggle("movieDetail");
        }
      })
    }
  }

  // Render / toggle sections
  var sections = {
    sectionsElements: app.rootElement.querySelectorAll("body>section"),
    toggle: function(route) {
      for (let i = 0; i < this.sectionsElements.length; i++) {
        this.sectionsElements[i].classList.remove("active");
        // Checking if the id is the same as the route
        if (this.sectionsElements[i].id == route) {
          this.sectionsElements[i].classList.add("active");
        }
      }
    }
  }

  var xhr = {
    apiBasisUrl: "http://api.themoviedb.org/3/movie/",
    apiKey: "d9a167a57e748b4a804b41f0186b2339",
    data: {},
    request: function(apiSearchParm) {
      var request = new XMLHttpRequest();
      var _this = this;
      request.open('GET', `${this.apiBasisUrl}${apiSearchParm}?api_key=${this.apiKey}`, true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
         // Success!
         //TODO Change xhr to THIS
          xhr.data = JSON.parse(request.responseText);
          xhr.render();
        } else {
         // We reached our target server, but it returned an error

        }
      };
      request.send();
    },
    render: function () {
      var directives = {
        title: {
          href: function(params) {
            return `#movie/${this.id}`;
          }
        }
      };

      Transparency.render(sections.sectionsElements[1].querySelector('#popularMovies'), this.data.results, directives);
    }
  }

  // Start the Aplication
  app.init();

})();
