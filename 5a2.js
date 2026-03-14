function validateForm(){
    let product=document.getElementById("product");
    let quantity=document.getElementById("quantity");
    let phone=document.getElementById("phone");
    let payment=document.getElementById("payment");

    let phonePattern=/^\d{10}$/;
    let quantityPattern=/^[1-9]\d*$/;

    if (product.value=="select" || quantity.value=="" || phone.value=="" || payment.value=="select")
        {
                alert("Please fill in all fields correctly.");
                return false;
        }

        else if (!quantityPattern.test(quantity.value))
        {
                alert("Quantity must be a positive integer.");
                return false;
        }

        else if (!phonePattern.test(phone.value))
        {
                alert("Phone number must be exactly 10 digits.");
                return false;
        }

        else
        {
                alert("Order placed successfully!");
                return true;
        }

}
function increaseQty()
{
        let qty = document.getElementById("quantity");
        qty.value = parseInt(qty.value) + 1;
}

function decreaseQty()
{
        let qty = document.getElementById("quantity");

        if(qty.value > 1)
        {
                qty.value = parseInt(qty.value) - 1;
        }
}