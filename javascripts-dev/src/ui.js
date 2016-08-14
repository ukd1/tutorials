var UserInterface = {
  selector: "a[href^='#download-']"
};

UserInterface.setup = function(zipper, downloader) {

  var downloadLink = document.body.querySelector(UserInterface.selector);

  var createZip = function(downloadLinkUrl) {
    var listId = downloadLinkUrl.split("#").pop();
    zipper.createZip(downloader, UserInterface.getPathsInList(listId));
  };

  var registerListener = function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      createZip(this.href);
    }, false);
  };

  var checkIfDownloadLinkExist = function() {
    if (downloadLink) {
      registerListener(downloadLink);
    }
  };

  checkIfDownloadLinkExist();
};

UserInterface.getPathsInList = function(listId) {
  var i, n, paths = [],
      links = document.querySelectorAll("#" + listId + " a");

  for (i=0, n=links.length; i<n; i++) {
    paths.push(links[i].href);
  }

  return paths;
};
