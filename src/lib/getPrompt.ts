export const getPrompt = (word: string) => {
  return `Act as a dictionary. Do listed tasks for given word ${word}

    - Definition/meaning
    - Type : noun/verb/adjective
    - Synonyms at least five
    - Sentences: one sentence for each single synonym 
    
    Provide data in json for API usage. Sample: 
    {
        types: [type1Name, type2Name, ...],
        typeName: {
            definition: "",
            synonyms: [syn1, syn2, ...],
            sentences: [sent1, sent2, ...]
        },
        typeNam: {
            definition: "",
            synonyms: [syn1, syn2, ...],
            sentences: [sent1, sent2, ...]
        },
        ...
    }
`;
};
