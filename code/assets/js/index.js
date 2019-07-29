const SUBJECT = 'baku-llama';
const metaData = {};

function makeRepoLink (html_url, full_name) {
  metaData['RepoLink'] = "<a target='_blank' href='" + html_url + "'><i class='fas fa-code'></i> " + full_name + '</a>';
}

function makeLicenseLink (license) {
  if (license && license.url && license.name) {
    metaData['License'] = "<a target='_blank' href='" + license.url + "'><i class='fas fa-key'></i> " + license.name + '</a>';
  } else {
    metaData['License'] = '';
  }
}

function makeDescription (desc) {
  if (desc) {
    metaData['Description'] = '<p><strong>' + desc + '</strong></p>';
  } else {
    metaData['Description'] = '';
  }
}

function makeDateFormat (date) {
  let dateObj = new Date(date);
  metaData['Date'] = '<p><i class="far fa-clock"></i> Updated: ' + dateObj.toDateString() + '</p>';
}

function makeHomepage (homepage) {
  if (homepage && typeof homepage === "string" && homepage.length > 0) {
    let href = "<a style='word-wrap: break-word;' target='_blank' href='" + homepage + "'>" + homepage + '</a>';
    metaData['Homepage'] = '<p><i class="fas fa-globe"></i> ' + href + '</p>';
  } else {
    metaData['Homepage'] = '';
  }
}

function generateTemplate (repo) {
  makeHomepage(repo.homepage);
  makeDateFormat(repo.updated_at);
  makeDateFormat(repo.updated_at);
  makeDescription(repo.description);
  makeRepoLink(repo.html_url, repo.full_name);
  makeLicenseLink(repo.license);

  return [
    "<div class='col s12 m6 l4 xl4'>",
      '<div class="card-panel grey lighten-4 z-depth-4">',
        '<div class="row">',
          '<div class="col s12 m12 l12 xl12">',
            metaData['RepoLink'],
            metaData['Description'],
            metaData['Homepage'],
            metaData['Date'],
            metaData['License'],
          '</div>',
        '</div>',
      '</div>',
    '</div>',
  ].join('');
}

function loopReposTask (data) {
  let i = 0;
  let section = [];
  data.forEach((repo) => {
    if (repo && repo.id) {
      if (i % 3 === 0) {
        section.push('<div class="row">');
      }
      let template = generateTemplate(repo);
      section.push(template);
      if (i % 3 === 2) {
        section.push('</div>');
        $('#repositories').append(section.join(''));
        section = [];
      }
      i += 1;
    }
  });
  if (i !== 3) {
    section.push('</div>')
    $('#repositories').append(section.join(''));
  }
}

var getData = (function ($) {
  let ReposUrl = `https://api.github.com/users/${SUBJECT}/repos`
  $.ajax({
    url: ReposUrl,
    type: 'GET',
    success: function (data) {
      loopReposTask(data);
    },
    error: function (data) {
      console.info(data);
    }
  });
})($)


$("html").css({"font-size": (window.outerHeight/100)+"px"});
maintitle.classList.remove("fade");
quote.classList.remove("fade");
var array = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8"];

for (i in array) {
    document.getElementById(array[i]).classList.remove("fade")
};

void maintitle.offsetWidth;


maintitle.classList.add("fade");
quote.classList.add("fade");

setInterval(function() {
    if (pageYOffset >= Number(window.outerHeight/100)*60) {
        var counter = 0;
        var i = setInterval(function(){
            document.getElementById(array[counter]).classList.add("fade");
            document.getElementById(array[counter] + "m").classList.add("fade");
            counter++;
            if (counter == 8) {
                clearInterval(i);
            }
            },
        100);
     };
}, 200);

function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');

	var i = 0;
	timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}


var speed = 125;
typeEffect($('#type'), speed);
setInterval(function() {
    typeEffect($('#type'), speed);
}, 3000);