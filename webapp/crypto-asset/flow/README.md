
# Zeemz Quest Module’s Slot Reward System
### The Hopper Contract 
A smart contract that collects multiple users game fees before sending bulk fees to the Cage Cashier Contract & Reward System. This allows a reduction of transaction fees through batch sending from the Hopper to the Cage Cashier. The Cage Cashier waits for fund fills to reach trigger levels, before distributing funds to each of the five receiver contracts (users, developers, emergencies, rewards, nodes).

### The Hopper Rewards System has four components:
    1. Slot = User Experience / User Interface
        a. User chooses service from UX/UI; User chooses how to use coins, frequency, and number of coins per Spin (e.g., service, project, maintenance)
        b. User inputs coins (fiat/crypto) in Slot; Service cart launched, payment options (crypto, fiat), payment made
        c. User receives receipt with Spin-formation (date, product, quantity, duration, etc.) and Zeemz Geld winnings redemption information; Payment received (Hopper Contract triggered, service payment added to batch)
        d. User uses Zeemz Geld redemption to acquire free Spins (e.g., services, projects, maintenance plans) or for use in Zeemz Game
    2. Hopper = Blockchains / Smart Contracts / Digital Ledgers 
        a. Hopper receives coins and user choices
        b. Holds coins & choices until confirmed (signed user on blockchain, ex. MetaMask)
        c. Releases coins & choices to Cage Cashier (Fill line is triggered); Hopper reaches Fill Line (Cage Cashier triggered)
        d. Releases free Spins to User (ex. User pays $10/mo for maintenance, receives $10/mo in Zeemz Geld good for buying spins on the Wheel of Services)
    3. Cage Cashier = I/O Distribution / UI+DL (Bridge/Connector)
        a. Receives coins, user choices, and Spin win archives from Hopper
        b. Directs inputs to Count (Receiver Contracts for Users, Developers, Nodes, Rewards, Emergencies)
        c. Cage Cashier receives fill, sorts funds into Rewards System (Count / collection of five Receiver contracts); Cage Cashier maintains balances for Rewards System, only releasing to each Receiver contract when the FILL trigger amount has been reached 
        d. Receiver Contracts 5x (aka Count)
            > Users - Free Spins & Zeemz Geld for rebates, lotteries, slots, wheel of service discounts, holidays, sales
                > Receiver Contract created for individual accounts to receive variable amounts based on triggers, controlled by the individual account owners
                > FMV IN/OUT - read only public access
                > Fair Market Value IN - Cage Cashier logs input from Hopper
                > Fair Market Value OUT - Cage Cashier logs output to Rewards System
            > Developers - Fiat/Crypto for services, bounties, patches, new features, security, customizations
            > Emergencies - Fiat/Crypto for just in case, taxes, fees, fines, lawyers, hardware failures
            > Rewards - Free Spins, ZGeld, Crypto/Fiat - bonus savings for rewards given to users & developers, loyalty, birthdays, frequent user bonus
            > Nodes - Network Support/Funding - crypto nodes, agroforests, coastal forests, animals, people, fire, climate change, homelessness, water/electricity accessibility (whatever we want)
    4. Slot Attendant = Developer Experience / Developer Interface
        a. Rewards System Contract (aka Vault, Count) controlled by Rewards System Community (Developers, PnP Users, and DIY Community)
        b. Service Providers contracted with for $10/mo maintenance example, less transaction fees (platform, network, blockchain, credit card)
        c. Security, Auditors, Hackers (people who tinker with shit until it breaks or they break-in)
        d. Enthusiasts, DIYers, and First Adopters (pre-alpha, alpha, and closed/open beta testers)


## ZEEMZ QUEST Unlocked! 
### Rewards: SKILLZ, EXP, MP, Mage Path, Kitty Vortex Treasure Box
Congrats, Code Mage.<br />

Ready? Good!<br />

For this Zeemz Quest open the Issues, find one you're interested in, and use your best codecrafting to cast a PR when you think you've rocked it. Don't see an Issue that calls you? See something on the Components List above? Open an Issue and tell us about your calling, then codecraft your way to a PR submission. The community will discuss the submission. Rewards distributed after merge.
