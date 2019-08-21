

export function handleSubmit(event) {
    event.preventDefault()

    console.log("clicked!")
    var text = document.getElementById('textbox').value;
    console.log(text);

    if (text.length === 0) {
        console.log("Query cannot be empty");
        return;
    }

    let queryParam = '';
    if (Client.isValidURL(text)) {
        queryParam = `url=${text}&text=`;
    } else {
        queryParam = `text=${text}&url=`;
    }

    // Sentiment
    Client.performSentimentAnalysis(queryParam);

    // Classify
    Client.performClassificationAnalysis(queryParam);

    // elsa
    Client.performELSAAnalysis(queryParam);

    // Entities
    Client.performEntitiesAnalysis(queryParam);

    // Concepts
    Client.performConceptsAnalysis(queryParam);

    // Summarize
    Client.performSummaryAnalysis(queryParam);

    // Language
    Client.performLangaugeAnalysis(queryParam);
}

