let users =[
    {
        username: "alice",
        fName: "Alice",
        lName: "Wonderland",
        role: "STUDENT"
    },
    {
        username: "bob",
        fName: "Bob",
        lName: "Marley",
        role: "STUDENT"
    },
    {
        username: "charlie",
        fName: "Charlie",
        lName: "Garcia",
        role: "FACULTY"
    }
]

function renderUsers (users) {
    $body.empty();
    console.log(users);
    for(let i = 0; i < users.length; i++) {
         const user = users[i];
         const username = user.username;
         const fName = user.fName;
         const lName = user.lName;
         const role = user.role;
         let $templateT = $template.clone();
         console.log($templateT)
         $templateT.find(".wbdv-username").html(username);
         $templateT.find(".wbdv-first-name").html(fName);
         $templateT.find(".wbdv-last-name").html(lName);
         $templateT.find(".wbdv-role").html(role);
         $templateT.find(".wbdv-remove").click(() => deleteUser2(i));
         $templateT.find(".wbdv-edit").click(() => updateUser(i));
         $(".wbdv-tbody").append($templateT);
    }
};

const deleteUser = (event) => {
    console.log(event);
    const deleteBtn = event.currentTarget;
    const $deleteBtn = $(deleteBtn).parents("tr");
    $deleteBtn.remove();
    alert("deletedUser!");
};

const deleteUser2 = (index) => {
    users.splice(index, 1);
    renderUsers(users);
};

const updateUser = (index) => {
    username = users[index].username;
    fName = users[index].fName;
    lName = users[index].lName;
    role = users[index].role;
    $(".wbdv-form").find("#usernameFld").val(username);
    $(".wbdv-form").find("#firstNameFld").val(fName);
    $(".wbdv-form").find("#lastNameFld").val(lName);
    $(".wbdv-form").find("#roleFld").val(role);
    console.log($(".rolefld"))
};

let $template = $(".wbdv-template");
let $body = $("tbody.wbdv-tbody");

function init() {
    $template = jQuery(".wbdv-template");
    $body = $("tbody.wbdv-tbody");
    renderUsers(users);
}

jQuery(init);