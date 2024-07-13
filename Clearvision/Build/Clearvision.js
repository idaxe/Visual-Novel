"use strict";
var Visualnovel;
(function (Visualnovel) {
    async function Chapter1() {
        console.log("Chapter 1 - The Accident");
        if (Visualnovel.dataForSave.curChapter != 1) {
            return "Chapter2";
        }
        let protagName = "";
        let text = {
            game: {
                Hi: "I sense...",
                How: "A new presence...",
                Are: "You must be a new player.",
                You: "It has been ages since my creator actually showed his face around here, so I thought I was doomed to corrupt in this repository forever..",
                Doing: "Ah well, since I'm programmed this way and I can't go against it. I might as well fufill my role.",
                Presence: "What do you want to call the protagonist of this story?",
                //Pname: "So " + characters.protagonist.name + " it is.",
                Confirmation: "Interesting. Very Interesting.",
                Start: "Very well.",
                Really: "Now then, enjoy the story......I guess."
            },
            Narrator: {
                L0001: "You slowly try to open your eyes.",
                L0002: "It's bright enough to hurt your eyes.",
                L0003: "After a while, you begin to process the details of the room.",
                L0004: "Only now you notice a female figure is sitting by your bed.",
                L0005: "After a short while you finally regain consciousness completely.",
                L0006: "You see " + Visualnovel.characters.girl1.name + " exit through the door.",
                L0007: "At that moment, you notice a figure enter through the door.",
                L0008: "After a thorough medical exam, I was finally allowed to get some sleep.",
                L0009: "Looks like it's " + Visualnovel.characters.girl1.name + ". A close friend from school."
            },
            protagonist: {
                P0000: "...",
                P0001: "It's so dark.",
                P0002: "...",
                P0003: "My head hurts.",
                P0004: "Where... am I?",
                P0005: "Is this...",
                P0006: "A hospital room?",
                P0007: "Why am I-",
                P0008: "Wait what? ...why was I...",
                P0009: "...ok.",
                P0010: "Yeah.",
                P0011: "!!!",
                P0012: "You mentioned that others were also involved in the same accident?",
                P0013: "Damn, why did I end up at that place anyway?",
                P0014: "Quite close?",
                P0015: "Groceries huh...",
                P0016: "Damn, I can't remember it clearly.",
                P0017: "*An airhead as always.*",
                P0018: "Bye bye.",
                P0019: "*Why would I need rest when I was stuck in a bed for a month?*"
            },
            girl1: {
                G0001: "Oh thank god, you managed to wake up!",
                G0002: "You were unconscious for a month. I was starting to get truly concerned.",
                G0003: "Take it easy, you've just woken up after all.",
                G0004: "Feeling better now?",
                G0005: "I'm sure you're still very confused, so let me give you a quick rundown.",
                G0006: "You were.... involved in a major traffic accident.",
                G0007: "I don't know the full details, but it seems you and a couple of others fell victim to a drunk truck driver.",
                G0008: "Yes, in total four people including you got injured.",
                G0009: "From what you told me beforehand, you said you needed to get groceries.",
                G0010: "That's the only thing I remember though.",
                G0011: "One of them was also quite close to you.",
                G0012: "Ah it's nothing, you don't have to worry about that.",
                G0013: "Oh.",
                G0014: "Seems I completely forgot to mention to the staff that you've woken up.",
                G0015: "On that note, I should probably leave now.",
                G0016: "Visit times seem to be up and I'm sure you still need some rest.",
                G0017: "Take care."
            },
            nurse: {
                Nu0001: "Excuse me, but visiting times are over no-",
                Nu0002: "THE PATIENT HAS FINALLY REGAINED CONSCIOUSNESS!!",
                Nu0003: "I need to inform the doctor immediately!"
            },
            doctor: {
                D0001: "Ah, she was right. You are finally awake.",
                D0002: "Now don't worry, I just need to make sure your body functions normally.",
                D0003: "Best case scenario, you can go home by tomorrow."
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
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.happy, Visualnovel.customPositions.slightleft);
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
        await Visualnovel.ƒS.Character.animate(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.happy, Visualnovel.animate("outLeft"));
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.L0008);
        await Visualnovel.ƒS.Character.hide(Visualnovel.characters.girl1);
        //ƒS.Sound.fade();
        Visualnovel.ƒS.Speech.hide();
        //await ƒS.Character.show(characters.girl2, characters.girl2.pose.angry, customPositions.slightleft);
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
                await Visualnovel.ƒS.Speech.tell("???", "Many things have been happening to you, my friend.");
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist.name, "I'm not your friend.");
                await Visualnovel.ƒS.Speech.tell("???", "Out cold for a month and that with 3 more people too.");
                await Visualnovel.ƒS.Speech.tell("???", "Aren't you curious?");
                dchoice2 = await Visualnovel.ƒS.Menu.getInput(thoughts2, "decisionDream2");
                switch (dchoice2) {
                    case thoughts2.Indulge:
                        await Visualnovel.ƒS.Speech.tell("???", "Four were in a crash, but only you were here.");
                        await Visualnovel.ƒS.Speech.tell("???", "Did the others get better fast or not?");
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
                await Visualnovel.ƒS.Speech.tell("???", "Well, you don't get a choice in this anyways.");
                await Visualnovel.ƒS.Speech.tell("???", "I will take my leave for today.");
                await Visualnovel.ƒS.Speech.tell("???", "I'll see you tomorrow.");
                break;
        }
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.void);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        Visualnovel.dataForSave.curChapter = 2;
        return "Chapter2";
    }
    Visualnovel.Chapter1 = Chapter1;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter2() {
        console.log("Chapter 2 - Daily life");
        //await ƒS.Speech.tell("Pringles", "Chips");
        if (Visualnovel.dataForSave.curChapter != 2) {
            return "Chapter3";
        }
        let text = {
            Narrator: {
                N0000: "...",
                N0001: "After a bizzare dream, you notice the weather.",
                N0002: "After eating breakfast, you decide to go to school.",
                N0003: "Only to be greeted by your friend the second you leave the house.",
                N0004: Visualnovel.characters.girl1.name + " looks around slightly flustered.",
                N0005: "After quite a bit of running, " + Visualnovel.characters.girl1.name + " and you arrive at the school exhausted.",
                N0006: "Classes were as boring as ever.",
                N0007: "Since you just got out of the hospital, you decide to take it easy and go home for the day.",
                N0008: "Just when you were about to exit the school, you run into some familiar faces.",
                N0009: "The other girl standing with " + Visualnovel.characters.girl1.name + " was also part of our friend group.",
                N0010: "From what I remember, she was rather close to our other male member.",
                N0011: "The three of us enjoyed a lively conversation.",
                N0012: "...",
                N0013: "You two walked home together.",
                N0014: "After arriving home, you wave " + Visualnovel.characters.girl1.name + " goodbye as she walks off.",
                N0015: "Since you returned from the hospital not long ago, you decide to buy groceries and clean for the day.",
                N0016: "A couple hours have passed, but the place looks like someone lives in it again.",
                N0017: "With that done, you decide to go to sleep." //start dream dialogue
            },
            protagonist: {
                P0001: "It's a nice day outside.",
                P0002: "Birds are singing, flowers are blooming.",
                P0003: "Perfect weather to go back to school... ugh.",
                P0004: "Ehm, good morning to you too, " + Visualnovel.characters.girl1.name + ".",
                P0005: "No, i'm fine. It's just that my house is not on your way to school now is it?",
                P0006: "I wouldn't say I'm over it but I feel perfectly fine.",
                P0007: "Oi, I didn't mean-",
                P0008: "Ugh whatever, you're on.",
                P0009: "I could live without it but... eh.",
                P0010: "Yes, it's nice to see you two too.",
                P0011: "While I got you two here, let me ask.",
                P0012: "Did either of you see " + Visualnovel.characters.friend.name + " around?",
                P0013: "I haven't seen him all day, so I thought you two might know something.",
                P0014: "Now then, I should get going.",
                P0015: "*She is still worried huh.*",
                P0016: "Ok, sure thing.",
                P0017: "Although I have to say, I'm feeling way less exhausted than usual.",
                P0018: "Alright, see you tomorrow.",
                P0019: "!!",
                PD001: "First off my friend came to walk with me to school today.",
                PD002: "I made myself some eggs for breakfast.",
                PD003: "I was running to school this morning.",
                PD004: "First off I noticed the nice weather.",
                PD005: "First off I was in a great mood upon waking up.",
                PD006: "I finally got to meet up with my friends again.",
                PD007: "I got to reunite with my friendgroup after class today. Well with most of them.",
                PD008: "The class expressed their joy in seeing me again.",
                PD009: "Some schoolmates gave me quite unique glares.",
                PD010: "My appartment was really dusty upon closer inspection.",
                PD011: "For a day where so much happened, I really did not feel exhausted that much.",
                PD012: Visualnovel.characters.girl1.name + " still worries about me even though I am out of the hospital already."
            },
            girl1: {
                G0001: "Good morning, " + Visualnovel.characters.protagonist.name + ".",
                G0002: "Is something the matter? You seem confused.",
                G0003: "Ehehehe...",
                G0004: "Geee, I came here worried that your body might not be at its fullest, but looks like I was worried for nothing.",
                G0005: "In that case, let's race to the school.",
                G0006: "Last one there is a rotten egg.",
                G0007: "Hey, looks like the rotten egg is deciding to go home early.",
                G0008: "...",
                G0009: "About that, he-",
                G0010: "Wasn't that your role?",
                G0011: "You two always hung out together whenever we saw you before, so it's natural to think that.",
                G0012: "Alright, let me accompany you.",
                G0013: "Heh, now you're imagining things.",
                G0014: "Have a good rest."
            },
            girl2: {
                G2001: "Look at who decided to finally come back to the living.",
                G2002: "...",
                G2003: "H-He's just went home earlier than usual.",
                G2004: "What an idiot, it's not like he could've given us a heads up.",
                G2005: "Then again, that meathead never thought ahead anyways.",
                G2006: "H-Huh, what are you talking about?!",
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
        //await ƒS.Location.show(locations.dream);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.homeDay);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0003);
        //maybe an environmental update here?
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.town);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.happy, Visualnovel.customPositions.farleft);
        await Visualnovel.ƒS.Character.animate(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.happy, Visualnovel.animate("inLeft"));
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
        //fade in school maybe
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.school);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0000);
        //fade in
        await Visualnovel.ƒS.Character.hide(Visualnovel.characters.girl1);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.classroom);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0008);
        //school hallway maybe?
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.hallway);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.happy, Visualnovel.customPositions.slightleft);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0007);
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl2, Visualnovel.characters.girl2.pose.happy, Visualnovel.customPositions.slightright);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0010);
        //await ƒS.Character.animate(characters.girl1, characters.girl1.pose.happy, animate("goInLeft"));
        //await ƒS.Character.animate(characters.girl2, characters.girl2.pose.happy, animate("goInRight"));
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0012);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0013);
        //Characters pose change
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.upset, Visualnovel.customPositions.slightleft);
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl2, Visualnovel.characters.girl2.pose.upset, Visualnovel.customPositions.slightright);
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
        await Visualnovel.ƒS.Character.hide(Visualnovel.characters.girl1);
        await Visualnovel.ƒS.Character.hide(Visualnovel.characters.girl2);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.homeNight);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0014);
        //fade to black and then back
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0015);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0016);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0017);
        //initiate dream
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.void);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.dream);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell("???", "So, we meet again already.");
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
        await Visualnovel.ƒS.Speech.tell("???", "Now now, no need for hostility.");
        await Visualnovel.ƒS.Speech.tell("???", "I'm a fabrication which is born from your mind.");
        await Visualnovel.ƒS.Speech.tell("???", "You can't hurt me anyway, so it's pointless.");
        await Visualnovel.ƒS.Speech.tell("???", "But now to business.");
        await Visualnovel.ƒS.Speech.tell("???", "Tell me, how would you describe the day.");
        let choice = await Visualnovel.ƒS.Menu.getInput(thoughts, "Dreamthoughts1");
        switch (choice) {
            case thoughts.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD001);
                tempscore = tempscore + 10;
                break;
            case thoughts.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD002);
                break;
            case thoughts.N2:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD003);
                break;
            case thoughts.N3:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD004);
                break;
            case thoughts.N4:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD005);
                break;
        }
        let choice2 = await Visualnovel.ƒS.Menu.getInput(thoughts2, "Dreamthoughts2");
        switch (choice2) {
            case thoughts2.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD006);
                break;
            case thoughts2.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD007);
                tempscore = tempscore + 5;
                break;
            case thoughts2.N2:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD008);
                break;
            case thoughts2.N3:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD009);
                tempscore = tempscore + 10;
                break;
        }
        let choice3 = await Visualnovel.ƒS.Menu.getInput(thoughts3, "Dreamthoughts3");
        switch (choice3) {
            case thoughts3.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD010);
                break;
            case thoughts3.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD011);
                tempscore = tempscore + 10;
                break;
            case thoughts3.N2:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD012);
                tempscore = tempscore + 5;
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
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.void);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        Visualnovel.dataForSave.curChapter = 3;
        Visualnovel.dataForSave.curiosityCounter = Visualnovel.dataForSave.curiosityCounter + tempscore;
        return "Chapter3";
    }
    Visualnovel.Chapter2 = Chapter2;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter3() {
        console.log("Chapter 3 - Oddities");
        if (Visualnovel.dataForSave.curChapter != 3) {
            return "Chapter4";
        }
        let text = {
            Narrator: {
                N0000: "...",
                N0001: "Another day, another headache",
                N0002: "You ponder why the same kind of dream appeared yet again.",
                N0003: "As you complete your morning routine and head out the door, a familiar face was awaiting you again.",
                N0004: "Just like the day before she is here yet again.",
                N0005: "You and" + Visualnovel.characters.girl1.name + " walked to school without many interruptions.",
                N0006: "During class",
                N0007: "After class",
                N0008: "After some walking around you spot " + Visualnovel.characters.girl2.name + ".",
                N0009: "With a usual notion " + Visualnovel.characters.girl2.name + " sticks out her tounge in a annoyed fashion.",
                N0010: Visualnovel.characters.girl2.name + " hands you a ticket of some sort.",
                N0011: "After saying these words, " + Visualnovel.characters.girl2.name + " storms off.",
                N0012: "You put away the ticket and started going home.",
                N0013: "After arriving at your home you tried to phone " + Visualnovel.characters.friend.name + ".",
                N0014: "To your surprise no one answered.",
                N0015: "After some pondering you decided to go to sleep."
            },
            protagonist: {
                P0000: "...",
                P0001: "*Why is it repeating itself?*",
                P0002: "*Aren't dreams pretty rare in the first place?*",
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
                P0033: "*And it was definitly a positive one.*",
                P0034: "Strange, even when he was ill before he always had time to answer.",
                P0035: "Damn, if only I had a number of some relative.",
                PD001: "I've only noticed today but I've been getting headaches every time I wake up now.",
                PD002: Visualnovel.characters.girl1.name + " showed up at my house again. I think it's a bit much but I've always apprechiated the care she had for me.",
                PD003: "Aside from my Headaches every morning i get the feeling that there came some strange dreams right before them. I feel like there is a coincedence",
                PD004: "Seems like my friends want to distract me from all the hospital shenanigans with a trip to the amusement park, which is coincedently in town again.",
                PD005: "As always our teachers have some unique preferences they want to imprint upon us.",
                PD005A: "Come to think of it, I noticed some strange gazes during the class though.",
                PD006: "I was too distracted to notice but all that hospital time made my hair longer than I want to. I should get rid of it soon.",
                PD007: "I couldn't get in touch with " + Visualnovel.characters.friend.name + ". I wonder what's going on on his end.",
                PD008: "I can't wait to do fun stuff with my friends again. I missed it a lot."
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
                G2006: "I almost don't wanna do this anymore but here.",
                G2006_2: "It's a ticket for the local amusement park which is in town right now.",
                G2006_3: "Sure has been a while since us fo-... uhm our group has been out together so I siezed the oppertunity.",
                G2007: "As a way to propperly celebrate you getting out of the hospital you know.",
                G2008: "Why would you ask that?",
                G2009: "Oh shut it you! It's not like I do this exclusively for you you know.",
                G2010: "I talked this over with " + Visualnovel.characters.girl1.name + ", so don't think anything special because of it. OK!"
            }
        };
        let listen = false;
        let tempscore = 0;
        let thoughts = {
            C1: "Headaches",
            N1: "Overprotectiveness",
            N2: "Dreams"
        };
        let thoughts2 = {
            C1: "Ticket",
            N1: "Odd lesson",
            N2: "Haircut"
        };
        let thoughts3 = {
            C1: "Old friend",
            N1: "Anticipation"
        };
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.homeDay);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0003);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.town); //street bgm
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.happy, Visualnovel.customPositions.slightleft);
        await Visualnovel.ƒS.update(Visualnovel.transition.gradient.duration, Visualnovel.transition.gradient.alpha, Visualnovel.transition.gradient.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0005);
        //transition
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.classroom);
        await Visualnovel.ƒS.update(Visualnovel.transition.gradient.duration, Visualnovel.transition.gradient.alpha, Visualnovel.transition.gradient.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0006);
        await Visualnovel.ƒS.Speech.tell("Male Teacher", "...and thats why when izanagi gazed upon his wife in yomi he..."); //its shorter to just make this one custom text for this one line he says
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
                listen = true;
                //add some clue points here
                break;
            case classThoughts.Ignore:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0012);
                break;
        }
        //fade
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.hallway);
        await Visualnovel.ƒS.update();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0020);
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl2, Visualnovel.characters.girl2.pose.happy, Visualnovel.customPositions.slightleft);
        //await ƒS.Animation.();
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
        //await ƒS.Animation(); //maybe a short foreward step animation
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0010);
        //maybe ticket into a inventory slot which skips chapter 4 if discarded
        //await ƒS.Animation();//maybe a short back step animation
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0028);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0029);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0030);
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl2, Visualnovel.characters.girl2.pose.angry, Visualnovel.customPositions.slightleft); //angy face
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2010);
        await Visualnovel.ƒS.Character.animate(Visualnovel.characters.girl2, Visualnovel.characters.girl2.pose.angry, Visualnovel.animate("outLeft")); //char gone
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0031);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0032);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0033);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0012);
        //fade
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.homeNight);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0013);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0014);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0034);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0035);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0015);
        //initiate dream
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.void);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.dream);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0000);
        await Visualnovel.ƒS.Speech.tell("???", "Suprise suprise!");
        await Visualnovel.ƒS.Speech.tell("???", "Your favorite hauting voice is back.");
        await Visualnovel.ƒS.Speech.tell("???", "Just like the last times im gonna need some insights.");
        await Visualnovel.ƒS.Speech.tell("???", "Let me into your life.");
        let choice2 = await Visualnovel.ƒS.Menu.getInput(thoughts, "Dreamthoughts1");
        switch (choice2) {
            case thoughts.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD001);
                tempscore = tempscore + 5;
                break;
            case thoughts.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD002);
                break;
            case thoughts.N2:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD003);
                tempscore = tempscore + 5;
                break;
        }
        let choice3 = await Visualnovel.ƒS.Menu.getInput(thoughts2, "Dreamthoughts2");
        switch (choice3) {
            case thoughts2.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD004);
                break;
            case thoughts2.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD005);
                if (listen == true) {
                    await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD005A);
                    tempscore = tempscore + 10;
                }
                break;
            case thoughts2.N2:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD006);
                break;
        }
        let choice4 = await Visualnovel.ƒS.Menu.getInput(thoughts3, "Dreamthoughts3");
        switch (choice4) {
            case thoughts3.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD007);
                tempscore = tempscore + 5;
                break;
            case thoughts3.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD008);
                break;
        }
        await Visualnovel.ƒS.Speech.tell("???", "I see...");
        if (tempscore > 7) {
            await Visualnovel.ƒS.Speech.tell("???", "I am most impressed.");
            await Visualnovel.ƒS.Speech.tell("???", "Your finding shall lead you to the origin.");
            //increase global truth score
        }
        else {
            await Visualnovel.ƒS.Speech.tell("???", "You seem to be making progress.");
            await Visualnovel.ƒS.Speech.tell("???", "But a word of advice. You should pay a bit more attention on the things happening around you.");
        }
        await Visualnovel.ƒS.Speech.tell("???", "That may give too much away though.");
        await Visualnovel.ƒS.Speech.tell("???", "Do with these informations as you please.");
        await Visualnovel.ƒS.Speech.tell("???", "Hope you can remember these interactions better outside of your subconciousness soon.");
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.void);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        Visualnovel.dataForSave.curChapter = 4;
        Visualnovel.dataForSave.curiosityCounter = Visualnovel.dataForSave.curiosityCounter + tempscore;
        return "Chapter4";
    }
    Visualnovel.Chapter3 = Chapter3;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter4() {
        console.log("Chapter 4 - A enlightening trip");
        if (Visualnovel.dataForSave.curChapter != 4) {
            return "Chapter5";
        }
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
                P0022: "From what I remember the doctor saying though both of these were not mentioned in my case.",
                P0023: "Something definitly happened though.",
                P0024: "Looks like there is some questioning in order tomorrow.",
                P0025: "For now I'll go to sleep though.",
                PD001: "The dreams have been pretty consistent. I still can't remember the contents of them after I wake up somehow.",
                PD002: "It's like I was never gone. I feel stronger but when I look inside the mirror I just see my usual stickfigure self.",
                PD003: "I had a real good time with my friends at the park today. I just wished we could've had the whole group.",
                PD004: "All these recent events seem to keep me in my thoughts even in these times where I should just forget about it.",
                PD005: "I tried to order something I absolutely despise. Like it was a force of habbit.",
                PD006: "I found out quite a bit about the machinations of dreams today.",
                PD007: "The events around me sure make everything more mysterious but I think I'm beginning to see a pattern."
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
        //let listen = false;
        let tempscore = 0;
        let thoughts = {
            C1: "Consistency",
            N1: "Coma aftereffects"
        };
        let thoughts2 = {
            C1: "Fun",
            N1: "Spacing out",
            N2: "Habbits"
        };
        let thoughts3 = {
            C1: "Research",
            N1: "Own Events"
        };
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.homeDay);
        await Visualnovel.ƒS.update();
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
        //fade black & back
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0005);
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.happy, Visualnovel.customPositions.farright);
        await Visualnovel.ƒS.Character.animate(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.happy, Visualnovel.animate("inRight"));
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0006);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.town);
        await Visualnovel.ƒS.update();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0007);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.classroom);
        await Visualnovel.ƒS.update();
        //fade
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0009);
        //fade to amusemetn park
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.festival);
        await Visualnovel.ƒS.update();
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.happy, Visualnovel.customPositions.slightright);
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl2, Visualnovel.characters.girl2.pose.happy, Visualnovel.customPositions.slightleft);
        await Visualnovel.ƒS.update();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2002);
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl2, Visualnovel.characters.girl2.pose.upset, Visualnovel.customPositions.slightleft);
        await Visualnovel.ƒS.update();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0011);
        //double blackfade
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0004);
        await Visualnovel.ƒS.Character.animate(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.happy, Visualnovel.animate("outRight"));
        //await ƒS.Animation();
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
        await Visualnovel.ƒS.Character.animate(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.happy, Visualnovel.animate("inRight"));
        //await ƒS.Animation();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0015);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0009);
        await Visualnovel.ƒS.Character.animate(Visualnovel.characters.girl2, Visualnovel.characters.girl2.pose.angry, Visualnovel.animate("scare"));
        await Visualnovel.ƒS.Character.animate(Visualnovel.characters.girl2, Visualnovel.characters.girl2.pose.angry, Visualnovel.animate("scareBack"));
        //await ƒS.Animation();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0015);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0016);
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl2, Visualnovel.characters.girl2.pose.happy, Visualnovel.customPositions.slightleft);
        await Visualnovel.ƒS.update();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0017);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0016);
        await Visualnovel.ƒS.Character.hide(Visualnovel.characters.girl1);
        await Visualnovel.ƒS.Character.hide(Visualnovel.characters.girl2);
        //fade
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.homeNight);
        await Visualnovel.ƒS.update();
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
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.void);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.dream);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0000);
        await Visualnovel.ƒS.Speech.tell("???", "Hmm, I can tell even without you telling me things that today was a good day for you.");
        await Visualnovel.ƒS.Speech.tell("???", "Even without contact to everything you experienced some feelings even managed to reach me.");
        await Visualnovel.ƒS.Speech.tell("???", "Or maybe I'm just more and more becoming a part of you. He he he~");
        await Visualnovel.ƒS.Speech.tell("???", "Well regardless, you know what I wanna hear.");
        let choice = await Visualnovel.ƒS.Menu.getInput(thoughts, "Dreamthoughts1");
        switch (choice) {
            case thoughts.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD001);
                tempscore = tempscore + 5;
                break;
            case thoughts.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD002);
                tempscore = tempscore + 5;
                break;
        }
        let choice2 = await Visualnovel.ƒS.Menu.getInput(thoughts2, "Dreamthoughts2");
        switch (choice2) {
            case thoughts2.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD003);
                break;
            case thoughts2.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD004);
                tempscore = tempscore + 5;
                break;
            case thoughts2.N2:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD005);
                tempscore = tempscore + 5;
                break;
        }
        let choice3 = await Visualnovel.ƒS.Menu.getInput(thoughts3, "Dreamthoughts3");
        switch (choice3) {
            case thoughts3.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD006);
                tempscore = tempscore + 5;
                break;
            case thoughts3.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD007);
                tempscore = tempscore + 5;
                break;
        }
        await Visualnovel.ƒS.Speech.tell("???", "Looks like you had quite the good time today.");
        if (tempscore > 12) {
            await Visualnovel.ƒS.Speech.tell("???", "Well well well.");
            await Visualnovel.ƒS.Speech.tell("???", "Even though you have the options of ignorance you stray from it and move further towards the knowledge hidden in the dark.");
            //increase global truth score
        }
        else {
            await Visualnovel.ƒS.Speech.tell("???", "Very well then.");
            await Visualnovel.ƒS.Speech.tell("???", "I'll let you off with just this today.");
        }
        await Visualnovel.ƒS.Speech.tell("???", "One way or another you should be aware of your actions.");
        await Visualnovel.ƒS.Speech.tell("???", "What you think and do is not just a concern for yourself anymore.");
        await Visualnovel.ƒS.Speech.tell("???", "Will you accidently cause a actions with a recoil strong enough that it might destroy what you have left?");
        await Visualnovel.ƒS.Speech.tell("???", "Maybe your subconciousness is already getting affected through me?");
        await Visualnovel.ƒS.Speech.tell("???", "Hehe~. Let's see how time plays out.");
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.void);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        Visualnovel.dataForSave.curChapter = 5;
        Visualnovel.dataForSave.curiosityCounter = Visualnovel.dataForSave.curiosityCounter + tempscore;
        return "Chapter5";
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
                N0001: "You gotten so used to the headaches that they appear to be have gotten lighter.",
                N0002: "With a light uneasy feeling in the air you went to school.",
                N0003: "After class.",
                N0004: "After you fetched both the girls you decide to question them.",
                N0005: "Both of then just stare at me in silence.",
                N0006: "*slap*",
                N0007: "After that " + Visualnovel.characters.girl2.name + " ran away with tears forming in her eyes.",
                N0008: "After that *scene* you decide to just walk home."
            },
            protagonist: {
                P0000: "...",
                P0001: "Looks like it's clouding over for the day.",
                P0002: "Anyways, gotta be sure to ask them about some stuff today.",
                P0003: "...morning.",
                P0004: "Ah no it's nothing. Let's just go to school.",
                P0005: "Ok, time to look for them.",
                P0006: "Like hell I'll do that.",
                P0007: "Ok, for real though I've noticed some strange things lately.",
                P0008: "Ok first off there are the facts that i suddenly don't feel much fatigue anymore.",
                P0009: "I wasn't particulary fit or athletic beforehand so,",
                P0010: "I shouldn't be able to feel this fit especially after a one month comatose state.",
                P0011: "Also, from the things I do remember, " + Visualnovel.characters.girl2.name + " was never this much around me.",
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
                P0023: "Yeah, looks like I got a bit too worked up there.",
                P0024: "?",
                P0025: "Well, there were some other things.",
                P0026: "The way others were looking at me.",
                P0027: "It was a familiar yet confused look.",
                P0028: "I looked perfectly normal in the mirror though.",
                P0029: "*I feel like I kinda messed up.*",
                P0030: "Of course it suddenly had to start raining.",
                P0031: "Ok, tomorrow i might actually get some answers.",
                P0032: "Do I really want to though...",
                P0033: "Ignorance is bliss as they say.",
                P0034: "Argh... I should sleep now.",
                P0035: "Not for now.",
                PD001: "It was very cloudy today.",
                PD002: "Seems like all these thoughts and theories got me in a down mood.",
                PD003: "I got into an arguement with my friends at school.",
                PD004: "I might finally get some answers tomorrow.",
                PD005: "I feel like these two girls know something I don't.",
                PD006: "I still don't get why " + Visualnovel.characters.girl2.name + " especially seems so attached to me all of a sudden.",
                PD007: "Maybe I should've left the topic alone and just move on."
            },
            girl1: {
                G0001: "Gooood morniiing.",
                G0002: "Hmmm? You seem down. Everything alright?",
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
        let tempscore = 0;
        let thoughts = {
            C1: "Weather",
            N1: "Uneasyness"
        };
        let thoughts2 = {
            C1: "Arguement",
            N1: "Answers",
            N2: "Secrecy"
        };
        let thoughts3 = {
            C1: "Confusion",
            N1: "Regret"
        };
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0002);
        //await ƒS.Speech.tell(characters.girl1, text.girl1);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0001);
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.happy, Visualnovel.customPositions.slightleft); //happy
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0002);
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.upset, Visualnovel.customPositions.slightleft); //sad
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0003);
        await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.angry, Visualnovel.customPositions.slightleft); //upset
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0002);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.classroom);
        await Visualnovel.ƒS.update();
        //fade school
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0005);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.hallway);
        await Visualnovel.ƒS.update();
        // fade hallways
        //await ƒS.Character.show();
        await Visualnovel.ƒS.Character.show();
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
        await Visualnovel.ƒS.Character.show(); //sad
        await Visualnovel.ƒS.update();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0012);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0013);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0014);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2003);
        await Visualnovel.ƒS.Character.show(); //maybe g1 sadface & g2 upset
        await Visualnovel.ƒS.update();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0015);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0016);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0017);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0018);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0019);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0006);
        //maybe g1 upset here as well
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0020);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0021);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0022);
        //maybe sall backscreen for effect here
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0006);
        //deffo both mad here
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl2, text.girl2.G2005);
        //g2 animates away
        await Visualnovel.ƒS.Character.animate(Visualnovel.characters.girl2, Visualnovel.characters.girl2.pose.angry, Visualnovel.animate("outLeft"));
        await Visualnovel.ƒS.update();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0023);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0024);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0009);
        if (Visualnovel.dataForSave.curiosityCounter > 30) {
            //knowledge for truth over 3 or something
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0025);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0026);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0027);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0028);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0010);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0011);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0012);
            Visualnovel.dataForSave.truthseeing = true;
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
        await Visualnovel.ƒS.Animation.show();
        await Visualnovel.ƒS.update();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0029);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0008);
        //fade
        await Visualnovel.ƒS.Location.show();
        await Visualnovel.ƒS.update();
        //muffled rain sfx
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0030);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0031);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0032);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0033);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0034);
        //initiate dream
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.void);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.dream);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0000);
        await Visualnovel.ƒS.Speech.tell("???", "Just as I suspected.");
        await Visualnovel.ƒS.Speech.tell("???", "The ripples seem to make already make waves.");
        await Visualnovel.ƒS.Speech.tell("???", "Well then, you know the drill.");
        //await ƒS.Speech.tell("???", "Well regardless, you know what I wanna hear.");
        //let choice = await ƒS.Menu.getInput(thoughts, "Dreamthoughts1");
        let choice = await Visualnovel.ƒS.Menu.getInput(thoughts, "Dreamthoughts1");
        switch (choice) {
            case thoughts.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD001);
                tempscore = tempscore + 5;
                break;
            case thoughts.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD002);
                tempscore = tempscore + 5;
                break;
        }
        let choice2 = await Visualnovel.ƒS.Menu.getInput(thoughts2, "Dreamthoughts2");
        switch (choice2) {
            case thoughts2.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD003);
                break;
            case thoughts2.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD004);
                tempscore = tempscore + 5;
                break;
            case thoughts2.N2:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD005);
                tempscore = tempscore + 5;
                break;
        }
        let choice3 = await Visualnovel.ƒS.Menu.getInput(thoughts3, "Dreamthoughts3");
        switch (choice3) {
            case thoughts3.C1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD006);
                tempscore = tempscore + 5;
                break;
            case thoughts3.N1:
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.PD007);
                tempscore = tempscore + 5;
                break;
        }
        await Visualnovel.ƒS.Speech.tell("???", "Once again I apprechiate your input.");
        if (tempscore > 12) {
            await Visualnovel.ƒS.Speech.tell("???", "Well well well.");
            await Visualnovel.ƒS.Speech.tell("???", "Even though you have the options of ignorance you stray from it and move further towards the knowledge hidden in the dark.");
            //increase global truth score
        }
        else {
            await Visualnovel.ƒS.Speech.tell("???", "Very well then.");
            await Visualnovel.ƒS.Speech.tell("???", "I'll let you off with just this today.");
        }
        await Visualnovel.ƒS.Speech.tell("???", "It's getting close now.");
        await Visualnovel.ƒS.Speech.tell("???", "Soon you will be ready for a real eye opener.");
        await Visualnovel.ƒS.Speech.tell("???", "Can your- or rather our fragile mind take it?");
        await Visualnovel.ƒS.Speech.tell("???", "The future shall reveal.");
        //await ƒS.Speech.tell("???", "");
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.void);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        Visualnovel.dataForSave.curChapter = 6;
        Visualnovel.dataForSave.curiosityCounter = Visualnovel.dataForSave.curiosityCounter + tempscore;
        return "Chapter6";
    }
    Visualnovel.Chapter5 = Chapter5;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter6() {
        console.log("Chapter 6 - Crashing down");
        let text = {
            Narrator: {
                N0000: "...",
                N0001: "It's morning again.",
                N0002: "You might be getting some real answers today.",
                N0003: "After quickly getting ready, you walk to school together.",
                N0004: "After class.",
                N0005: Visualnovel.characters.girl1.name + " Ran off singnaling you to catch up with her.",
                N0006: "She just grins at you from afar.",
                N0007: "You overtake her and rush ahead.",
                N0008: "You spend the rest of the day blissfully with your friends.",
                N0009: "She pulls out her phone and starts calling someone.",
                N1001: "And so the next days went ahead in happiness",
                N1002: "Earie feeling of those dreams still lingered in your mind.",
                N1003: "But over time those too faded away.",
                N1004: "You and your friends together walk towards a happy future.",
                N3001: "And so you wandered off that day.",
                N3002: "With clear feelings in your mind you decided to dedicate more time to finding answers.",
                N3003: "But at what cost?",
                N3004: "Over time your curiosity began festering into obsession.",
                N3005: "Distancing yourself from your friends just to get that one more clue.",
                N3006: "A distance which seemed to become unrepairable.",
                N3007: "The one place all the answers lie, denied you each time.",
                N3008: "Clues were few and leads even fewer.",
                N3009: "A life of searching for an answer that never arrives."
            },
            protagonist: {
                P0000: "...",
                P0001: "It's cloudy today.",
                P0002: "Ok before all that do you know why " + Visualnovel.characters.girl2.name + " wasn't at school today?",
                P0003: "I didn't think it'd be that bad but I'll apologize later.",
                P0004: "Now then for the topic at hand.",
                P1001: "Uhm, alright then.",
                P1002: "You never change do you?",
                P1003: "Well, let's see who will get the best deal.",
                P1004: "The loser has to pay for dinner.",
                P2001: "",
                P2002: "What do you mean by that?",
                P2003: "I kinda had a feeling but overall a change that huge would be impossible not to notice.",
                P2004: "But here I am, having found out practically nothing.",
                P2005: "Alright, so let's go.",
                P2006: "...fine.",
                P2007: "Always!",
                P3001: "B-but you said you would-",
                P3002: "Alright fine.",
                P3003: "If you wont help me I will find this out on my own!",
                P3004: "Leave me be, you've already done enough for today."
            },
            girl1: {
                G0000: "...",
                G0001: "I think she is just not in the best state of mind to look at you.",
                G0002: "That would be for the best.",
                G0003: "I did promise you the day before after all.",
                G0101: "Is this really what you want though?",
                G0102: "I did notice you questioning your current circumstances.",
                G0103: "However whats so wrong with enjoying your life as it is at the moment.",
                G0104: "It hasn't been that different and i'm sure you will get used to it in time.",
                G0105: "Glad to see you are also seeing it that way.",
                G0106: "Now come, there is a limited time offer down at the downtown flea market.",
                G0107: "Let's grab " + Visualnovel.characters.girl2.name + " and go check it out.",
                G0108: "Come on, it's the ideal moment so hurry up!",
                G0109: "Hmmmhm, you're on!",
                G0201: "Okay, let's get this over with then.",
                G0202: "That said",
                G0203: "Give me a minute.",
                G0204: "Alright, you with me?",
                G0205: "Ok then.",
                G0206: "To start things off, you are right. There is something unusual going on around, or rather with you.",
                G0207: "What if I told you you really aren't yourself anymore.",
                G0208: "That you've gone through a huge change without realising it.",
                G0209: "The call I made just now was with the hospital you are staying at.",
                G0210: "Once we've gone there again every question should be answered.",
                G0211: "appointments don't work THAT fast you know.",
                G0212: "Wait for tomorrow, ok?",
                G0213: "Just remember, deep down your always you. Ok?",
                G0214: "Well thats relieving to hear.",
                G0215: "But for now I got some work left to do.",
                G0216: "Cya tomorrow you dunderhead~",
                G0301: "You know what?",
                G0302: "After thinking about it some more I refuse!",
                G0303: "Everything seemed so fine these last couple of days.",
                G0304: "I'm not letting this get ruined.",
                G0305: "No I've changed my mind.",
                G0306: "I'm not letting the "
            }
        };
        let thoughts = {
            C1: "You have a point.",
            C2: "How could I accept this!"
        };
        let tempscore = 0;
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.homeDay);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0003);
        //fade
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.hallway);
        await Visualnovel.ƒS.update(Visualnovel.transition.triangle.duration, Visualnovel.transition.triangle.alpha, Visualnovel.transition.triangle.edge);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0003);
        if (Visualnovel.dataForSave.curiosityCounter >= 40 && Visualnovel.dataForSave.truthseeing == true) { //statcheck
            return "Chapter7";
        }
        else {
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0000);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0101);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0102);
            let impchoice = await Visualnovel.ƒS.Menu.getInput(thoughts, "Confrontation");
            switch (impchoice) { //choose your good or bad ending, stats wont matter here... maybe truthseeing does
                case thoughts.C1:
                    await Visualnovel.ƒS.Location.show(Visualnovel.locations.void);
                    await Visualnovel.ƒS.update();
                    //fade
                    await Visualnovel.ƒS.Speech.tell("???", "So thats the life you chose.");
                    await Visualnovel.ƒS.Speech.tell("???", "Just continuing on in blissfull ignorance.");
                    await Visualnovel.ƒS.Speech.tell("???", "How disappointing.");
                    await Visualnovel.ƒS.Speech.tell("???", "...");
                    await Visualnovel.ƒS.Speech.tell("???", "However...");
                    await Visualnovel.ƒS.Speech.tell("???", "This might work out in the end.");
                    await Visualnovel.ƒS.Speech.tell("???", "...");
                    await Visualnovel.ƒS.Speech.tell("???", "As long as you will continue walking on this path.");
                    await Visualnovel.ƒS.Speech.tell("???", "Because I will always be here. Lurking, waiting.");
                    Visualnovel.dataForSave.Ending = 1;
                    //break;
                    return "Ending";
                case thoughts.C2:
                    await Visualnovel.ƒS.Speech.tell("???", "So thats the life you chose.");
                    await Visualnovel.ƒS.Speech.tell("???", "...");
                    await Visualnovel.ƒS.Speech.tell("???", "A interesting outcome.");
                    await Visualnovel.ƒS.Speech.tell("???", "Looking so desperately for a truth always just an armslength away.");
                    await Visualnovel.ƒS.Speech.tell("???", "Discarding everything for just that one clue which would reveal it all.");
                    await Visualnovel.ƒS.Speech.tell("???", "Will this path lead you towards joy or ruin I wonder.");
                    await Visualnovel.ƒS.Speech.tell("???", "Regardless, I shall follow this path along with you.");
                    await Visualnovel.ƒS.Speech.tell("???", "After all, I'm already a part of you now.");
                    await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, "You hear a gentle laugh before everything fades away.");
                    Visualnovel.dataForSave.Ending = 2;
                    //break;
                    return "Ending";
                default:
                    await Visualnovel.ƒS.Speech.tell("???", "...");
                    await Visualnovel.ƒS.Speech.tell("???", "You are not supposed to be here.");
                    Visualnovel.dataForSave.Ending = 5;
                    return "Ending";
            }
        }
    }
    Visualnovel.Chapter6 = Chapter6;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Chapter7() {
        console.log("Chapter 7 - Moving foreward");
        let text = {
            Narrator: {
                N0000: "...",
                N0001: "Alright, today is the day.",
                N0002: "It's very foggy today.",
                N0003: "You quickly eat breakfast and go to school with " + Visualnovel.characters.girl1.name + ".",
                N0004: "You couldn't concentrate at all.",
                N0005: "You two head to " + Visualnovel.characters.girl2.name + "s place.",
                N0006: "After you were able to make up and had some fun, you and " + Visualnovel.characters.girl1.name + " decide to head to the hospital.",
                N0007: "The fog hasn't subsided yet.",
                N0008: "You two make your way inside.",
                N0009: "After meeting up with the doctor and explaining the situation, he leads me and " + Visualnovel.characters.girl1.name + " towards an elevator, which was revealed in a operating room after the doctor typed a password into an out of place keypad at the corner of the wall.",
                N0010: "As soon as the elevator door swing open I was greeted by a sight I never thought I would ever see.",
                N1001: "A long hallway streches into the distance filled with cold lights, high tech machinery and a smell of ozone.",
                N1002: "After a while we stop before a room.",
                N1003: "Upon entring the room I notice the huge amount of bioligy eqipment and that this room resembles more a control room than anything else.",
                N1004: "I explained the situation with my dreams.",
                N1005: "The doctor goes to the computer to pull up what looks to be like a file of a patient.",
                N1006: "I notice a familiar name on that file.",
                N3001: "With a lighter mood you and " + Visualnovel.characters.girl1.name + " leave the hospital and walk home with a relaxed yet heavy mood."
            },
            protagonist: {
                P0000: "...",
                P0001: "I feel like whatever was happening in my dreams was somehow pushing me to do this stuff.",
                P0002: "Now then, no time to waste.",
                P0003: "Well it was fine, only one day can't be that bad.",
                P0004: "Now then, I believe you have to take the lead now.",
                P0005: "Oh, really?",
                P0006: "Ah, thats true.",
                P0007: "Well, let's be off then.",
                P0008: "I've made my choice.",
                P0009: "I want to know what happened.",
                P0010: "Hey " + Visualnovel.characters.girl1.name + " how are you so uninterrested by this?",
                P0011: "Ok gacha.",
                P1001: "What in the god damn.",
                P1002: "Why does a place like this exist below a hospital?",
                P1003: "The brain? Is it ok for you to tell me all this?",
                P1004: "Ok, point made.",
                P1005: "It was that bad?",
                P1006: "So then how am I here perfectly healthy?",
                P1007: "W-what the-",
                P1008: "But that's impossible!",
                P1009: "When I looked into mirrors I looked like my normal old self!",
                P1010: "That at least explains how I was so fit after a month of just laying in bed.",
                P1011: "But overwriting brains?",
                P1012: "Isn't that dangerous?",
                P1013: "...!",
                P1014: "My dreams!",
                P1015: "Come to think of it, who am I now physically speaking?",
                P1016: "This is quite something to take in...",
                P1017: "*My head begins to hurt*",
                P1018: "Compatabillity?",
                P1019: Visualnovel.characters.friend.name + "'s file?!?",
                P2001: "Wha-What is this?",
                P2002: "But then all those dreams and my curiosity.",
                P2003: "Were they truely mine?",
                P2004: "Or were they...",
                P2005: "So that means...",
                P2006: "!!!",
                P2007: "*A sharp paint is rushing through my head!*",
                P2008: "N-nO... t-tHiS IsN-n't rEaL...",
                P2009: "ThIs-S iS nOtHinG MoRe ThAn a b-BaD dReAM!!",
                P2010: "*Everything becomes blurry.*",
                P2011: "*I can only hear the faint voices of " + Visualnovel.characters.girl1.name + " and a doctor before I lose conciousness...*",
                P3001: "T-This is so much to take in at once...",
                P3002: "*Ughh* I don't know quite yet.",
                P3003: "However I am sure of one thing.",
                P3004: "We are one now.",
                P3005: "In a way I'm now responsible for living two lives now.",
                P3006: "This will be hard in many ways, but I think that's what made me compatible with him.",
                P3007: "Even so I believe this is the right choice.",
                P3008: "I'd apprechiate than...",
                P3009: "Does this mean she was only so nice cause I have his body now?"
            },
            girl1: {
                G0000: "...",
                G0001: "Wait till they bring up this class' stuff in the next test.",
                G0002: "Yeah, i'm aware.",
                G0003: "However, we must wait till evening because during the day they would be too busy.",
                G0004: "Yeah. Until then, let's go and visit" + Visualnovel.characters.girl2.name + ".",
                G0005: "There are still thing you have to set right you know~",
                G0006: "I think I already know your answer but i will ask you one last time.",
                G0007: "Are you sure you want to know everything?",
                G0008: "You can still walk away from this you know?",
                G0009: "Ok, then let's go in.",
                G0010: "I've been here a couple of times around the time the accident happened, so I got used to it.",
                G1001: "You see...",
                G1002: "You remember that you were not the only one involved in the accident?",
                G1003: "After you, a couple of others were hit as well.",
                G1004: "And one of those victims became your body.",
                G1005: "There's more.",
                G1006: "The other victims besides you all had fewer injuries than you, all except one.",
                G1007: "He recieved an injury to his head which was so severe ... that his brain clinically died.",
                G1008: "With his body recieving minor injuries and you on the brink of death, it was decided to implant you into his body.",
                G1009: "The compatabillity was good.",
                G1010: "It was that or death...",
                G1011: "Doctor, could you now pull up the file?",
                G2001: "H-Hey what going on?",
                G2002: "Are you feeling ok?",
                G2003: "N-No... not again...",
                G3001: "I can imagine.",
                G3002: "Now after knowing what happened, what will you do?",
                G3003: "Are you sure this is how you want this to be?",
                G3004: "You have this burdon forced upon you with no say in the matter and you still want to go down this path?",
                G3005: "*Sigh* Very well, me and " + Visualnovel.characters.girl2.name + " will try to ease it in any way we can. We are one group after all.",
                G3006: "Really? That's where your mind is right now?"
            },
            friend: {
                F0001: "That's right.",
                F0002: "They were mine.",
                F0003: "Or rather a spectre of what you though what was me.",
                F0004: "I'm the residue of his consience.",
                F0005: "And now I've gotten you exactly where I want to have you.",
                F0006: "You see, I simply did not do this just to help you.",
                F0007: "We may are now one in body but in soul we are apart.",
                F0008: "Because of your subconciousness, my attitude became more positive and my thought more blurred.",
                F0009: "But because you got so involved into uncovering the mystery you set me free.",
                F0010: "I'm dead now and I want my soul to rest.",
                F0011: "But that can't happen with this little piece of me which exists within you.",
                F0012: "So I'll simply make sure you never wake up.",
                F0013: "You won't die but you wont live either.",
                F0014: "I'm sorry for being selfish but I never really was the clever one anyways.",
                F0015: "Sleep now my friend."
            },
            doctor: {
                D0001: "It is a experimental government research hospital.",
                D0002: "Due to the rapid advancements in technology the government tasked us to experiment with diverse complex operations regarding the human brain.",
                D0003: "Technically not, however due to your friends persistence and some scientific curiosity I've decided to take responsibillity for this.",
                D0004: "As long as the higher ups don't snoop around and you don't talk about this, this is pretty harmless.",
                D0005: "And if you do decide to talk we will sue you into oblivion.",
                D0006: "We're here.",
                D0007: "Alright. Now that we're here let's talk business.",
                D0008: "First off, your accident was much worse than you think.",
                D0009: "It was so bad that you had to spen the rest of your life hooked into machines while paralysed from the neck down.",
                D0010: "We had to act fast since with the amount of damage to your organs you would've died within 4 days.",
                D0011: "As you recall we specialise in the human brain.",
                D0012: "In order to keep you alive we had to transplant your brain and your conciousness into another body.",
                D0013: "That's because we overwrote some data in your brain so that it will always show you your own body upon seeing the new body.",
                D0014: "It sure is.",
                D0015: "We still are not aware of the side effects it causes so we were hoping you would enlighten us.",
                D0016: "Your dreams?",
                D0017: "I see.",
                D0018: "This might be a result of the leftover conciousness from the donor body.",
                D0019: "This might be better explained by your friend over here.",
                D2001: "Oh this isn't good, he is experiencing a dissonance of his brain with his body!",
                D2002: "If we don't move quickly his live will be in danger!"
            }
        };
        let safetychoice = {
            Proceed: "I want to know the truth.",
            Divert: "On second thought."
        };
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.homeDay);
        await Visualnovel.ƒS.update();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0003);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.hallway);
        await Visualnovel.ƒS.update();
        //fade
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0000);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0008);
        //safetychoice to ending 1 or 2 depending on score
        let schoice = await Visualnovel.ƒS.Menu.getInput(safetychoice, "safetyChoice");
        if (schoice == safetychoice.Divert) {
            if (Visualnovel.dataForSave.curiosityCounter > 35) {
                return "Ending";
            }
            return "Ending";
        }
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0008);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.void); //fade black
        await Visualnovel.ƒS.update();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P0011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0009);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.lab); //the lab
        await Visualnovel.ƒS.update();
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N1001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1002);
        //await ƒS.Speech.tell(characters.girl1, text.girl1.G1001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N1002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N1003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0012);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0013);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1012);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0014);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0015);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1013);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1014);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0016);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N1004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0017);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0018);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1015);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D0019);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G1001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G1002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G1003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G1004);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1016);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G1005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G1006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G1007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G1008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1017);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G1009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1018);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G1010);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G1011);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N1005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N1006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P1019);
        //if tempscore is maxed ending 4 if not ending 3
        if (Visualnovel.dataForSave.curiosityCounter == 50) {
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P2001);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P2002);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P2003);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P2004);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0001);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0002);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0003);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0004);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0005);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0006);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0007);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0008);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0009);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0010);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0011);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0012);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0013);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P2005);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P2006);
            //sad face
            await Visualnovel.ƒS.Character.show(Visualnovel.characters.girl1, Visualnovel.characters.girl1.pose.upset, Visualnovel.customPositions.slightleft);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G2001);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G2002);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0014);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.friend, text.friend.F0015);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P2007);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P2008);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P2009);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P2010);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D2001);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.doctor, text.doctor.D2002);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G2003);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P2011);
            Visualnovel.dataForSave.Ending = 0;
            return "Ending";
        }
        else {
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P3001);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G3001);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G3002);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P3002);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P3003);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P3004);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P3005);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G3003);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G3004);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P3006);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P3007);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G3005);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P3008);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.protagonist, text.protagonist.P3009);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.girl1, text.girl1.G3006);
            await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.narrator, text.Narrator.N3001);
            Visualnovel.dataForSave.Ending = 0;
            return "Ending";
        }
    }
    Visualnovel.Chapter7 = Chapter7;
})(Visualnovel || (Visualnovel = {}));
var Visualnovel;
(function (Visualnovel) {
    async function Endings() {
        console.log("You have reached an ending");
        let text = {
            game: {
                game001: "It appears you have reached...",
                game002: "...an ending.",
                game003: "...",
                game004: "Was your adventure the one you wished for?",
                game101: "Choosing to live life happily even when the truth goes undiscovered?",
                game102: "In the end only you can decide that.",
                game201: "Choosing to dedicate your life to searching for the truth even when discarding the things close to you?",
                game202: "Not a good way to live if you ask me.",
                game301: "Choosing to know the truth?",
                game302: "Even if it means you have to carry this heavy burdon with you now?",
                game401: "Choosing to know the truth, only for you to deny it?",
                game402: "So eager to know the truth only for it to become your downfall.",
                game501: "*slurp* *slurp*",
                game502: "Ahhhhh, nothing like a good bubble tea while watching projects desintigrate themselfs.",
                game503: "!!!",
                game504: "W-What are you doing here?",
                game505: "This isn't an ending! How did you get here!?!",
                game506: "Ahh, I get it.",
                game507: "You messed around with the games savefile and skipped or broke the sections which check wich ending you got.",
                game508: "Aha. Ok. No it's fine. I ain't mad that you meddled around with my deepest parts just to get here. No not at all.",
                game509: "...you could've at least invited me out to dinner you know.",
                game510: "But eh, fuck it. Since you got here take this.",
                game511: "*insert scribbeling noises here*",
                game512: "There ya go.",
                game513: "You achievement of unlocking the 'Why are you here' ending.",
                game514: "Now get out of my sight and play the game the way it's intended to you knobhead.",
                game005: "Now then. The game is over now soo...",
                game006: "May we meet again someday.",
                game007: "Hopefully under a fully realised version of this story.",
                game008: "... and maybe less janky mechanics.",
                game009: "Now then farewell, see you, etc. etc.",
                game010: "Now get outta here. :)"
            }
        };
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game001);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game002);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game003);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game004);
        switch (Visualnovel.dataForSave.Ending) {
            case 1: //ignorance is bliss ending
                await Visualnovel.ƒS.Location.show(Visualnovel.locations.ending1);
                await Visualnovel.ƒS.update();
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game101);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game102);
                await Visualnovel.ƒS.Location.show(Visualnovel.locations.beachNight); //update this
                break;
            case 2: //forever searching ending
                await Visualnovel.ƒS.Location.show(Visualnovel.locations.ending2);
                await Visualnovel.ƒS.update();
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game201);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game202);
                await Visualnovel.ƒS.Location.show(Visualnovel.locations.beachNight); //update this
                break;
            case 3: //the truth ending (body accepts the soul)
                await Visualnovel.ƒS.Location.show(Visualnovel.locations.ending3);
                await Visualnovel.ƒS.update();
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game301);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game302);
                await Visualnovel.ƒS.Location.show(Visualnovel.locations.beachNight); //update this
                break;
            case 4: //the abyss ending (body refuses the soul)
                await Visualnovel.ƒS.Location.show(Visualnovel.locations.ending4);
                await Visualnovel.ƒS.update();
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game401);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game402);
                await Visualnovel.ƒS.Location.show(Visualnovel.locations.beachNight); //update this
                break;
            default:
                await Visualnovel.ƒS.Location.show(Visualnovel.locations.ending5);
                await Visualnovel.ƒS.update();
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game501); //what the fuq are you doing here ending
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game502);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game503);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game504);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game505);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game506);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game507);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game508);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game509);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game510);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game511);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game512);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game513);
                await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game514);
                await Visualnovel.ƒS.Location.show(Visualnovel.locations.beachNight); //update this
        }
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game005);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game006);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game007);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game008);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game009);
        await Visualnovel.ƒS.Speech.tell(Visualnovel.characters.game, text.game.game010);
        await Visualnovel.ƒS.Location.show(Visualnovel.locations.ending4);
        await Visualnovel.ƒS.update();
    }
    Visualnovel.Endings = Endings;
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
            duration: 2,
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
            background: "Assets/Images/Backgrounds/hospital-room-night3alt.jpg"
        },
        hRoomNight: {
            name: "hospital room night",
            background: "Assets/Images/Backgrounds/hospital-room-night3.jpg"
        },
        homeDay: {
            name: "Bedroom",
            background: "Assets/Images/Backgrounds/Room3_new.jpg"
        },
        homeNight: {
            name: "Living room",
            background: "Assets/Images/Backgrounds/Room_Night1big.jpg"
        },
        lab: {
            name: "Underground lab",
            background: "Assets/Images/Backgrounds/Lab.jpg"
        },
        //lab2: {},
        school: {
            name: "school",
            background: "Assets/Images/Backgrounds/school.jpg"
        },
        classroom: {
            name: "classroom",
            background: "Assets/Images/Backgrounds/Classroombig.jpg"
        },
        hallway: {
            name: "School hallway",
            background: "Assets/Images/Backgrounds/school_hallway.jpg"
        },
        town: {
            name: "Town day",
            background: "Assets/Images/Backgrounds/town.jpg"
        },
        festival: {
            name: "festival",
            background: "Assets/Images/Backgrounds/festival.jpg"
        },
        void: {
            name: "nothing",
            background: "Assets/Images/Backgrounds/black.png"
        },
        ending1: {
            name: "ending1",
            background: "Assets/Images/Backgrounds/Ending1.png"
        },
        ending2: {
            name: "ending2",
            background: "Assets/Images/Backgrounds/Ending2.png"
        },
        ending3: {
            name: "ending3",
            background: "Assets/Images/Backgrounds/Ending3.png"
        },
        ending4: {
            name: "ending4",
            background: "Assets/Images/Backgrounds/Ending4.png"
        },
        ending5: {
            name: "ending5",
            background: "Assets/Images/Backgrounds/Ending0-2.png"
        },
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
                angry: "Assets/Images/Characters/aisaka_angry.png",
                happy: "Assets/Images/Characters/aisaka_happy.png",
                upset: "Assets/Images/Characters/aisaka_upset.png"
            }
        },
        girl2: {
            name: "Girl2 placeholder",
            origin: Visualnovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Assets/Images/Characters/kohana_angry.png",
                happy: "Assets/Images/Characters/kohana_happy.png",
                upset: "Assets/Images/Characters/kohana_upset.png"
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
    Visualnovel.customPositions = {
        slightleft: new FudgeStory.Position(-150, -540),
        farleft: new FudgeStory.Position(-1000, -540),
        slightright: new FudgeStory.Position(250, -540),
        farright: new FudgeStory.Position(1000, -540),
        backgroundleft: new FudgeStory.Position(-100, -200),
        slscare: new FudgeStory.Position(-150, -500)
    };
    Visualnovel.animations = {
        outLeft: "outLeft",
        outRight: "outRight",
        inLeft: "inLeft",
        inRight: "inRight",
        goInLeft: "goInLeft",
        goInRight: "goInRight",
        comeCloser: "comeCloser",
        stepBack: "stepBack",
        scare: "scare",
        scareBack: "scareBack"
    };
    function animate(_animation) {
        switch (_animation) {
            case Visualnovel.animations.outLeft:
                return {
                    start: { translation: Visualnovel.customPositions.slightleft },
                    end: { translation: Visualnovel.customPositions.farleft },
                    duration: 1,
                    playmode: Visualnovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Visualnovel.animations.outRight:
                return {
                    start: { translation: Visualnovel.customPositions.slightright },
                    end: { translation: Visualnovel.customPositions.farright },
                    duration: 1,
                    playmode: Visualnovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Visualnovel.animations.inLeft:
                return {
                    start: { translation: Visualnovel.customPositions.farleft },
                    end: { translation: Visualnovel.customPositions.slightleft },
                    duration: 1,
                    playmode: Visualnovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Visualnovel.animations.inRight:
                return {
                    start: { translation: Visualnovel.customPositions.farright },
                    end: { translation: Visualnovel.customPositions.slightright },
                    duration: 1,
                    playmode: Visualnovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Visualnovel.animations.goInLeft: //placerholder
                return {
                    start: { translation: Visualnovel.customPositions.farleft },
                    end: { translation: Visualnovel.customPositions.slightleft },
                    duration: 1,
                    playmode: Visualnovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Visualnovel.animations.goInRight: //placeholder
                return {
                    start: { translation: Visualnovel.customPositions.farright },
                    end: { translation: Visualnovel.customPositions.slightright },
                    duration: 1,
                    playmode: Visualnovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Visualnovel.animations.comeCloser:
                return {
                    start: {},
                    end: {},
                    duration: 1,
                    playmode: Visualnovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Visualnovel.animations.stepBack:
                return {
                    start: {},
                    end: {},
                    duration: 1,
                    playmode: Visualnovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Visualnovel.animations.scare:
                return {
                    start: { translation: Visualnovel.customPositions.slightleft },
                    end: { translation: Visualnovel.customPositions.slscare },
                    duration: 0.3,
                    playmode: Visualnovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Visualnovel.animations.scareBack:
                return {
                    start: { translation: Visualnovel.customPositions.slscare },
                    end: { translation: Visualnovel.customPositions.slightleft },
                    duration: 0.3,
                    playmode: Visualnovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
        }
    }
    Visualnovel.animate = animate;
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
        truthseeing: false,
        curChapter: 1,
        Ending: 0
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
            { scene: Visualnovel.Chapter1, name: "Chapter1", id: "Chapter1" },
            { scene: Visualnovel.Chapter2, name: "Chapter2", id: "Chapter2" },
            { scene: Visualnovel.Chapter3, name: "Chapter3", id: "Chapter3" },
            { scene: Visualnovel.Chapter4, name: "Chapter4", id: "Chapter4" },
            { scene: Visualnovel.Chapter5, name: "Chapter5", id: "Chapter5" },
            { scene: Visualnovel.Chapter6, name: "Chapter6", id: "Chapter6" },
            { scene: Visualnovel.Chapter7, name: "Chapter7", id: "Chapter7" },
            { scene: Visualnovel.Endings, name: "Ending", id: "Ending" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Visualnovel.dataForSave = Visualnovel.ƒS.Progress.setData(Visualnovel.dataForSave, uiElement);
        // start the sequence
        Visualnovel.ƒS.Progress.go(scenes);
    }
})(Visualnovel || (Visualnovel = {}));
//# sourceMappingURL=Clearvision.js.map