let $continer = $("#inicio");
let arrPortfolio = [];

function getWorks() {
  $.getJSON("doc/portfolio.json", function (response) {
    console.log(response);
    arrPortfolio = response.data;
    showData(arrPortfolio);
  });
}

$($continer).ready(function () {
  getWorks();
});

function showData(data) {
  data.forEach(element => {
    console.log(element);
    let col = $(
        '<div class="col-12 col-lg-4 col-sm-3 d-flex justify-content-center" id="porfolio_' +
        element.info +
        '">' +
        '<div class="card" style="width: 18rem; margin-top: 16px;">' +
        '<img src="' +
        element.img +
        '" class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' +
        element.title +
        "</h5>" +
        '<p class="card-text">' +
        element.desc +
        "</p>" +
        '<a href="' +
        element.url_git +
        '"target="_blank" class="btn btn-primary">Ver más</a>' +
        "</div>" +
        "</div>" +
        "</div>"
    );
    $continer.append(col);
  });

  function openModal(id) {
    console.log(arrPortfolio[id]);
  }
}