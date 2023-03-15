var btn_video = document.getElementById("btn_video");
var btn_cronica = document.getElementById("btn_cronica");
var btn_podcast = document.getElementById("btn_podcast");

var panel_video = document.getElementById("panel_video");
var panel_cronica = document.getElementById("panel_cronica");
var panel_podcast = document.getElementById("panel_podcast");

btn_video.addEventListener("click", activar_video, false);
btn_cronica.addEventListener("click", activar_cronica, false);
btn_podcast.addEventListener("click", activar_podcast, false);
    
    function activar_video()
    {   
      var activado = panel_video.style.display;
      if(activado != "inline-block")
      {
        panel_video.style.display="inline-block";
        panel_cronica.style.display="none";
        panel_podcast.style.display="none";
      }
    }

    function activar_cronica()
    {   
      var activado = panel_cronica.style.display;
      if(activado != "inline-block")
      {
        panel_cronica.style.display="inline-block";
        panel_video.style.display="none";
        panel_podcast.style.display="none";
      }
    }

    function activar_podcast()
    {   
      var activado = panel_podcast.style.display;
      if(activado != "inline-block")
      {
        panel_podcast.style.display="inline-block";
        panel_cronica.style.display="none";
        panel_video.style.display="none";
      }
    }
