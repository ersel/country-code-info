interface ISearchTerms {
    name?: string
    a2?: string
    a3?: string
    num?: string
    itu?: string
    gec?: string
    ioc?: string
    fifa?: string
    ds?: string
    wmo?: string
    gaul?: string
    marc?: string
    dial?: string
    independent?: string
}

interface IFindCountrResult {
    name: string
    a2: string
    a3: string
    num: string
    itu: string
    gec: string
    ioc: string
    fifa: string
    ds: string
    wmo: string
    gaul: string
    marc: string
    dial: string
    independent: string
}

export declare function findCountry(searchTerm: ISearchTerms, exact?: boolean): IFindCountrResult | null
