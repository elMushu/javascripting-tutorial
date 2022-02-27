
//Número 12
async function getData(req, res) {
    if (error) {
        return res.send(error.stack);
    }

    const a = await functionA();
    const b = await functionB();
    res.send("some result")
}