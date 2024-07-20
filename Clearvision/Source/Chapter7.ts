namespace Visualnovel {
    export async function Chapter7(): ƒS.SceneReturn {
      console.log("Chapter 7 - Moving foreward");
      characters.protagonist.name = dataForSave.nameProtagonist;
      let text = {
        Narrator: {
          N0000: "...",
          N0001: "Alright, today is the day.",
          N0002: "It's very foggy today.",
          N0003: "You quickly eat breakfast and go to school with " + characters.girl1.name + ".",
          N0004: "You couldn't concentrate at all.",
          N0005: "You two head to " + characters.girl2.name + "s place.",
          N0006: "After you were able to make up and had some fun, you and " + characters.girl1.name + " decide to head to the hospital.",
          N0007: "The fog hasn't subsided yet.",
          N0008: "You two make your way inside.",
          N0009: "After meeting up with the doctor and explaining the situation, he leads me and " + characters.girl1.name + " towards an elevator, which was revealed in an operating room after the doctor typed a password into an out of place keypad at the corner of the wall.", 
          N0010: "As soon as the elevator door swing open I was greeted by a sight I never thought I would ever see.",
          N1001: "A long hallway streches into the distance filled with cold lights, high tech machinery and a smell of ozone.",
          N1002: "After a while we stop before a room.",
          N1003: "Upon entring the room I notice the huge amount of biology equipment and that this room resembles more a control room than anything else.",
          N1004: "I explained the situation with my dreams.",
          N1005: "The doctor goes to the computer to pull up what looks to be like a file of a patient.",
          N1006: "I notice a familiar name on that file.",
          N3001: "With a lighter mood you and "+ characters.girl1.name + " leave the hospital and walk home with a relaxed yet heavy mood."
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
          P0010: "Hey " + characters.girl1.name + " how are you so uninterested by this?",
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
          P1017: "*My head begins to hurt.*",
          P1018: "Compatibility?",
          P1019: characters.friend.name + "'s file?!?",
          P2001: "Wha-What is this?",
          P2002: "But then all those dreams and my curiosity.",
          P2003: "Were they truly mine?",
          P2004: "Or were they...",
          P2005: "So that means...",
          P2006: "!!!",
          P2007: "*A sharp paint is rushing through my head!*",
          P2008: "N-nO... t-tHiS IsN-n't rEaL...",
          P2009: "ThIs-S iS nOtHinG MoRe ThAn a b-BaD dReAM!!",
          P2010: "*Everything becomes blurry.*",
          P2011: "*I can only hear the faint voices of " + characters.girl1.name + " and a doctor before I lose consciousness...*",
          P3001: "T-This is so much to take in at once...",
          P3002: "*Ughh* I don't know quite yet.",
          P3003: "However I am sure of one thing.",
          P3004: "We are one now.",
          P3005: "In a way I'm now responsible for living two lives now.",
          P3006: "This will be hard in many ways, but I think that's what made me compatible with him.",
          P3007: "Even so I believe this is the right choice.",
          P3008: "I'd apprechiate that...",
          P3009: "Does this mean she was only so nice cause I have his body now?"
        },
        girl1: {
          G0000: "...",
          G0001: "Wait till they bring up this class' stuff in the next test.",
          G0002: "Yeah, i'm aware.",
          G0003: "However, we must wait till evening because during the day they would be too busy.",
          G0004: "Yeah. Until then, let's go and visit " + characters.girl2.name + ".",
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
          G1007: "He received an injury to his head which was so severe ... that his brain clinically died.",
          G1008: "With his body recieving minor injuries and you on the brink of death, it was decided to implant you into his body.",
          G1009: "The compatibility was good, so they went ahead with the operation immeteatly.",
          G1010: "It was that or death...",
          G1011: "Doctor, could you now pull up the file?",
          G2001: "H-Hey what going on?",
          G2002: "Are you feeling ok?",
          G2003: "N-No... not again...",
          G3001: "I can imagine.",
          G3002: "Now after knowing what happened, what will you do?",
          G3003: "Are you sure this is how you want this to be?",
          G3004: "You have this burdon forced upon you with no say in the matter and you still want to go down this path?",
          G3005: "*Sigh* Very well, me and " + characters.girl2.name + " will try to ease it in any way we can. We are one group after all.",
          G3006: "Really? That's where your mind is right now?"
        },
        friend: {
          F0001: "That's right.",
          F0002: "They were mine.",
          F0003: "Or rather a spectre of what you though what was me.",
          F0004: "I'm the residue of his conscience.",
          F0005: "And now I've gotten you exactly where I want to have you.",
          F0006: "You see, I simply did not do this just to help you.",
          F0007: "We may are now one in body but in soul we are apart.",
          F0008: "Because of your subconsciousness, my attitude became more positive and my thought more blurred.",
          F0009: "But because you got so involved into uncovering the mystery you set me free.",
          F0010: "I'm dead now and I want my soul to rest.",
          F0011: "But that can't happen with this little piece of me which exists within you.",
          F0012: "So I'll simply make sure you never wake up.",
          F0013: "You won't die but you wont live either.",
          F0014: "I'm sorry for being selfish but I never really was the clever one anyways.",
          F0015: "Sleep now my friend."
        },
        doctor: {
          D0001: "It is an experimental government research hospital.",
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
          D0012: "In order to keep you alive we had to transplant your brain and your consciousness into another body.",
          D0013: "That's because we overwrote some data in your brain so that it will always show you your own body upon seeing the new body.",
          D0014: "It sure is.",
          D0015: "We still are not aware of the side effects it causes so we were hoping you would enlighten us.",
          D0016: "Your dreams?",
          D0017: "I see.",
          D0018: "This might be a result of the leftover consciousness from the donor body.",
          D0019: "This might be better explained by your friend over here.",
          D2001: "Oh this isn't good, he is experiencing a dissonance of his brain with his body!",
          D2002: "If we don't move quickly his live will be in danger!"
        }
      }
      let safetychoice = {
        Proceed: "I want to know the truth.",
        Divert: "On second thought."
      };

      await ƒS.Location.show(locations.homeDay);
      await ƒS.update(transition.dreamExit.duration, transition.dreamExit.alpha, transition.dreamExit.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0000);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0002);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
      await ƒS.Location.show(locations.hallway);
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      //fade
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0003);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0004);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0002);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0003);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0005);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0004);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0005);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0006);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0007);
      //fade to black
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0005);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0006);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0007);
      //fade to hospital
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0006);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0007);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0008);

      //safetychoice to ending 1 or 2 depending on score
      /*let schoice = await ƒS.Menu.getInput(safetychoice, "safetyChoice");
      if (schoice == safetychoice.Divert) {
        if (dataForSave.curiosityCounter > 35) {
          return "Ending";
        }
          return "Ending";
      }*/
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0008);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0009);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0009);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0008);
      await ƒS.Location.show(locations.void); //fade black
      await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0010);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0010);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0011);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0009);
      await ƒS.Location.show(locations.lab); //the lab
      await ƒS.update(transition.side.duration, transition.side.alpha, transition.side.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N0010);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N1001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1002);
      //await ƒS.Speech.tell(characters.girl1, text.girl1.G1001);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0001);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0002);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1003);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0003);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0004);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0005);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1004);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N1002);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0006);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N1003);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0007);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0008);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0009);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1005);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0010);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1006);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0011);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0012);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1007);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1008);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1009);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0013);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1010);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1011);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1012);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0014);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0015);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1013);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1014);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0016);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N1004);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0017);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0018);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1015);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0019);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G1001);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G1002);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G1003);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G1004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1016);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G1005);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G1006);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G1007);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G1008);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1017);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G1009);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1018);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G1010);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G1011);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N1005);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.N1006);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P1019);
      //if tempscore is maxed ending 4 if not ending 3
      if (dataForSave.curiosityCounter == 80){
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2001);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2002);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2003);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2004);
        await ƒS.Speech.tell(characters.friend, text.friend.F0001);
        await ƒS.Speech.tell(characters.friend, text.friend.F0002);
        await ƒS.Speech.tell(characters.friend, text.friend.F0003);
        await ƒS.Speech.tell(characters.friend, text.friend.F0004);
        await ƒS.Speech.tell(characters.friend, text.friend.F0005);
        await ƒS.Speech.tell(characters.friend, text.friend.F0006);
        await ƒS.Speech.tell(characters.friend, text.friend.F0007);
        
        await ƒS.Speech.tell(characters.friend, text.friend.F0008);
        await ƒS.Speech.tell(characters.friend, text.friend.F0009);
        await ƒS.Speech.tell(characters.friend, text.friend.F0010);
        await ƒS.Speech.tell(characters.friend, text.friend.F0011);
        await ƒS.Speech.tell(characters.friend, text.friend.F0012);
        await ƒS.Speech.tell(characters.friend, text.friend.F0013);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2005);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2006);
        //sad face
        await ƒS.Character.show(characters.girl1, characters.girl1.pose.upset, customPositions.slightleft);
        await ƒS.update();
        await ƒS.Speech.tell(characters.girl1, text.girl1.G2001);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G2002);
        await ƒS.Speech.tell(characters.friend, text.friend.F0014);
        await ƒS.Speech.tell(characters.friend, text.friend.F0015);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2007);

        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2008);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2009);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2010);
        await ƒS.Speech.tell(characters.doctor, text.doctor.D2001);
        await ƒS.Speech.tell(characters.doctor, text.doctor.D2002);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G2003);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P2011);
        dataForSave.Ending = 4;
        await ƒS.Character.hide(characters.girl1);
        return "Ending";
      } else {
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3001);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G3001);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G3002);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3002);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3003);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3004);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3005);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G3003);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G3004);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3006);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3007);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G3005);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3008);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.P3009);
        await ƒS.Speech.tell(characters.girl1, text.girl1.G3006);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N3001);
        dataForSave.Ending = 3;
        await ƒS.Character.hide(characters.girl1);
        return "Ending";
      }
    }
  }