import { FC } from "react";

interface CountryFlagProps {
    countryCode: string
}

const CountryFlag: FC<CountryFlagProps> = ({ countryCode }) => {

    return <img src={`https://countryflagsapi.com/png/${countryCode}`} alt="country flag" />
}

export default CountryFlag