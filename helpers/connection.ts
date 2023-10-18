const mysql = require("mysql2/promise");

export default async function sendQuery(sql: string) {
    const connection = await mysql.createConnection({
        host: "localhost",
        port: 8889,
        database: "marsvinsblogg",
        user: "marsvinsblogg",
        password: "marsvinsblogg"
});
    try {
        const [data] = await connection.query(sql, []);
        connection.end()
        return (data)

    }catch(error) {
        console.log(error)
    }
}

