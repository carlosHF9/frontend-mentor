import { Container } from "./components/container"
import { CalculatorContainer } from './components/calculator-container';
import { AreaTitle } from './components/area-title';
import { Input } from './components/tip-input';
import { useState } from "react";
import { Session } from './components/session';
import { Tip } from "./components/tip";
import { Amount } from './components/amount';
import { ResetButton } from './components/reset-button';




export default function TipCalculator() {

    const [ bill, setBill ] = useState(0)
    const [numberOfPeople, setNumberOfPeople] = useState(0)

    const [baseTips, setBaseTips] = useState([
        5,
        10,
        15,
        25,
        50
    ])

    const [selectedTip, setSelectedTip] = useState(90)

    const [ totalTipPerPerson, setTotalTipPerPerson ] = useState(0)
    const [ totalPerPerson, setTotalPerPerson] = useState(0)



    

    return (
        <Container>
            <CalculatorContainer>
                <Session style={{gap: '20px'}}>
        
                    <Session style={{ gap: '10px'}}>
                        <AreaTitle>Bill</AreaTitle>
                        <Input value={bill} onChange={setBill} />
                    </Session>
                    <Session style={{gap: '10px'}}>
                        <AreaTitle>Select tip %</AreaTitle>
                        {selectedTip}
                        <Session style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: '10px'
                        }}>
                            {
                                baseTips.map( tip => (
                                    tip !== selectedTip ? <Tip onClick={() => setSelectedTip(tip)}>{tip}%</Tip>
                                        :
                                    <Tip onClick={() => setSelectedTip(tip)} style={{
                                        backgroundColor: 'var(--strong-cyan)',
                                        color: 'var(--very-dark-cyan)'
                                    }}>{tip}%</Tip>
                                ))
                            }
                        </Session>
                    </Session>
                    <Session style={{ gap: '10px'}}>
                        <AreaTitle>Number of People</AreaTitle>
                        <Input value={numberOfPeople} onChange={setNumberOfPeople} to="person" />
                    </Session>
                </Session>
                <Session style={{
                    backgroundColor: 'hsl(183, 100%, 15%)',
                    borderRadius: '15px',

                    padding: '2rem 1.5rem 0 1.5rem'
                }}>
                    <Amount />
                    <Amount to="total" />
                    
                    <ResetButton onClick={() => console.log('work')}>Reset</ResetButton>

                </Session>
                
                
            </CalculatorContainer>
            
        </Container>
    )

}