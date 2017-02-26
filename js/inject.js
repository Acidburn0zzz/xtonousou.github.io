// all hrefs are documented here
// in case of new page addition, put the additional href here
// based on document.title
switch (document.title) {
  case "/home/xtonousou":
    document.getElementById('pk').href = "/xtonousou-pubkey.asc";
    document.getElementById('di').href = "https://www.archlinux.org";
    document.getElementById('cdh1').href = "/bio.html";
    document.getElementById('cdh2').href = "/contact.html";
    document.getElementById('cdh3').href = "/projects.html";
    break;
  case "/home/xtonousou/bio":
    document.getElementById('cdb1').href = "javascript:window.location.reload();";
    document.getElementById('cdb2').href = "/index.html";
    break;
  case "/home/xtonousou/contact":
    document.getElementById('cdc1').href = "javascript:window.location.reload();";
    document.getElementById('cdc2').href = "/index.html";
    document.getElementById('cm').href = "mailto:xtonousou@gmail.com";
    document.getElementById('cf').href = "https://www.facebook.com/xtonousou";
    document.getElementById('cg').href = "https://github.com/xtonousou";
    document.getElementById('csc').href = "https://soundcloud.com/xtonousou";
    document.getElementById('cs').href = "https://open.spotify.com/user/xtonousou";
    document.getElementById('cso').href = "http://stackoverflow.com/users/4946732/xtonousou";
    document.getElementById('ct').href = "https://twitter.com/xToNouSou";
    document.getElementById('cy').href = "https://www.youtube.com/channel/UCMb3FpBNVRp-VYwhLrylo0g";
    break;
  case "/home/xtonousou/projects":
    document.getElementById('cdp1').href = "javascript:window.location.reload();";
    document.getElementById('cdp2').href = "/index.html";
    document.getElementById('pa').href = "https://github.com/v1s1t0r1sh3r3/airgeddon";
    document.getElementById('pm').href = "https://github.com/xtonousou/madubi";
    document.getElementById('ps').href = "https://github.com/xtonousou/.scripts";
    document.getElementById('psh').href = "https://github.com/xtonousou/shIP";
    document.getElementById('pxs').href = "https://github.com/xtonousou/xSoundBoardHD";
    break;
  default:
  console.error("inject.js : unknown document.title");
}
