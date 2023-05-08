import { response } from "express"
import client from "../schema/clientSchema.js"
import userEvent from "@testing-library/user-event"

export const addClient = async (request, response) => {

    const cl = request.body
    const newClient = new client(cl)
    try {
        await newClient.save()
        response.status(201).json(newClient)
    }
    catch (error) {
        response.status(409).json({ message: error.message })
    }

}


export const getClients = async (request, response) => {

    try {

        const clien = await client.find({})
        response.status(200).json(clien)
    }
    catch (error) {
        response.status(404).json({ message: error.message })
    }

}

export const getClient = async (request, response) => {

    try {

        const client = await client.find({ _id: request.params.id })
        console.log("THE ID IS: ")
        console.log(client.id)

        response.status(200).json(client)
    }
    catch (error) {
        response.status(404).json({ message: error.message })
    }

}


//Fee controller calls

export const getClientsFeeStatus = async (request, response) => {
    try {

        const users = await client.find({ feestatus: request.params.feestatus })
        response.status(200).json(users);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }

}

export const UpdateClientsFeeStatus = async (request, response) => {
    try {

        const user = await client.updateOne({ _id: request.params.id }, request.body)
        response.status(200).json(users);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};

