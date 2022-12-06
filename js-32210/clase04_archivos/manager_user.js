const fs = require('fs')


class ManagerUser {

    constructor(filename) {
        this.filename = filename
    }

    createUser = async (name, lastname, age, course) => {
    return   this.getUser()
         .then(users => {
             users.push({name, lastname, age, course})
             return users 
         })
         .then(usersNEW => fs.promises.writeFile(this.filename, JSON.stringify(usersNEW)))
   
    }
    getUser = async () => {
     return fs.promises.readFile(this.filename, this.format)
      .then(content => JSON.parse(content))
      .catch(e => {
        console.log('error', e);
        return []
      })

    }
 }

async function  run() {
     const manager = new ManagerUser('users.json')
   await manager.createUser('Lucas', 'Ruedas', 23, 'js Backend')
 console.log( await manager.getUser());
}
 run()