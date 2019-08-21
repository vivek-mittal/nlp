import { handleSubmit } from '../client/js/form_handler'
import { performLangaugeAnalysis, performSummaryAnalysis, performConceptsAnalysis, performEntitiesAnalysis, performELSAAnalysis, performClassificationAnalysis, performSentimentAnalysis, isValidURL } from '../client/js/analysis'
import './styles/main.scss'
import './styles/bar.scss'

export {
    handleSubmit,
    performLangaugeAnalysis, 
    performSummaryAnalysis, 
    performConceptsAnalysis, 
    performEntitiesAnalysis, 
    performELSAAnalysis, 
    performClassificationAnalysis, 
    performSentimentAnalysis, 
    isValidURL
}
