const { getRequestParam } = require('./response_handler');
const { getRequestParamForSummary } = require('./response_handler');
const { handleResponse } = require('./response_handler');

test('Should be defined', () => {
    expect(getRequestParam).toBeDefined();
});

test('Should be defined', () => {
    expect(getRequestParamForSummary).toBeDefined();
});

test('Should be defined', () => {
    expect(handleResponse).toBeDefined();
});

const mockRequest = {
    query:{
        url:'',
        text:'some random text'
    }
};
test('Should return text', () => {
    expect(getRequestParam(mockRequest)).toStrictEqual({
        'text':'some random text'
    });
});

const anotherMockRequest = {
    query:{
        url:'https://www.google.com',
        text:'some random text'
    }
};
test('Should return text', () => {
    expect(getRequestParam(anotherMockRequest)).toStrictEqual({
        'url':'https://www.google.com'
    });
});

