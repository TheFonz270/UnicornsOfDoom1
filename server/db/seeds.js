use BBCHistory;
db.dropDatabase();

db.stories.insertMany([
  {
    region: "scotland",
    character: "William Wallace",
    charImg: "./imgs/image.png"
    pages: [
       {
        pageHeading: "Who Was William Wallace?",
        pageText:[
            "Not much is known about William Wallace's origins. He was born into a family of lesser nobility around 1270 in Elderslie, Renfrewshire. He has, however, gone on to become a major figure in Scottish history for his part in the First War of Independence. Here, you will learn about his life and the actions that have led to him having such a status.",
        ],
        pageImageUrl:"./imgs/Wallace_Monument_20080505_Stained_glas W.jpg",
        pageImageAlt: "Stain glass of William Wallace at the Wallace Monument. By Otter - Own work, CC BY-SA 3.0"
    },  {
        pageHeading: "Political Crises in Scotland",
        pageText:[
            "When Wallace was growing up, King Alexander III ruled Scotland. His reign had seen a period of peace and economic stability. When he died, various contenders laid claim to the throne. The most credible claims were John Balliol and Robert Bruce, grandfather of the future king the Bruce.",
                "With Scotland threatening to descend into civil war, King Edward I of England tried to take power over Scotland, demanding support in his war against France.",
                "Scottish people didn't like that.",
                "William was one of a number of rebels who chose to uprise against Edward's rule. They began to defy their overlords with several rebellions taking place across Scotland.",
                "That led to the beginning of the war, and the battle of Stirling Bridge."
            ], 
        pageImageUrl:"./imgs/Braveheart_edinburghcastle.jpg",
        pageImageAlt: "Statue of Wallace at Edinburgh Castle, By Kjetil Bjørnsrud - Own work, CC BY 2.5."
    },  {
        pageHeading: "Battle of Stirling Bridge",
        pageText:[
            "On 11 September 1297, although vastly outnumbered, the Scottish army led by Wallace and Andrew Moray won the Battle of Stirling Bridge.",
            "Wallace's tactics played a key role in this victory. The English army of 3,000 cavalry and roughly 10,000 infantry were outsmarted as Wallace forced them to cross Stirling Bridge. The narrow bridge prevented many soldiers from crossing together (possibly as few as three men at a time), so, while the English soldiers crossed, the Scots killed them as quickly as they could.",
            "During a major charge by the Scottish, some of the English soldiers retreated as others pushed forward, and under the overwhelming weight, the bridge collapsed and many English soldiers drowned.",
            "After the battle, Moray and Wallace assumed the title of Guardians of the Kingdom of Scotland. In a ceremony, at the 'Kirk o' the Forest' (Selkirk), towards the end of the year, Wallace was knighted."
        ],
        pageImageUrl:"./imgs/The_Battle_of_Stirling_Bridge.jpg",
        pageImageAlt:"A Victorian depiction of the battle. By Unknown author - C Hanley, History Of Scotland, Public Domain",
    },  {
        pageHeading: "William's Downfall",
        pageText: [
            "Having suffered such a heavy defeat, Edward took personal control over the next battle. Scottish and English forces met at the Battle of Falkirk in 1298. While they put up a strong fight, this time, the Scots were not as successful and could not resist the large English forces.",
            "The Scots lost many men and in September 1298, Wallace resigned as Guardian of Scotland and went into hiding. Despite Edward's many attempts, Wallace evaded capture until 1305 where he was betrayed and turned over to English soldiers near Glasgow.", 
            "Wallace was transported to London, and taken to Westminster Hall, where he was tried for treason and for atrocities against civilians in war. He responded to the treason charge, 'I could not be a traitor to Edward, for I was never his subject.'",
            "He was found guilty and, following the trial, Wallace was taken to the Tower of London where he was gruesomely tortured, and executed."
            ],
        pageImageUrl:"./imgs/The_Trial_of_William_Wallace_at_Westminster.jpg",
        pageImageAlt:"Wallace's trial in Westminster Hall. Painted by Daniel Maclise, By Daniel Maclise - Kunst für Alle, Public Domain"
    },  {
        pageHeading: "William's Legacy",
        pageText:[
            "Following his death, others took Wallace's mantel and continued his fight. Only 23 years after his death, in 1328, Scottish Independence was finally secured with the Treaty of Edinburgh.",
            "Wallace is still remembered to this day for standing up for what he believed in. Many monuments, plaques, movies and books have been made to keep the memory of Wallace and his actions alive.", 
            "The Wallace Sword, which supposedly belonged to Wallace, was held for many years in Dumbarton Castle and is now in the Wallace Monument."
        ],
        pageImageUrl:"./imgs/Wfm_wallace_monument.jpg",
        pageImageAlt:"The National Wallace Monument near Stirling. By Finlay McWalter - Own work, CC BY-SA 3.0"
    }
]}]);

db.questions.insertMany([
    {   category: "William Wallace",
        questionText: "When was William Wallace born?",
        answerOptions: [
            { answerText: 'around 1270', isCorrect: true },
            { answerText: 'after 1984', isCorrect: false },
            { answerText: 'before 1000', isCorrect: false },
        ]
    },
    {   category: "William Wallace",
        questionText: "Which English monarch tried to take power in Scotland after King Alexander III died??",
        answerOptions: [
            { answerText: 'Queen Elizabeth II', isCorrect: false },
            { answerText: 'King Edward I', isCorrect: true },
            { answerText: 'King Henry VIII', isCorrect: false },
        ]
    },
    {   category: "William Wallace",
        questionText: "What was the first major successful battle led by Wallace?",
        answerOptions: [
            { answerText: 'Battle of Stirling Bridge', isCorrect: true },
            { answerText: 'Battle of Bannockburn', isCorrect: false },
            { answerText: 'Battle of Meadowbank House', isCorrect: false },
        ]
    },
    {   category: "William Wallace",
        questionText: "Where was William Wallace captured?",
        answerOptions: [
            { answerText: 'in York', isCorrect: false },
            { answerText: 'in Paris', isCorrect: false },
            { answerText: 'near Glasgow', isCorrect: true },
        ]
    },
    {   category: "William Wallace",
        questionText: "Where is Wallace's sword currently held?",
        answerOptions: [
            {answerText: "The Tower of London", isCorrect: false },
            {answerText: "The Wallace Monument", isCorrect: true },
            {answerText: "Disneyland",  isCorrect: false },
        ]
    },
]);