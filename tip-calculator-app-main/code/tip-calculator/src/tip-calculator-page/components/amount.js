import styled from "styled-components";

function ToStyleAmount({children, className, to, total}) {


    if(to === 'total') {
        return (
            <div className={className}>
                <div className="amount-description">
                    <span className="tip-amount">Total</span>
                    <span className="amount-per-person">/ Person</span>
                </div>
                <h2 className="amount">{total ? total : 'Total'}</h2>
            </div>
        )
    }

    return (
        <div className={className}>
            <div className="amount-description">
                <span className="tip-amount">Tip Amount</span>
                <span className="amount-per-person">/ Person</span>
            </div>
            <h2 className="amount">{total ? total : 'Total'}</h2>
        </div>
    )
}

export const Amount = styled(ToStyleAmount)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    & * {
        font-weight: bold;
    }

    & > .amount-description {
        display: flex;
        flex-direction: column;
        
    }

    & .amount-per-person {
        color: ${props => props.theme.darkGrayishBaseColor};
    }

    & .tip-amount {
        color: ${props => props.theme.white};
    }

    & > .amount {
        
        color: ${props => props.theme.strongBaseColor}
    }


`