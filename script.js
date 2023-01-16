$(".download-text").click(function() {
  var imageUrl = $(".resume-image").attr("src");
  var link = document.createElement("a");
  link.download = "resume-image.jpg";
  link.href = imageUrl;
  link.click();
});

// selects the element with the class "download-text" and attaches a click event listener to it. Once the element is clicked, the script gets the source URL of the image by calling the attr("src") method on the element with class "resume-image", and creates a new link element. The download attribute is set to "resume-image.jpg" and the href attribute is set to the image URL.
// Finally, the script triggers a click event on the link element, which will prompt the browser to download the image.