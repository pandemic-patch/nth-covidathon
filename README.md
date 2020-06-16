# ZEEMZ: Pandemic Patch
## An Augmented Reality, Blockchain Game that Doubles as a Diagnostic Tool to Fight CoVID-19 and Reduce Hospital Congestion

In answer to their call (see below), Jenn and Moe, the co-founders of [Zeemz: The Versipisces Secret](https://www.zeemz.xyz) decided to turn the reward system behind Zeemz Multifaucet Adventures into an open source project named [Pandemic Patch](https://www.zeemz.xyz/pandemic-patch). When we reached out to [AskCo19.com](https://www.askco19.com) and the [COVIDathon community on Devpost](https://covidathon.devpost.com) we found interest and excitement for the system's potential. In 2 months, Zeemz went from a well-loved pet project (Zeemz: The Versipisces Secret) to an international open source project (Zeemz: Pandemic Patch). Our goal is to help prevent hospital congestion through playing Pandemic Patch. In the patient portal, the blockchain faucet (reward system) will drip (release microrewards) for asking questions or completing tasks and quests. In the doctor portal, the faucet will drip for answering questions, creating or completing tasks and quests. In both cases, the data obtained from Pandemic Patch will be sent to [AskCo19.com](https://www.askco19.com) for the purpose of contributing information directly to frontline doctors who need it to combat coronavirus.  

The instructions below work for building the overall project. The Zeemz: Pandemic Patch edition is a WIP located here [Patient side - WIP](https://github.com/pandemic-patch/nth-covidathon/tree/master/webapp/src).

![Zeemz: Pandemic Patch "Registration Thanks" Page](https://zeemz-imgs.web.app/imgs/pandemic-registration.png)

The AskCo19 Island Hospital will be accessed by pressing/clicking the Heart icon in the center of the map. Inside the AI Hospital, verified physicians will be able to interact with their patients using our telehealth system, [IRIS-med](https://github.com/pandemic-patch/IRIS-COVID). Both, patients and physicians can earn cryptocurrency for making or taking CoVID-19 related quests. While we're designing and training IRIS-med, we're also conducting a literature review of our template scenario: ["To Wear/Not Wear a Mask While I Walk the Dog."](https://github.com/pandemic-patch/nth-covidathon/blob/master/Chart-9684751.pdf).

The Vault icon (located next to the House) will open the financial quests. We've decided to integrate with AAVE to run a testnet version of their protocol to teach Zeemz: Pandemic Patch players about Decentralized and Traditional Financing. Though we're creating a testnet experience, mainnet tokens (ZMZLR, ZMZB, user tokens) are rewarded for quest completions. 

![Aave testnet](https://zeemz-imgs.web.app/imgs/Aave_Deposit_tranasction.png)

We experienced a difficulties with running the Kovan testnet, but were able to get it working on the Ropstein testnet.

![Aave testnet success](https://zeemz-imgs.web.app/imgs/Aave-deposit-transac-confirm.png)

The dog walking scenario is currently limited to a trip to the park. In the future, we'll add trips to the bank, pharmacy, and grocery stores. 
<br />
<br />

[![Contributors](https://img.shields.io/github/contributors/nthopinion/covidathon)](https://github.com/nthopinion/covidathon/graphs/contributors) <!--[![MIT License](https://img.shields.io/github/license/nthopinion/covidathon)](https://github.com/nthopinion/covidathon/blob/master/LICENSE)-->

<p align="center">
<!-- PROJECT LOGO
  <a href="https://github.com/github_username/repo">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
-->
  <h3 align="center">SingularityNET, Ocean Protocol and Nth Opinion Join Forces: Covidathon x AskCo19.com</h3>
<p align="center">
	<b> Calling All Data Scientists, Cryptographers, Smart Contract Developers, Cypherpunks, and Medical Professionals
: Global Hackathon to Defeat COVID-19: </b> <i> Connecting physicians & developers globally in the wake of COVID-19 pandemic </i>
	<hr></hr>
  </p>
<p>
    <!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Tests](#test)<!--- [Build](#build)- [Learn More](https://medium.com/@nthopinionco/ai-technology-partnership-to-fight-covid-19-859b24ae5f33/)-->
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Communication channels](#communication-channels)

<!--Our application is a web app. It has a public facing interface, and a doctor/healthcare worker facing interface. Users can search through a database of previously asked questions about COVID-19 (or add their question to the database if it hasn't already been asked), and obtain answers from medical professionals around the globe.
-->

## About The Project

SARS-COV-2 is spreading around the globe at a frighteningly rapid pace. This war continues to hold humanity hostage with fear and social isolation. COVID-19 is one of the greatest threats we have ever faced. The fight against COVID-19 will take place outside of healthcare through the pairing of artificial intelligence and blockchain, utilizing globally connected machines with algorithms that can propagate and move faster than the virus. Our traditional ways of using research, trials, policies, and tried-and-true therapies are not fast enough and have not been able to slow the destruction of COVID-19.
<br>

<b>Who are we?</b><br>
Three technology companies — <b>SingularityNET, Ocean Protocol and Nth Opinion </b> — have joined efforts to utilize the latest technologies to outpace the spread of the virus. </p>

<b>What are we building together?</b><br>
The grassroots open-source team behind AskCo19.com is excited to partner with SingularityNET to merge decentralized protocols, communication technologies, artificial intelligence, and machine learning.


<b>How are we building it?</b><br>
With a collaborative effort, we are building a solution intensive web application that facilitates the integration of modern technologies, with the expertise of a wide cross section of volunteers. Integrating powerful human characteristics to coalesce awareness, foresight, compassion and wisdom to guide decision making.

We are a technological species that has been undergoing a revolution with our abilities to wield artificial intelligence and blockchain, we can extinguish this threat with the power of innovations that are self-adapting, borderless, decentralized, and defend us without permission. We aim to accomplish this by applying the use of decentralized protocols, communication technologies, artificial intelligence, and machine learning through a collaborative approach.

<b>Why are we doing this?</b><br>
We believe this partnership enables real-time sharing of critical understanding and insights on how to overcome COVID-19 with treatments, techniques, therapies, and agents from people for people across the globe.

[Interested in learning more?](https://medium.com/@nthopinionco/ai-technology-partnership-to-fight-covid-19-859b24ae5f33/)

<!--[Explore the website](https://www.covid19webapp.com/)-->

[Join our Slack](http://bit.ly/hackingcovid19-slackinvite)

[Join our Discord](https://daia.foundation/covidathon/)

[Request Feature](https://github.com/nthopinion/covidathon/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc)

[Report Issue](https://github.com/nthopinion/covidathon/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-descx)

<!-- ABOUT THE PROJECT -->


<b>NOTICE:</b> This open source project is a work in progress. The best way to get onboarded and brought up to speed is to participate in our Slack channel:

<!--
<i>Update March 15, 2020:</i> Please excuse the bugs as we are working hard to fix them on the fly! COVID-19 is spreading faster than we can code and as a result converted the project to open source overnight. We understand there are bugs and the code is not optimized. Thank you for working with us as we adapt in real-time! Don’t be shy, reach out, and get involved.-->

<!--[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`github_username`, `repo`, `twitter_handle`, `email`
-->

### Built With

- [Create React App](https://github.com/facebook/create-react-app)

<!-- GETTING STARTED -->

## Getting Started

The COVIDATHON project is a monorepo. The server code is inside the `api` folder and the client code is inside the `client` folder.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Navigate to the repository where you want to install the project
2. Clone the repo

```sh
git clone git@github.com:nthopinion/covidathon.git
```

3. To setup the `api`, check the [README](/webapi) inside the `webapi` folder.
4. To setup the `client`, check the [README](/webapp) inside the `webapp` folder.
5. To setup the `dsproj`, check the [README](/datascience) inside the `datascience` folder.

<!-- TEST
TODO: Add more to the testing workflow: how to write a test, where, etc.
 -->

## Test

Testing is important in order to make sure your feature is meeting all the requirements.
Launch the test runner in the interactive watch mode by running the npm command<br />

```sh
npm test
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/nthopinion/covidathon/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions in this project are vital since the situation is evolving rapidly. Any contributions you make are **greatly appreciated**.

1. [Fork](https://github.com/nthopinion/covidathon/fork/) the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a [Pull Request](https://github.com/nthopinion/covidathon/compare)

If you are stuck on any of the steps, we have a similar YouTube video you can take a look at: [https://youtu.be/otuDhXWWnbw](https://youtu.be/otuDhXWWnbw)

<!-- LICENSE-->

## License

License to be added.
<!--Distributed under the MIT License. See [LICENSE](LICENSE) for more information.-->

<!-- COMMUNICATIOIN CHANNELS -->

## Communication channels

Come over on Slack to be part of the initiative and talk with the other contributors

- [Slack](http://bit.ly/hackingcovid19-slackinvite)

Project Link: [https://github.com/nthopinion/covidathon/](https://github.com/nthopinion/covidathon/)
