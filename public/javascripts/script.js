// input focus olduğunda
$("#issue").focus(function() {
  $(".btn.btn-add").addClass("active");
});

$(".bitmis .todo-checkbox").attr("checked", "checked");


var TinyDatePicker = DateRangePicker.TinyDatePicker;
var dpModal = TinyDatePicker('.startedDate');
var dpModal = TinyDatePicker('.endDate');

$(".completed-task").on("click", function(){
  $(".completed-task-area").show();
  $(".btn.btn-secondary.completed-task.show").hide();
  $(".btn.btn-secondary.completed-task.hide").css("display","inline-block");
})

$(".btn.btn-secondary.completed-task.hide").on("click", function(){
  $(".completed-task-area").hide();
  $(".btn.btn-secondary.completed-task.show").css("display","inline-block");
  $(".btn.btn-secondary.completed-task.hide").hide();
});

TinyDatePicker($(".datepicker"), {
  lang: {
    days: ['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pa'],
    months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    today: 'Bugün',
    clear: 'Temizle',
    close: 'Kapat',
  },
  mode: 'dp-below',
  format: function (dt) {
    return dt.getDate() + '.' + (dt.getMonth() + 1) + '.' + dt.getFullYear();
  }
});
