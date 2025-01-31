import { connect } from "bun"
import mongoose from "mongoose"

const username = Bun.env.MONGO_DB_USERNAME || 'your-username'
const password = Bun.env.MONGO_DB_PASSWORD || 'your-password'
const db_name = Bun.env.MONGO_DBNAME || 'TinnerApp'

const uri = `mongodb+srv://${username}:${password}@cluster0.pyyzj.mongodb.net/?retryWrites=true&w=majority&appName=${db_name}`

export const MongoDB = {
    connect: async function () {
        try {
            await mongoose.connect(uri)
            console.log(' ---- MongoDB Connected ---- ')
        } catch (error) {
            console.error(' ---- MongoDB Connection error ---- ')
            console.error(error)
        }
    }
}