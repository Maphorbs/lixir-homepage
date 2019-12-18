function transform() {
    var headerContainer = document.getElementsByClassName("headerContainer");
    if (headerContainer.className === "headerContainer") {
      headerContainer.className += " responsive";
    } else {
        headerContainer.className = "headerContainer";
    }
  }