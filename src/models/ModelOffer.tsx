import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject ('ModelOffer')
export class ModelOffer {
    @JsonProperty('description', String)
    description = '';
}