import { useState } from 'react'
import './Accordion.css'
import StockPlot from './Graph2';

function Bdy1 () {
    const[selected, setSelected] = useState(0);
    const toggle = (i) =>{ 
        setSelected(i);
    }
    const [index,setIndex] = useState(0);
    const idx = (j) =>{
        setIndex(j);
        setSelected(0);
    }

    return (
        <div>
        <div>
            <section className="body-container">
                <div className="body-bar">
                    <nav>
                        <ul>
                            <li><a onClick={() =>idx(0)}>Help me decide<br/>the right funds</a></li>
                            <li><a onClick={() =>idx(1)}>Invest to earn<br/>high returns</a></li>
                            <li><a onClick={() =>idx(2)}>Looking Alternatives<br/>to bank deposits</a></li>
                            <li><a onClick={() =>idx(3)}>Create emergency<br/>funds now</a></li>
                            <li><a onClick={() =>idx(4)}>Help me earn<br/>tax free income</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <div className="row">
            <div className="col-md-1 text-left"></div>
            <div className="col-md-5 text-left wrapper">
                <div className="accordion">
                    {data[index].map((item,i)=>(
                        <div className='item-container'>
                            <div className={selected === i ? 'number-click' : 'number'} onClick={() => toggle(i)}><h2>{1+i}</h2></div>
                            <div className="item">
                                <div className="title" >
                                    <h5>{item.question}</h5>
                                    <h4>{selected === i? '-' : '+'}</h4>
                                </div>
                                <div className={selected === i ? 'content-show' : 'content'}>
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-md-6 text-left wrapper">
                <StockPlot/>
            </div>
        </div>
        </div>
    )
}

const data = [
    [{
        question : "What is SIP?",
        answer: "Systematic Investment Plan (SIP) is a kind of investment scheme offered by mutual fund companies. Using SIP one can invest small amount peridically (weekly, monthly, quaterly) into a selected mutual fund. For retail investors, SIP offers a well disciplined and passive approach to investing, to create wealth in long term (using the power of compounding). Since, the amount is invested on regular intervals (usually on monthly basis), it also reduces the impact of market volatility."
    },
    {
        question : "Benefits if SIP",
        answer: "As common investor doesn’t have enough time and resources, SIP proves to be a viable option for them. Listed below are the important benefits of this instrument. \n   • Reduces Risk because of Rupee Cost Averaging \n   • SIP can be started with very small amount of money \n   • Timing the market is not necessary \n   • Long term financial goal can be aligned with SIP \n   • Disciplined approach towards Investment helps in controlling the emotions"
    },
    {
        question : "Tax benefits",
        answer: "There are various mutual fund schemes which gives you better than saving account returns with the liquidity of savings account and even can be used to pay to network hospitals or can be used to pay directly to the merchant having the swipe machine. \n • Liquidity - You can withdraw , increase or decrease your monthly SIP amount freely. All your gains will be Tax free if the units are redeemed after 365 days of its purchase \n • Income tax benefit - Investments made in SIP schemes are eligible for deduction from taxable income under Section 80C of the Income Tax Act. \n • Lower lock-in period - In comparison to traditional investment avenues like PPF, NSC under section 80C of the Income tax Act, mutual funds have the shortest lock in period of 1 years."
    }],
    [{
        question : "How many type of equity funds are there ?",
        answer: "There are 5 types of equity funds which can be chosen for long term wealth creation. However, one should evaluate the basic risk involved in each of these fund categories. \n • ELSS \n • Sector Funds \n • Equity diversified \n • Global Funds \n • Hybrid"
    },
    {
        question : "How to manage the risk in equity funds ?",
        answer: "Equity funds will certainly have volatility component within. However, a smart investor understands that, the Taj Mahal cannot be built in a day, that means for better wealth creation from an equity fund one should keep patience and give enough time to the fund. Generally it is advisable to stay for a minimum of 3 years in any equity fund for better result. \n \n You can also reduce risk in equity by choosing the hybrid route – generally called as balanced funds. These are great funds for investors starting out as they get an automatic allocation to debt and equity by investing in one fund. Or, if an investor already has an equity fund and wants a meagre exposure to debt in his portfolio, he could opt for a balanced fund. The aim of such funds is not to shoot out the lights when the equity market is on a roll, but neither should it crumble like a pack of cards when the market falls."
    },
    {
        question : "Which are the Tax advantages in equity funds ?",
        answer: "If the investment period in equity mutual funds scheme is more than one year the capital gain is exempted from tax liabilities. Government of India also provides tax rebate for equity linked saving schemes (ELSS) u/s 80C of Income Tax Act 1961. You can invest into ELSS and deduct upto Rs. 1,50,000/- from your taxable income to effectively reduce your tax liability."
    }],
    [{
        question : "Safety - Debt Funds have low credit Risk",
        answer: "Common risk faced by debt funds is interest rate risk with funds losing value in a rising rate scenario and vice versa. Fixed Deposits which have been locked in for long tenures also face this risk in terms of opportunity cost but there is no actual loss of value when the deposit is held to maturity."
    },
    {
        question : "Liquidity - Debt funds are highly liquid",
        answer: "As per the current tax rules for debt funds, the minimum tenure for long-term capital gains was extended from one to three years. This means that investors will have to remain invested for at least three years if they want the benefit of lower tax on long-term capital gains. However, there are .5 to 1% exit load if redeemed before 1 year, 2 year and in some cases 3 years. This means debt funds are as liquid as any other open ended investments."
    },
    {
        question : "Returns - Debt funds are better than bank FDs",
        answer: "As the returns of debt funds demonstrate, you can beat the bank by investing in debt funds. Debt fund investors assume both credit risk (lending to riskier borrowers) and interest rate risk (the risk of bond prices falling when interest rates rise) and are hence compensated by higher returns. In summary, you can beat the bank by investing in debt funds instead. However you should be cognizant of the risks involved and choose the right fund in order get the best possible deal."
    },
    {
        question : "Taxation - Debt funds offers tax efficient returns",
        answer: "The other big difference is that of taxation. Returns from bank fixed deposits are interest income and as such have to be added to your normal income. Since many investors are in the top (30 per cent) tax bracket, this takes away a large chunk of their returns. Banks also deduct TDS on interest income from fixed deposits. The tax rates are similar for debt funds held for less than 36 months (though TDS will not generally be deducted). However for debt funds held longer than 36 months, returns are classified as long term capital gains and are taxed at 20 per cent with indexation."
    }],
    [{
        question : "Why should I maintain emergency fund ?",
        answer: "Most experts believe you should have enough money in your emergency fund to cover at least 6 to 8 months' worth of living expenses. What does that look like? Start by estimating your costs for essential expenses, such as: Housing, Food, Health care (including insurance) Utilities, Transportation, Personal expenses, Debt servicing (EMIs). You don't need to include expenses for anything you'd cut from your budget in the event of a job loss or major catastrophe. For example: Entertainment, Dining out, Nonessential shopping, Vacations, Savings for a second home or other expenses. Decide if you need to save more. Putting aside 6 to 8 months' worth of expenses is a good rule of thumb, but sometimes it's not enough. If you're able, you might want to think about expanding your emergency savings."
    },
    {
        question : "What are the benefits of investing in Liquid funds ?",
        answer: "Here are some scenarios where having more in your savings could benefit you: \n During a recession (when unemployment rates are higher and the length of unemployment is often longer). If you're in a high-risk industry where layoffs are common. You can build up to it by stashing away smaller amounts on a regular basis, like every week or every pay check."
    },
    {
        question : "Which are the best liquid funds to invest ?",
        answer: "There are various mutual fund schemes which gives you better than saving account returns with the liquidity of savings account and even can be used to pay to network hospitals or can be used to pay directly to the merchant having the swipe machine."
    }],
    [{
        question : "Long Term Capital Gains",
        answer: "Tax Treatment applicable from Financial Year 2018-19 \n • For Equity and Equity oriented funds \n All Short Term Capital Gains will be taxed at a special rate @15%. All Long term Capital Gains will be taxed @10% over and above Rs 1 Lac. \n • For Debt and Debt oriented funds \n Debt Fund held for less than 3 years is eligible for Short Term Capital Gain will be added to the annual Income and taxed as per the IT Slab of the Investor. \n Debt Fund held for more than 3 years come under long term capital gain and will be taxed @20% on gain after indexed cost."
    },
    {
        question : "Dividends in MF",
        answer: "All dividends upto Rs 10 Lacs are exempt from DDT (Dividend Distribution Tax). Dividends above 10 Lacs will attract DDT of 10%."
    }]
]

export default Bdy1;