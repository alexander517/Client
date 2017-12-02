$(document).ready(() => {

    SDK.User.loadNav();

    $("#createItemBtn").click(() => {
        const $itemName = $("#itemName").val();
        const $itemDesc = $("#itemDescription").val();
        const $itemPrice = $("#itemPrice").val();
        const $itemUrl = $("#itemUrl").val();

        SDK.Item.create($itemName, $itemDesc, $itemPrice, $itemUrl, (err, data) =>{

            if (err && err.xhr.status !== 200){
                console.log("Could not create item")
            }
            else{
                console.log("Item created");
                window.alert("Item created.");
                window.location.reload();
            }
        });
    });
});