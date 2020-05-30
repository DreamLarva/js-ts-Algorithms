
async function f() {
    try {
        return Promise.reject(1111111111)

    }
    catch (e) {
        console.log(e)
    }finally {
        console.log(222)
    }

}


async function f1() {
    try {
        await f()

    }catch (e) {
        console.log(e)
    }finally {

        console.log(11)
    }

}


f1()
