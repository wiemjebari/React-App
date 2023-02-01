const express = require('express')
const router = express.Router()
const employeeManagementTemplateCopy = require('../models/employeeModels')

router.post('/register', (request,response) => {
    const registeredEmployee = new employeeManagementTemplateCopy({
           firstName: request.body.firstName,
           lastName: request.body.lastName,
           age: request.body.age,
           email: request.body.email,
           position: request.body.position,
    })
    registeredEmployee.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.get('/list', (request,response) => {
    registeredEmployee.find((error,data) =>
    {
        if(error){
            response.status(500).send(error)
        }
        else
        {
            response.status(200).send(data)
        }
    })
})

module.exports = router