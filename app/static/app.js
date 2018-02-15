// Create local scope
(function() {
  // Init Aplication
  const app = {
    init() {
      routers.init();
      sections.init();
    },
    rootElement: document.body
  };

  // Handle routes and states
  const routers = {
    init() {
      // Make routie config and requesting a xhr if needed
      routie({
        start: function() {
          sections.toggle("start");
        },
        popular: function() {
          sections.toggle("popular", "popular");

        },
        // vangt af wat er achter de movie/ staat en geeft dit mee als 2de parameter aan toggle
        "movie/:movieId": function (movieId) {
          sections.toggle("movieDetail", movieId);
        }
      });
    }
  };

  // Render / toggle sections
  const sections = {
    sectionsElements: app.rootElement.querySelectorAll("body>section"),
    init(){
      // Een event listeren op het knopje, en voert nogmaals toggle uit voor referch van de pagina
      this.sectionsElements[1].querySelector('#popular input').addEventListener("change",function () {
        xhr.filterBadMovies = this.checked;
        sections.toggle("popular", "popular");
      });
    },
    toggle(route, routeId) {
      /// Zet de juiste section op active
      this.sectionsElements.forEach(function (el) {
        el.classList.remove("active");
        if (el.id === route) {
          el.classList.add("active");
        }
      });

      // Gaat de pagina's vullen met data van de api behalve op start pagina
      if(route != "start"){
        this.loadPage(route, routeId);
      }
    },
    loadPage(route, routeId){
      // Maakt een api request
      xhr.request(routeId).then(function(){
        // Rendert de pagina nadat de api call is gelukt
        xhr.render(route, routeId);
      });
    },
    calcReleaseDate(date) {
      date = date.split("-");
      date = new Date(date[2], date[1], date[0]);
      var days = Math.floor((new Date() - date) / 86400000);
      return days;
    }
  };

  const xhr = {
    apiBasisUrl: "https://api.themoviedb.org/3/movie/",
    apiKey: "d9a167a57e748b4a804b41f0186b2339",
    data: {},
    filterBadMovies: false,
    request(apiSearchParm){
      var _this = this;
      // Maakt een promise voor de xml request
      var promise = new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();

        // Making the url and creating a GET request
        var url = `${_this.apiBasisUrl}${apiSearchParm}?api_key=${_this.apiKey}`;

        request.open('GET', url, true);

        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            // Zet de result json in het data atribuut
            _this.data = JSON.parse(request.responseText);
            resolve();
          }
        };
        request.send();
      });

      return promise;
    },
    render(route, apiSearchParm) {
      // Checking if it a popular Search or Movie detail page
      if (xhr.filterBadMovies) {
        // filtering if vote average is kleiner dan 6.5
        this.data.results = this.data.results.filter(function(obj){
          if (obj.vote_average > 6.5) {
            return true;
          }
        });
      }

      this.data.results = this.data.results.map(function(obj) {
        console.log(sections.calcReleaseDate(obj.release_date));
        obj.release_date = sections.calcReleaseDate(obj.release_date);
        return obj;
      });

      if (route === "popular") {
        var directives = {
          title: {
            href: function(params) {
              return `#movie/${this.id}`;
            },
            text: function (params) {
              return `${this.title} (${this.release_date} days old)`
            }
          }
        };


        var target = sections.sectionsElements[1].querySelector('#popularMovies');
        // Render Page
        Transparency.render(target, this.data.results, directives);
      } else if (route === "movieDetail"){
        var directives = {
          title: {
            href: function (params) {
              return `https://imdb.com/title/${this.imdb_id}`;
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
  };

  // Start the Aplication
  app.init();
})();
