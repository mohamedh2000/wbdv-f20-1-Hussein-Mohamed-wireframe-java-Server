
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
         const fName = user.first;
         const lName = user.last;
         const role = user.role;
         let $templateT = $template.clone();
         console.log($templateT)
         $templateT.find(".wbdv-username").html(username);
         $templateT.find(".wbdv-first-name").html(fName);
         $templateT.find(".wbdv-last-name").html(lName);
         $templateT.find(".wbdv-role").html(role);
         $templateT.find(".wbdv-remove").click(() => deleteUser(i));
         $templateT.find(".wbdv-edit").click(() => findUserById(i));
         $(".wbdv-tbody").append($templateT);
    }
};

let $template = $(".wbdv-template");
let $body = $("tbody.wbdv-tbody");

function init() {
    $template = jQuery(".wbdv-template");
    $body = $("tbody.wbdv-tbody");
    $(".wbdv-create").click(createUser);
    $(".wbdv-update").click()
    findAllUsers();
    renderUsers(users);
}

    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {
        init(); //it does essentially the same thing as init. I can't initialize anything else in
        //main or init due to them needing to be specific to each row/listing
    }

    function createUser() {
        const username = $("#usernameFld").val();
        const first = $("#firstNameFld").val();
        const last = $("#lastNameFld").val();
        const newUser = {
            username: username,
            first: first,
            last: last
        }
        userService.createUser(newUser).then(actualInsertedUser => {
            users.push(actualInsertedUser);
            renderUsers(users);
            console.log(users);
        });

    }
    function findAllUsers() {
        userService.findAllUsers().then((_users) => {
            console.log(_users);
            users = _users;
            renderUsers(users);
        });
    };

    const deleteUser = (index) => {
        userService.deleteUser(users[index]._id).then(status => {console.log(status)});
        users.splice(index, 1)
        renderUsers(users);
    };

    function updateUser(id) {
        user = {        _id:id,
                        username:
                           $(".wbdv-form").find("#usernameFld").val(),
                        first:
                           $(".wbdv-form").find("#firstNameFld").val(),
                        last:
                           $(".wbdv-form").find("#lastNameFld").val()
                       };

        userService.updateUser(id, user).then(data => {
            renderUser(user);
        });
    };

    function findUserById(id) {
        user = "";
        userService.findUserById(users[id]._id).then((_user) => {
            user = _user;
            username = user.username;
            fName = user.first;
            lName = user.last;
            $(".wbdv-form").find("#usernameFld").val(username);
            $(".wbdv-form").find("#firstNameFld").val(fName);
            $(".wbdv-form").find("#lastNameFld").val(lName);
            $(".wbdv-update").click(() => updateUser(users[id]._id));
        });

    };

function renderUser(user) {
console.log(user);
    id = user._id;
    console.log(id);
    for (i = 0; i < users.length; i ++) {
        if ( users[i]._id == id) {
            users[i].first = user.first;
            users[i].last = user.last;
            users[i].username = user.username;
            renderUsers(users);
        }
    }
}

















