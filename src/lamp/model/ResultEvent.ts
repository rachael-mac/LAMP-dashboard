import { Identifier, Timestamp } from './Type'

/**
 * A specific sub-detail of a `ResultEvent` that contains specific  interaction information that comprises the parent `ResultEvent`.
 */
export class TemporalEvent {
    
    /**
     * The item that was interacted with for example, in a Jewels game, the  corresponding alphabet, or in a survey, the question index.
     */
    item?: any
    
    /**
     * The value of the item that was interacted with in most games,  this field is `null`, but in a survey, this field is the question  choice index.
     */
    value?: any
    
    /**
     * The type of interaction that for this detail for example, in  a Jewels game, `none` if the tapped jewel was  incorrect, or `correct` if it was correct, or in  a survey, this field will be `null`.
     */
    type?: string
    
    /**
     * The time difference from the previous detail or the  start of the parent result.
     */
    duration?: number
    
    /**
     * The level of activity for this detail for example, in  games with multiple levels, this field might be `2` or  `4`, but for surveys and other games this field will  be `null`.
     */
    level?: number
}

/**
 * An event generated by the participant interacting with an `Activity`.
 */
export class ResultEvent { 
    
    /**
     *
     */
    timestamp?: Timestamp
    
    /**
     * The duration this event lasted before recording ended.
     */
    duration?: number

    /**
     *
     */
    activity?: Identifier
    
    /**
     * The summary information for the result event as determined by the  activity that created this result event.
     */
    staticData?: any
    
    /**
     * The specific interaction details of the result event.
     */
    temporalEvents?: Array<any>
}