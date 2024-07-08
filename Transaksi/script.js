var productInfoButtons = document.querySelectorAll('.single-product');
productInfoButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    });
});