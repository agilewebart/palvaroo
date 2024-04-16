function getCurrentDateTimeForDB() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

    return `${year}-${month}-${day} x ${hours}:${minutes}:${seconds}`;
}

module.exports.modifyReqWithDateTime = async (req, res, next) => {
    try {
        req.body.currentDateTime = getCurrentDateTimeForDB();
        next();
    } catch (err) {
        console.log("-------_Date time middleware error-->", err);
        next();
    }
}