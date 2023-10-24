$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const valorInput = $("#tarefaInput").val();
    const novaTarefa = $("<li ></li>");

    $(`
        <p id="valor">
        ${valorInput}
        
        </p>
        
        `).appendTo(novaTarefa);

    $(novaTarefa).appendTo("ul");

    $("#tarefaInput").val("");
  });

  $("ul").on("click", "li", function () {
    $(this).find("#valor").css("text-decoration", "line-through");
    $(this).find("#valor").css("color", "red");
  });
});
