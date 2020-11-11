function AdminUserServiceClient() {

    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    let url = 'https://wbdv-generic-server.herokuapp.com/api/001420072/users';
    var self = this;

    function createUser(user) {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => {return response.json()})
    };

    function findAllUsers() {
        return fetch(url).then((response) => {
            return response.json();
        });
    };

    function updateUser(userId, user) {
        return fetch(url + "/" + userId, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => {return response.json()});
    }

    function deleteUser(userId) {
        return fetch(url + "/" + userId, {
            method: "DELETE"
        }).then(response => {return response.json()});
    }

    function findUserById(userId) {
        return fetch(url + "/" + userId).then((user) => {
            console.log(user.body);
            return user.json();
        });
     };


}
