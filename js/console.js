$(document).ready(function() {
    $('#input').find('input').focus();
});


$('#input').cssConsole({
  inputName:'console',
  charLimit: 60,
  onEnter: function(){
    addLine("> "+$('#input').find('input').val());
    execCommand($('#input').find('input').val());
    $('#input').cssConsole('reset');  
    $('#input').find('input').focus();
  }
});

var lineLimit = 28;

$('.container').on('click', function() {
  $('#input').find('input').focus();
});

function addLine(input, style, color) {
    if($('.console div').length==lineLimit) {
      $('.console div').eq(0).remove();
    }
    style = typeof style !== 'undefined' ? style : 'line';
    color = typeof color !== 'undefined' ? color : 'white';
    $('.console').append('<div class="'+style+' '+color+'">'+input+'</div>');
}

function addLineLink(input, style, color, link) {
    if($('.console div').length==lineLimit) {
      $('.console div').eq(0).remove();
    }
    style = typeof style !== 'undefined' ? style : 'line';
    color = typeof color !== 'undefined' ? color : 'white';
    $('.console').append('<div class="'+style+' '+color+'"><a href="'+link+'" target="_blank">'+input+'</a></div>');
}

function execCommand(command){
    if ( commands[command] ) {
      return commands[command]();
    } else {
      addLine("Command '" + command + "' was not found.");
    }   
}

var portfolio = "Portfolio";
var blog = "Blog";
var masters = "Masters";
var github = "GitHub";

var commands = {
  help: function (){
    addLine("Available command list (all commands are case-sensitive)");
    addLine("rob", 'margin', 'blue');
    addLine("help", 'margin', 'blue');
    addLine("about", 'margin', 'blue');
    addLine("clear", 'margin', 'blue');
    addLine("credits", 'margin', 'blue');

  },
  rob: function(){
    addLine("Click a link below or type the name in lowercase", 'margin', 'green');
    addLineLink("Portfolio", 'margin', 'blue', 'http://bladesrob.com/portfolio');
    addLineLink("Blog", 'margin', 'blue','http://blog.bladesrob.com');
    addLineLink("Masters", 'margin', 'blue','http://pembrokesoundscapes.ca');
    addLineLink("GitHub", 'margin', 'blue', 'http://github.com/rblades');
    addLineLink("Twitter", 'margin', 'blue', 'http://twitter.com/BladesRob');
    addLineLink("LinkedIn", 'margin', 'blue', 'http://www.linkedin.com/in/robert-blades-0a4ba877');
  },
  about: function() {
    addLine("My current hobbies include");
    addLineLink("Hacking my Raspberry Pi", 'margin', 'blue', 'http://github.com/rblades/Dev-Env/blob/master/HIST5702/sonifying-dirt-data.md');
    addLine("Small Engine Mechanics", 'margin', 'blue');
    addLine("Brewing Coffee", 'margin', 'blue');
  },
  clear: function() {
    window.location.reload(false); 
  },
  credits: function() {
    addLineLink("This page was based on cssConsole.", 'margin', 'blue', 'http://github.com/michalkow/cssConsole');
  },
  portfolio: function() {
    window.open("http://bladesrob.com/portfolio");
  },
  blog: function() {
    window.open("http://blog.bladesrob.com");
  },
  masters: function() {
    window.open("http://pembrokesoundscapes.ca");
  },
  github: function() {
    window.open("http://github.com/rblades");
  },
  twitter: function() {
    window.open("http://twitter.com/BladesRob");
  },
  linkedin: function() {
    window.open("http://www.linkedin.com/in/robert-blades-0a4ba877");
  },
  jam: function() {
    window.open("http://www.youtube.com/watch?v=VUb450Alpps");
  }
}