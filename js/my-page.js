$(document).ready(() => {

        SDK.User.loadNav();
        const currentUser = SDK.User.current();
        const $basketTbody = $("#basket-tbody");
        const $noOrdersContainer = $("#no-orders-container");
        const $ordersContainer = $("#orders-container");

        if(currentUser) {
            if (!SDK.User.current().isPersonel) {

        $(".page-header").html(`
        <h1>Velkommen, ${currentUser.username}</h1>
      `);

        $(".profile-info").html(`
        <dl>
            <dt>Name</dt>
            <dd>${currentUser.username}</dd>
            <dt>ID</dt>
            <dd>${currentUser.user_id}</dd>
         </dl>
      `);

        SDK.Order.findMine((err, orders) => {
            if (err) throw err;

                if (!orders.length) {
                        $ordersContainer.hide();
                    } else {
                        $noOrdersContainer.hide();
                    }

                    orders.forEach(order => {

                        for (let i = 0; i < order.items.length; i++) {
                            let orderStatus = "";
                            if (order.isReady === true) {
                                orderStatus = "Din order er <span style=\"color:#59cc33\">KLAR</span> til afhentning";
                            } else {
                                orderStatus = "Din order er <span style=\"color:#ff0000\">IKKE</span> klar til afhentning"
                            }

                            $basketTbody.append(`
                  <tr>
                  <td>${order.orderId}</td>
                  <td>${order.items[i].itemName}</td>
                  <td>${order.items[i].itemPrice + " kr"}</td>
                  <td>${orderStatus}</td>
                  </tr>
                  
           `);
                        }
                    });
                });


            } else {
                window.location.href = "admin.html"
            }
        } else {
            window.location.href = "login.html";
        }


    });