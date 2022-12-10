export type MarketProps = {
    [key: string]: string;
}

export type CryptoFormSubmitProps = {
    cryptocurrency: string
}

export type CryptoCurrencyListProps = {
    data: MarketProps
    handleDelete: Function
}