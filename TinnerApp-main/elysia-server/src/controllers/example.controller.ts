import { Elysia, t } from "elysia"

export const example = new Elysia()
    .get("/", () => "Hello World", {
        detail: {
            tags: ["Example"],
            summary: "Get Hello World",
            description: "WE CAN FLY"
        }
    })
    .post("/about", ({ body }) => {
        return {
            id: "xxx",
            name: 'Hello' + body.name
        }
    }, {
        body: t.Object({
            name: t.String()
        })
    })