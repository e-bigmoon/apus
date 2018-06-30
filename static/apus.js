function getJSON(path, success)
{
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function()
  {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      } else {
        console.log(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}

apus = {};

apus.printSearch = function(query, searchresult){
  if (query == "") return;
  getJSON("/api/search/" + encodeURI(query), function(data){
    searchresult.innerHTML = "";
    for (v of data) {
      var item = document.createElement("div");
      item.classList.add("search-result-item");
      var title = document.createElement("h2");
      var link = document.createElement("a");
      link.href = "/" + v[0];
      link.innerText = v[1];
      title.appendChild(link);
      item.appendChild(title);
      var pre = document.createElement("span");
      pre.innerText = v[2];
      var body = document.createElement("span");
      body.innerText = searchbox.value;
      body.classList.add("marker");
      var post = document.createElement("span");
      post.innerText = v[3];
      item.appendChild(pre);
      item.appendChild(body);
      item.appendChild(post);
      searchresult.appendChild(item);
    }
  });
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}
