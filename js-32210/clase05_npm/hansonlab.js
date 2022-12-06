const crypto = require('crypto')

const DB = []
class UserManager {

  getUsers = () => {
    return DB
  }
  instertUser = user => {
     
    user.salt = crypto.randomBytes(128).toString('base64')
    user.password = crypto.createHmac('sha256', user.salt).update(user.password).digest('hex')

    DB.push(user)

    return user
  }
  validateUser = (username, password) => {
    const user = DB.find(u => u.username == username)
    if(!user){
        console.log('user no found');
        return
    }
    const newHash = crypto.createHmac('sha256', user.salt).update(password).digest('hex')

    if(newHash == user.password) console.log('logged!');
    else console.log('invalid pass');
  }
}

const manager = new UserManager()

manager.instertUser({
    name: 'Gustavo',
    lastname: 'ovejero',
    username:'GO',
    password: '123456'
})
console.log(manager.getUsers());

manager.validateUser('GO', '123456')

