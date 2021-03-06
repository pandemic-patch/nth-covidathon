# ZQM Editor with PvP Matching Game (use case & development goals)
The ZQM Editor is the "Quest Maker" listed above in the Doctor's Dash. The following three screens feed data to IRIS-med, the medical aspect of our AI. 

## Physician View of ZQM Editor
The ZQM Editor is the "Quest Maker" listed above in the Doctor's Dash. 
![ZPP-quest-module-editor](https://user-images.githubusercontent.com/18469214/93407239-f30ec800-f891-11ea-993b-d6167c03aca0.jpg)

The Quest Gallery holds all the images that the doctor has uploaded (or, has chosen to let IRIS-med pick). These images will show up in the matching game. The images for the matching game can be obtained from any/all of the following galleries: the IRIS-AI (public images), the physician's (public/private images), or the patient's (shared images). The physician can set up their version of the matching game to contain only a specific type of images (what would a physician want to test a patient for in a matching scenario?). Once the physician is content with their version, they can send it to the patients or sell access on the zMARKT (Zeemz Market). Likewise, if the physician is seeking data, they can offer their version to the public as a Zeemz Quest. 
 
[ZPP-quest-module-editor-1](https://raw.githubusercontent.com/pandemic-patch/nth-covidathon/e7fe654b10042533a2ff5ea10c7632ff31783812/webapp/examples/ZPP-quest-module-editor.jpg)

## Physician View of PvP Matching Game
The Physician View would be accessible in the "Visit a Patient" tab listed above in the Doctor's Dash. 
![zpp-pvp-match-game](https://user-images.githubusercontent.com/18469214/93407232-edb17d80-f891-11ea-94d4-1157aab57008.jpg)

This type of game would allow a physician and a patient to interact in a game setting, both would be able to play a matching game, and do "battle" against each other. The data gathered could include the number of times players were right/wrong, time spent playing, image types that cause player identification problems (ex. patient can't see difference between red & green squares - colorblind), and help build connections in the memory. For the physician, in addition to learning about the patient's abilities, the physician would be able to play a game while working.

[ZPP-physician-view-match-game-1](https://raw.githubusercontent.com/pandemic-patch/nth-covidathon/e7fe654b10042533a2ff5ea10c7632ff31783812/webapp/examples/zpp-pvp-match-game.jpg)

## Physician View of PvP Question & Answer Game
As in the example above, the Physician View would be accessible in the "Visit a Patient" tab. The AI Hospital Game Room will contain games that encourage thinking, meditation, and self-care.

![zpp-pvp-qna-game](https://raw.githubusercontent.com/pandemic-patch/nth-covidathon/e7fe654b10042533a2ff5ea10c7632ff31783812/webapp/examples/zpp-pvp-qna-game.jpg)

Doctors can choose to interact with patients in a traditional telebedicine window, or they can enter the AI Hospital Game Room and interact with patients through games. Questions and Answers will have rates assigned in multiple ways. 1st the doctors can set the reward rates for the quests that they create. 2nd the patients can set the reward rates for the questions that they want answered. 3rd the IRIS-med system can assign rewards based on the novelty/frequency of the questions/answer pairs.

[zpp-pvp-qna-game](https://raw.githubusercontent.com/pandemic-patch/nth-covidathon/e7fe654b10042533a2ff5ea10c7632ff31783812/webapp/examples/zpp-pvp-qna-game.jpg)


## Patient View of PvP Matching Game
The Patient View would be accessible in the "ZQM: Editor" when the "Preview" button is pressed. The Patient View is the only section that the player sees of the Zeemz Quest Module (pr #8).
![zpp-pvp-match-game-patient](https://user-images.githubusercontent.com/18469214/93407237-f0ac6e00-f891-11ea-98b7-6ddebd725a91.jpg)

This section needs to be accessible to the doctor inside ZQM: The Editor, so that they can preview and edit when making their version. It also needs to be accessible to the patient through the A.I. Hospital (public/private quests), A.I. Chat (Game Together integration), and the A.I. Pirate Ship (public quest board, aka Jobs Board). 

[ZPP-pvp-match-game-patient-1](https://raw.githubusercontent.com/pandemic-patch/nth-covidathon/e7fe654b10042533a2ff5ea10c7632ff31783812/webapp/examples/zpp-pvp-match-game-patient.jpg)

## Patient View of PvP Question & Answer Game
The Patient View of the Q&A Game contains many of the same features as the Matching Game. And, will be accessible from all the same locations. We want players to have redundant access from multiple locations to encourage game play. 

![zpp-pvp-qna-game-patient](https://raw.githubusercontent.com/pandemic-patch/nth-covidathon/e7fe654b10042533a2ff5ea10c7632ff31783812/webapp/examples/zpp-pvp-qna-game-patient.jpg)

The Questions and Answers will be connected to AskCo19.com's database to allow players access to a trusted source of realtime data on CoVID-19, created by frontline physicians from around the world. The AskCo19 database utilizes AI and ML to investigate, incorporate, and integrate multiple medical opinions regarding treatment options. 

[ZPP-pvp-qna-game-patient](https://raw.githubusercontent.com/pandemic-patch/nth-covidathon/e7fe654b10042533a2ff5ea10c7632ff31783812/webapp/examples/zpp-pvp-qna-game-patient.jpg) 



## Q & A
1. Can the physician automate the match game? 
    - Sure. We'll have a template that they can use. 
2. Can the patient create their own match games? 
    - Eventually. We want everyone to be able to create quests using the Zeemz: Quest Module "The Editor". 
3. Are / Will there be other quest types?
    - Yes. We have to start some place and a match game allows us to train IRIS-AI, provides Physicians with a method for testing Patient responses, and gives Patients a way to interact with their doctor outside of the waiting room.
4. What kinds of quests might there be in the future?
    - In addition to images, we'd like to build video, audio, and text versions of the matching game.
    - Non-matching PvP games could include:
        - board games (chess/checkers/go)
        - cards (blackjack/poker/rummy/mini-baccarat/digital trading card battles)
        - rpg quests (coordinate drops/non-player character quests/in real life tasks) 
