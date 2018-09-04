(function () {
  let mediaRecorder = null;
  let mediaStream = null;
  let chunks = [];

  function getMediaStream(params) {
    var constraints = {
      audio: false,
      video: true
    };

    return navigator.mediaDevices.getUserMedia(constraints);
  }

  function attachMedia() {
    getMediaStream()
      .then(stream => {
        document.querySelector('#video').srcObject = stream;
        mediaStream = stream;
      })
      .catch(err => alert(`${err.name}: ${err.message}`));
  }

  function record(para) {
    var pg=document.getElementById('pg');
    pg.value = 0
    var itv = setInterval(function(e){
          if(pg.value!=100){
            pg.value++;
          }
          else{
            clearInterval(itv);
            return false;
          }
    },100);
    currentBtnR = document.getElementById("record");
    currentBtnS = document.getElementById("stop");
    currentBtnR.style.display = "none";
    currentBtnS.style.display = "inline";
    mediaRecorder = new MediaRecorder(mediaStream, { mimeType:"video/webm" });

    mediaRecorder.addEventListener('dataavailable', e => {
      console.log('dataavailable %o', e);
      chunks.push(e.data);
    });
    mediaRecorder.addEventListener('error', e => console.log('error %o', e));
    mediaRecorder.addEventListener('start', e => console.log('start %o', e));
    mediaRecorder.addEventListener('stop', e => console.log('stop %o', e));

    mediaRecorder.start(10);
  }

  function stop(para) {
    currentBtnR = document.getElementById("record");
    currentBtnS = document.getElementById("stop");
    currentBtnR.style.display = "inline";
    currentBtnS.style.display = "none";
    mediaRecorder.stop();
    console.log(mediaRecorder.state);
  }
  function movieMaker(){
    var form = new FormData();

  }

  function download() {
    var blob = new Blob(chunks, {type: "video/webm"});

    chunks = [];

    var downloadLink = document.querySelector('a#download');
    var videoURL = window.URL.createObjectURL(blob);
    var rand =  Math.floor((Math.random() * 10000000));
    var name  = "video_"+rand+".webm" ;

    downloadLink.href = videoURL;
    downloadLink.setAttribute( "download", name);
    downloadLink.setAttribute( "name", name);


    var formData = new FormData();
    formData.append("fname",name);
    formData.append("data",blob);
    $.ajax({
      url: '/process',
      type: 'POST',
      cache: false,
      data: formData,
      processData: false,
      contentType: false,
      success: function(res){
        console.log(res);
        if(res == 'error 0'){
          var warn = document.getElementById("warn");
          warn.innerHTML="THERE IS NOBODY BEING DETECTED";
          setTimeout(function(){
            warn.innerHTML="";
          },10000)
          mmdloop(res);
        }
        else if(res == 'error 1'){
          warn.innerHTML="PLEASE MAKE SURE YOUR FULL BODY CAN BE CAPTURED";
          setTimeout(function(){
            warn.innerHTML="";
          },10000)
          mmdloop(res);
        }
        else if(res == 'error 2'){
          warn.innerHTML="MAYBE YOUR POSETURE IS HARD TO RECOGNIZE, PLEASE FACING THE SCREEN";
          setTimeout(function(){
            warn.innerHTML="";
          },10000)
          mmdloop(res);
        }
        else
        {
          updateMotion(res);
          setTimeout(function(){
            mmdloop();
          },10000)
        }
      }
    })
  }

  function mmdloop(para){
    if(para == 'error 0' || para == 'error 1' || para == 'error 2'){
      document.getElementById("animation2").style.display="inline";
    }
    else {
      document.getElementById("animation").style.display="inline";
    }
    document.getElementById("record").click();
    setTimeout(function(){
      if(para == 'error 0' || para == 'error 1' || para == 'error 2'){
        document.getElementById("animation2").style.display="none";
      }
      else {
        document.getElementById("animation").style.display="none";
      }
      document.getElementById("stop").click();
      // document.getElementById("finish").click();
    },10000)
    setTimeout(function(){
      document.getElementById("finish").click();
    },11000)
  }

  function check(){
    updateMotion("20180718131855");
  }


  document.getElementById("start").addEventListener('click', function(){mmdloop();});
  document.querySelector('#record').addEventListener('click', e => record());
  document.querySelector('#stop').addEventListener('click', e => stop());
  document.querySelector('#finish').addEventListener('click', e => download());

  attachMedia();
})()
