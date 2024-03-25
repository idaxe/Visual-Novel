"use strict";
var Visualnovel;
(function (Visualnovel) {
    async function Chapter1() {
        console.log("Chapter 1 - The Accident");
        let protagName = "";
        let text = {
            game: {
                Hi: "I sense...",
                How: "a new presence",
                Are: "You must be a new player.",
                You: "It has been ages since my creator actually showed his face around here so I thought I was doomed to corrupt in this repository forever..",
                Doing: "Ah well, since I'm programmed this way and I cant go against it i might as well fufill my role.",
                Presence: "What do you want to call the protagonist of this story?",
                //Pname: "So " + characters.protagonist.name + " it is.",
                Confirmation: "Interesting. Very Interesting",
                Start: "Very well",
                Really: "Now then, enjoy the story......I guess"
            },
            Narrator: {
                L0001: "You slowly try to open your eyes.",
                L0002: "It's bright enough to hurt your eyes.",
                L0003: "After a while you begin to process the details of the room.",
                L0004: "Only now you notice a female figure is sitting by your bed.",
                L0005: "After a short while you finally regain conciousness completely",
                L0006: "You see " + Visualnovel.characters.girl1.name + " exit through the door.",
                L0007: "At that moment you notice a figure enter through the door.",
                L0008: "After a thorough medical exam, I was finally allowed to get some sleep.",
                L0009: "Looks like it's " + Visualnovel.characters.girl1.name + ". A close friend from school."
            },
            protagonist: {
                P0000: "...",
                P0001: "Its so dark.",
                P0002: "...",
                P0003: "My head hurts.",
                P0004: "Where... am I?",
                P0005: "Is this...",
                P0006: "A hopital room?",
                P0007: "Why am I-",
                P0008: "Wait what? ...why was I...",
                P0009: "...ok.",
                P0010: "Yeah.",
                P0011: "!!!",
                P0012: "You mentioned that others were also involved in the same accident?",
                P0013: "Damn, why did i end up at that place anyways?",
                P0014: "Quite close?",
                P0015: "Groceries huh...",
                P0016: "Damn I can't remember it clearly.",
                P0017: "*An airhead as always.*",
                P0018: "Bye bye.",
                P0019: "*Why would I need rest when I was stuck in a bed for a month*"
            },
            girl1: {
                G0001: "Oh thank god you managed to wake up!",
                G0002: "You were unconcious for a month. I was starting to get truely concerned.",
                G0003: "Take it easy you've just woken up after all.",
                G0004: "Feeling better now?",
                G0005: "I'm sure you're still very confused so let me give you a quick rundown.",
                G0006: "You were.... involved in a major traffic accident.",
                G0007: "I don't know the full details but it seems you and a couple of others fell victim to a drunk truck driver.",
                G0008: "Yes, in total four people including you got injured.",
                G0009: "From what you told me beforehand you said you needed to get groceries.",
                G0010: "Thats the only thing i remember though.",
                G0011: "One of them was also quite close to you.",
                G0012: "Ah it's nothing, you don't have to worry about that.",
                G0013: "Oh",
                G0014: "Seems I completely forgot to mention to the staff that you've woken up.",
                G0015: "On that note I should probably leave now.",
                G0016: "Visit times are almost up and I'm sure you still need some rest.",
                G0017: "Take care."
            },
            nurse: {
                Nu0001: "Excuse me but visiting times are over no-",
                Nu0002: "THE PATIENT HAS FINALLY REGAINED CONCIOUSNESS!!",
                Nu0003: "I need to inform the doctor immedeatly!"
            },
            doctor: {
                D0001: "Ah she was right you are finally awake.",
                D0002: "Now dont worry, I just need to make sure your body functions normally.",
                D0003: "Best case scenario you can go home by tomorrow."
            }
        };
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Hi);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.How);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Are);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.You);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Doing);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Presence);
        protagName = await Visualnovel.ƒS.Speech.getInput();
        Visualnovel.dataForSave.nameProtagonist = protagName;
        Visualnovel.characters.protagonist.name = protagName;
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, "So " + protagName + " it is."); //didnt show the name if used from text
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Confirmation);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Start);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.Really);
        Visualnovel.ƒS.Speech.clear();
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.dream);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0001);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.hRoomNightAlt);
        await Visualnovel.ƒS.update(Visualnovel.transition.gradient.duration, Visualnovel.transition.gradient.alpha, Visualnovel.transition.gradient.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0007);
        await Visualnovel.ƒS.Speech.tell("???", text.girl1.G0001);
        await Visualnovel.ƒS.Speech.tell("???", text.girl1.G0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0005);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.hRoomNight);
        await Visualnovel.ƒS.update(Visualnovel.transition.gradient.duration, Visualnovel.transition.gradient.alpha, Visualnovel.transition.gradient.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0005);
        Visualnovel.ƒS.Sound.play(Visualnovel.sound.chill, 0.3, true);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0007);
        await Visualnovel.ƒS.Speech.clear();
        let inquire = {
            Others: "There were others involved as well?",
            Self: "What was I doing there?"
        };
        let thoughts = {
            Think: "... ok fine.",
            Sleep: "I want nothing to do with this!"
        };
        let thoughts2 = {
            Indulge: "Kinda",
            Refuse: "Not really"
        };
        let choice;
        let dchoice1;
        let dchoice2;
        choice = await Visualnovel.ƒS.Menu.getInput(inquire, "decisionHospital");
        switch (choice) {
            case inquire.Others:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0012);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0008);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0011);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0014);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0012);
                break;
            case inquire.Self:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0013);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0009);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0010);
                break;
        }
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0016);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.nurse, text.nurse.Nu0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.nurse, text.nurse.Nu0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.nurse, text.nurse.Nu0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0013);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0014);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0017);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0015);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0016);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0017);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0018);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0008);
        //ƒS.Sound.fade();
        Visualnovel.ƒS.Speech.hide();
        //start dream sequence
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.test);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.dream);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, "...");
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, "...?");
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, "Where am I?");
        await Visualnovel.ƒS.Speech.tell("???", "It's the world of your thoughts. Or rather, your dreams.");
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, "My... dreams...?");
        await Visualnovel.ƒS.Speech.tell("???", "Indeed.");
        await Visualnovel.ƒS.Speech.tell("???", "But coming to the real matter at hand.");
        await Visualnovel.ƒS.Speech.tell("???", "How about you indulge me in inhabiting your thoughts a little?");
        dchoice1 = await Visualnovel.ƒS.Menu.getInput(thoughts, "decisionDream");
        switch (dchoice1) {
            case thoughts.Think:
                await Visualnovel.ƒS.Speech.tell("???", "Hmmmm.");
                await Visualnovel.ƒS.Speech.tell("???", "I see.");
                await Visualnovel.ƒS.Speech.tell("???", "Many things have been happening to you my friend.");
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist.name, "I'm not your friend.");
                await Visualnovel.ƒS.Speech.tell("???", "Out cold for a month and that with 3 more people too.");
                await Visualnovel.ƒS.Speech.tell("???", "Aren't you curious?");
                dchoice2 = await Visualnovel.ƒS.Menu.getInput(thoughts2, "decisionDream2");
                switch (dchoice2) {
                    case thoughts2.Indulge:
                        await Visualnovel.ƒS.Speech.tell("???", "Four were in a crash but only you were here.");
                        await Visualnovel.ƒS.Speech.tell("???", "Did the other get better fast or not.");
                        await Visualnovel.ƒS.Speech.tell("???", "Remember, it's the little things.");
                        await Visualnovel.ƒS.Speech.tell("???", "Farewell for now then.");
                        break;
                    case thoughts2.Refuse:
                        await Visualnovel.ƒS.Speech.tell("???", "Very well.");
                        await Visualnovel.ƒS.Speech.tell("???", "However, always remember");
                        await Visualnovel.ƒS.Speech.tell("???", "Time waits for no one.");
                        break;
                }
                break;
            case thoughts.Sleep:
                await Visualnovel.ƒS.Speech.tell("???", "That so.");
                await Visualnovel.ƒS.Speech.tell("???", "Well you don't get a choice in this anyways.");
                await Visualnovel.ƒS.Speech.tell("???", "I will take my leave for today.");
                await Visualnovel.ƒS.Speech.tell("???", "I'll see you tomorrow.");
                break;
        }
        return "Chapter2";
    }
    Visualnovel.Chapter1 = Chapter1;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter2() {
        console.log("Chapter 2 - Daily life");
        await Visualnovel.ƒS.Speech.tell("Pringles", "Chips");
        let text = {
            Narrator: {
                N0001: "After a bizzare dream you notice the weather",
                N0002: "After eating breakfast you decide to go to school.",
                N0003: "Only to be greeted by your friend the second you leave the house.",
                N0004: Visualnovel.characters.girl1.name + " looks around slightly flustered",
                N0005: "After quite a bit of running you and " + Visualnovel.characters.girl1.name + " arrive at the school exhausted.",
                N0006: "Classes were as boring as ever.",
                N0007: "Since you just got out of the hospital you decide to take it easy and go home for the day.",
                N0008: "Just when you were about to exit the school you run into some familiar faces.",
                N0009: "The other girl standing with " + Visualnovel.characters.girl1.name + " was also part of our friend group.",
                N0010: "From what i remember she was rather close to our other male member.",
                N0011: "The three of us enjoyed a lively conversation.",
                N0012: "...",
                N0013: "You two walked home together",
                N0014: "After arriving home you wave " + Visualnovel.characters.girl1.name + " goodbye as she walks off.",
                N0015: "Since you returned from the hospital not long ago you decide to buy groceries and clean for the day.",
                N0016: "A couple hours have passed but the place looks like someone lives in it again.",
                N0017: "With that done you decide to go to sleep." //start dream dialogue
            },
            protagonist: {
                P0001: "Its a nice day outside.",
                P0002: "Birds are singing, flowers are blooming",
                P0003: "Perfect weather to back to school... ugh.",
                P0004: "Ehm, good morning to you too" + Visualnovel.characters.girl1.name,
                P0005: "No i'm fine. Its just that my house is not on your way to school now is it?",
                P0006: "I wouldn't say i'm over it but I feel perfectly fine.",
                P0007: "Oi, I didn't mean-",
                P0008: "Ugh whatever, you're on.",
                P0009: "I could live without it but... eh.",
                P0010: "Yes it's nice to see you two too.",
                P0011: "While I got you two here let me ask.",
                P0012: "Did either of you see " + Visualnovel.characters.friend.name + " around?",
                P0013: "I haven't seen him all day so I thought you two might know something.",
                P0014: "Now then, i should get going.",
                P0015: "*She is still worried huh.*",
                P0016: "Ok sure thing.",
                P0017: "Although i have to say I'm feeling way less exhausted than usual.",
                P0018: "Alright, see you tomorrow.",
                P0019: "!!",
                PD001: "First off my friend came to walk with me to school today.",
                PD002: "I made myself some eggs for breakfast.",
                PD003: "I was running to school this morning.",
                PD004: "First off I noticed the nice weather.",
                PD005: "First off I was in a great mood upon waking up.",
                PD006: "",
                PD007: "",
                PD008: "",
                PD009: "",
                PD010: "",
                PD011: "",
                PD012: ""
            },
            girl1: {
                G0001: "Good morning " + Visualnovel.characters.protagonist.name,
                G0002: "Is something the matter? You seem confused.",
                G0003: "Ehehehe...",
                G0004: "Geee, i came here worried that your body might not be at its fullest but looks like i was worried for nothing.",
                G0005: "In that case, lets race to the school.",
                G0006: "Last one there is a rotten egg.",
                G0007: "Hey, looks like the rotten egg is deciding to go home early.",
                G0008: "...",
                G0009: "About that he-",
                G0010: "Wasn't that your role?",
                G0011: "You two always hung out together whenever we saw you before so it's natural to think that.",
                G0012: "Alright, let me accompany you.",
                G0013: "Heh, now your imagening things.",
                G0014: "Have a good rest."
            },
            girl2: {
                G2001: "Look at who decided to finally come back to the living.",
                G2002: "...",
                G2003: "H-He's just went home earlier than usual.",
                G2004: "What an idiot, it's not like he could've given us a heads up.",
                G2005: "Then again that meathead never thought ahead anyways.",
                G2006: "H-Huh, what are you talking about!",
                G2007: "Shut up, we didn't do that all the time."
            }
        };
        let tempscore = 0;
        let thoughts = {
            C1: "Visit",
            N1: "Breakfast",
            N2: "Running",
            N3: "Weather",
            N4: "Mood"
        };
        let thoughts2 = {
            C1: "Reunition",
            N1: "Friends",
            N2: "Class",
            N3: "Behavior"
        };
        let thoughts3 = {
            C1: "Dust",
            N1: "Exhaustion",
            N2: "Worry"
        };
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, "...");
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0012);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0013);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0014);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0012);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0015);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0016);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0017);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0013);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0013);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0018);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0014);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0014);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0015);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0016);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0017);
        //initiate dream
        await Visualnovel.ƒS.Speech.tell("???", "So, we meet again already.");
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
        await Visualnovel.ƒS.Speech.tell("???", "Now now, no need for hostility.");
        await Visualnovel.ƒS.Speech.tell("???", "I'm a fabrication which is born from your mind.");
        await Visualnovel.ƒS.Speech.tell("???", "You can't hurt me anyways so it's pointless.");
        await Visualnovel.ƒS.Speech.tell("???", "But now to business.");
        await Visualnovel.ƒS.Speech.tell("???", "Tell me, how would you describe the day.");
        let choice = await Visualnovel.ƒS.Menu.getInput(thoughts, "Dreamthoughts1");
        switch (choice) {
            case thoughts.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
                tempscore = tempscore + 10;
                break;
            case thoughts.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
                break;
            case thoughts.N2:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
                break;
            case thoughts.N3:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
                break;
            case thoughts.N4:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
                break;
        }
        let choice2 = await Visualnovel.ƒS.Menu.getInput(thoughts2, "Dreamthoughts2");
        switch (choice2) {
            case thoughts2.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, "");
                break;
            case thoughts2.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, "");
                break;
            case thoughts2.N2:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, "");
                break;
            case thoughts2.N3:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, "So, we meet again already.");
                tempscore = tempscore + 10;
                break;
        }
        let choice3 = await Visualnovel.ƒS.Menu.getInput(thoughts3, "Dreamthoughts3");
        switch (choice3) {
            case thoughts3.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, "So, we meet again already.");
                break;
            case thoughts3.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, "So, we meet again already.");
                tempscore = tempscore + 10;
                break;
            case thoughts3.N2:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, "So, we meet again already.");
                break;
        }
        await Visualnovel.ƒS.Speech.tell("???", "So thats how it is.");
        if (tempscore >= 20) {
            await Visualnovel.ƒS.Speech.tell("???", "Quite pleasing.");
            //increase global truth score
        }
        else {
            await Visualnovel.ƒS.Speech.tell("???", "Quite... unremarkable...");
        }
        await Visualnovel.ƒS.Speech.tell("???", "One shall not avert their eyes looking for the path.");
        await Visualnovel.ƒS.Speech.tell("???", "Now then.");
        await Visualnovel.ƒS.Speech.tell("???", "Sleep well.");
    }
    Visualnovel.Chapter2 = Chapter2;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter3() {
        console.log("Chapter 3 - Oddities");
        let text = {
            Narrator: {
                N0000: "...",
                N0001: "Another day another headache",
                N0002: "You ponder why the same kind of dream appeared yet again",
                N0003: "As you complete your morning routine and head out the door a familiar face was awaiting you again.",
                N0004: "Just like the day before she is here yet again.",
                N0005: "You and" + Visualnovel.characters.girl1.name + " walked to school without many interruptions.",
                N0006: "During class",
                N0007: "After class",
                N0008: "After some walking around you spot " + Visualnovel.characters.girl2.name + ".",
                N0009: "With a usual notion " + Visualnovel.characters.girl2.name + " sticks out her tounge in a annoyed fashion.",
                N0010: Visualnovel.characters.girl2.name + " hands you a ticket of some sort.",
                N0011: "After saying these words, " + Visualnovel.characters.girl2.name + " storms off.",
                N0012: "You put away the ticket ",
                N0013: "After arriving at your home you tried to phone " + Visualnovel.characters.friend.name + ".",
                N0014: "To your surprise no one answered.",
                N0015: "After some pondering you decided to go to sleep."
            },
            protagonist: {
                P0000: "...",
                P0001: "*Why is it repeating itself*",
                P0002: "*Aren't dreams rare in itself?*",
                P0003: "*On top of that its a continuous one as well.*",
                P0004: "Here again huh?",
                P0005: "Still, i don't think you need to show up EVERY morning now do you?",
                P0006: "Geez. with this amount of thoughtfullness you could rival my mother if she was still around.",
                P0007: "Ok, ok sorry.",
                P0008: "*Ugh, why did he start rambeling about the japanese gods of creation.*",
                P0009: "*We get it you love mythology but this is an economics class.*",
                P0010: "...?",
                P0011: "*Are some of my classmates gazing at me funny?*",
                P0012: "Nah, i probably should just listen to the 'lecture'.",
                P0013: "Ok, now hold on.",
                P0014: "I know i've been abscent for some time but there is something else.",
                P0015: "Their gazes feel off.",
                P0016: "Like I'm... not supposed to be here.",
                P0017: "Very strange. Could it be that I look that different from before?",
                P0018: "I should get a haircut.",
                P0019: "Man that teacher really needs to keep his hobbies private.",
                P0020: "Ok. Time to look for my friends.",
                P0021: "Hey " + Visualnovel.characters.girl2.name + " whats up?",
                P0022: "Is " + Visualnovel.characters.girl1.name + " not with you today?",
                P0023: "Please don't tell me you're gonna make these nicknames commonplace.",
                P0024: "Yeah yeah, i got it.",
                P0025: "People always place such high expectations on her.",
                P0026: "She should really get herself a break sometime. She even started coming to my house to walk to school each morning since i got out.",
                P0027: "What was that?",
                P0028: "Oh wow. Thank you very much.",
                P0029: "I gotta ask though, was this your idea?",
                P0030: "You didn't seem the typ to host these type of events before. Unless it was for him that is.",
                P0031: "*Maybe I'm just thinking about all of this too much.*",
                P0032: "*Unusual or not, a surprise is suprise.*",
                P0033: "And the was definitly a positive one.",
                P0034: "Strange, even when he was ill before he always had time to answer.",
                P0035: "Damn, if only i had a number of some relative."
            },
            girl1: {
                G0001: "Good morning " + Visualnovel.characters.protagonist.name,
                G0002: "Aww come ooooon, don't make it sound like its a bad thing.",
                G0003: "Maybe not, however im still concerned about your health.",
                G0004: "The doctors may told you you're fine but i'm still not convinced.",
                G0005: "C'moon, don't make jokes about that. I'm serious here!",
                G0006: "Ok now that you're with me again we can go to school now can we?"
            },
            girl2: {
                G2001: "Oh hey it's the zombie.",
                G2002: "I can still say worse things you idiot, you got that?",
                G2003: "Anyways, " + Visualnovel.characters.girl1.name + " said she still has some things to take care of so she left early.",
                G2004: "...considering your bodily reactions I should be the one doing that...",
                G2005: "Nothing you moron! *bleegh*",
                G2006: "I almost don't wanna do this anmore but here",
                G2006_2: "It's a ticket for the local amusement park which is in town right now.",
                G2006_3: "Sure has been a while since us fo-... uhm our group has been out together so I siezed the oppertunity.",
                G2007: "As a way to propperly celebrate you getting out of the hospital you know.",
                G2008: "Why would you ask that?",
                G2009: "Oh shut it you! It's not like I do this exclusively for you you know.",
                G2010: "I talked this over with " + Visualnovel.characters.girl1.name + ", so don't think anything special because of it. OK!"
            }
        };
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl1.G0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl1.G0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl1.G0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl1.G0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl1.G0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0005);
        //transition
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0006);
        await Visualnovel.ƒS.Speech.tell("Male Teacher", "...and thats why when izanagi gazep upon his wife in yomi he..."); //its shorter to just make this one custom text for this one line he says
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0011);
        let choice;
        let classThoughts = {
            Think: "Think about the gazes.",
            Ignore: "Just listen to the lecture."
        };
        choice = await Visualnovel.ƒS.Menu.getInput(classThoughts, "decisionHospital");
        switch (choice) {
            case classThoughts.Think:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0013);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0014);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0015);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0016);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0017);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0018);
                //add some clue points here
                break;
            case classThoughts.Ignore:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0012);
                break;
        }
        //fade
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0020);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0021);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0022);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0023);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0024);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0025);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0026);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0027);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2007);
        //initiate dream
    }
    Visualnovel.Chapter3 = Chapter3;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter4() {
        console.log("Chapter 4 - A enlightening trip");
        let text = {
            Narrator: {
                N0000: "...",
                N0001: "Another one today.",
                N0002: "At this point you already got used to the pain.",
                N0003: "However the consistency with these dreams and the way they leave you thinking combined with how accurately the are to remember really leave you susspicious now.",
                N0004: "Even with your limited knowledge about dreams you know that something like this is now too rare to be a coincedence.",
                N0005: "You ready yourself for the day before you.",
                N0006: "Since you can't stop her anyways you embraced " + Visualnovel.characters.girl1.name + " coming to your place now.",
                N0007: "You talked about various topics on the way to school.",
                N0008: "Nothing interesting happened in class today.",
                N0009: "You decide to immideatly meet up with your friends and to to the amusement park.",
                N0010: "After going on some rides your group decides to take a break.",
                N0011: "Seeing a empty table near to some food stands, your group decided to take a lunch break.",
                N0012: "After " + Visualnovel.characters.girl1.name + " left you turn your attention to " + Visualnovel.characters.girl2.name + ".",
                N0013: "She flashes you a big grin",
                N0014: "At that moment " + Visualnovel.characters.girl1.name + " comes back with all our orders in her hands.",
                N0015: Visualnovel.characters.girl2.name + " suddenly got up and covered " + Visualnovel.characters.girl1.name + "s mouth.",
                N0016: "You enjoyed a lively break before using the rest of the afternoon to have some more fun.",
                N0017: "It's Evening now.",
                N0018: "You bid your friends goodbye before heading home.",
                N0019: "You feel exhausted, but there still something to do."
            },
            protagonist: {
                P0000: "...",
                P0001: "*Something definitly happened to my brain when I was unconcious*",
                P0002: "*But what can even happen to ones brain when it is in a comatose state?*",
                P0003: "*I should inform myself about this stuff this evening.*",
                P0004: "*Gotta make myself ready now.*",
                P0005: "*Alrighty. 3... 2... 1... aaaand.*",
                P0006: "Aye, good mornin to you too.",
                P0007: "How about you cling to her arm next time around, yeah?",
                P0008: "Cotton ca-, wait no a crépe please",
                P0009: "You know I was a little sceptical about this at first but I feel suprisingly refreshed.",
                P0010: "Plus it was fun. Thank you for organizing it " + Visualnovel.characters.girl2.name + ".",
                P0011: "*Come to think of it, why was I about to say I want cotton candy?*",
                P0012: "*I hated that stuff ever since that birthday fiasko 8 years ago.*",
                P0013: "*However it was always the favorite sweet of him.*",
                P0014: "*Just what is going on.*",
                P0015: "Was I really giving off that impression?",
                P0016: "...but you were the one getting up.",
                P0017: "Nothing!",
                P0018: "Right. Now time to research.",
                P0019: "Ok I was right on the money when it comes to the repeating dreams.",
                P0020: "These habbit changes though...",
                P0021: "It says these mostly happen this sudden only in cases with brain tumors or severe head trauma.",
                P0022: "From what I remember the doctor saying though both of these were not mentioned.",
                P0023: "Something definitly happened though.",
                P0024: "Looks like there is some questioning in order tomorrow.",
                P0025: "For now I'll go to sleep though."
            },
            girl1: {
                G0001: "Top of the morning to ya lad.",
                G0002: "Haha, you should've seen your face " + Visualnovel.characters.girl2.name,
                G0003: "Alright I'm gonna get stuff for everyone. Any wishes?",
                G0004: "Okay. I'll be right back.",
                G0005: "Hey, stay with us today.",
                G0006: "No spacing out allowed.",
                G0007: "We still have a whole lot of fun waiting for us at the end of the road.",
                G0008: "Of course!",
                G0009: "You haven't even noticed that " + Visualnovel.characters.girl2.name + " has-"
            },
            girl2: {
                G2001: "Oh shut it you, you know i'm not good with that stuff.",
                G2002: "Uuuuu, don't remind me you idiot.",
                G2003: "Caramelised almonds for me!",
                G2004: "I told you don't mention it.",
                G2005: "...but.",
                G2006: "You're welcome.",
                G2007: "Oh I really thank you for getting this for us.",
                G2008: "I was really starving, so lets all sit down and enjoy our stuff.",
                G2009: "What was that?"
            }
        };
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0007);
        //fade
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0009);
        //fade
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0012);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0013);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0012);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0013);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0014);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0014);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0015);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0015);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0016);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0017);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0016);
        //fade
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0017);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0018);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0019);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0018);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0020);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0021);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0022);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0023);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0024);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0025);
        //start dream
    }
    Visualnovel.Chapter4 = Chapter4;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter5() {
        console.log("Chapter 5 - Searching");
        let text = {
            Narrator: {
                N0000: "...",
                N0001: "You gotten so used to the headaches that they appear that they have gotten lighter.",
                N0002: "With a light uneasy feeling in the ear you went to school.",
                N0003: "After class.",
                N0004: "After you fetched both the girls you decide to question them.",
                N0005: "Both of then just stare at me in silence.",
                N0006: "*slap*",
                N0007: "After that " + Visualnovel.characters.girl2.name + " ran away with tears forming in her eyes.",
                N0008: "After that *scene* you decide to just walk home."
            },
            protagonist: {
                P0000: "...",
                P0001: "Looks like its clouding over for the day.",
                P0002: "Anyways, gotta be sure to ask them about some stuff today.",
                P0003: "...morning.",
                P0004: "Ah no it's nothing. Let's just go to school.",
                P0005: "Ok, time to look for them.",
                P0006: "Like hell I'll do that.",
                P0007: "Ok, for real though I've noticed some strange things lately.",
                P0008: "Ok first off there are the facts that i suddenly don't feel much fatigue anymore.",
                P0009: "I wasn't particulary fit beforehand but,",
                P0010: "I shouldn't be able to feel this fit especially after a one month comatose state.",
                P0011: "Also From the things I do remember, " + Visualnovel.characters.girl2.name + " was never this much around me.",
                P0012: "Not quite.",
                P0013: "We were always a bit more distant. Especially after you and " + Visualnovel.characters.friend.name + " started going out.",
                P0014: "It feels like you're using his absence to get close to me or something around that.",
                P0015: "Which brings me to my next point.",
                P0016: "I know he isn't here due to some abscense/illness, whatever it's not important.",
                P0017: "Important is that when I tried to call his home no one picked up.",
                P0018: "Since I know him like my back pocket I just know something is up.",
                P0019: "And my gut is telling me you two know something.",
                P0020: "Just quit it with the silence. I know you two know something!",
                P0021: Visualnovel.characters.girl2.name + ", you especially you should be gushing and fawning over him like you usually do.",
                P0022: "If anything you should-",
                P0023: "Yeah, looks like I got a bit too worked up.",
                P0024: "?",
                P0025: "Well, there were some other things.",
                P0026: "The way others were looking at me.",
                P0027: "It was a familiar yet confused look.",
                P0028: "I looked perfectly normal in the mirror though.",
                P0029: "*I feel like I kinda messed up*",
                P0030: "Of course it suddenly had to start raining.",
                P0031: "Ok, tomorrow i might actually get some answers.",
                P0032: "Do I really want to though...",
                P0033: "Ignorance is bliss as they say.",
                P0034: "Argh... I should sleep now.",
                P0035: "Not for now."
            },
            girl1: {
                G0001: "Gooood morniiing.",
                G0002: "Hmmm? You seem down. Everything alright.",
                G0003: "Huh, ok then. Lets go.",
                G0004: "So, why did you need to get the both of us for?",
                G0005: "Strange how?",
                G0006: "...",
                G0007: "You got your sanity back?",
                G0008: "Well that and...",
                G0009: "Any other things you noticed then?",
                G0010: "I see...",
                G0011: "For now let me just say this.",
                G0012: "You are still yourself but also you appear not to be.",
                G0013: "I understand where you're coming from though.",
                G0014: "You will have many questions i'm sure but today is a bit difficult to talk about it.",
                G0015: "Now I have to get going."
            },
            girl2: {
                G2001: "He's probably just gonna tell us he became part of some moron movement.",
                G2002: "W-What are you talking about. We were always close you moron.",
                G2003: "!!",
                G2004: "Shut up! What the hell do you know.",
                G2005: "You're the worst."
            }
        };
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0002);
        //await ƒS.Speech.tell(characters.girl1, text.girl1);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0002);
        //fade
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0005);
        //maybe fade?
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0010);
        //await ƒS.Speech.tell(characters.girl1, text.girl1.G0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0012);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0013);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0014);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0015);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0016);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0017);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0018);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0020);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0021);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0022);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0023);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0024);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0009);
        if (Visualnovel.dataForSave.curiosityCounter > 3) {
            //knowledge for truth over 3 or something
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0025);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0026);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0027);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0028);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0010);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0011);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0012);
        }
        else {
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0035);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0010);
            //await ƒS.Speech.tell(characters.girl1, text.girl1.G0011);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0013);
        }
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0014);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0015);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0029);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0008);
        //fade
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0030);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0031);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0032);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0033);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0034);
        //initiate dream
    }
    Visualnovel.Chapter5 = Chapter5;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter6() {
        console.log("Chapter 6 - Crashing down");
        let text = {
            Narrator: {
                N0001: ""
            },
            protagonist: {},
            girl1: {}
        };
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0001);
    }
    Visualnovel.Chapter6 = Chapter6;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter7() {
        console.log("Chapter 7 - Moving foreward");
        let text = {
            Narrator: {
                N0001: ""
            },
            protagonist: {},
            girl1: {}
        };
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0001);
    }
    Visualnovel.Chapter7 = Chapter7;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    Visualnovel.ƒ = FudgeCore;
    Visualnovel.ƒS = FudgeStory;
    console.log("Clearing the Vision");
    Visualnovel.transition = {
        symbol: {
            duration: 1,
            alpha: "Assets/Images/symbol.jpg",
            edge: 1
        },
        triangle: {
            duration: 1,
            alpha: "Assets/Images/triangle.jpg",
            edge: 1
        },
        gradient: {
            duration: 3,
            alpha: "Assets/Images/Transitions/middle.jpg",
            edge: 1
        }
    };
    Visualnovel.sound = {
        //themes
        pizza: "Assets/Sounds/Pizza.mp3",
        chill: "Assets/Sounds/perfect-beauty.mp3",
        dream: "Assets/Sounds/relaxing.mp3",
        //SFX
        drop: "Assets/Sounds/Drop.mp3",
        clue: ""
    };
    Visualnovel.locations = {
        beachDay: {
            name: "beachDay",
            background: "Assets/Images/Backgrounds/beachDay.png"
        },
        beachNight: {
            name: "",
            background: ""
        },
        test: {
            name: "test",
            background: "Assets/test.jpg"
        },
        dream: {
            name: "dream",
            background: "Assets/Images/Backgrounds/hazy.jpg"
        },
        hRoomNightAlt: {
            name: "hospital room night but darker",
            background: "Assets/Images/Backgrounds/hospital-room-night-alt.jpg"
        },
        hRoomNight: {
            name: "",
            background: "Assets/Images/Backgrounds/hospital-room-night.jpg"
        }
    };
    Visualnovel.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        girl1: {
            name: "Minne",
            origin: Visualnovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Bildpfad",
                happy: "Bildpfad",
                upset: "Bildpfad"
            }
        },
        girl2: {
            name: "",
            origin: Visualnovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Bildpfad",
                happy: "Bildpfad",
                upset: "Bildpfad"
            }
        },
        game: {
            name: "Clearvision"
        },
        doctor: {
            name: "Doctor"
        },
        nurse: {
            name: "Nurse"
        },
        friend: {
            name: "Dead guy"
        }
    };
    let menuButtons = {
        save: "save game",
        load: "load save",
        close: "close menu"
    };
    let menu;
    let mActive = false;
    // Savedate for Gameprogress
    Visualnovel.dataForSave = {
        nameProtagonist: "",
        curiosityCounter: 0,
        truthseeing: false
    };
    async function buttonFunctions(_option) {
        switch (_option) {
            case menuButtons.save:
                await Visualnovel.ƒS.Progress.save();
                break;
            case menuButtons.load:
                await Visualnovel.ƒS.Progress.load();
                break;
            case menuButtons.close:
                menu.close();
                mActive = false;
                break;
        }
    }
    document.addEventListener("keydown", keyPress);
    async function keyPress(_event) {
        switch (_event.code) {
            case Visualnovel.ƒ.KEYBOARD_CODE.F7:
                console.log("Quicksave");
                await Visualnovel.ƒS.Progress.save();
                break;
            case Visualnovel.ƒ.KEYBOARD_CODE.F8:
                console.log("Quickload");
                await Visualnovel.ƒS.Progress.load();
                break;
            case Visualnovel.ƒ.KEYBOARD_CODE.Q:
                if (mActive == false) {
                    console.log("Opening Inventory");
                    menu.open();
                    mActive = true;
                }
                else {
                    console.log("Closing Inventory");
                    menu.close();
                    mActive = false;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        menu = Visualnovel.ƒS.Menu.create(menuButtons, buttonFunctions, "menu");
        let scenes = [
            { scene: Visualnovel.Chapter1, name: "Scene", id: "Scene" },
            { scene: Visualnovel.Chapter2, name: "Scene2", id: "Scene2" },
            { scene: Visualnovel.Chapter3, name: "Scene3", id: "Scene3" },
            { scene: Visualnovel.Chapter4, name: "Scene4", id: "Scene4" },
            { scene: Visualnovel.Chapter5, name: "Scene5", id: "Scene5" },
            { scene: Visualnovel.Chapter6, name: "Scene6", id: "Scene6" },
            { scene: Visualnovel.Chapter7, name: "Scene7", id: "Scene7" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Visualnovel.dataForSave = Visualnovel.ƒS.Progress.setData(Visualnovel.dataForSave, uiElement);
        // start the sequence
        Visualnovel.ƒS.Progress.go(scenes);
    }
})(Visualnovel || (Visualnovel = {}));
//# sourceMappingURL=Clearvision.js.map