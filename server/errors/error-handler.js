let errorHandler = (e, request, response, next) => {
    // Meaning: This is a ServerError (!) --> OUR ERROR
    if (e.errorType != undefined) {

        if (e.errorType.isShowStackTrace) {
            console.error(e);
        }

        response.status(e.errorType.httpCode).json({ error: e.errorType.message });
        return;
    }

    // This is most definitely a bug (not a ServerError) and so we want the log
    // Reaching here means that we got an UNEXPECTED BUG which we didn't wrap with a ServerError
    console.error(e);
    response.status(700).json({ error: "General error" });
}

module.exports = errorHandler;