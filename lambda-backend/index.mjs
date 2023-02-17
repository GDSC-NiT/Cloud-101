export const handler = async(event) => {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    const date = new Date().toLocaleDateString('en-IN', {day: 'numeric', month: 'long', year: 'numeric'})
    return {
        status: 200,
        message: date
    }
};
