let $continer = $("#inicio");

$($continer).ready(function () {
  getPortfolio();
});

function getPortfolio() {
  $.getJSON("doc/portfolio.json", function (response) {
    // console.log(response.data);
    showData(response.data);
  });
}

function showData(data) {
  console.log(data);
  data.forEach((element) => {
    let col = $(
      '<div class="col-12 col-md-4 d-flex justify-content-center" id="porfolio_' +
        element.id +
        '">' +
        '<div class="card" style="width: 18rem; margin-top: 16px;">' +
        '<img src="' +
        element.url_img +
        '" class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' +
        element.title +
        "</h5>" +
        '<p class="card-text">' +
        element.desc +
        "</p>" +
        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">ver más</button>' +
        // '<a href="' +
        // element.url_git +
        // '" class="btn btn-primary">ver más</a>' +
        "</div>" +
        "</div>" +
        "</div>"
    );
    $continer.append(col);
  });
}
