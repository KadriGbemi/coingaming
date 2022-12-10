import { gql } from '@apollo/client';

export const GET_PRICES = gql`
  query price($value: String!)  {
    markets(filter:{ baseSymbol: {_eq: $value} quoteSymbol: {_eq:"EUR"}}) {
      marketSymbol
      ticker {
        lastPrice
      }
    }
  }
`;
