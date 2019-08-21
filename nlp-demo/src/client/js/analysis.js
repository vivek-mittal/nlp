export function performLangaugeAnalysis(queryParam) {
    fetch(`http://localhost:3000/language?${queryParam}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.error.length > 0) {
                console.log(data.error);
            }
            else {
                document.getElementById('langauge').innerHTML = data.response.lang;
                document.getElementById('langauge_conf').innerHTML = data.response.confidence;
            }
        });
}

export function performSummaryAnalysis(queryParam) {
    fetch(`http://localhost:3000/summarize?${queryParam}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.error.length > 0) {
                console.log(data.error);
            }
            else {
                document.getElementById('summary').innerHTML = data.response.sentences;
            }
        });
}

export function performConceptsAnalysis(queryParam) {
    fetch(`http://localhost:3000/concepts?${queryParam}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.error.length > 0) {
                console.log(data.error);
            }
            else {
                document.getElementById('concepts_text').innerHTML = JSON.stringify(data.response.concepts);
            }
        });
}

export function performEntitiesAnalysis(queryParam) {
    fetch(`http://localhost:3000/entities?${queryParam}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.error.length > 0) {
                console.log(data.error);
            }
            else {
                document.getElementById('keywords').innerHTML = data.response.entities.keyword;
            }
        });
}

export function performELSAAnalysis(queryParam) {
    fetch(`http://localhost:3000/elsa?${queryParam}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.error.length > 0) {
                console.log(data.error);
            }
            else {
                let elsaText = '';
                let entities = data.response.entities;
                let i;
                for (i in entities) {
                    elsaText += (entities[i].mentions[0].text + '(' + entities[i].mentions[0].sentiment.polarity + '), ');
                }
                document.getElementById('elsa_text').innerHTML = elsaText;
            }
        });
}

export function performClassificationAnalysis(queryParam) {
    fetch(`http://localhost:3000/classify?${queryParam}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.error.length > 0) {
                console.log(data.error);
            }
            else {
                let catergoryLabels = '';
                let categories = data.response.categories;
                let i;
                for (i in categories) {
                    catergoryLabels += (categories[i].label + ', ');
                }
                document.getElementById('classify_text').innerHTML = catergoryLabels;
            }
        });
}

export function performSentimentAnalysis(queryParam) {
    fetch(`http://localhost:3000/sentiment?${queryParam}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.error.length > 0) {
                console.log(data.error);
            }
            else {
                document.getElementById('original_text').innerHTML = data.response.text;
                document.getElementById('polarity').innerHTML = data.response.polarity;
                document.getElementById('polarity_conf').innerHTML = data.response.polarity_confidence;
                document.getElementById('subjectivity').innerHTML = data.response.subjectivity;
                document.getElementById('subjectivity_conf').innerHTML = data.response.subjectivity_confidence;
            }
        });
}

export function isValidURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}