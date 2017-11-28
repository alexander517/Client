$(document).ready(() => {

        SDK.User.loadNav();
        const currentUser = SDK.User.current();
        const $basketTBody = $("#basket-tbody");

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
            if(err) throw err;
                orders.forEach(order => {

                    $basketTBody.append(`
            <tr>
                <td>${order.id}</td>
                <td>${parseOrderItems(order.orderItems)}</td>
                <td>kr. ${sumTotal(order.orderItems)}</td>
            </tr>
          `);
            });
        });

            } else {
                window.location.href = "admin.html"
            }
        } else {
            window.location.href = "login.html";
        }


    });