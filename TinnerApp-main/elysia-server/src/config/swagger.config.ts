import swagger from "@elysiajs/swagger"

export const swaggerConfig = swagger({
    path: '/api-doc',
    documentation: {
        info: {
            title: "Tinner App API",
            version: "1.0.1"
        },
        // tags: [
        //     { name: 'Example', description: 'My example endpoints' },
        // ]
    }
})