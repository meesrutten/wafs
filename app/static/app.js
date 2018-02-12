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
      // Make routie config and requesting a xhr if needed
      routie({
        'start': function() {
          sections.toggle(arguments.callee.name);
        },
        'popular': function() {
          sections.toggle(arguments.callee.name);
          xhr.request("popular");
        },
        'movie/:movieId': function (movieId) {
          sections.toggle("movieDetail");
          xhr.request(movieId);
        }
      });
    }
  };

  // Render / toggle sections
  var sections = {
    sectionsElements: app.rootElement.querySelectorAll("body>section"),
    toggle: function(route) {
      this.sectionsElements.forEach(function (el) {
        el.classList.remove("active");
        if (el.id == route) {
          el.classList.add("active");
        }
      });
    }
  }

  var xhr = {
    apiBasisUrl: "https://api.themoviedb.org/3/movie/",
    apiKey: "d9a167a57e748b4a804b41f0186b2339",
    data: {},
    request: function(apiSearchParm) {
      var request = new XMLHttpRequest();
      var _this = this;
      // Making the url and creating a GET request
      var url = `${this.apiBasisUrl}${apiSearchParm}?api_key=${this.apiKey}`

      request.open('GET', url, true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          //TODO Change xhr to THIS
          // Putting results into the data propoty and render page
          xhr.data = JSON.parse(request.responseText);
          xhr.render(apiSearchParm);
        } else {
         // We reached our target server, but it returned an error
        }
      };
      request.send();
    },
    render: function (apiSearchParm) {
      //Checking if it a popular Search or Movie detail page
      if(apiSearchParm == "popular"){
        var directives = {
          title: {
            href: function(params) {
              return `#movie/${this.id}`;
            }
          }
        };

        var target = sections.sectionsElements[1].querySelector('#popularMovies');
        // Render Page
        Transparency.render(target, this.data.results, directives);
      } else {
        var directives = {
          title: {
            href: function (params) {
              return `https://imdb.com/title/${this.imdb_id}`
            },
            text: function (params) {
              return `${this.title}(${this.release_date.substring(0, 4)})`;
            }
          },
          poster_path: {
            src: function(params) {
              return `https://image.tmdb.org/t/p/w185/${this.poster_path}`;
            }
          }
        };

        var target = sections.sectionsElements[2].querySelector('#movieDetails');
        // Render Page
        Transparency.render(target, this.data, directives);
      }
    }
  }

  // Start the Aplication
  app.init();

})();
