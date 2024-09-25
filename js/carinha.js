const selectAllCheckbox = document.getElementById('selectAll');
const itemCheckboxes = document.querySelectorAll('.item-checkbox');
const totalDisplay = document.getElementById('total');
const cartTitle = document.getElementById('cart-title');

function updateItemCount() {
    const itemCount = document.querySelectorAll('.item').length;
    cartTitle.textContent = `Carrinho de Compras (${itemCount})`;
}

function updateTotal() {
    let total = 0;
    itemCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            total += parseFloat(checkbox.getAttribute('data-price'));
        }
    });
    totalDisplay.textContent = `${total}MT`;
}


selectAllCheckbox.addEventListener('change', function() {
    itemCheckboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
    updateTotal();
});


itemCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        updateTotal();
    });
});

// Atualizar o número de itens no título
updateItemCount(); // Chama a função para atualizar automaticamente