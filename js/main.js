//Business Logic
function Order(name, flavour, size, crust, toppings, quantity, total){
    this.name = name;
    this.flavour = flavour;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
    this.total = total;
  }
Order.prototype.GetTotal = function(quantity){
    if (this.total > 1){
        this.total = this.total * quantity;
        return this.total
    }
    else{
       return this.total
    }
}
Order.prototype.Delivery = function(amount){
    if (amount == true){
        this.total += 200;
        return this.total;
    }
    else{
        return this.total;
    }
}

  var priceOfSize;
  let priceOfCrust;
  let priceOfTopping;

  var totalPrice =[];
  let buyers = [];
 
//User Interface Logic
$("#form").submit(function(e){
    e.preventDefault();

    var name = $("#name").val();
    var flavour = $("#pizza").val();
    var size = $("#size").val();
    var crust = $("#crust").val();
    var toppings = $("#toppings").val();
    var quantity = $("#quantity").val();

    if(!name || !flavour || !size || !crust || !toppings || !quantity){
        alert("Please fill all fields to order");
        return false;
    }


    if(size == "Large"){
        priceOfSize = 1000;
        if(crust == "Stuffed"){
            priceOfCrust = 350;
           if(toppings == "Pineapple"){
                priceOfTopping = 150;
            } 
            else if(toppings == "Mushrooms"){
                priceOfTopping = 350;
            } 
            else if(toppings == "Cheese"){
                priceOfTopping = 250;
            }
        }
        else if(crust == "Crispy"){
            priceOfCrust = 300;
            if(toppings == "Pineapple"){
                priceOfTopping = 150;
            } 
            else if(toppings == "Mushrooms"){
                priceOfTopping = 350;
            }
            else if(toppings == "Cheese"){
                priceOfTopping = 250;
            }

        }
        else if(crust == "Glutten"){
            priceOfCrust = 400;
            if(toppings == "Pineapple"){
                priceOfTopping = 150;
            } 
            else if(toppings == "Mushrooms"){
                priceOfTopping = 350;
            }
            else if(toppings == "Cheese"){
                priceOfTopping = 250;
            }

        }

    }
    else if(size == "Medium"){
        priceOfSize = 800;
        if(crust == "Stuffed"){
            priceOfCrust = 300;
           if(toppings == "Pineapple"){
                priceOfTopping = 100;
            } 
            else if(toppings == "Mushrooms"){
                priceOfTopping = 250;
            } 
            else if(toppings == "Cheese"){
                priceOfTopping = 150;
            }
        }
        else if(crust == "Crispy"){
            priceOfCrust = 250;
            if(toppings == "Pineapple"){
                priceOfTopping = 100;
            } 
            else if(toppings == "Mushrooms"){
                priceOfTopping = 250;
            }
            else if(toppings == "Cheese"){
                priceOfTopping = 150;
            }

        }
        else if(crust == "Glutten"){
            priceOfCrust = 350;
            if(toppings == "Pineapple"){
                priceOfTopping = 100;
            } 
            else if(toppings == "Mushrooms"){
                priceOfTopping = 250;
            }
            else if(toppings == "Cheese"){
                priceOfTopping = 150;
            }
    }
    else if(size == "Small"){
        priceOfSize = 600;
        if(crust == "Stuffed"){
            priceOfCrust = 250;
           if(toppings == "Pineapple"){
                priceOfTopping = 50;
            } 
            else if(toppings == "Mushrooms"){
                priceOfTopping = 150;
            } 
            else if(toppings == "Cheese"){
                priceOfTopping = 100;
            }
        }
        else if(crust == "Crispy"){
            priceOfCrust = 250;
            if(toppings == "Pineapple"){
                priceOfTopping = 50;
            } 
            else if(toppings == "Mushrooms"){
                priceOfTopping = 150;
            }
            else if(toppings == "Cheese"){
                priceOfTopping = 100;
            }

        }
        else if(crust == "Glutten"){
            priceOfCrust = 350;
            if(toppings == "Pineapple"){
                priceOfTopping = 50;
            } 
            else if(toppings == "Mushrooms"){
                priceOfTopping = 150;
            }
            else if(toppings == "Cheese"){
                priceOfTopping = 100;
            }
        }
    }
}    
    let total = parseInt(priceOfSize) + parseInt(priceOfCrust) + parseInt(priceOfTopping);
     
    console.log(priceOfCrust, priceOfSize, priceOfTopping);
    
    let table = document.getElementById("table");
    let row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();

    cell1.innerHTML = name;
    cell2.innerHTML = flavour;
    cell3.innerHTML = size;
    cell4.innerHTML = toppings;
    cell5.innerHTML = crust;
    cell6.innerHTML = quantity;

    var buyer = new Order(name, flavour, size, crust, toppings, quantity, total);

    buyer.GetTotal(quantity);

    totalPrice.push(buyer.total);

    buyers.push(buyer);
    console.log(buyers);

    Object.assign

    for(i=0; i<totalPrice.length; i++){
        buyer.total += totalPrice[i];
    }
    document.getElementById("totalAmount").innerHTML =`Total: ${buyer.total}`;

    $("#name").val("");
    $("#pizza").val("");
    $("#size").val("");
    $("#crust").val("");
    $("#toppings").val("");
    $("#quantity").val("");

    $(".delivery").click(function(){
        var delivery = confirm("Would you like the pizza to be delivered to you at an extra cost of 200?")
        if (delivery == true){
            let location = prompt("Enter location to be delivered");
            buyer.Delivery(delivery);
            alert(`${name} Your pizza will be delivered to ${location} in the next 30mins. New total is ${buyer.total} Thanks for the order` );
            document.getElementById("delivery").innerHTML = `Delivery: 200`;
            document.getElementById("totalAmount").innerHTML =`New Total: ${buyer.total}`;
        }
        else{
            alert(`${name} Thanks for the order`);
        }
        $(this).fadeOut(function(){
            $(".checkout").show(function(){
                $(this).click(function(){
                    alert(`Please proceed to make a payment of ${buyer.total}`);
                    document. location. reload() ;
                    $(this).hide();
                })
            })
        });
    });
 
});
