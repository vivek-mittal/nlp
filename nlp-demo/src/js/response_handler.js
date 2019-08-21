// ====================================
// Helpers
// ====================================

function handleResponse(error, response, respondingTo) {
    if (error === null) {
        sendResponse(response, respondingTo)
    } else {
        sendError(error, respondingTo);
    }
}

function sendError(error, respondingTo) {
    console.log(error)
    respondingTo.send({
        'error': 'error',
        'response': null
    });
}

function sendResponse(response, respondingTo) {
    console.log(response);
    respondingTo.send({
        'error': '',
        'response': response
    });
}

function getRequestParam(req) {
    console.log(req.query.url);
    console.log(req.query.text);
    if (req.query.url.length > 0) {
        return {
            'url': req.query.url
        };
    } else {
        return {
            'text': req.query.text
        };
    }
}

function getRequestParamForSummary(req) {
    console.log(req.query.url);
    console.log(req.query.text);
    if (req.query.url.length > 0) {
        return {
            'url': req.query.url
        };
    } else {
        return {
            'text': req.query.text,
            'title': req.query.text
        };
    }
}


exports.getRequestParamForSummary = getRequestParamForSummary;
exports.getRequestParam = getRequestParam;
exports.handleResponse = handleResponse;