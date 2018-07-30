const formatters = {

    daysToWeeks(days){
        let daysParameter = days;
        if(isNaN(daysParameter) || daysParameter === null)
            return '';

        if(daysParameter < 7)
            daysParameter = 7;

        const weeks = Math.ceil(daysParameter/7);
        return `${weeks} ${weeks > 1 ? 'weeks' : 'week'}`;
    },

    numberToCurrency(forConversion){
        if(isNaN(forConversion) || !forConversion)
            return '$0';

        return `$${Number(forConversion)}`;
    }
}

export default formatters;