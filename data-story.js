// ============================================================
// DEAD GORGEOUS — STORY & DIALOGUE CONTENT
// Client dialogue trees, Café/location scenes, Quartett opponent
// lines, calendar/event text, achievements, and other narrative
// content. Loaded after data-cards.js (some content, like Quartett
// opponent pools, references DECK) and before the main engine script.
// ============================================================

const CAFE_SNIPPETS = [
  "Two regulars in the corner are arguing about whether a courier they know really has a shortcut through tunnels that don't exist anymore.",
  "Someone at the next table insists they once attended one of the Afterking's banquets — the details change every time they tell it.",
  "A tiny woman dressed entirely in black hems a stranger's sleeve without being asked, then vanishes before anyone can thank her.",
  "A scratched-out invitation sits abandoned on the counter. The name that used to be there might have been royal.",
  "Someone's watering a plant that has no business blooming this far from the sun. They don't explain, and nobody asks.",
];

const CLIENTS = [
  {
    name: "Margo", color: "#3a3a3a", portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_margo.png",
    greeting: "“You're the replacement.”", // [bible] her opening line, verbatim
    preferences: [
      pref("color", "Black"), pref("color", "Red"), pref("style", "Elegant"),
      pref("style", "Classic"), pref("fit", "Fitted"), pref("style", "Bold"),
    ],
    combo: { colors: ["Black", "Red"], bonus: 8 },
    briefs: [
      {
        dialogue: [
          { who: "MARGO", t: "Black. Fitted. Nothing apologetic." },
          { who: "YOU", t: "Good morning to you too.", skipAfterStage: true },
          { who: "MARGO", t: "Was that unclear?" },
        ],
        want: [req("color", "Black"), req("fit", "Fitted")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "Elegant. But don't make it polite." },
          { who: "YOU", t: "There's a difference?" },
          { who: "MARGO", t: "A considerable one." },
        ],
        want: [req("style", "Elegant"), req("style", "Daring")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "I'll be at the Castle most of the evening." },
          { who: "YOU", t: "Dinner?" },
          { who: "MARGO", t: "Watching people pretend they enjoy dinner." },
        ],
        want: [req("style", "Classic"), req("color", "Black")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "No black today." },
          { who: "YOU", t: "Are you feeling alright?" },
          { who: "MARGO", t: "Don't make me regret saying it." },
        ],
        want: [req("style", "Elegant"), req("fit", "Regular")], exclude: [{ attr: "color", value: "Black" }],
      },
      {
        dialogue: [
          { who: "MARGO", t: "The Queen is receiving people tonight." },
          { who: "YOU", t: "And you're invited?" },
          { who: "MARGO", t: "Everyone is invited. Very few are wanted." },
        ],
        want: [req("style", "Elegant"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "Give me something softer." },
          { who: "YOU", t: "You?" },
          { who: "MARGO", t: "You have five seconds to stop enjoying this." },
        ],
        want: [req("style", "Romantic"), req("fit", "Fitted")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "Green." },
          { who: "YOU", t: "Green?" },
          { who: "MARGO", t: "I remember liking it once." },
          { who: "MARGO", t: "Don't ask." },
        ],
        want: [req("color", "Green"), req("style", "Classic")],
        hint: ["Green"],
      },
      {
        dialogue: [
          { who: "MARGO", t: "Apparently I intimidate people." },
          { who: "YOU", t: "Apparently?" },
          { who: "MARGO", t: "Make me approachable." },
          { who: "YOU", t: "That might take more than clothes." },
          { who: "MARGO", t: "Careful." },
        ],
        want: [req("style", "Sweet"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "You've been very predictable lately." },
          { who: "YOU", t: "Me?" },
          { who: "MARGO", t: "Yes. Surprise me." },
        ],
        want: [req("style", "Bold"), req("fit", "Regular")],
        softDirection: "A non-black look is especially appreciated here.",
      },
      {
        dialogue: [
          { who: "MARGO", t: "Romantic." },
          { who: "YOU", t: "Really?" },
          { who: "MARGO", t: "It's a style. Not a confession." },
        ],
        want: [req("style", "Romantic"), req("style", "Daring")],
        hint: ["Red"],
      },
      {
        dialogue: [
          { who: "MARGO", t: "Make expensive look effortless." },
          { who: "YOU", t: "That's annoyingly vague." },
          { who: "MARGO", t: "Good." },
        ],
        want: [rarityReq(), req("style", "Minimal")],
      },
      {
        dialogue: [
          { who: "MARGO", t: "I don't have a brief." },
          { who: "YOU", t: "You always have a brief." },
          { who: "MARGO", t: "I have an opinion. That's different." },
          { who: "MARGO", t: "Show me yours." },
        ],
        playerChoice: true,
      },
    ],
  },
  {
    name: "Juniper", color: "#8fae7a", portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_juniper.png",
    greeting: "“Oh — hello. I wasn't expecting company, but that's rather the theme lately.”", // [voice]
    preferences: [
      pref("color", "Green"), pref("style", "Romantic"), pref("style", "Cozy"),
      pref("style", "Sweet"), pref("fit", "Relaxed"),
    ],
    briefs: [
      {
        dialogue: [
          { who: "JUNIPER", t: "Something soft today. Green, if you have it." },
          { who: "YOU", t: "Garden clothes?" },
          { who: "JUNIPER", t: "Everything is garden clothes if you're determined enough." },
        ],
        want: [req("style", "Romantic"), req("color", "Green")],
        hint: ["Green", "Cozy"],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "Romantic, I think." },
          { who: "YOU", t: "You think?" },
          { who: "JUNIPER", t: "I'm trying not to overthink everything." },
        ],
        want: [req("style", "Romantic"), req("fit", "Relaxed")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "I'm spending the afternoon outside." },
          { who: "YOU", t: "In the garden?" },
          { who: "JUNIPER", t: "Hopefully. Margaret has opinions about who counts as 'outside.'" },
        ],
        want: [req("fit", "Relaxed"), req("style", "Romantic")],
        hint: ["Green"],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "Black." },
          { who: "YOU", t: "That's new." },
          { who: "JUNIPER", t: "I'm going somewhere I'm not supposed to." },
          { who: "YOU", t: "That's also new." },
        ],
        want: [req("color", "Black"), req("style", "Daring")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "There's a gathering in the garden tonight." },
          { who: "YOU", t: "A party?" },
          { who: "JUNIPER", t: "Margaret would be offended if you called it that." },
        ],
        want: [req("style", "Romantic"), req("style", "Elegant")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "Could we avoid green?" },
          { who: "YOU", t: "I didn't know you knew how." },
          { who: "JUNIPER", t: "Neither did I." },
        ],
        want: [req("color", "Blue"), req("style", "Sweet")], exclude: [{ attr: "color", value: "Green" }],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "I want something people notice." },
          { who: "YOU", t: "You normally hide from people noticing." },
          { who: "JUNIPER", t: "Yes. I'm trying something." },
        ],
        want: [req("style", "Bold"), req("fit", "Fitted")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "I have to go to the Castle." },
          { who: "YOU", t: "You sound thrilled." },
          { who: "JUNIPER", t: "I'd rather repot twelve thorn bushes." },
        ],
        want: [req("style", "Elegant"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "Can you make me look… dangerous?" },
          { who: "YOU", t: "You?" },
          { who: "JUNIPER", t: "That reaction is exactly why I'm asking." },
        ],
        want: [req("style", "Daring"), req("color", "Black")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "Pink." },
          { who: "YOU", t: "That sounds more like you." },
          { who: "JUNIPER", t: "Then make the rest not like me." },
        ],
        want: [req("color", "Pink"), req("style", "Cool")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "I keep choosing things that feel safe." },
          { who: "YOU", t: "Do you want safe?" },
          { who: "JUNIPER", t: "Not tonight." },
        ],
        want: [req("style", "Bold"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "JUNIPER", t: "Would you choose?" },
          { who: "YOU", t: "No clues?" },
          { who: "JUNIPER", t: "You've seen me enough by now." },
          { who: "JUNIPER", t: "I'm curious what you see." },
        ],
        playerChoice: true,
      },
    ],
  },
  {
    name: "Ivy", color: "#a13d4c", portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_ivy.png",
    greeting: "“Well hello, stylist. Try to keep up.”", // [voice]
    preferences: [
      pref("color", "Black"), pref("style", "Cool"), pref("style", "Daring"),
      pref("style", "Bold"), pref("fit", "Relaxed"),
    ],
    briefs: [
      {
        dialogue: [
          { who: "IVY", t: "Black. Cool. Easy." },
          { who: "YOU", t: "You always make this sound like a threat." },
          { who: "IVY", t: "Maybe you're just nervous." },
        ],
        want: [req("color", "Black"), req("style", "Cool")],
      },
      {
        dialogue: [
          { who: "IVY", t: "Got deliveries all afternoon." },
          { who: "YOU", t: "Comfortable?" },
          { who: "IVY", t: "Comfortable enough to run." },
          { who: "YOU", t: "From?" },
          { who: "IVY", t: "Next question." },
        ],
        want: [req("fit", "Relaxed"), req("style", "Cool")],
      },
      {
        dialogue: [
          { who: "IVY", t: "Got a delivery after this. Make it dangerous." },
          { who: "YOU", t: "Anything specific?" },
          { who: "IVY", t: "Red, if you've got it." },
        ],
        want: [req("style", "Daring"), req("color", "Red")],
        hint: ["Red"],
      },
      {
        dialogue: [
          { who: "IVY", t: "I need to look respectable." },
          { who: "YOU", t: "Oh, this I have to see." },
          { who: "IVY", t: "Enjoy it while it lasts." },
        ],
        want: [req("style", "Elegant"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "IVY", t: "Delivery to the Castle." },
          { who: "YOU", t: "So?" },
          { who: "IVY", t: "So apparently dropping a package and leaving is 'inappropriate' during a banquet." },
        ],
        want: [req("style", "Elegant"), req("color", "Black")],
      },
      {
        dialogue: [
          { who: "IVY", t: "No black." },
          { who: "YOU", t: "Who are you and what have you done with Ivy?" },
          { who: "IVY", t: "I knew this was a mistake." },
        ],
        want: [req("color", "Blue"), req("style", "Cool")], exclude: [{ attr: "color", value: "Black" }],
      },
      {
        dialogue: [
          { who: "IVY", t: "Something Romantic." },
          { who: "YOU", t: "Excuse me?" },
          { who: "IVY", t: "It's not for a date." },
          { who: "YOU", t: "I didn't say it was." },
          { who: "IVY", t: "Your face did." },
        ],
        want: [req("style", "Romantic"), req("color", "Black")],
        hint: ["Red"],
      },
      {
        dialogue: [
          { who: "IVY", t: "Someone told me I dress like I'm expecting a fight." },
          { who: "YOU", t: "Are you?" },
          { who: "IVY", t: "Usually." },
          { who: "IVY", t: "Make me look friendly." },
        ],
        want: [req("style", "Sweet"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "IVY", t: "Give me something you think I'd hate." },
          { who: "YOU", t: "Why?" },
          { who: "IVY", t: "Maybe I'm getting predictable." },
        ],
        want: [req("style", "Romantic"), req("color", "Pink")],
      },
      {
        dialogue: [
          { who: "IVY", t: "I need to disappear into a crowd tonight." },
          { who: "YOU", t: "That sounds ominous." },
          { who: "IVY", t: "Then stop asking questions." },
        ],
        want: [req("style", "Minimal"), req("color", "Black")],
      },
      {
        dialogue: [
          { who: "IVY", t: "Make me look expensive." },
          { who: "YOU", t: "That's it?" },
          { who: "IVY", t: "And like I didn't spend an hour trying to look expensive." },
        ],
        want: [rarityReq(), req("style", "Cool")],
      },
      {
        dialogue: [
          { who: "IVY", t: "Your choice." },
          { who: "YOU", t: "Seriously?" },
          { who: "IVY", t: "Don't make it weird." },
          { who: "YOU", t: "You giving up control is a little weird." },
          { who: "IVY", t: "And it can end at any moment." },
        ],
        playerChoice: true,
      },
    ],
  },
  {
    name: "Holly", color: "#8ea9c1", portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_holly.png",
    greeting: "“Holly.”", // [bible] — she introduces herself tersely, never over-explains
    preferences: [
      pref("color", "Silver"), pref("color", "White"), pref("color", "Blue"),
      pref("style", "Classic"), pref("style", "Minimal"), pref("fit", "Regular"),
      pref("style", "Armour"),
    ],
    combo: { colors: ["White", "Blue"], bonus: 8 },
    briefs: [
      {
        dialogue: [
          { who: "HOLLY", t: "Simple. Nothing loose." },
          { who: "YOU", t: "Any preference?" },
          { who: "HOLLY", t: "Useful." },
        ],
        want: [req("style", "Minimal"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "Something traditional." },
          { who: "YOU", t: "Silver?" },
          { who: "HOLLY", t: "If you have it." },
        ],
        want: [req("style", "Classic"), req("color", "Silver")],
        hint: ["Silver"],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "I'll be outside most of the day." },
          { who: "YOU", t: "Doing what?" },
          { who: "HOLLY", t: "Walking." },
          { who: "YOU", t: "That sounded suspicious." },
          { who: "HOLLY", t: "It wasn't." },
        ],
        want: [req("fit", "Regular"), req("style", "Minimal")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "There is something at the Castle tonight." },
          { who: "YOU", t: "Formal?" },
          { who: "HOLLY", t: "Unfortunately." },
        ],
        want: [req("style", "Elegant"), req("style", "Classic")],
        hint: ["Silver"],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "They said I should look less intimidating." },
          { who: "YOU", t: "Who said that?" },
          { who: "HOLLY", t: "Several people." },
          { who: "YOU", t: "That many?" },
          { who: "YOU", t: "Sweet. Got it." },
        ],
        want: [req("style", "Sweet"), req("color", "Blue")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "Romantic." },
          { who: "YOU", t: "You're sure?" },
          { who: "HOLLY", t: "I know what the word means." },
          { who: "YOU", t: "Just checking." },
        ],
        want: [req("style", "Romantic"), req("fit", "Fitted")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "Something with more force today." },
          { who: "YOU", t: "That's new." },
          { who: "HOLLY", t: "Red, if there is any." },
        ],
        want: [req("style", "Daring"), req("color", "Red")],
        hint: ["Red"],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "I was told to wear something cheerful." },
          { who: "YOU", t: "By whom?" },
          { who: "HOLLY", t: "Someone who is enjoying this far too much." },
        ],
        want: [req("color", "Pink"), req("style", "Sweet")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "Something less sensible." },
          { who: "YOU", t: "How much less sensible?" },
          { who: "HOLLY", t: "I don't know." },
        ],
        want: [req("style", "Daring"), req("fit", "Fitted")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "There's a banquet." },
          { who: "YOU", t: "You hate banquets." },
          { who: "HOLLY", t: "Correct." },
          { who: "YOU", t: "So what are we doing?" },
          { who: "HOLLY", t: "If I must be there, I would prefer to look formidable." },
        ],
        want: [req("style", "Elegant"), req("style", "Bold")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "You always make choices I wouldn't." },
          { who: "YOU", t: "Is that a complaint?" },
          { who: "HOLLY", t: "Not always." },
          { who: "HOLLY", t: "Do that." },
        ],
        want: [req("style", "Daring"), req("fit", "Regular")],
      },
      {
        dialogue: [
          { who: "HOLLY", t: "Choose for me." },
          { who: "YOU", t: "Nothing else?" },
          { who: "HOLLY", t: "You know what I like." },
          { who: "YOU", t: "And if I ignore that?" },
          { who: "HOLLY", t: "Then have a reason." },
        ],
        playerChoice: true,
      },
    ],
  },
];

const MARGO_STAGES = [
  [{ who: 'MARGO', t: "You're the replacement." }, { who: 'YOU', t: 'Replacement?' }, { who: 'MARGO', t: 'Stylist.' }, { who: 'YOU', t: 'What happened to the last one?' }, { who: 'MARGO', t: "You're new. Try remaining that way." }],
  [{ who: 'YOU', t: "You don't trust me very much." }, { who: 'MARGO', t: 'Correct.' }, { who: 'YOU', t: "Because I'm a stylist?" }, { who: 'MARGO', t: 'Because the last one was a stylist.' }, { who: 'YOU', t: 'And?' }, { who: 'MARGO', t: "And now you're here." }],
  [{ who: 'MARGO', t: 'Nothing beige.' }, { who: 'YOU', t: 'You really hate beige.' }, { who: 'MARGO', t: 'Beige is what happens when a colour loses its nerve.' }],
  [{ who: 'YOU', t: 'You know a lot about clothes.' }, { who: 'MARGO', t: 'I made costumes.' }, { who: 'YOU', t: 'Theatre?' }, { who: 'MARGO', t: 'Mostly.' }, { who: 'YOU', t: 'Mostly?' }, { who: 'MARGO', t: "You're getting greedy with your questions." }],
  [{ who: 'MARGO', t: 'No pink.' }, { who: 'YOU', t: "You really don't like pink." }, { who: 'MARGO', t: 'Correct.' }, { who: 'YOU', t: "Don't you like flowers?" }, { who: 'MARGO', t: 'I like flowers. I dislike what people do around them.' }],
  [{ who: 'YOU', t: "Juniper said you're in the Garden Circle." }, { who: 'MARGO', t: 'Did she.' }, { who: 'YOU', t: 'Gardening?' }, { who: 'MARGO', t: 'Among other things.' }, { who: 'YOU', t: 'What other things?' }, { who: 'MARGO', t: 'Tea.' }],
  [{ who: 'YOU', t: "You don't seem like a gardening person." }, { who: 'MARGO', t: 'And what does a gardening person look like?' }, { who: 'YOU', t: 'Less black?' }, { who: 'MARGO', t: 'Careful.' }],
  [{ who: 'YOU', t: 'What do you actually grow?' }, { who: 'MARGO', t: 'Nightshade. Belladonna. Foxglove.' }, { who: 'YOU', t: 'Those are all poisonous.' }, { who: 'MARGO', t: 'Are they?' }, { who: 'YOU', t: 'Yes.' }, { who: 'MARGO', t: 'Good to know.' }],
  [{ who: 'MARGO', t: 'Fitted. Black. Elegant.' }, { who: 'YOU', t: 'Again?' }, { who: 'MARGO', t: 'I found something that works for me. You should try it sometime.' }],
  [{ who: 'YOU', t: 'I saw the Garden Circle last night.' }, { who: 'MARGO', t: "No, you didn't." }, { who: 'YOU', t: 'I saw you going into the Nightgarden.' }, { who: 'MARGO', t: 'Then you saw women walking.' }, { who: 'YOU', t: 'At midnight.' }, { who: 'MARGO', t: "Flowers don't own clocks." }],
  [{ who: 'YOU', t: 'Why is everyone so secretive here?' }, { who: 'MARGO', t: "Because you're asking questions." }, { who: 'YOU', t: "That's usually how you get answers." }, { who: 'MARGO', t: 'Not here.' }],
  [{ who: 'MARGO', t: 'You did well last time.' }, { who: 'YOU', t: 'Was that a compliment?' }, { who: 'MARGO', t: "Don't make me take it back." }],
  [{ who: 'YOU', t: 'Did you make clothes for yourself too?' }, { who: 'MARGO', t: 'Rarely.' }, { who: 'YOU', t: 'Why?' }, { who: 'MARGO', t: 'There was someone else I preferred dressing.' }, { who: 'YOU', t: 'Someone important?' }, { who: 'MARGO', t: 'Very.' }],
  [{ who: 'YOU', t: 'The woman you used to dress—' }, { who: 'MARGO', t: 'You remembered.' }, { who: 'YOU', t: 'You sounded like you loved her.' }, { who: 'MARGO', t: 'I did.' }, { who: 'YOU', t: 'What was her name?' }, { who: 'MARGO', t: 'I remember that.' }, { who: 'YOU', t: "But you're not telling me." }, { who: 'MARGO', t: 'Correct.' }],
  [{ who: 'MARGO', t: 'I remember the green dress I made her.' }, { who: 'YOU', t: 'What did it look like?' }, { who: 'MARGO', t: 'Silk. Low back. Terrible neckline. She insisted.' }, { who: 'YOU', t: 'What did she look like?' }, { who: 'MARGO', t: "I don't know." }],
  [{ who: 'YOU', t: "You can't remember her face?" }, { who: 'MARGO', t: 'No.' }, { who: 'YOU', t: "I'm sorry." }, { who: 'MARGO', t: "Don't be. I remember her laugh." }, { who: 'MARGO', t: 'Most days.' }],
  [{ who: 'YOU', t: 'Juniper gave me something called moonroot.' }, { who: 'MARGO', t: 'Throw it away.' }, { who: 'YOU', t: 'She said you asked for it.' }, { who: 'MARGO', t: 'Then give it to me.' }, { who: 'YOU', t: 'What does it do?' }, { who: 'MARGO', t: "Nothing you'd use correctly." }],
  [{ who: 'YOU', t: 'Margo. I saw what happened in the garden.' }, { who: 'MARGO', t: "Apparently you're incapable of following very simple instructions." }, { who: 'YOU', t: 'You made the flowers move.' }, { who: 'MARGO', t: 'No.' }, { who: 'YOU', t: 'Margo.' }, { who: 'MARGO', t: 'We all did.' }, { who: 'YOU', t: 'The Garden Circle?' }, { who: 'MARGO', t: "Such a stupid name, isn't it?" }, { who: 'YOU', t: "You're witches." }, { who: 'MARGO', t: 'Finally.' }],
  [{ who: 'YOU', t: 'Were you a witch when you were alive?' }, { who: 'MARGO', t: 'Yes.' }, { who: 'YOU', t: 'Actual magic?' }, { who: 'MARGO', t: 'Mostly disappointing men and improving harvests.' }, { who: 'YOU', t: "You're joking." }, { who: 'MARGO', t: 'About the harvests.' }],
  [{ who: 'YOU', t: 'Is being a witch connected to what happened to the last stylist?' }, { who: 'MARGO', t: "Don't ask that again." }, { who: 'YOU', t: 'Why?' }, { who: 'MARGO', t: "Because I'm beginning to like you." }],
];

const JUNIPER_STAGES = [
  [{ who: 'JUNIPER', t: "You're the new stylist." }, { who: 'YOU', t: 'Everyone keeps saying that.' }, { who: 'JUNIPER', t: "We haven't had one for a while." }, { who: 'YOU', t: 'Why?' }, { who: 'JUNIPER', t: 'Oh.' }, { who: 'JUNIPER', t: 'Green would be nice.' }],
  [{ who: 'YOU', t: 'You dodged my question last time.' }, { who: 'JUNIPER', t: 'Yes.' }, { who: 'YOU', t: 'Intentionally?' }, { who: 'JUNIPER', t: 'Yes.' }, { who: 'YOU', t: "At least you're honest." }, { who: 'JUNIPER', t: 'Usually.' }],
  [{ who: 'YOU', t: 'Is that plant moving?' }, { who: 'JUNIPER', t: 'Yes.' }, { who: 'YOU', t: 'Why?' }, { who: 'JUNIPER', t: 'Wind.' }, { who: 'YOU', t: "We're inside." }, { who: 'JUNIPER', t: 'Then probably not wind.' }],
  [{ who: 'YOU', t: 'You were a botanist?' }, { who: 'JUNIPER', t: 'I think I still am.' }, { who: 'YOU', t: "You're dead." }, { who: 'JUNIPER', t: "The plants don't seem bothered." }],
  [{ who: 'YOU', t: 'Where do these plants come from?' }, { who: 'JUNIPER', t: 'Here.' }, { who: 'YOU', t: "I've never seen them around the city." }, { who: 'JUNIPER', t: "You're looking in the wrong places." }],
  [{ who: 'YOU', t: 'You must love Flower Fest.' }, { who: 'JUNIPER', t: 'Why?' }, { who: 'YOU', t: 'Plants.' }, { who: 'JUNIPER', t: "That's like asking a baker if they love being hit with bread." }],
  [{ who: 'JUNIPER', t: 'No pink today.' }, { who: 'YOU', t: "That's new." }, { who: 'JUNIPER', t: 'Is it?' }, { who: 'YOU', t: 'Margo said the same thing.' }, { who: 'JUNIPER', t: 'Margo and I agree on many things.' }, { who: 'YOU', t: "That's worrying." }, { who: 'JUNIPER', t: 'It should be.' }],
  [{ who: 'YOU', t: 'How do you know Margo?' }, { who: 'JUNIPER', t: 'Garden Circle.' }, { who: 'YOU', t: 'So it really is gardening.' }, { who: 'JUNIPER', t: 'Yes.' }, { who: 'JUNIPER', t: 'Mostly.' }],
  [{ who: 'YOU', t: "What's the 'mostly'?" }, { who: 'JUNIPER', t: 'Tea.' }, { who: 'YOU', t: 'Margo said that too.' }, { who: 'JUNIPER', t: 'We rehearsed.' }],
  [{ who: 'YOU', t: "What's Nightgarden like?" }, { who: 'JUNIPER', t: 'Beautiful.' }, { who: 'YOU', t: "That's it?" }, { who: 'JUNIPER', t: "That's already more than I should have said." }],
  [{ who: 'JUNIPER', t: 'I need white.' }, { who: 'YOU', t: "That's unusual for you." }, { who: 'JUNIPER', t: 'Special occasion.' }, { who: 'YOU', t: 'Going to the Royal Quarter?' }, { who: 'JUNIPER', t: 'Absolutely not.' }],
  [{ who: 'YOU', t: 'Why not?' }, { who: 'JUNIPER', t: 'Too many people.' }, { who: 'YOU', t: "That's all?" }, { who: 'JUNIPER', t: 'No.' }, { who: 'YOU', t: 'What else?' }, { who: 'JUNIPER', t: "That's all I'm telling you." }],
  [{ who: 'YOU', t: 'Do you remember your garden from when you were alive?' }, { who: 'JUNIPER', t: 'Greenhouse.' }, { who: 'YOU', t: 'Big?' }, { who: 'JUNIPER', t: 'Tiny. Leaked when it rained. The heater broke every winter.' }, { who: 'YOU', t: 'Sounds terrible.' }, { who: 'JUNIPER', t: 'I loved it.' }],
  [{ who: 'YOU', t: 'What did you grow?' }, { who: 'JUNIPER', t: "Everything I wasn't supposed to." }, { who: 'YOU', t: "Some things don't change." }, { who: 'NARRATION', t: 'Juniper smiles.' }],
  [{ who: 'YOU', t: 'What happened to the greenhouse?' }, { who: 'JUNIPER', t: "I don't know." }, { who: 'YOU', t: "You don't remember?" }, { who: 'JUNIPER', t: "There's a point where things become... thin." }, { who: 'YOU', t: 'Your memories?' }, { who: 'JUNIPER', t: 'Yes.' }],
  [{ who: 'YOU', t: 'How much is missing?' }, { who: 'JUNIPER', t: 'Years, maybe.' }, { who: 'YOU', t: "Doesn't that scare you?" }, { who: 'JUNIPER', t: 'Sometimes.' }, { who: 'JUNIPER', t: 'Mostly it annoys me.' }],
  [{ who: 'YOU', t: 'Margo told me.' }, { who: 'JUNIPER', t: 'Oh.' }, { who: 'YOU', t: "That's your reaction?" }, { who: 'JUNIPER', t: "She told you. You're still here. Seems successful." }, { who: 'YOU', t: "You're a witch too?" }, { who: 'JUNIPER', t: 'Botanist first.' }],
  [{ who: 'YOU', t: 'Are the plants magic?' }, { who: 'JUNIPER', t: 'Some.' }, { who: 'YOU', t: 'Which ones?' }, { who: 'JUNIPER', t: "The ones you shouldn't touch." }, { who: 'YOU', t: 'Which are—' }, { who: 'JUNIPER', t: 'Most of them.' }],
  [{ who: 'YOU', t: 'Do the window lights really keep frost creatures away?' }, { who: 'JUNIPER', t: 'Usually.' }, { who: 'YOU', t: "What does 'usually' mean?" }, { who: 'JUNIPER', t: 'Keep yours lit.' }, { who: 'YOU', t: 'Juniper.' }, { who: 'JUNIPER', t: 'Keep. Yours. Lit.' }],
  [{ who: 'YOU', t: 'Does the Garden Circle know what happened to the previous stylist?' }, { who: 'JUNIPER', t: 'We know pieces.' }, { who: 'YOU', t: 'Will you tell me?' }, { who: 'JUNIPER', t: 'Not yet.' }, { who: 'YOU', t: 'You trust me now.' }, { who: 'JUNIPER', t: "That's why I'm not telling you." }],
];

const IVY_STAGES = [
  [{ who: 'IVY', t: 'New stylist.' }, { who: 'YOU', t: 'Is there a sign on me?' }, { who: 'IVY', t: 'Kind of.' }, { who: 'YOU', t: 'What does it say?' }, { who: 'IVY', t: "'Hasn't learned yet.'" }],
  [{ who: 'YOU', t: 'Learned what?' }, { who: 'IVY', t: 'Give it a month.' }, { who: 'YOU', t: 'Everyone here talks like that.' }, { who: 'IVY', t: "You'll start doing it too." }],
  [{ who: 'YOU', t: "That's your bike outside?" }, { who: 'IVY', t: "Don't touch her." }, { who: 'YOU', t: 'Her?' }, { who: 'IVY', t: 'Figure of speech.' }],
  [{ who: 'YOU', t: 'Your bike moved.' }, { who: 'IVY', t: 'Bikes do that.' }, { who: 'YOU', t: 'It was parked.' }, { who: 'IVY', t: 'Wind.' }, { who: 'YOU', t: 'Inside an alley?' }, { who: 'IVY', t: 'Very local wind.' }],
  [{ who: 'YOU', t: 'What model is it?' }, { who: 'IVY', t: "Don't know." }, { who: 'YOU', t: "It's your bike." }, { who: 'IVY', t: 'Correct.' }, { who: 'YOU', t: 'Where did you get it?' }, { who: 'IVY', t: 'Found me.' }, { who: 'YOU', t: 'You found it?' }, { who: 'IVY', t: "That's not what I said." }],
  [{ who: 'IVY', t: 'Boots.' }, { who: 'YOU', t: 'Again?' }, { who: 'IVY', t: 'Have you tried running across wet cobblestones in heels?' }, { who: 'YOU', t: 'Have you?' }, { who: 'IVY', t: 'Once.' }, { who: 'YOU', t: 'And?' }, { who: 'IVY', t: 'Boots.' }],
  [{ who: 'YOU', t: 'You were a courier when you were alive too?' }, { who: 'IVY', t: 'Yeah.' }, { who: 'YOU', t: 'Motorcycle?' }, { who: 'IVY', t: 'Bike. Motorcycle. Anything fast enough to make bad decisions interesting.' }],
  [{ who: 'YOU', t: 'And now you deliver things here.' }, { who: 'IVY', t: "Apparently death isn't a career change." }],
  [{ who: 'YOU', t: 'Where do you deliver?' }, { who: 'IVY', t: 'Everywhere.' }, { who: 'YOU', t: 'Night Castle?' }, { who: 'IVY', t: 'Sometimes.' }, { who: 'YOU', t: 'Nightgarden?' }, { who: 'IVY', t: 'Sometimes.' }, { who: 'YOU', t: "There isn't even a road behind Nightgarden." }, { who: 'IVY', t: 'Sure there is.' }],
  [{ who: 'YOU', t: 'Show me.' }, { who: 'IVY', t: 'No.' }, { who: 'YOU', t: 'Why?' }, { who: 'IVY', t: 'Because I like you alive—' }, { who: 'IVY', t: 'You know what I mean.' }],
  [{ who: 'YOU', t: 'Who are you delivering to tonight?' }, { who: 'IVY', t: 'Client confidentiality.' }, { who: 'YOU', t: 'Since when do you care about that?' }, { who: 'IVY', t: 'Since this client has horns.' }, { who: 'YOU', t: 'What?' }, { who: 'IVY', t: 'Black jacket, please.' }],
  [{ who: 'YOU', t: 'Horns?' }, { who: 'IVY', t: 'Fashion.' }, { who: 'YOU', t: 'Ivy.' }, { who: 'IVY', t: 'Very avant-garde.' }],
  [{ who: 'IVY', t: 'Need something Classic.' }, { who: 'YOU', t: 'You hate Classic.' }, { who: 'IVY', t: 'Royal Quarter.' }, { who: 'YOU', t: 'You got invited?' }, { who: 'IVY', t: 'God, no.' }, { who: 'YOU', t: 'Delivery?' }, { who: 'IVY', t: 'Yeah.' }],
  [{ who: 'YOU', t: 'People are acting weird about Solstice.' }, { who: 'IVY', t: 'People act weird about everything.' }, { who: 'YOU', t: "Someone said 'not like last time.'" }, { who: 'IVY', t: "Don't ask about last time." }, { who: 'YOU', t: 'Why?' }, { who: 'IVY', t: 'See? Exactly that.' }],
  [{ who: 'YOU', t: 'Did you know the previous stylist?' }, { who: 'IVY', t: 'A little.' }, { who: 'YOU', t: "Nobody will tell me what happened." }, { who: 'IVY', t: 'Smart.' }, { who: 'YOU', t: 'You included?' }, { who: 'IVY', t: 'Especially me.' }],
  [{ who: 'YOU', t: 'Were you there?' }, { who: 'IVY', t: 'Next question.' }, { who: 'YOU', t: "That's not a no." }, { who: 'IVY', t: "That's why I said next question." }],
  [{ who: 'YOU', t: 'Your bike was looking at me.' }, { who: 'IVY', t: "That's ridiculous." }, { who: 'YOU', t: 'It has no eyes and somehow I know it was looking at me.' }, { who: 'IVY', t: '...' }, { who: 'IVY', t: 'She likes you.' }, { who: 'YOU', t: 'SHE?' }, { who: 'IVY', t: 'Outfit. Now.' }],
  [{ who: 'YOU', t: 'Is she alive?' }, { who: 'IVY', t: 'Define alive.' }, { who: 'YOU', t: 'Absolutely not.' }, { who: 'IVY', t: 'Finally asking better questions.' }],
  [{ who: 'YOU', t: 'Is the bike from After City?' }, { who: 'IVY', t: 'No.' }, { who: 'YOU', t: 'Living world?' }, { who: 'IVY', t: 'No.' }, { who: 'YOU', t: 'Then where?' }, { who: 'IVY', t: "That's a third-date question." }, { who: 'YOU', t: "We've known each other for months." }, { who: 'IVY', t: "And yet you've never bought me dinner." }],
  [{ who: 'YOU', t: "You know what's outside After City." }, { who: 'IVY', t: 'Some of it.' }, { who: 'YOU', t: 'Angels?' }, { who: 'IVY', t: 'Go home before dark tonight.' }, { who: 'YOU', t: 'Ivy—' }, { who: 'IVY', t: 'Seriously.' }],
];

const HOLLY_STAGES = [
  [{ who: 'HOLLY', t: 'You are the new clothier.' }, { who: 'YOU', t: 'Stylist.' }, { who: 'HOLLY', t: 'Is there a difference?' }, { who: 'YOU', t: 'Yes.' }, { who: 'HOLLY', t: 'Then prove it.' }],
  [{ who: 'YOU', t: "You don't trust me." }, { who: 'HOLLY', t: "I don't know you." }, { who: 'YOU', t: 'Fair.' }, { who: 'HOLLY', t: 'The last one was known.' }, { who: 'YOU', t: 'What happened to them?' }, { who: 'HOLLY', t: 'Exactly.' }],
  [{ who: 'HOLLY', t: 'White. Simple. Nothing that impedes movement.' }, { who: 'YOU', t: "You're going to dinner." }, { who: 'HOLLY', t: 'Danger does not schedule appointments.' }],
  [{ who: 'YOU', t: "You always dress like you're expecting trouble." }, { who: 'HOLLY', t: 'I prefer being incorrectly prepared to correctly dead.' }, { who: 'YOU', t: 'Holly.' }, { who: 'HOLLY', t: 'Habit.' }],
  [{ who: 'YOU', t: 'Were you a soldier?' }, { who: 'HOLLY', t: 'Yes.' }, { who: 'YOU', t: 'When?' }, { who: 'HOLLY', t: 'A long time ago.' }],
  [{ who: 'YOU', t: 'What kind of soldier?' }, { who: 'HOLLY', t: 'The kind that survived battles.' }, { who: 'YOU', t: "Until you didn't." }, { who: 'HOLLY', t: "Don't." }],
  [{ who: 'YOU', t: 'Do you remember the battles?' }, { who: 'HOLLY', t: 'Some.' }, { who: 'YOU', t: 'Which?' }, { who: 'HOLLY', t: 'Mud. Horses. Steel.' }, { who: 'YOU', t: "That's not a battle." }, { who: 'HOLLY', t: "That's what remains." }],
  [{ who: 'YOU', t: 'You fought in armour?' }, { who: 'HOLLY', t: 'Of course.' }, { who: 'YOU', t: 'Heavy?' }, { who: 'HOLLY', t: 'Only if badly made.' }],
  [{ who: 'HOLLY', t: 'Blue today.' }, { who: 'YOU', t: 'You like blue.' }, { who: 'HOLLY', t: 'Someone I knew wore it.' }, { who: 'YOU', t: 'Who?' }, { who: 'HOLLY', t: "I don't remember." }],
  [{ who: 'YOU', t: 'Was it the same person you mentioned before?' }, { who: 'HOLLY', t: "I didn't mention anyone." }, { who: 'YOU', t: 'You said someone wore blue.' }, { who: 'HOLLY', t: 'Then why ask?' }],
  [{ who: 'HOLLY', t: 'There was a woman.' }, { who: 'YOU', t: 'The one in blue?' }, { who: 'HOLLY', t: 'Yes.' }, { who: 'YOU', t: 'Who was she?' }, { who: 'HOLLY', t: 'Isolde.' }],
  [{ who: 'YOU', t: 'Isolde.' }, { who: 'HOLLY', t: 'Princess Isolde.' }, { who: 'YOU', t: 'You served her?' }, { who: 'HOLLY', t: 'I think so.' }, { who: 'YOU', t: 'You think?' }, { who: 'HOLLY', t: "My memories don't ask permission before leaving." }],
  [{ who: 'YOU', t: 'Were you her guard?' }, { who: 'HOLLY', t: 'Knight.' }, { who: 'YOU', t: 'Women could be knights?' }, { who: 'HOLLY', t: 'No.' }, { who: 'YOU', t: 'Oh.' }, { who: 'HOLLY', t: 'Precisely.' }],
  [{ who: 'YOU', t: 'So everyone thought you were a man.' }, { who: 'HOLLY', t: 'Everyone who mattered.' }, { who: 'YOU', t: 'Isolde?' }, { who: 'HOLLY', t: 'Isolde was not easily deceived.' }],
  [{ who: 'YOU', t: 'Did she know from the beginning?' }, { who: 'HOLLY', t: "I don't know." }, { who: 'YOU', t: 'But eventually?' }, { who: 'HOLLY', t: 'Yes.' }, { who: 'YOU', t: 'Was she angry?' }, { who: 'HOLLY', t: 'She laughed for ten minutes.' }],
  [{ who: 'HOLLY', t: 'Something Romantic today.' }, { who: 'YOU', t: 'Really?' }, { who: 'HOLLY', t: 'Must you sound surprised?' }, { who: 'YOU', t: 'A little.' }, { who: 'HOLLY', t: 'Knights can appreciate silk.' }, { who: 'YOU', t: 'Apparently.' }, { who: 'HOLLY', t: 'Knights can also leave.' }, { who: 'YOU', t: 'Romantic it is.' }],
  // [bible note] the source stage opens on "[PLAYER EQUIPS FIRST ARMOR CARD]" —
  // a mechanic trigger for the Armor system, which is deliberately out of
  // scope for now (later "late game" pass). The spoken lines are ported as-is;
  // the mechanic hook (and its "+50 Holly Match" bonus) is left for that pass.
  [{ who: 'HOLLY', t: 'Where did you get that?' }, { who: 'YOU', t: 'The armour?' }, { who: 'HOLLY', t: 'Take it off.' }, { who: 'YOU', t: "You don't like it?" }, { who: 'HOLLY', t: "I didn't say that." }, { who: 'YOU', t: 'Then—' }, { who: 'HOLLY', t: 'Take it off.' }],
  [{ who: 'YOU', t: 'You liked the armour last time.' }, { who: 'HOLLY', t: 'I did not.' }, { who: 'YOU', t: 'The score disagrees.' }, { who: 'HOLLY', t: 'Your machine is impertinent.' }, { who: 'YOU', t: 'You recognized it.' }, { who: 'HOLLY', t: 'I recognized armour.' }, { who: 'YOU', t: 'That armour.' }, { who: 'HOLLY', t: 'Yes.' }],
  [{ who: 'YOU', t: 'Is it like what you wore?' }, { who: 'NARRATION', t: 'Holly runs her hand over the metal.' }, { who: 'HOLLY', t: 'No.' }, { who: 'YOU', t: "What's different?" }, { who: 'HOLLY', t: 'Everything.' }, { who: 'YOU', t: 'Then why does it feel familiar?' }, { who: 'HOLLY', t: "I don't know." }],
  [{ who: 'YOU', t: 'When you think about Isolde, what do you remember?' }, { who: 'HOLLY', t: 'Her hands.' }, { who: 'YOU', t: 'Anything else?' }, { who: 'HOLLY', t: 'Blue ribbons.' }, { who: 'HOLLY', t: 'She hated pears.' }, { who: 'YOU', t: "That's oddly specific." }, { who: 'HOLLY', t: 'I have forgotten kingdoms.' }, { who: 'HOLLY', t: 'I remember that she hated pears.' }],
];

const CLIENT_STAGES = {
  0: MARGO_STAGES,   // Margo
  1: JUNIPER_STAGES, // Juniper
  2: IVY_STAGES,     // Ivy
  3: HOLLY_STAGES,   // Holly
};

const FALLBACK_STAGE = null; // no stage left: the visit is just the job



const AESTHETIC_ACHIEVEMENTS = [
  {
    id: "moto_ballet",
    name: "MOTO BALLET",
    lore: "Leather, ribbons, terrible road safety.",
    requirementsText: ["Moto Boots equipped", "At least 1 Romantic or Sweet Bottom", "At least 1 Romantic or Sweet Top or Dress", "At least 3 equipped cards total"],
    test(pieces) {
      if (pieces.length < 3) return false;
      if (!achHasName(pieces, "Moto Boots")) return false;
      const bottomOk = achSome(pieces, (p) => p.category === "Bottom" && ["Romantic", "Sweet"].includes(p.style));
      const topOrDressOk = achSome(pieces, (p) => (p.category === "Top" || p.category === "Dress") && ["Romantic", "Sweet"].includes(p.style));
      return bottomOk && topOrDressOk;
    },
  },
  {
    id: "office_siren",
    name: "OFFICE SIREN",
    lore: "Aftercity has no offices, no salaries, but quite a few deadlines. Seems like every time Q4 comes around, people start looking nervously at their clocks.",
    requirementsText: ["Pointy Janes equipped", "At least 1 Fitted Bottom", "At least 1 Fitted or Tight Top", "Every equipped color is Black, Grey or Beige", "At least 3 equipped cards total"],
    test(pieces) {
      if (pieces.length < 3) return false;
      if (!achHasName(pieces, "Pointy Janes")) return false;
      const bottomOk = achSome(pieces, (p) => p.category === "Bottom" && p.fit === "Fitted");
      const topOk = achSome(pieces, (p) => p.category === "Top" && ["Fitted", "Tight"].includes(p.fit));
      const colorsOk = achEvery(pieces, (p) => ["Black", "Grey", "Beige"].includes(p.color));
      return bottomOk && topOk && colorsOk;
    },
  },
  {
    id: "coquette",
    name: "COQUETTE",
    lore: "A bow would improve this. Several bows would improve it more.",
    requirementsText: ["Ballet Flats, Mary Janes, Flower Janes or Spring Flats equipped", "At least 1 Sweet or Romantic Top", "At least 1 Sweet or Romantic Bottom", "At least 3 equipped cards are Pink or White", "Exactly 4 equipped cards"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      if (!achHasAnyName(pieces, ["Ballet Flats", "Mary Janes", "Flower Janes", "Spring Flats"])) return false;
      const topOk = achSome(pieces, (p) => p.category === "Top" && ["Sweet", "Romantic"].includes(p.style));
      const bottomOk = achSome(pieces, (p) => p.category === "Bottom" && ["Sweet", "Romantic"].includes(p.style));
      const pinkWhiteCount = achCount(pieces, (p) => ["Pink", "White"].includes(p.color));
      return topOk && bottomOk && pinkWhiteCount >= 3;
    },
  },
  {
    id: "biker_chic",
    name: "BIKER CHIC",
    lore: "Built for a motorcycle that may or may not exist.",
    requirementsText: ["Leather Jacket, Pink Leather or Fluffy Leather equipped", "Black, Brown or Green Leather, or a Leather Dress equipped", "Moto Boots, Combat Boots or Tall Boots equipped", "At least 3 equipped cards total"],
    test(pieces) {
      if (pieces.length < 3) return false;
      const jacketOk = achHasAnyName(pieces, ["Leather Jacket", "Pink Leather", "Fluffy Leather"]);
      const bottomLeatherOk = achHasAnyName(pieces, ["Black Leather", "Brown Leather", "Green Leather", "Leather Dress"]);
      const bootsOk = achHasAnyName(pieces, ["Moto Boots", "Combat Boots", "Tall Boots"]);
      return jacketOk && bottomLeatherOk && bootsOk;
    },
  },
  {
    id: "soft_grunge",
    name: "SOFT GRUNGE",
    lore: "Comfort, but make it look mildly disappointed in you.",
    requirementsText: ["At least 1 Relaxed or Oversized Top/Jacket", "Black Cutoffs, Blue Cutoffs, or a Fitted mini Bottom", "Chunky Janes or Combat Boots equipped", "At least 2 equipped cards are Black", "At least 3 equipped cards total"],
    test(pieces) {
      if (pieces.length < 3) return false;
      const topOk = achSome(pieces, (p) => (p.category === "Top" || p.category === "Jacket") && ["Relaxed", "Oversized"].includes(p.fit));
      const bottomOk = achHasAnyName(pieces, ["Black Cutoffs", "Blue Cutoffs"]) ||
        achSome(pieces, (p) => p.category === "Bottom" && p.fit === "Fitted" && /mini/i.test(p.name));
      const shoesOk = achHasAnyName(pieces, ["Chunky Janes", "Combat Boots"]);
      const blackCount = achCount(pieces, (p) => p.color === "Black");
      return topOk && bottomOk && shoesOk && blackCount >= 2;
    },
  },
  {
    id: "dark_romance",
    name: "DARK ROMANCE",
    lore: "Love letter. Black envelope. No return address.",
    requirementsText: ["Every equipped card is Black", "At least 1 Romantic card", "At least 1 Daring card", "Exactly 4 equipped cards"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      return achEvery(pieces, (p) => p.color === "Black") && achSome(pieces, (p) => p.style === "Romantic") && achSome(pieces, (p) => p.style === "Daring");
    },
  },
  {
    id: "dead_silence_luxury",
    name: "DEAD SILENCE LUXURY",
    lore: "Old money is complicated in a city where nobody can remember where they left their bank account. Money transcends life and death.",
    requirementsText: ["Exactly 4 equipped cards", "Every equipped color is Black, White or Beige", "Every equipped style is Elegant, Classic or Minimal", "At least 2 equipped cards are Elegant"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const colorsOk = achEvery(pieces, (p) => ["Black", "White", "Beige"].includes(p.color));
      const stylesOk = achEvery(pieces, (p) => ["Elegant", "Classic", "Minimal"].includes(p.style));
      const elegantCount = achCount(pieces, (p) => p.style === "Elegant");
      return colorsOk && stylesOk && elegantCount >= 2;
    },
  },
  {
    id: "move_on_to_greener_pastures",
    name: "MOVE ON TO GREENER PASTURES",
    lore: "Give it a few years. You will. Life and death go on.",
    requirementsText: ["Exactly 4 equipped cards", "At least 3 equipped cards are Romantic or Sweet", "At least 1 Green card", "At least 1 Pink or White card", "A Flower Basket or Daisy Bag equipped"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const romSweetCount = achCount(pieces, (p) => ["Romantic", "Sweet"].includes(p.style));
      const greenOk = achSome(pieces, (p) => p.color === "Green");
      const pinkWhiteOk = achSome(pieces, (p) => ["Pink", "White"].includes(p.color));
      const bagOk = achHasAnyName(pieces, ["Flower Basket (Iconic)", "Flower Basket (Pink)", "Flower Basket (White)", "Daisy Bag (Blue)", "Daisy Bag (Pink)"]);
      return romSweetCount >= 3 && greenOk && pinkWhiteOk && bagOk;
    },
  },
  {
    id: "mooncore",
    name: "MOONCORE",
    lore: "Dress like the moon is personally expecting you.",
    requirementsText: ["Exactly 4 equipped cards", "All 4 equipped cards belong to Moon Set"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      return achEvery(pieces, (p) => p.set === "Moon Set");
    },
  },
  {
    id: "pink_fantasy",
    name: "PINK FANTASY",
    lore: "Subtlety died before you did.",
    requirementsText: ["Exactly 4 equipped cards", "Every equipped card is Pink"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      return achEvery(pieces, (p) => p.color === "Pink");
    },
  },
  {
    id: "midnight_walk",
    name: "MIDNIGHT WALK",
    lore: "The dead used to walk together so nobody had to arrive alone.",
    requirementsText: ["Silver", "Blue", "Grey", "White", "No other colors", "Exactly 4 equipped cards"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const colors = pieces.map((p) => p.color).slice().sort();
      const required = ["Blue", "Grey", "Silver", "White"];
      return JSON.stringify(colors) === JSON.stringify(required);
    },
  },
  {
    id: "knighted",
    name: "KNIGHTED",
    lore: "Oh, to be knighted. A curse and a blessing. Love your King, Queen, Prince and Princess beyond death.",
    requirementsText: ["Exactly 4 equipped cards", "Every equipped card style is Armour"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      return achEvery(pieces, (p) => p.style === "Armour");
    },
  },
  {
    id: "divine_intervention",
    name: "DIVINE INTERVENTION",
    lore: "Statistically unlikely. Spiritually concerning.",
    requirementsText: ["Exactly 4 equipped cards", "Every equipped card rarity is Legendary"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      return achEvery(pieces, (p) => p.rarity === "Legendary");
    },
  },
  {
    id: "pearl_saint",
    name: "PEARL SAINT",
    lore: "Softness developed a defence mechanism.",
    requirementsText: ["Pearl Cuirass equipped", "Pearl Skirt equipped", "Pearl Boots or Pearl Heels equipped", "One additional White or Silver Bag/Accessory equipped", "Exactly 4 equipped cards"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      if (!achHasName(pieces, "Pearl Cuirass")) return false;
      if (!achHasName(pieces, "Pearl Skirt")) return false;
      if (!achHasAnyName(pieces, ["Pearl Boots", "Pearl Heels"])) return false;
      return achSome(pieces, (p) => ["Bag", "Accessory"].includes(p.category) && ["White", "Silver"].includes(p.color));
    },
  },
  {
    id: "after_midnight",
    name: "AFTER MIDNIGHT",
    lore: "The city looks different when everyone sensible has gone home.",
    requirementsText: ["Exactly 4 equipped cards", "Every equipped card is Black", "At least 3 different categories represented"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      return achEvery(pieces, (p) => p.color === "Black") && achDistinctCategories(pieces) >= 3;
    },
  },
  {
    id: "flower_offering",
    name: "FLOWER OFFERING",
    lore: "Leave it somewhere beautiful. Do not wait to see who collects it.",
    requirementsText: ["A Flower Basket bag equipped (Iconic, Pink or White)", "At least 1 Romantic Top", "At least 1 Romantic Bottom", "Flower Janes or another Sweet shoe equipped", "Exactly 4 equipped cards", "At least 3 distinct colors in the outfit"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const bagOk = achHasAnyName(pieces, ["Flower Basket (Iconic)", "Flower Basket (Pink)", "Flower Basket (White)"]);
      const topOk = achSome(pieces, (p) => p.category === "Top" && p.style === "Romantic");
      const bottomOk = achSome(pieces, (p) => p.category === "Bottom" && p.style === "Romantic");
      const shoesOk = achHasName(pieces, "Flower Janes") || achSome(pieces, (p) => p.category === "Shoes" && p.style === "Sweet");
      return bagOk && topOk && bottomOk && shoesOk && achDistinctColors(pieces) >= 3;
    },
  },
  {
    id: "dressed_to_kill",
    name: "DRESSED TO KILL",
    lore: "A practical look for an impractical amount of danger.",
    requirementsText: ["At least 1 Armour Top", "At least 1 Daring Bottom", "Moto Boots, Combat Boots or an Armour shoe equipped", "At least 1 Red Bag or Accessory", "Exactly 4 equipped cards"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const topOk = achSome(pieces, (p) => p.category === "Top" && p.style === "Armour");
      const bottomOk = achSome(pieces, (p) => p.category === "Bottom" && p.style === "Daring");
      const shoesOk = achHasAnyName(pieces, ["Moto Boots", "Combat Boots"]) || achSome(pieces, (p) => p.category === "Shoes" && p.style === "Armour");
      const redOk = achSome(pieces, (p) => ["Bag", "Accessory"].includes(p.category) && p.color === "Red");
      return topOk && bottomOk && shoesOk && redOk;
    },
  },
  {
    id: "something_borrowed",
    name: "SOMETHING BORROWED",
    lore: "Something borrowed. Something buried.",
    requirementsText: ["Exactly 4 equipped cards", "Every equipped card is White", "At least 1 Romantic card", "At least 1 Armour card", "At least 1 Elegant card"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const whiteOk = achEvery(pieces, (p) => p.color === "White");
      return whiteOk && achSome(pieces, (p) => p.style === "Romantic") && achSome(pieces, (p) => p.style === "Armour") && achSome(pieces, (p) => p.style === "Elegant");
    },
  },
  {
    id: "rich_and_deceased",
    name: "RICH & DECEASED",
    lore: "Death is no excuse to look inexpensive.",
    requirementsText: ["At least 1 Legendary Top, Bottom or Dress", "At least 1 Elegant shoe", "At least 1 Elegant Bag", "At least 1 Gold Accessory", "Exactly 4 equipped cards"],
    test(pieces) {
      if (pieces.length !== 4) return false;
      const legendaryOk = achSome(pieces, (p) => ["Top", "Bottom", "Dress"].includes(p.category) && p.rarity === "Legendary");
      const shoeOk = achSome(pieces, (p) => p.category === "Shoes" && p.style === "Elegant");
      const bagOk = achSome(pieces, (p) => p.category === "Bag" && p.style === "Elegant");
      const accOk = achSome(pieces, (p) => p.category === "Accessory" && p.color === "Gold");
      return legendaryOk && shoeOk && bagOk && accOk;
    },
  },
  {
    id: "beautiful_corpse",
    name: "BEAUTIFUL CORPSE",
    lore: "Anatomically questionable. Impeccably accessorised.",
    requirementsText: ["Skeleton Dress equipped", "At least 1 Elegant shoe", "At least 1 Elegant Bag or Accessory", "Every equipped card is Black or Silver", "At least 3 equipped cards total"],
    test(pieces) {
      if (pieces.length < 3) return false;
      if (!achHasName(pieces, "Skeleton Dress")) return false;
      const shoeOk = achSome(pieces, (p) => p.category === "Shoes" && p.style === "Elegant");
      const bagAccOk = achSome(pieces, (p) => ["Bag", "Accessory"].includes(p.category) && p.style === "Elegant");
      const colorsOk = achEvery(pieces, (p) => ["Black", "Silver"].includes(p.color));
      return shoeOk && bagAccOk && colorsOk;
    },
  },
];

const RESTRICTED_PHASES = {
  castle: [
    "The guards glance at you as you approach, then look away.",
    "The guards look faintly annoyed this time. One mutters something to the other.",
    "They ignore you completely now. Not even a glance.",
    "\u201CYou need to leave,\u201D one guard says, not unkindly. \u201CNow.\u201D",
  ],
  // garden's 4-phase cycle is superseded by nightgardenOpen()'s pure seasonal
  // gate (see renderGarden()) — kept here only so restrictedPhase.garden
  // doesn't need to be scrubbed from old state, never read anymore.
  garden: [
    "The gate is locked. No sign, no explanation.",
    "You notice movement behind the hedges. Or maybe not.",
    "A faint smell of something blooming drifts over the wall. You still can't get in.",
    "Whatever's in there, it's not ready for visitors. Not yet.",
  ],
};

const MANNEQUIN_PUZZLES = {
  "1-spring": {
    mode: "TEXT_RIDDLE",
    note: "Something old. Something new. Something borrowed. Something ____.",
    matches: (c) => c.color === "Blue",
    afterSolving: "\u2019Til death do us part. Or life. One of them.",
  },
  "1-summer": {
    mode: "TEXT_RIDDLE",
    note: "I am not alive, but I grow. I have no lungs, but I need air.",
    matches: (c) => c.color === "Red",
    afterSolving: "There is a fire burning not far from here.",
  },
  "1-autumn": {
    mode: "COMPLETE_ROW",
    lockedIds: [316, 434, 310], // Floral Top (Top) / Spring Skirt (Bottom) / Flower Basket Iconic (Bag)
    requiredCategory: "Dress",
    matches: (c) => c.style === "Romantic" && c.category === "Dress",
    afterSolving: "The mannequin looks pleased. Somehow.",
  },
  "1-winter": {
    mode: "COMPLETE_ROW",
    lockedIds: [30, 409, 320], // Vivien Corset (Top) / Green Pouch (Bag) / Fluffy Leather (Jacket)
    requiredCategory: "Shoes",
    matches: (c) => c.style === "Cool" && c.category === "Shoes",
    afterSolving: "Cool. Apparently literally.",
  },
  "2-spring": {
    mode: "TEXT_RIDDLE",
    note: "Everyone wants to become me. Once everybody does, I cease to exist.",
    matches: (c) => c.rarity === "Rare",
    afterSolving: "Funny how exclusivity works.",
  },
  "2-summer": {
    mode: "COMPLETE_ROW",
    // Named explicitly in the spec -- Moon Earrings is intentionally
    // "Elegant" style, not "Armour"; it's here only to fill the Accessory
    // slot visually. Do not retag it.
    lockedIds: [338, 341, 418], // Moon Cuirass (Top) / Moon Pants (Bottom) / Moon Earrings (Accessory)
    requiredCategory: "Shoes",
    matches: (c) => c.style === "Armour" && c.category === "Shoes",
    afterSolving: "In the end, it didn't protect him from either, did it?",
  },
  "2-autumn": {
    mode: "COMPLETE_ROW",
    // Rarity ladder only -- no category requirement, per spec.
    lockedIds: [40, 39, 323], // Slip Dress (Basic) -> Ruffled Maxiskirt (Uncommon) -> Green Corset (Rare)
    requiredCategory: null,
    matches: (c) => c.rarity === "Iconic",
    afterSolving: "Up you go.",
  },
  "2-winter": {
    mode: "COMPLETE_ROW",
    // The only COMPLETE_ROW puzzle with accompanying flavor text -- shown as
    // a caption above the row, not a solvable riddle (mode stays COMPLETE_ROW).
    flavorCaption: "Everyone's final outfit.",
    lockedIds: [31, 360, 402], // Corset Top (Top) / Rose Skirt (Bottom) / Croc Bag Black (Bag)
    requiredCategory: "Shoes",
    matches: (c) => c.color === "Black" && c.category === "Shoes",
    afterSolving: "There are no funerals here.",
  },
};

const OLD_QUARTER_OBSERVATIONS = {
  "1-spring": [
    "Someone has planted flowers in every crack in the pavement. Nobody knows who.",
    "The flower shop has put out a sign: PLEASE STOP ASKING IF THE FLOWERS ARE DEAD.",
    "The Old Quarter smells faintly of rain and perfume.",
    "Three windows have flower boxes. Two contain flowers.",
    "A handwritten sign says SPRING SALE. The shop behind it has been abandoned for eighty years.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "1-summer": [
    "Every window in the Old Quarter is open. Somehow, you still haven't seen anyone living upstairs.",
    "A cat is asleep in the middle of the street. Everyone is walking around it.",
    "The stone walls are warm from the sun. The shadows aren't.",
    "Somewhere nearby, something is burning. Nobody seems particularly concerned.",
    "Someone has left a chair in the middle of the street. It is occupied by a cat.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "1-autumn": [
    "Dead leaves collect in the gutters. Best not to think too hard about where they came from.",
    "The Old Quarter looks good in autumn. It knows.",
    "Someone has put candles in every second window.",
    "A black cat follows you for three streets. On the fourth, it's grey.",
    "The wind sends a newspaper chasing you down the street. You lose.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "1-winter": [
    "Someone has knitted tiny scarves for the stone gargoyles.",
    "Snow has covered most of the street signs. Nobody seems inconvenienced.",
    "Someone has swept the snow from the pavement in front of a shop that hasn't opened in years.",
    "A single pair of footprints crosses the square and stops in the middle.",
    "Every chimney is smoking. You have never seen anyone buy firewood.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "2-spring": [
    "The flowers are back in the pavement cracks. Different colors this year.",
    "The flower shop has replaced last year's sign. This one just says: YES, THEY'RE REAL.",
    "Someone has tied ribbons around the old street lamps. Nobody has taken responsibility.",
    "A tiny table has appeared outside a closed shop. There is tea on it. Still warm.",
    "The gargoyles have lost their winter scarves. One is still wearing a hat.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "2-summer": [
    "Someone has dragged a piano into the street. Nobody is playing it.",
    "The fountain is full of flower petals and three Moon Coins. You leave the coins where they are.",
    "A shopkeeper is arguing with a cat. The cat appears to be winning.",
    "The heat has warped an old CLOSED sign until it almost reads COLD.",
    "Somewhere nearby, glass breaks. A moment later someone applauds.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "2-autumn": [
    "The candles are back in the windows. This year, every third one is blue.",
    "A pile of leaves moves against the wind. A cat emerges looking offended.",
    "Someone has chalked arrows onto the pavement. They point in a circle.",
    "The expensive boutique is still closed. The display has changed.",
    "For a second, you could swear one of the mannequins in an upstairs window moved.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
  "2-winter": [
    "Someone has knitted new scarves for the stone gargoyles. One of them is wearing yours better than you would.",
    "The snow is untouched except for a trail of cat prints leading straight into a wall.",
    "A wreath hangs on the door of the abandoned boutique. It wasn't there yesterday.",
    "The street lamps flicker on one by one as you walk past them.",
    "A snowman stands at the end of the street. Yesterday there were two.",
    "Nothing unusual is happening in the Old Quarter tonight.",
  ],
};

const OLD_QUARTER_ENCOUNTERS = {
  "1-spring": [
    {
      id: "juniper_octavia_y1",
      cast: ["juniper"], // Core Four on screen: skipped once any of them has died
      eligible: () => metOctavia && !seenOldQuarterEncounters["juniper_octavia_y1"],
      render: () => renderOldQuarterEncounterLines("juniper_octavia_y1", [
        { who: "NARRATION", t: "Juniper and Octavia are standing outside the flower shop." },
        { who: "NARRATION", t: "They're deep in conversation." },
        { who: "NARRATION", t: "You take a few steps closer." },
        { who: "NARRATION", t: "They both stop talking." },
        { who: "YOU", t: "Hi?" },
        { who: "JUNIPER", t: "Hi!" },
        { who: "OCTAVIA", t: "Hello." },
        { who: "NARRATION", t: "Silence." },
        { who: "YOU", t: "Did I interrupt something?" },
        { who: "JUNIPER", t: "No." },
        { who: "OCTAVIA", t: "Yes." },
        { who: "NARRATION", t: "Juniper looks at her." },
        { who: "OCTAVIA", t: "What?" },
        { who: "NARRATION", t: "They don't continue until you've walked away." },
      ]),
    },
    {
      id: "margo_juniper_plant_y1",
      cast: ["margo", "juniper"], // Core Four on screen: skipped once any of them has died
      eligible: () => !seenOldQuarterEncounters["margo_juniper_plant_y1"],
      render: () => renderOldQuarterEncounterLines("margo_juniper_plant_y1", [
        { who: "NARRATION", t: "Juniper is holding a small potted plant. Margo is inspecting it like evidence." },
        { who: "MARGO", t: "Too much water." },
        { who: "JUNIPER", t: "It rained." },
        { who: "MARGO", t: "Plants don't care whose fault it was." },
        { who: "YOU", t: "Is it dying?" },
        { who: "JUNIPER", t: "No." },
        { who: "MARGO", t: "Not anymore." },
        { who: "NARRATION", t: "Margo takes the plant." },
        { who: "JUNIPER", t: "You said you didn't want it." },
        { who: "MARGO", t: "I changed my mind." },
        { who: "NARRATION", t: "Juniper smiles. Margo notices." },
        { who: "MARGO", t: "Don't." },
      ]),
    },
  ],
  "1-summer": [
    {
      id: "holly_icecream_y1",
      cast: ["holly"], // Core Four on screen: skipped once any of them has died
      eligible: () => !seenOldQuarterEncounters["holly_icecream_y1"],
      render: () => renderOldQuarterEncounterLines("holly_icecream_y1", [
        { who: "NARRATION", t: "Holly is sitting on the edge of a fountain, eating an ice cream." },
        { who: "YOU", t: "Didn't expect to see you doing that." },
        { who: "HOLLY", t: "Eating?" },
        { who: "YOU", t: "Enjoying yourself." },
        { who: "NARRATION", t: "She looks at the ice cream." },
        { who: "HOLLY", t: "It's adequate." },
        { who: "YOU", t: "What flavor?" },
        { who: "HOLLY", t: "Vanilla." },
        { who: "NARRATION", t: "Of course it is." },
      ]),
    },
    {
      id: "juniper_ivy_ride_y1",
      cast: ["juniper", "ivy"], // Core Four on screen: skipped once any of them has died
      eligible: () => !seenOldQuarterEncounters["juniper_ivy_ride_y1"],
      render: () => renderOldQuarterEncounterLines("juniper_ivy_ride_y1", [
        { who: "NARRATION", t: "Ivy's bike is parked by the fountain." },
        { who: "NARRATION", t: "Juniper is standing beside it with both hands on her knees." },
        { who: "YOU", t: "Are you okay?" },
        { who: "JUNIPER", t: "Yes." },
        { who: "IVY", t: "She's fine." },
        { who: "JUNIPER", t: "I briefly saw the entire city sideways." },
        { who: "IVY", t: "You said faster." },
        { who: "JUNIPER", t: "I panicked." },
        { who: "IVY", t: "You said it twice." },
        { who: "NARRATION", t: "Juniper straightens up." },
        { who: "JUNIPER", t: "Could we do it again?" },
        { who: "NARRATION", t: "Ivy grins." },
      ]),
    },
  ],
  "1-autumn": [
    {
      id: "margo_judging_y1",
      cast: ["margo"], // Core Four on screen: skipped once any of them has died
      eligible: () => !seenOldQuarterEncounters["margo_judging_y1"],
      render: () => renderOldQuarterEncounterLines("margo_judging_y1", [
        { who: "NARRATION", t: "Margo is looking through the window of a very expensive-looking boutique." },
        { who: "YOU", t: "It's closed." },
        { who: "MARGO", t: "I know." },
        { who: "YOU", t: "Then what are you doing?" },
        { who: "MARGO", t: "Judging." },
      ]),
    },
    {
      id: "margo_ivy_delivery_y1",
      cast: ["margo", "ivy"], // Core Four on screen: skipped once any of them has died
      eligible: () => !seenOldQuarterEncounters["margo_ivy_delivery_y1"],
      render: () => renderOldQuarterEncounterLines("margo_ivy_delivery_y1", [
        { who: "NARRATION", t: "Ivy hands Margo a narrow parcel wrapped in brown paper." },
        { who: "MARGO", t: "You're late." },
        { who: "IVY", t: "I'm dead. My schedule opened up." },
        { who: "MARGO", t: "And yet." },
        { who: "IVY", t: "You want the parcel or the apology?" },
        { who: "MARGO", t: "The parcel." },
        { who: "IVY", t: "Good. I didn't bring the other one." },
        { who: "NARRATION", t: "Margo checks the wrapping." },
        { who: "MARGO", t: "Your left brake is catching." },
        { who: "NARRATION", t: "Ivy stops." },
        { who: "IVY", t: "No, it isn't." },
        { who: "MARGO", t: "Fine." },
        { who: "NARRATION", t: "Ivy looks back at the bike." },
      ]),
    },
  ],
  "1-winter": [
    {
      id: "ivy_bike_y1",
      cast: ["ivy"], // Core Four on screen: skipped once any of them has died
      eligible: () => !seenOldQuarterEncounters["ivy_bike_y1"],
      render: () => renderOldQuarterIvyBikeScene(),
    },
    {
      id: "helena_juliette_offduty_y1",
      eligible: () => metHelena && metJuliette && !seenOldQuarterEncounters["helena_juliette_offduty_y1"],
      render: () => renderOldQuarterEncounterLines("helena_juliette_offduty_y1", [
        { who: "NARRATION", t: "Helena and Juliette are sitting on the steps outside a closed shop, sharing a paper bag of something fried." },
        { who: "NARRATION", t: "They both stand when they see you." },
        { who: "YOU", t: "You can sit." },
        { who: "NARRATION", t: "Juliette sits." },
        { who: "NARRATION", t: "Helena remains standing." },
        { who: "JULIETTE", t: "She's bad at this." },
        { who: "HELENA", t: "At what?" },
        { who: "JULIETTE", t: "Not being at work." },
        { who: "NARRATION", t: "Helena slowly sits down." },
      ]),
    },
  ],
  "2-spring": [
    {
      // Continuity: if the Y1 scene was missed, play it now instead of the
      // Y2 follow-up; once Y1 is caught up, a later visit plays the real Y2 scene.
      id: "juniper_octavia_y2_slot",
      cast: ["juniper"], // Core Four on screen: skipped once any of them has died
      eligible: () => metOctavia && !seenOldQuarterEncounters["juniper_octavia_y2"],
      render: () => {
        if (!seenOldQuarterEncounters["juniper_octavia_y1"]) {
          renderOldQuarterEncounterLines("juniper_octavia_y1", [
            { who: "NARRATION", t: "Juniper and Octavia are standing outside the flower shop." },
            { who: "NARRATION", t: "They're deep in conversation." },
            { who: "NARRATION", t: "You take a few steps closer." },
            { who: "NARRATION", t: "They both stop talking." },
            { who: "YOU", t: "Hi?" },
            { who: "JUNIPER", t: "Hi!" },
            { who: "OCTAVIA", t: "Hello." },
            { who: "NARRATION", t: "Silence." },
            { who: "YOU", t: "Did I interrupt something?" },
            { who: "JUNIPER", t: "No." },
            { who: "OCTAVIA", t: "Yes." },
            { who: "NARRATION", t: "Juniper looks at her." },
            { who: "OCTAVIA", t: "What?" },
            { who: "NARRATION", t: "They don't continue until you've walked away." },
          ]);
          return;
        }
        renderOldQuarterEncounterLines("juniper_octavia_y2", [
          { who: "NARRATION", t: "Juniper and Octavia are outside the flower shop again." },
          { who: "NARRATION", t: "This time they notice you before you notice them." },
          { who: "NARRATION", t: "They stop talking." },
          { who: "YOU", t: "Again?" },
          { who: "JUNIPER", t: "Again what?" },
          { who: "YOU", t: "Whatever this is." },
          { who: "OCTAVIA", t: "A conversation." },
          { who: "YOU", t: "Clearly." },
          { who: "JUNIPER", t: "You make it sound suspicious." },
          { who: "NARRATION", t: "Octavia looks at Juniper." },
          { who: "OCTAVIA", t: "It is a little suspicious." },
          { who: "NARRATION", t: "Juniper sighs." },
        ]);
      },
    },
    {
      id: "juniper_holly_repairs_y2",
      cast: ["juniper", "holly"], // Core Four on screen: skipped once any of them has died
      eligible: () => !seenOldQuarterEncounters["juniper_holly_repairs_y2"],
      render: () => renderOldQuarterEncounterLines("juniper_holly_repairs_y2", [
        { who: "NARRATION", t: "Holly is tightening a loose hinge on a flower stand while Juniper holds the screws." },
        { who: "YOU", t: "Do you work here now?" },
        { who: "HOLLY", t: "No." },
        { who: "JUNIPER", t: "She said it was badly constructed." },
        { who: "HOLLY", t: "It was." },
        { who: "JUNIPER", t: "Then she found tools." },
        { who: "HOLLY", t: "They were inadequate." },
        { who: "NARRATION", t: "Juniper hands her another screw." },
        { who: "JUNIPER", t: "You've been here an hour." },
        { who: "HOLLY", t: "The hinge was worse than I thought." },
      ]),
    },
  ],
  "2-summer": [
    {
      // Continuity: no catch-up for this one -- if Y1 vanilla was missed,
      // this slot simply isn't eligible and an observation is used instead.
      id: "holly_pistachio_y2",
      cast: ["holly"], // Core Four on screen: skipped once any of them has died
      eligible: () => !!seenOldQuarterEncounters["holly_icecream_y1"] && !seenOldQuarterEncounters["holly_pistachio_y2"],
      render: () => renderOldQuarterEncounterLines("holly_pistachio_y2", [
        { who: "NARRATION", t: "Holly is sitting by the fountain again." },
        { who: "NARRATION", t: "She is eating ice cream." },
        { who: "YOU", t: "Vanilla?" },
        { who: "HOLLY", t: "Pistachio." },
        { who: "NARRATION", t: "You stare at her." },
        { who: "HOLLY", t: "People change." },
        { who: "YOU", t: "This feels significant." },
        { who: "HOLLY", t: "It isn't." },
      ]),
    },
    {
      id: "ivy_holly_bike_question_y2",
      cast: ["ivy", "holly"], // Core Four on screen: skipped once any of them has died
      eligible: () => !seenOldQuarterEncounters["ivy_holly_bike_question_y2"],
      render: () => renderOldQuarterEncounterLines("ivy_holly_bike_question_y2", [
        { who: "NARRATION", t: "Holly is standing beside Ivy's bike, studying it with alarming concentration." },
        { who: "IVY", t: "No." },
        { who: "HOLLY", t: "I didn't ask anything." },
        { who: "IVY", t: "You were going to." },
        { who: "NARRATION", t: "Holly looks at the bike." },
        { who: "HOLLY", t: "How fast?" },
        { who: "NARRATION", t: "Ivy grins." },
        { who: "IVY", t: "There it is." },
        { who: "HOLLY", t: "That wasn't permission." },
        { who: "IVY", t: "Didn't say it was." },
      ]),
    },
  ],
  "2-autumn": [
    {
      // Continuity: has a Y1 catch-up, same pattern as juniper_octavia_y2_slot.
      id: "margo_judging_y2_slot",
      cast: ["margo"], // Core Four on screen: skipped once any of them has died
      eligible: () => !seenOldQuarterEncounters["margo_judging_y2"],
      render: () => {
        if (!seenOldQuarterEncounters["margo_judging_y1"]) {
          renderOldQuarterEncounterLines("margo_judging_y1", [
            { who: "NARRATION", t: "Margo is looking through the window of a very expensive-looking boutique." },
            { who: "YOU", t: "It's closed." },
            { who: "MARGO", t: "I know." },
            { who: "YOU", t: "Then what are you doing?" },
            { who: "MARGO", t: "Judging." },
          ]);
          return;
        }
        renderOldQuarterEncounterLines("margo_judging_y2", [
          { who: "NARRATION", t: "Margo is standing in front of the same expensive boutique." },
          { who: "YOU", t: "Still closed." },
          { who: "MARGO", t: "Obviously." },
          { who: "YOU", t: "Still judging?" },
          { who: "MARGO", t: "They changed the display." },
          { who: "YOU", t: "Better?" },
          { who: "MARGO", t: "Worse." },
          { who: "NARRATION", t: "She looks genuinely offended." },
        ]);
      },
    },
    {
      id: "margo_holly_rules_y2",
      cast: ["margo", "holly"], // Core Four on screen: skipped once any of them has died
      eligible: () => !seenOldQuarterEncounters["margo_holly_rules_y2"],
      render: () => renderOldQuarterEncounterLines("margo_holly_rules_y2", [
        { who: "NARRATION", t: "Margo and Holly are standing beneath an old street sign." },
        { who: "MARGO", t: "It used to mean something else." },
        { who: "HOLLY", t: "The rule?" },
        { who: "MARGO", t: "The street." },
        { who: "HOLLY", t: "Things change." },
        { who: "MARGO", t: "Rules change." },
        { who: "HOLLY", t: "Principles shouldn't." },
        { who: "NARRATION", t: "Margo looks at her for a moment." },
        { who: "MARGO", t: "That's a very expensive way to live." },
        { who: "HOLLY", t: "I know." },
      ]),
    },
  ],
  "2-winter": [
    {
      // Continuity: no catch-up -- if Y1 bike scene was missed, use an
      // observation instead (per the doc, unlike the other two Y2 follow-ups).
      id: "ivy_pickup_y2",
      cast: ["ivy"], // Core Four on screen: skipped once any of them has died
      eligible: () => !!seenOldQuarterEncounters["ivy_bike_y1"] && !seenOldQuarterEncounters["ivy_pickup_y2"],
      render: () => renderOldQuarterEncounterLines("ivy_pickup_y2", [
        { who: "NARRATION", t: "Ivy's bike is parked in almost the same place as last winter." },
        { who: "NARRATION", t: "This time you keep a respectful distance." },
        { who: "NARRATION", t: "Mostly." },
        { who: "NARRATION", t: "Ivy comes out of the building carrying nothing." },
        { who: "YOU", t: "Delivery?" },
        { who: "IVY", t: "Pickup." },
        { who: "YOU", t: "You're not carrying anything." },
        { who: "IVY", t: "Exactly." },
        { who: "NARRATION", t: "She swings onto the bike." },
        { who: "YOU", t: "That explained absolutely nothing." },
        { who: "IVY", t: "Good." },
        { who: "NARRATION", t: "She leaves." },
      ]),
    },
    {
      id: "margo_juniper_winter_plant_y2",
      cast: ["margo", "juniper"], // Core Four on screen: skipped once any of them has died
      eligible: () => !seenOldQuarterEncounters["margo_juniper_winter_plant_y2"],
      render: () => renderOldQuarterEncounterLines("margo_juniper_winter_plant_y2", [
        { who: "NARRATION", t: "Juniper is showing Margo a tiny green shoot growing from a cracked stone planter." },
        { who: "JUNIPER", t: "It shouldn't be growing." },
        { who: "MARGO", t: "You've said that before." },
        { who: "JUNIPER", t: "It's winter." },
        { who: "MARGO", t: "Still dead." },
        { who: "JUNIPER", t: "That's not how plants work." },
        { who: "MARGO", t: "Not how you remember them working." },
        { who: "NARRATION", t: "Juniper goes quiet." },
        { who: "NARRATION", t: "Margo crouches beside the plant." },
        { who: "MARGO", t: "Bring me a cutting when it's stronger." },
        { who: "JUNIPER", t: "You want one?" },
        { who: "MARGO", t: "For research." },
        { who: "NARRATION", t: "Juniper smiles." },
        { who: "MARGO", t: "Don't." },
      ]),
    },
  ],
};

const MAYA_FIRST_SCENE = [
  { who: "MAYA", t: "You're the stylist." },
  { who: "YOU", t: "How do you know?" },
  { who: "MAYA", t: "Look at you." },
  { who: "YOU", t: "What's that supposed to mean?" },
  { who: "MAYA", t: "Exactly what you're worried it means." },
];

const MAYA_AMBIENT = [
  [{ who: "MAYA", t: "Holly was here yesterday." }, { who: "YOU", t: "She comes here?" }, { who: "MAYA", t: "Everyone comes here eventually." }],
  // MAYA_AMB_02 is flavor only — no Ivy debt quest or Moon Coin transfer.
  [{ who: "MAYA", t: "Ivy owes me three Moon Coins." }, { who: "YOU", t: "For what?" }, { who: "MAYA", t: "Ask her." }, { who: "NARRATION", t: "Maya goes back to her drink." }],
  [{ who: "MAYA", t: "The Castle's busy tonight." }, { who: "YOU", t: "How can you tell?" }, { who: "MAYA", t: "Helena hasn't been in for six days." }],
  [{ who: "MAYA", t: "Octavia likes you." }, { who: "YOU", t: "She does?" }, { who: "MAYA", t: "Probably." }, { who: "YOU", t: "That's reassuring." }, { who: "MAYA", t: "It shouldn't be." }],
  [{ who: "YOU", t: "Do you always sit here?" }, { who: "MAYA", t: "No." }, { who: "YOU", t: "I've only ever seen you here." }, { who: "MAYA", t: "Then your sample size is poor." }],
  [{ who: "YOU", t: "What are you drinking?" }, { who: "MAYA", t: "Something you don't like." }, { who: "YOU", t: "You don't know that." }, { who: "MAYA", t: "I know enough." }],
];

const MAYA_ATTIC_HINT_SCENE = [
  { who: "MAYA", t: "You've never been upstairs." },
  { who: "YOU", t: "There's an upstairs?" },
  { who: "MAYA", t: "Apparently not for you." },
  { who: "YOU", t: "What's up there?" },
  { who: "MAYA", t: "Dust." },
  { who: "NARRATION", t: "She looks toward the ceiling." },
  { who: "MAYA", t: "Mostly." },
  { who: "YOU", t: "How do I get in?" },
  { who: "MAYA", t: "With a key." },
  { who: "YOU", t: "Helpful." },
  { who: "MAYA", t: "Last person I saw carrying it was a Castle guard." },
  { who: "YOU", t: "Helena?" },
  { who: "MAYA", t: "No." },
];

const MAYA_PHOTO_REACTION = [
  { who: "YOU", t: "I found this upstairs." },
  { who: "NARRATION", t: "Maya takes the faded photograph. She looks at it longer than you expected." },
  { who: "YOU", t: "That's you." },
  { who: "MAYA", t: "Looks like me." },
  { who: "YOU", t: "And Juliette." },
  { who: "MAYA", t: "Looks like her." },
  { who: "YOU", t: "When was this taken?" },
  { who: "NARRATION", t: "Maya hands it back." },
  { who: "MAYA", t: "You ask very expensive questions." },
];

const MAYA_BACKROOM_REACTION = [
  { who: "YOU", t: "I found the room behind the Café." },
  { who: "NARRATION", t: "Maya takes a sip." },
  { who: "MAYA", t: "Did you." },
  { who: "YOU", t: "You knew." },
  { who: "MAYA", t: "Obviously." },
  { who: "YOU", t: "Why didn't you tell me?" },
  { who: "MAYA", t: "You found it." },
  { who: "YOU", t: "That's not an answer." },
  { who: "MAYA", t: "It wasn't a question worth answering." },
];

const CAFE_BACK_DOOR_LINES = [
  { who: "NARRATION", t: "At the far end of the Café, behind a stack of empty crates, is a narrow door." },
  { who: "NARRATION", t: "You are certain it was there before." },
  { who: "NARRATION", t: "You are less certain why you never noticed it." },
];

const ATTIC_FIRST_SCENE = [
  { who: "NARRATION", t: "The attic is disappointingly ordinary." },
  { who: "NARRATION", t: "Boxes. Old chairs. Menus tied with string. Coats nobody came back for." },
  { who: "NARRATION", t: "A painted Café sign leans against the wall. Same name. Different lettering." },
  { who: "NARRATION", t: "It looks decades older than the sign downstairs." },
  { who: "NARRATION", t: "On top of a box is a faded photograph." },
];

const ATTIC_PHOTO_TAKEN_LINES = [
  { who: "NARRATION", t: "Two women are standing outside the Café." },
  { who: "NARRATION", t: "One looks like Maya." },
  { who: "NARRATION", t: "The other looks like Juliette." },
  { who: "NARRATION", t: "There is no date." },
];

const ATTIC_MENUS_SCENE = [
  { who: "NARRATION", t: "A stack of old menus has been tied with black ribbon." },
  { who: "NARRATION", t: "Prices change from page to page. The drinks barely do." },
  { who: "NARRATION", t: "One order appears over and over in the margins in the same handwriting." },
  { who: "NARRATION", t: "It is the drink Maya is usually holding downstairs." },
];

const ATTIC_COAT_SCENE = [
  { who: "NARRATION", t: "An old black staff coat hangs behind a wardrobe." },
  { who: "NARRATION", t: "Inside the lining is a small embroidered crest." },
  { who: "NARRATION", t: "It matches the crest on the Night Castle gate." },
];

const ATTIC_REPEAT_POOL = [
  { id: "dust", t: "Dust moves in the light from the small window. Nothing else has changed." },
  { id: "guestbook", t: "An old guestbook lies open on a table. Several pages have been torn out." },
  { id: "frame", t: "An empty frame has been placed face-down on a box." },
  { id: "lostproperty", t: "Something is caught beneath a pile of old coats." },
];

const QUARTETT_OPPONENTS = {
  maya: {
    name: "Maya",
    portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_maya.png",
    fallbackBg: "#2c2432",
    pool: () => DECK.filter((c) => ["Cool", "Minimal", "Classic"].includes(c.style)),
    lines: {
      intro: [
        [{ who: "MAYA", t: "Cards. Sit." }],
        [{ who: "YOU", t: "Best of five?" }, { who: "MAYA", t: "If you last that long." }],
      ],
      roundOpponentWins: ["Mm.", "Predictable.", "As expected."],
      roundPlayerWins: ["Lucky.", "Fine.", "Noted."],
      roundDraw: ["Boring.", "That helped no one."],
      matchPlayerWin: [[
        { who: "MAYA", t: "Take it." },
        { who: "NARRATION", t: "She slides a card across the table without looking up." },
        { who: "MAYA", t: "I wasn't using it." },
      ]],
      matchPlayerLoss: [[
        { who: "MAYA", t: "Again?" }, { who: "YOU", t: "No." }, { who: "MAYA", t: "Smart." },
      ]],
      matchDraw: [[
        { who: "MAYA", t: "A draw." }, { who: "MAYA", t: "How diplomatic of us." },
      ]],
    },
  },
  margo: {
    name: "Margo",
    portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_margo.png",
    fallbackBg: "#2a2a2a",
    // Hidden preferences: Black, Red, Elegant, Classic, Fitted, Bold.
    pool: () => DECK.filter((c) => ["Elegant", "Classic", "Bold"].includes(c.style) || ["Black", "Red"].includes(c.color)),
    lines: {
      intro: [
        [{ who: "MARGO", t: "You want to play cards with me." }, { who: "YOU", t: "Is that a problem?" }, { who: "MARGO", t: "Only for you." }],
        [{ who: "MARGO", t: "Sit. Lose gracefully." }],
      ],
      roundOpponentWins: ["Obviously.", "Predictable.", "I taught you nothing, apparently."],
      roundPlayerWins: ["Fine.", "Don't gloat.", "Acceptable."],
      roundDraw: ["How dull.", "Nobody wins that. Ever."],
      matchPlayerWin: [[
        { who: "MARGO", t: "Take it." },
        { who: "NARRATION", t: "She pushes a card across the table like it's beneath her." },
        { who: "MARGO", t: "Don't get used to that." },
      ]],
      matchPlayerLoss: [[
        { who: "MARGO", t: "Again?" }, { who: "YOU", t: "Maybe later." }, { who: "MARGO", t: "Wise, for once." },
      ]],
      matchDraw: [[
        { who: "MARGO", t: "A draw." }, { who: "MARGO", t: "Unsatisfying. Like beige." },
      ]],
    },
  },
  juniper: {
    name: "Juniper",
    portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_juniper.png",
    fallbackBg: "#3a4433",
    // Hidden preferences: Green, Romantic, Cozy, Sweet, Relaxed.
    pool: () => DECK.filter((c) => ["Romantic", "Cozy", "Sweet"].includes(c.style) || c.color === "Green"),
    lines: {
      intro: [
        [{ who: "JUNIPER", t: "Cards? Sure." }, { who: "YOU", t: "You know the rules?" }, { who: "JUNIPER", t: "I know plants better." }],
        [{ who: "JUNIPER", t: "Okay. Be gentle with me." }],
      ],
      roundOpponentWins: ["Oh. That one was mine.", "Lucky soil.", "Hm. Good."],
      roundPlayerWins: ["Oh well.", "That's alright.", "You got that one."],
      roundDraw: ["Neither of us, then.", "Like we split a pot."],
      matchPlayerWin: [[
        { who: "JUNIPER", t: "Here." },
        { who: "NARRATION", t: "She slides a card over, a little pleased despite losing." },
        { who: "JUNIPER", t: "It suits you more than me anyway." },
      ]],
      matchPlayerLoss: [[
        { who: "JUNIPER", t: "Sorry." }, { who: "YOU", t: "You don't sound sorry." }, { who: "JUNIPER", t: "I'm working on it." },
      ]],
      matchDraw: [[
        { who: "JUNIPER", t: "A tie." }, { who: "JUNIPER", t: "Very balanced. Very boring." },
      ]],
    },
  },
  ivy: {
    name: "Ivy",
    portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_ivy.png",
    fallbackBg: "#4a2530",
    // Hidden preferences: Black, Cool, Daring, Bold, Relaxed.
    pool: () => DECK.filter((c) => ["Cool", "Daring", "Bold"].includes(c.style) || c.color === "Black"),
    lines: {
      intro: [
        [{ who: "IVY", t: "Cards. Finally, something I'm good at." }, { who: "YOU", t: "Confident." }, { who: "IVY", t: "Always." }],
        [{ who: "IVY", t: "Don't cry when you lose." }],
      ],
      roundOpponentWins: ["Told you.", "Easy.", "Was that supposed to be hard?"],
      roundPlayerWins: ["Huh. Fine.", "Beginner's luck.", "Don't let it go to your head."],
      roundDraw: ["Boring. Rematch that one.", "That doesn't count."],
      matchPlayerWin: [[
        { who: "IVY", t: "Ugh. Fine." },
        { who: "NARRATION", t: "She flicks a card across the table." },
        { who: "IVY", t: "Don't tell anyone I lost." },
      ]],
      matchPlayerLoss: [[
        { who: "IVY", t: "Good game." }, { who: "YOU", t: "You didn't even look at your cards." }, { who: "IVY", t: "Didn't need to." },
      ]],
      matchDraw: [[
        { who: "IVY", t: "A draw?" }, { who: "IVY", t: "That's the least satisfying thing that's ever happened to me." },
      ]],
    },
  },
  holly: {
    name: "Holly",
    portrait: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_holly.png",
    fallbackBg: "#33404a",
    // Hidden preferences: Silver, White, Blue, Classic, Minimal, Regular, Armour.
    pool: () => DECK.filter((c) => ["Classic", "Minimal", "Armour"].includes(c.style) || ["Silver", "White", "Blue"].includes(c.color)),
    lines: {
      intro: [
        [{ who: "HOLLY", t: "A game of cards." }, { who: "YOU", t: "Yes." }, { who: "HOLLY", t: "Very well. I do not lose often." }],
        [{ who: "HOLLY", t: "State the rules. I will not ask twice." }],
      ],
      roundOpponentWins: ["As expected.", "Discipline.", "Correct."],
      roundPlayerWins: ["Noted.", "Adequate.", "Hm."],
      roundDraw: ["A stalemate. Acceptable."],
      matchPlayerWin: [[
        { who: "HOLLY", t: "Take it." },
        { who: "NARRATION", t: "She sets the card down with exact, unnecessary precision." },
        { who: "HOLLY", t: "You earned it. Barely." },
      ]],
      matchPlayerLoss: [[
        { who: "HOLLY", t: "You fought well." }, { who: "YOU", t: "I lost." }, { who: "HOLLY", t: "That is not the same thing." },
      ]],
      matchDraw: [[
        { who: "HOLLY", t: "Neither of us yielded." }, { who: "HOLLY", t: "I respect that." },
      ]],
    },
  },
};

const QUARTETT_LOCKED_LINE = [
  { who: "NARRATION", t: "You've used your hands for the month." }, { who: "NARRATION", t: "Come back when the month turns." },
];

const OCT_FIRST_SCENE = [
  { who: "NARRATION", t: "A woman is standing beside a bed of pale flowers. You are fairly certain she was not there when you entered." },
  { who: "OCTAVIA", t: "You're early." },
  { who: "YOU", t: "For what?" },
  { who: "OCTAVIA", t: "I don't know yet." },
  { who: "YOU", t: "That's not very reassuring." },
  { who: "OCTAVIA", t: "It wasn't meant to be." },
];

const OCTAVIA_AMBIENT = [
  [{ who: "OCTAVIA", t: "The garden doesn't like winter." }, { who: "YOU", t: "Gardens usually don't." }, { who: "OCTAVIA", t: "This one takes it personally." }],
  [{ who: "OCTAVIA", t: "You came back." }, { who: "YOU", t: "You sound surprised." }, { who: "OCTAVIA", t: "I'm not." }],
  [{ who: "YOU", t: "What are you doing?" }, { who: "OCTAVIA", t: "Waiting." }, { who: "YOU", t: "For?" }, { who: "OCTAVIA", t: "Spring." }, { who: "YOU", t: "It is spring." }, { who: "NARRATION", t: "Octavia looks around." }, { who: "OCTAVIA", t: "Not here." }],
  [{ who: "YOU", t: "Do you live here?" }, { who: "OCTAVIA", t: "No." }, { who: "YOU", t: "You're always here." }, { who: "OCTAVIA", t: "Those are different things." }],
  [{ who: "NARRATION", t: "Octavia is tying a strip of white fabric around a dead branch." }, { who: "YOU", t: "What does that do?" }, { who: "OCTAVIA", t: "Nothing." }, { who: "YOU", t: "Then why do it?" }, { who: "OCTAVIA", t: "Not everything needs a job." }],
];

const OCT_SACRIFICE_INTRO_LINES = [
  { who: "NARRATION", t: "Octavia is sitting on the edge of an empty planter. She looks at your card case rather than at you." },
  { who: "OCTAVIA", t: "You brought too much with you." },
  { who: "YOU", t: "Too much what?" },
  { who: "OCTAVIA", t: "Things." },
  { who: "YOU", t: "That clears it up." },
  { who: "OCTAVIA", t: "Leave one." },
  { who: "YOU", t: "Here?" },
  { who: "OCTAVIA", t: "Gone." },
];

const GH_FIRST_LINES = [
  { who: "NARRATION", t: "Most of the roof is cracked. Dead vines hang from the iron ribs of the Glass House." },
  { who: "NARRATION", t: "A long worktable runs beneath the windows. Rusted scissors. Empty bottles. Labels faded white." },
  { who: "NARRATION", t: "In the center planter, every plant is dead except one." },
  { who: "NARRATION", t: "A single chair faces the garden." },
  { who: "NARRATION", t: "Something silver has been left across its back." },
];

const GH_OCTAVIA_SCENE = [
  { who: "NARRATION", t: "Octavia is cutting dead leaves from a plant." },
  { who: "YOU", t: "I thought this place was abandoned." },
  { who: "OCTAVIA", t: "It is." },
  { who: "YOU", t: "You're in it." },
  { who: "OCTAVIA", t: "So are you." },
  { who: "YOU", t: "Was the veil yours?" },
  { who: "OCTAVIA", t: "No." },
  { who: "YOU", t: "Then whose was it?" },
  { who: "OCTAVIA", t: "It remembers her." },
];

const GH_JULIETTE_CLUE_LINES = [
  { who: "NARRATION", t: "A broken pane has been propped open with a curved piece of silver metal." },
  { who: "NARRATION", t: "You've seen that shape before." },
  { who: "NARRATION", t: "It matches the edge of Juliette's armour." },
];

const GH_CULTIVATE_UNLOCK_LINES = [
  { who: "NARRATION", t: "Octavia has cleared one of the empty planters." },
  { who: "OCTAVIA", t: "You can leave something here now." },
  { who: "YOU", t: "Another card?" },
  { who: "OCTAVIA", t: "If you want something else later." },
  { who: "YOU", t: "What grows?" },
  { who: "OCTAVIA", t: "Depends what you bury." },
];

const GH_REPEAT_POOL = [
  { id: "nothing", weight: 30, t: "The Glass House is exactly as you left it. Somehow that feels less reassuring than change would." },
  { id: "flower", weight: 30, t: "A pale flower has opened in the central planter. By the time you touch the leaf, it has already begun to close." },
  { id: "chair", weight: 30, t: "The chair is facing the opposite direction today." },
  { id: "rarefind", weight: 10, t: "Something catches beneath one of the worktables." },
];

const THORN_VEIL = {
  id: 500, name: "Thorn Veil", category: "Accessory", fit: "Regular", style: "Romantic", color: "Silver",
  rarity: "Rare", lore: "Metal thorns twisted into something strangely delicate.", storyCard: true,
};

const CASTLE_GUARDS_FIRST_SCENE = [
  { who: "HELENA", t: "Castle's closed." },
  { who: "NARRATION", t: "The second guard does not look at you. Her eyes stay fixed somewhere beyond the street." },
  { who: "YOU", t: "I gathered that." },
  { who: "HELENA", t: "Good." },
  { who: "YOU", t: "Is she okay?" },
  { who: "NARRATION", t: "Helena glances at the woman beside her." },
  { who: "HELENA", t: "She's Juliette." },
  { who: "NARRATION", t: "Juliette does not react." },
];

const HELENA_AMBIENT = [
  [{ who: "HELENA", t: "Castle's closed." }, { who: "YOU", t: "It was closed yesterday." }, { who: "HELENA", t: "Excellent memory." }],
  [{ who: "YOU", t: "Do you ever get bored standing here?" }, { who: "HELENA", t: "Yes." }, { who: "YOU", t: "That's it?" }, { who: "HELENA", t: "You asked a yes-or-no question." }],
  [{ who: "YOU", t: "What's happening inside?" }, { who: "HELENA", t: "Things that are inside." }, { who: "YOU", t: "You're impossible." }, { who: "HELENA", t: "And yet you keep visiting." }],
  [{ who: "YOU", t: "Do you ever get a day off?" }, { who: "HELENA", t: "Yes." }, { who: "YOU", t: "What do you do?" }, { who: "HELENA", t: "Don't stand at gates." }],
  [{ who: "YOU", t: "Does anyone actually get through here?" }, { who: "HELENA", t: "Yes." }, { who: "YOU", t: "Me?" }, { who: "HELENA", t: "No." }],
  [{ who: "YOU", t: "You know, most places put up a sign." }, { who: "HELENA", t: "Most people understand a closed gate." }],
];

const JULIETTE_AMBIENT = [
  [{ who: "YOU", t: "Hello, Juliette." }, { who: "NARRATION", t: "A long pause." }, { who: "JULIETTE", t: "Hello." }],
  [{ who: "YOU", t: "Do you like working here?" }, { who: "NARRATION", t: "Juliette keeps looking toward the street." }, { who: "JULIETTE", t: "I work here." }],
  [{ who: "YOU", t: "Do you ever leave?" }, { who: "JULIETTE", t: "Sometimes." }, { who: "YOU", t: "Where do you go?" }, { who: "NARRATION", t: "Pause." }, { who: "JULIETTE", t: "Back." }],
  [{ who: "YOU", t: "How long have you been a guard?" }, { who: "NARRATION", t: "A long pause." }, { who: "JULIETTE", t: "Long enough." }],
  [{ who: "YOU", t: "Are you listening to me?" }, { who: "JULIETTE", t: "Yes." }, { who: "YOU", t: "You didn't look at me." }, { who: "JULIETTE", t: "I heard you." }],
];

const JUL_SHIFT_END_SCENE = [
  { who: "HELENA", t: "Your shift ended." },
  { who: "NARRATION", t: "Juliette does not move." },
  { who: "HELENA", t: "Juliette." },
  { who: "NARRATION", t: "Juliette slowly turns her head toward Helena." },
  { who: "JULIETTE", t: "Right." },
  { who: "NARRATION", t: "She walks away without saying goodbye. Helena resumes facing the street." },
];

const JULIETTE_ATTIC_KEY_SCENE = [
  { who: "YOU", t: "Maya said you had a key for the Café." },
  { who: "NARRATION", t: "Juliette does not answer." },
  { who: "YOU", t: "The attic." },
  { who: "NARRATION", t: "She reaches beneath the edge of her armour and pulls out an old brass key." },
  { who: "NARRATION", t: "She stares at it for several seconds." },
  { who: "JULIETTE", t: "I forgot." },
  { who: "YOU", t: "Forgot what?" },
  { who: "NARRATION", t: "Juliette puts the key in your hand." },
  { who: "JULIETTE", t: "Why I had it." },
  { who: "YOU", t: "You don't want it?" },
  { who: "JULIETTE", t: "I had it." },
  { who: "NARRATION", t: "Her attention returns to the street." },
];

const HELENA_PHOTO_REACTION = [
  { who: "NARRATION", t: "Helena looks at the photograph." },
  { who: "HELENA", t: "Where did you get this?" },
  { who: "YOU", t: "Café attic." },
  { who: "NARRATION", t: "She gives it back." },
  { who: "HELENA", t: "Don't bring everything you find to Juliette." },
  { who: "YOU", t: "Why?" },
  { who: "HELENA", t: "Because I asked you not to." },
];

const JULIETTE_PHOTO_REACTION = [
  { who: "YOU", t: "Do you recognize this?" },
  { who: "NARRATION", t: "Juliette looks at the photograph." },
  { who: "NARRATION", t: "A long pause." },
  { who: "JULIETTE", t: "I don't like that dress." },
  { who: "YOU", t: "That's what you noticed?" },
  { who: "NARRATION", t: "Juliette gives the photograph back." },
];

const VALERY_FIRST_EXIT_SCENE = [
  { who: "HELENA", t: "No." },
  { who: "VALERY", t: "That wasn't a question." },
  { who: "HELENA", t: "It was an attempted exit." },
  { who: "VALERY", t: "Exactly." },
  { who: "NARRATION", t: "Valery notices you." },
  { who: "VALERY", t: "Oh. Stylist." },
  { who: "YOU", t: "Are you escaping?" },
  { who: "VALERY", t: "Don't make it sound cheap." },
  { who: "HELENA", t: "She's escaping." },
  { who: "VALERY", t: "Helena has no respect for presentation." },
];

const VALERY_AMBIENT = [
  [{ who: "VALERY", t: "Do you know what the worst thing about a gate is?" }, { who: "YOU", t: "That it's closed?" }, { who: "VALERY", t: "That someone always thinks they're in charge of it." }, { who: "HELENA", t: "I am in charge of it." }],
  [{ who: "VALERY", t: "You should come to the Royal Quarter sometime." }, { who: "HELENA", t: "She shouldn't." }, { who: "VALERY", t: "See? This is why invitations are so exhausting." }],
  [{ who: "YOU", t: "Do you ever walk anywhere without making it an event?" }, { who: "VALERY", t: "Why would I waste the walk?" }],
];

const HELENA_VIRTUAL = {
  name: "Helena", color: "#8ea9c1",
  preferences: [pref("color", "Silver"), pref("style", "Armour"), pref("style", "Classic"), pref("style", "Minimal"), pref("fit", "Regular")],
};

const JULIETTE_VIRTUAL = {
  name: "Juliette", color: "#5a5a66",
  preferences: [pref("color", "Silver"), pref("style", "Armour")], // ONLY these two count for Juliette
};

const GUARD_BRIEF = { want: [req("color", "Silver"), req("style", "Armour")] };

const GUARD_STYLE_REQUEST_SCENE = [
  { who: "HELENA", t: "We need a stylist." },
  { who: "YOU", t: "That sounded dangerously close to asking for my help." },
  { who: "HELENA", t: "Don't make me regret it." },
  { who: "YOU", t: "What's the occasion?" },
  { who: "HELENA", t: "Ceremony." },
  { who: "YOU", t: "For what?" },
  { who: "HELENA", t: "The kind you're not invited to." },
  { who: "NARRATION", t: "Juliette continues staring past the gate." },
  { who: "HELENA", t: "Silver. Armour. For both of us." },
  { who: "YOU", t: "Anything else?" },
  { who: "HELENA", t: "For me? Make it look intentional." },
  { who: "YOU", t: "And Juliette?" },
  { who: "NARRATION", t: "Juliette's gaze does not move." },
  { who: "JULIETTE", t: "Silver. Armour." },
];

const JUL_THORN_REACTION_LINES = [
  { who: "NARRATION", t: "Juliette's hand stops on the Thorn Veil." },
  { who: "NARRATION", t: "For the first time, she looks directly at you." },
  { who: "JULIETTE", t: "Where did you find this?" },
  { who: "YOU", t: "The Glass House." },
  { who: "NARRATION", t: "Her fingers close around one of the metal thorns." },
  { who: "JULIETTE", t: "It's still there." },
  { who: "HELENA", t: "Juliette." },
  { who: "NARRATION", t: "Juliette looks away. The moment is gone." },
];

const VALERY_KEY_FALLBACK_SCENE = [
  { who: "NARRATION", t: "Valery is waiting on the wrong side of the gate, which appears to be causing Helena personal offense." },
  { who: "VALERY", t: "You." },
  { who: "YOU", t: "Me." },
  { who: "VALERY", t: "I decided you need another chance to impress me." },
  { who: "YOU", t: "That's very noble of you." },
  { who: "VALERY", t: "It isn't." },
  { who: "NARRATION", t: "She drops a delicate gold key into your hand." },
  { who: "VALERY", t: "The Royal Garden. Don't embarrass me." },
  { who: "HELENA", t: "You are not supposed to give those away." },
  { who: "VALERY", t: "Then it's fortunate I only gave away one." },
];

const FESTIVAL_REACTIONS = {
  flowerFest: {
    helena: [{ who: "NARRATION", t: "Fresh ribbons have been tied through the Night Castle gate. Helena is cutting one loose with a small knife." }, { who: "HELENA", t: "If one more person ties flowers to government property, I'm arresting the flowers." }],
    juliette: [{ who: "NARRATION", t: "A pink ribbon has caught on Juliette's shoulder plate." }, { who: "YOU", t: "You have something on you." }, { who: "JULIETTE", t: "I know." }, { who: "NARRATION", t: "She does not remove it." }],
    maya: [{ who: "MAYA", t: "Flower Fest makes everyone briefly convinced they're interesting." }, { who: "YOU", t: "And you don't like it?" }, { who: "MAYA", t: "I like the flowers." }],
    octavia: [{ who: "OCTAVIA", t: "They cut too many this year." }, { who: "YOU", t: "The flowers?" }, { who: "OCTAVIA", t: "They notice." }],
    valery: [{ who: "VALERY", t: "Flower Fest is charming from a balcony." }, { who: "YOU", t: "And from the street?" }, { who: "VALERY", t: "Sticky." }],
  },
  summerSolstice: {
    helena: [{ who: "HELENA", t: "Solstice means twice the guests and half the common sense." }, { who: "YOU", t: "You love it." }, { who: "HELENA", t: "Immensely." }],
    juliette: [{ who: "YOU", t: "Do you like Solstice?" }, { who: "JULIETTE", t: "It happens every year." }, { who: "YOU", t: "That's not what I asked." }, { who: "JULIETTE", t: "I know." }],
    maya: [{ who: "MAYA", t: "The Royal Quarter has been polishing itself for a week." }, { who: "YOU", t: "Are you going?" }, { who: "MAYA", t: "I prefer parties I can leave." }],
    octavia: [{ who: "OCTAVIA", t: "Longest day." }, { who: "YOU", t: "You sound unhappy about it." }, { who: "OCTAVIA", t: "The garden prefers the dark." }],
    valery: [{ who: "VALERY", t: "Solstice is the one night everyone tries terribly hard to look effortless." }, { who: "YOU", t: "Including you?" }, { who: "VALERY", t: "Especially me." }],
  },
  moonFest: {
    helena: [{ who: "NARRATION", t: "Someone has placed a black mask over one of the Castle statues." }, { who: "HELENA", t: "I'm leaving it there." }, { who: "YOU", t: "You approve?" }, { who: "HELENA", t: "I'm tired." }],
    juliette: [{ who: "YOU", t: "Everyone's wearing masks tonight." }, { who: "JULIETTE", t: "They do every year." }, { who: "YOU", t: "Do you?" }, { who: "JULIETTE", t: "No." }],
    maya: [{ who: "MAYA", t: "Moon Fest is useful." }, { who: "YOU", t: "For what?" }, { who: "MAYA", t: "People tell the truth when they think a mask makes them someone else." }],
    valery: [{ who: "VALERY", t: "Moon Fest used to have better masks." }, { who: "YOU", t: "How can a mask be better?" }, { who: "VALERY", t: "If you have to ask, yours isn't." }],
  },
  winterSolstice: {
    helena: [{ who: "HELENA", t: "Quiet night." }, { who: "YOU", t: "Is that good?" }, { who: "HELENA", t: "Ask me after midnight." }],
    juliette: [{ who: "YOU", t: "Everyone seems different during Winter Solstice." }, { who: "JULIETTE", t: "They're colder." }, { who: "YOU", t: "That's all?" }, { who: "JULIETTE", t: "Mostly." }],
    maya: [{ who: "MAYA", t: "Winter Solstice is the only time this Café pretends to close early." }, { who: "YOU", t: "Does it?" }, { who: "MAYA", t: "No." }],
    valery: [{ who: "VALERY", t: "Winter Solstice is better indoors." }, { who: "YOU", t: "Because it's warmer?" }, { who: "VALERY", t: "Because everyone looks expensive in candlelight." }],
  },
};

const RG_REPEAT_POOL = [
  { id: "empty", t: "The Garden is empty. Somewhere beyond the wall, a door closes." },
  { id: "delivery", t: "A sealed garment box has been left beside the fountain." },
  { id: "roses", t: "You find a fallen petal. It is the first imperfect thing you have seen here." },
  { id: "lostaccessory", t: "Something silver is caught beneath the hedge." },
];

const VALERY_MICRO_MATCH = { colors: ["Gold", "Pink"], styles: ["Elegant", "Romantic", "Bold"] };

const SECONDARY_PORTRAITS = {
  helena: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_helena.png",
  juliette: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_juliette.png",
  maya: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_maya.png",
  octavia: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_octavia.png",
  valery: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_valery.png",
  irina: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_irina.png",
  lucia: "https://terrirossa.github.io/dead-gorgeous-assets/portraits/portrait_lucia.png",
};

const SECONDARY_PORTRAIT_ORDER = ["helena", "juliette", "maya", "octavia", "valery", "irina", "lucia"];

const EVENT_SCHEDULE = {
  "2-2": "flowerFestComing", "3-2": "flowerFest",
  "5-2": "summerSolstice", "6-2": "royalQuarter",
  "8-2": "moonChanging", "9-2": "moonFest",
  "10-2": "firstSnow",
  "11-1": "winterSolstice", "11-2": "deadDay",
};

const EVENT_SCREENS = {
  // [brief] Opens Year Three, straight after "Begin Year Three".
  yearThreeOpening: {
    lines: ["Three years.", "The city has stopped pretending nothing is changing.", "White figures have become common at the edge of crowds.", "The Castle closes its doors earlier.", "People have started carrying armour to dinner.", "And for the first time, the Studio receives a request that is not about looking good."],
    button: "Return to Aftercity",
  },
  flowerFestComing: {
    lines: ["Overnight, flowers have appeared across After City.", "Around lamp posts.", "Across balconies.", "Through cracks in the pavement.", "You're fairly certain some of those cracks weren't there yesterday."],
    button: "Continue",
  },
  flowerFest: {
    lines: ["For three days, After City smells like somewhere else.", "Flowers cover the streets.", "Couples fill the caf\u00e9s.", "Someone has tied approximately four thousand ribbons to the Night Castle gates.", "The guards do not appear amused."],
    button: "Enter Flower Fest",
  },
  summerSolstice: {
    lines: ["Summer Solstice has arrived.", "White banners stretch across the Royal Quarter.", "Tables appear in streets you aren't allowed to enter.", "Invitations have been arriving all week.", "Yours has not.", "Apparently that's normal."],
    button: "Continue",
  },
  royalQuarter: {
    lines: ["Music carries across After City long after midnight.", "From the Studio window, you can see lights above the Royal Quarter.", "Then\u2014", "every light goes out.", "One.", "Two.", "Three.", "The lights return.", "The next morning, no one mentions it."],
    button: "Back to Aftercity",
  },
  moonChanging: {
    lines: ["Orange lanterns have appeared above the streets.", "Shop windows are filling with masks.", "The Night Caf\u00e9 has extended its opening hours from \u201clate\u201d to \u201cdon't ask.\u201d", "Moon Fest is coming."],
    button: "Continue",
  },
  moonFest: {
    lines: ["The dead celebrate many things.", "Tonight, they celebrate being dead.", "After City stays awake until morning."],
    button: "Enter Moon Fest",
  },
  firstSnow: {
    lines: ["You wake to find After City completely white.", "By noon, every caf\u00e9 is full.", "By evening, tiny lights have appeared in almost every window.", "Yours is the only dark one."],
    button: "Continue",
  },
  firstDay: {
    lines: ["The door closes behind your first client.", "For someone with nowhere left to be, she seemed remarkably busy.", "Outside, After City continues without you.", "Somewhere in the distance, a bell rings three times."],
    button: "Back to After City",
  },
  winterSolstice: {
    lines: ["After City becomes quieter during Winter Solstice.", "Doors close earlier.", "Tables move closer together.", "People wear their finest things underneath very large coats.", "The Nightgarden is closed until further notice."],
    button: "Continue",
  },
  deadDay: {
    lines: ["The final day of the year belongs to the newest dead.", "No fireworks.", "No parade.", "No royal invitations.", "After City simply remembers.", "Candles appear outside doors.", "Names are written on scraps of paper and left beneath them.", "Nobody tells you whose names they are."],
    button: "Continue",
  },
};

const EVENT_BONUSES = {
  flowerFest: { styles: ["Romantic"], colors: ["Pink", "Red", "Green"] },
  summerSolstice: { styles: ["Classic"], colors: ["White", "Blue"] },
  moonFest: { styles: ["Daring", "Bold"], colors: ["Purple", "Black"] },
  firstSnow: { categories: ["Jacket"], styles: ["Cozy"] },
  winterSolstice: { styles: ["Cozy"], rarities: ["Rare", "Iconic", "Legendary"] },
};

const EVENT_LABELS = { flowerFest: "Flower Fest", summerSolstice: "Summer Solstice", moonFest: "Moon Fest", firstSnow: "First Snow", winterSolstice: "Winter Solstice" };

const VALERY_VIRTUAL = {
  name: "Valery", color: "#c9a15a",
  preferences: [pref("color", "Gold"), pref("color", "Pink"), pref("style", "Elegant"), pref("style", "Romantic"), pref("style", "Bold"), pref("fit", "Fitted")],
};

const VALERY_SOLSTICE_BRIEF = { want: [req("style", "Elegant"), req("style", "Classic")] };

/* ===========================================================================
   STUDIO SCHEDULING
   Stages (numbered 1-20 as in the bible) used to play strictly one per visit,
   which put e.g. "You must love Flower Fest" in August and had Margo quote
   Juniper before Juniper had said it. Each visit now plays the earliest stage
   whose conditions are met:
     season -- only in these seasons (spring/summer/autumn/winter)
     after  -- only once these stages have been seen. A bare number is the
               same character; a letter prefix is another character
               (M = Margo, J = Juniper, I = Ivy, H = Holly).
     trigger -- never scheduled; played when something happens in play.
     flag   -- only once this story moment has been witnessed (storyFlags).
   A stage also never plays more than 3 visits ahead of its number, so late
   stages can't jump the queue while an early one waits for its season.
   If nothing is ready, the visit is just the job.
   =========================================================================== */
const STAGE_RULES = {
  0: { // Margo
    2: { after: [1] }, 5: { season: ["spring"] }, 6: { after: ["J8"] }, 7: { after: [6] },
    8: { after: [7] }, 10: { after: [6], flag: "gardenWalkSeen" }, 11: { after: [2] }, 13: { after: [4] },
    14: { after: [13] }, 15: { after: [14] }, 16: { after: [15] }, 17: { after: [8] },
    18: { after: [10], flag: "gardenRitualSeen" }, 19: { after: [18] }, 20: { after: [19] },
  },
  1: { // Juniper
    2: { after: [1] }, 5: { after: [3] }, 6: { season: ["spring"] },
    7: { season: ["spring"], after: ["M5"] }, 9: { after: [8, "M6"] }, 10: { after: [8] },
    11: { season: ["summer"] }, 12: { after: [11] }, 14: { after: [13] }, 15: { after: [14] },
    16: { after: [15] }, 17: { after: ["M18"] }, 18: { after: [17] }, 19: { season: ["winter"] },
    20: { after: [17] },
  },
  2: { // Ivy
    2: { after: [1] }, 4: { after: [3] }, 5: { after: [4] }, 8: { after: [7] }, 9: { after: [8] },
    10: { after: [9] }, 12: { after: [11] }, 13: { season: ["summer"] }, 14: { season: ["summer"] },
    16: { after: [15] }, 17: { after: [5] }, 18: { after: [17] }, 19: { after: [18] }, 20: { after: [19] },
  },
  3: { // Holly
    2: { after: [1] }, 6: { after: [5] }, 7: { after: [6] }, 8: { after: [7] }, 10: { after: [9] },
    11: { after: [10] }, 12: { after: [11] }, 13: { after: [12] }, 14: { after: [13] }, 15: { after: [14] },
    // 17 is the bible's mandatory first-armour scene: it plays on the result
    // screen the first time an Armour card is worn by Holly.
    17: { trigger: "armourOnHolly" }, 18: { after: [17] }, 19: { after: [18] }, 20: { after: [12] },
  },
};

// Stages in which she states what she wants to wear. Those visits use this
// brief instead of a separate brief conversation, so she isn't asked twice.
// usesBrief: the authored brief this stage replaces (so it isn't asked again).
// exclude: things she said she doesn't want ("No pink") -- enforced like an
// action card from the start of the job.
// Anything a brief names in its dialogue is part of its requirements; the
// game makes sure the hand holds at least one card for each requirement
// (see ensureBriefIsDrawable in index.html).
// Hard requirements follow the deck-balanced tiers of the briefing document;
// scarce colours stay hints (softDirection), never hard requirements.
const STAGE_ASKS = {
  0: {
    3: { want: [req("style", "Elegant"), req("fit", "Fitted")], exclude: [{ attr: "color", value: "Beige" }] },
    5: { want: [req("style", "Elegant"), req("color", "Black")], exclude: [{ attr: "color", value: "Pink" }] },
    9: { want: [req("fit", "Fitted"), req("color", "Black"), req("style", "Elegant")] },
  },
  1: {
    1: { want: [req("style", "Romantic"), req("color", "Green")], usesBrief: 0 },
    7: { want: [req("style", "Romantic"), req("fit", "Fitted")], exclude: [{ attr: "color", value: "Pink" }] },
    11: { want: [req("color", "White"), req("style", "Elegant")] },
  },
  2: {
    6: { want: [req("style", "Daring"), req("style", "Cool")], softDirection: "Boots, ideally." },
    11: { want: [req("color", "Black"), req("style", "Cool")], softDirection: "A jacket, ideally." },
    13: { want: [req("style", "Classic"), req("style", "Elegant")] },
  },
  3: {
    3: { want: [req("color", "White"), req("style", "Minimal")] },
    9: { want: [req("color", "Blue"), req("style", "Classic")] },
    16: { want: [req("style", "Romantic"), req("fit", "Fitted")] },
  },
};

// Optional per-character result reactions: REACTION_LINES[client][tier]
// with tier = "perfect" | "loved" | "meh" | "ouch", each a list of lines
// ("{name}" is replaced). Empty for now -- the neutral lines in index.html
// are used until these are written.
// DRAFT (written by Claude for review -- approve, rewrite or delete).
const REACTION_LINES = {
  0: { // Margo
    perfect: ["Margo says nothing for a long moment. Then: \u201CDon't let it go to your head.\u201D"],
    loved: ["Margo straightens a cuff that didn't need straightening. It's approval."],
    meh: ["\u201CAdequate,\u201D Margo says, which from her is almost a threat."],
    ouch: ["Margo looks at the mirror, then at you. \u201CBeige would have been kinder.\u201D"],
  },
  1: { // Juniper
    perfect: ["Juniper turns slowly, like something growing toward light. \u201COh. That's me.\u201D"],
    loved: ["Juniper smiles at her reflection as if it were a seedling doing well."],
    meh: ["\u201CIt's fine,\u201D Juniper says. \u201CFine is a perfectly good word for weeds too.\u201D"],
    ouch: ["Juniper tilts her head. \u201CIt's lovely. I think it's lovely on someone else.\u201D"],
  },
  2: { // Ivy
    perfect: ["Ivy whistles, low. \u201COkay. Okay, I'd chase me.\u201D"],
    loved: ["Ivy checks herself in the mirror twice. She'd deny the second time."],
    meh: ["\u201CRideable,\u201D Ivy says. \u201CNot memorable. Rideable.\u201D"],
    ouch: ["Ivy looks at the mirror. \u201CShe's going to laugh at me.\u201D She doesn't say who."],
  },
  3: { // Holly
    perfect: ["Holly looks at her reflection the way she'd look at well-made armour. \u201CThis will do,\u201D she says, and means much more."],
    loved: ["Holly gives one short nod. From Holly, that's a standing ovation."],
    meh: ["\u201CServiceable,\u201D Holly says."],
    ouch: ["Holly regards the mirror. \u201CI have been sent into battle better dressed.\u201D"],
  },
};

/* ---------------- YEAR TWO BRIEFS ----------------
   DRAFT (written by Claude for review). Used after each character's twelve
   authored briefs and trust job. season / months (0 = January): only
   offered then, and preferred while they apply; hard requirements follow the deck-balanced tiers, scarce colours
   stay hints (softDirection). */
const YEAR_TWO_BRIEFS = {
  0: [ // Margo
    { dialogue: [{ who: "MARGO", t: "Something I can kneel in." }, { who: "YOU", t: "Kneel?" }, { who: "MARGO", t: "In soil. Don't make that face." }],
      want: [req("color", "Black"), req("fit", "Regular")] },
    { dialogue: [{ who: "MARGO", t: "Tight." }, { who: "YOU", t: "You never ask for tight." }, { who: "MARGO", t: "I'm told I'm allowed one bad decision a year." }],
      want: [req("fit", "Tight"), req("style", "Elegant")] },
    { dialogue: [{ who: "MARGO", t: "You chose well last month." }, { who: "YOU", t: "Was that—" }, { who: "MARGO", t: "Don't. Do it again." }],
      want: [rarityReq(), req("style", "Elegant")] },
    { dialogue: [{ who: "MARGO", t: "Make me look like I've never been afraid of anything." }, { who: "YOU", t: "Have you?" }, { who: "MARGO", t: "Once. Make it convincing." }],
      want: [req("style", "Bold"), req("fit", "Fitted")] },
    { months: [11, 0], dialogue: [{ who: "MARGO", t: "Something with a collar I can hide in." }, { who: "YOU", t: "From whom?" }, { who: "MARGO", t: "Everyone. It's the Solstice." }],
      want: [req("style", "Classic"), req("color", "Black")], softDirection: "Something warm, if you have it." },
    { months: [10, 11], dialogue: [{ who: "MARGO", t: "White." }, { who: "YOU", t: "You?" }, { who: "MARGO", t: "It's nearly Dead Day. Some of us remember properly." }],
      want: [req("color", "White"), req("style", "Classic")] },
  ],
  1: [ // Juniper
    { dialogue: [{ who: "JUNIPER", t: "Something with pockets." }, { who: "YOU", t: "For what?" }, { who: "JUNIPER", t: "Seeds. Possibly a snail. Don't ask about the snail." }],
      want: [req("fit", "Relaxed"), req("style", "Classic")], softDirection: "Cosy, if you have it." },
    { dialogue: [{ who: "JUNIPER", t: "Ivy's taking me somewhere fast tonight." }, { who: "YOU", t: "On the bike?" }, { who: "JUNIPER", t: "I've been told to hold on and not scream. I'll manage one of those." }],
      want: [req("style", "Daring"), req("fit", "Fitted")] },
    { dialogue: [{ who: "JUNIPER", t: "Margo says I dress like a compost heap." }, { who: "YOU", t: "That's harsh." }, { who: "JUNIPER", t: "From her it's a compliment. Make it an elegant compost heap." }],
      want: [req("style", "Elegant"), req("style", "Classic")] },
    { dialogue: [{ who: "JUNIPER", t: "I want to look like I know things." }, { who: "YOU", t: "You do know things." }, { who: "JUNIPER", t: "Yes, but nobody believes a cardigan." }],
      want: [req("style", "Classic"), req("style", "Minimal")] },
    { months: [3, 4], dialogue: [{ who: "JUNIPER", t: "It's Flower Fest." }, { who: "YOU", t: "Pink?" }, { who: "JUNIPER", t: "Something that looks like it's hiding from pink." }],
      want: [req("style", "Minimal"), req("color", "White")], exclude: [{ attr: "color", value: "Pink" }] },
    { season: ["winter"], dialogue: [{ who: "JUNIPER", t: "Keep me warm. The garden doesn't close for me." }, { who: "YOU", t: "I thought it closed for everyone." }, { who: "JUNIPER", t: "It does." }],
      want: [req("style", "Romantic"), req("fit", "Regular")], softDirection: "Cosy, if you have it." },
  ],
  2: [ // Ivy
    { dialogue: [{ who: "IVY", t: "Rain tonight." }, { who: "YOU", t: "It's not raining." }, { who: "IVY", t: "Not here." }],
      want: [req("style", "Cool"), req("fit", "Regular")] },
    { dialogue: [{ who: "IVY", t: "Holly says I look like a stolen motorbike." }, { who: "YOU", t: "Is that bad?" }, { who: "IVY", t: "She meant it nicely. I think. Make it worse." }],
      want: [req("style", "Daring"), req("style", "Bold")] },
    { dialogue: [{ who: "IVY", t: "Job at the Castle. Back entrance." }, { who: "YOU", t: "Is there a back entrance?" }, { who: "IVY", t: "There is now." }],
      want: [req("style", "Classic"), req("color", "Black")] },
    { dialogue: [{ who: "IVY", t: "Something Juniper would pick." }, { who: "YOU", t: "You want to look like Juniper?" }, { who: "IVY", t: "I want to see her face." }],
      want: [req("style", "Romantic"), req("fit", "Relaxed")] },
    { dialogue: [{ who: "IVY", t: "Don't make me look like a courier." }, { who: "YOU", t: "You are a courier." }, { who: "IVY", t: "Not tonight." }],
      want: [req("style", "Elegant"), req("fit", "Tight")] },
    { months: [5, 6], dialogue: [{ who: "IVY", t: "Solstice deliveries. White, apparently." }, { who: "YOU", t: "Mandatory?" }, { who: "IVY", t: "Mandatory. I'm going to look like a pillow." }],
      want: [req("color", "White"), req("style", "Cool")] },
  ],
  3: [ // Holly
    { dialogue: [{ who: "HOLLY", t: "Blue. Ribbons, if you have any." }, { who: "YOU", t: "For Isolde?" }, { who: "HOLLY", t: "For no one." }],
      want: [req("color", "Blue"), req("style", "Romantic")] },
    { dialogue: [{ who: "HOLLY", t: "Ivy wants me to sing." }, { who: "YOU", t: "In public?" }, { who: "HOLLY", t: "In a bar. I have declined twice. I will lose." }],
      want: [req("style", "Cool"), req("fit", "Fitted")] },
    { dialogue: [{ who: "HOLLY", t: "Something that does not clank." }, { who: "YOU", t: "Did something clank?" }, { who: "HOLLY", t: "Everything clanks. Eventually." }],
      want: [req("style", "Minimal"), req("fit", "Fitted")] },
    { dialogue: [{ who: "HOLLY", t: "Juniper asked me to help in the garden." }, { who: "YOU", t: "In those clothes?" }, { who: "HOLLY", t: "In whatever you give me. Choose accordingly." }],
      want: [req("fit", "Relaxed"), req("style", "Minimal")] },
    { dialogue: [{ who: "HOLLY", t: "Gold, perhaps." }, { who: "YOU", t: "You hate gold." }, { who: "HOLLY", t: "Someone I knew wore it well." }],
      want: [req("style", "Romantic"), req("color", "Gold")] },
    { months: [11, 0], dialogue: [{ who: "HOLLY", t: "Silver. For the Winter Solstice." }, { who: "YOU", t: "You'll be at the Castle?" }, { who: "HOLLY", t: "Outside it." }],
      want: [req("color", "Silver"), req("style", "Classic")] },
  ],
};

/* ---------------- THE GARDEN CIRCLE ----------------
   So Margo's stage 10 ("I saw the Garden Circle last night") and stage 18
   ("I saw what happened in the garden") refer to something the player has
   actually seen. Both play at the Nightgarden.
   GARDEN_CIRCLE_CAFE_LINES is the bible's own Garden Circle scene (verbatim). */
const GARDEN_CIRCLE_CAFE_LINES = [
  { who: "MARGO", t: "You're late." },
  { who: "JUNIPER", t: "The plant wasn't finished." },
  { who: "MARGO", t: "Plants are never finished." },
  { who: "YOU", t: "Garden Circle?" },
  { who: "MARGO", t: "No." },
  { who: "JUNIPER", t: "Yes." },
  { who: "MARGO", t: "We discussed this." },
  { who: "JUNIPER", t: "You discussed it." },
  { who: "YOU", t: "What actually happens there?" },
  { who: "MARGO", t: "Gardening." },
  { who: "JUNIPER", t: "Mostly." },
  { who: "MARGO", t: "Juniper." },
];
// DRAFT (written by Claude for review).
const GARDEN_WALK_LINES = [
  { who: "NARRATION", t: "It's past midnight when you reach the Nightgarden gate." },
  { who: "NARRATION", t: "It's open. It's never open." },
  { who: "NARRATION", t: "Women are walking in, one at a time. No lanterns." },
  { who: "NARRATION", t: "The last one is small, and dressed entirely in black." },
  { who: "NARRATION", t: "She doesn't look back." },
  { who: "NARRATION", t: "The gate closes behind her. Nobody touches it." },
];
// DRAFT (written by Claude for review).
const GARDEN_RITUAL_LINES = [
  { who: "NARRATION", t: "The gate is open again. This time, you follow." },
  { who: "NARRATION", t: "They stand in a circle between the beds. Margo. Juniper. Others you don't know." },
  { who: "NARRATION", t: "Nobody speaks." },
  { who: "NARRATION", t: "Then every flower in the garden turns to face them." },
  { who: "NARRATION", t: "Slowly. Like heads turning at a name." },
  { who: "NARRATION", t: "Juniper sees you. Her eyes widen, just slightly." },
  { who: "NARRATION", t: "You leave before Margo does." },
];

/* ---------------- FRIENDSHIP ----------------
   Hearts now gate how personal the Studio conversations get, and each Core
   Soul gives one unique card at four hearts (bible: "Exclusive card
   reward ... unique, cannot be sold or randomly destroyed").
   TALK_HEARTS: hearts needed before a "Talk" stage of that number opens,
   following the bible's EARLY / MID / HIGH / VERY HIGH / FINAL arc. */
const TALK_HEARTS = [
  { upTo: 5, hearts: 0 },     // EARLY
  { upTo: 10, hearts: 1.5 },  // MID
  { upTo: 15, hearts: 2.5 },  // HIGH
  { upTo: 19, hearts: 3.5 },  // VERY HIGH
  { upTo: 20, hearts: 4.5 },  // FINAL
];
const FRIENDSHIP_GIFT_HEARTS = 4;

// Attributes as listed in the bible. No card art yet: add a fullArt URL to
// each once the SVGs exist (until then they use the placeholder template).
const FRIENDSHIP_CARDS = {
  0: { id: 901, name: "Nightshade Corset", category: "Top", fit: "Fitted", style: "Elegant", style2: "Bold", color: "Black",
       rarity: "Legendary", unique: true, storyCard: true, lore: "Margo made it. She will not say for whom." },
  1: { id: 902, name: "Moonroot Wrap Top", category: "Top", fit: "Fitted", style: "Romantic", color: "Green",
       rarity: "Legendary", unique: true, storyCard: true, lore: "Dyed with something Juniper grew. Don't ask what." },
  2: { id: 903, name: "Night Rider Boots", category: "Shoes", fit: "Regular", style: "Daring", color: "Black",
       rarity: "Legendary", unique: true, storyCard: true, lore: "Scuffed on roads that aren't on any map." },
  3: { id: 904, name: "Isolde's Blue Ribbon Dress", category: "Dress", fit: "Regular", style: "Romantic", style2: "Classic", color: "Blue",
       rarity: "Legendary", unique: true, storyCard: true, lore: "Blue ribbons. Holly doesn't remember why she kept it." },
};

// DRAFT (written by Claude for review): the moment each gift is given.
const FRIENDSHIP_GIFT_LINES = {
  0: [{ who: "MARGO", t: "I made this. Years ago." }, { who: "YOU", t: "For me?" }, { who: "MARGO", t: "For whoever wouldn't ruin it. Don't prove me wrong." }],
  1: [{ who: "JUNIPER", t: "I grew the dye." }, { who: "YOU", t: "From what?" }, { who: "JUNIPER", t: "You don't want to know. It's very pretty, though." }],
  2: [{ who: "IVY", t: "Found these on a route that doesn't exist." }, { who: "YOU", t: "They're yours?" }, { who: "IVY", t: "They're yours now. Don't let anyone else wear them." }],
  3: [{ who: "HOLLY", t: "Keep this." }, { who: "YOU", t: "Whose was it?" }, { who: "HOLLY", t: "Hers. I don't know how I know that." }],
};

/* ===========================================================================
   CORE FOUR AT THE NIGHT CAFÉ -- bible "Night Café encounters", verbatim.
   Each character's five encounters play in order, at most one Core Four
   encounter per month. Conditions: hearts (minimum friendship), after
   (stages seen, as in STAGE_RULES), season.
   =========================================================================== */
const CORE_CAFE_ENCOUNTERS = {
  0: [ // Margo
    { lines: [
      { who: "MARGO", t: "If you're about to ask whether you can join me, don't." },
      { who: "YOU", t: "Okay." },
      { who: "MARGO", t: "Sit down." }] },
    { after: [6], lines: [
      { who: "YOU", t: "Garden Circle business?" },
      { who: "MARGO", t: "No." },
      { who: "JUNIPER", t: "Yes." },
      { who: "MARGO", t: "Juniper." }] },
    { after: [18], lines: [
      { who: "MARGO", t: "If one more person hands me a rose, I'm setting something on fire." },
      { who: "YOU", t: "Witch fire?" },
      { who: "MARGO", t: "You're becoming irritatingly comfortable." }] },
    { hearts: 2, lines: [
      { who: "YOU", t: "You come here often." },
      { who: "MARGO", t: "I like watching people make poor decisions." },
      { who: "YOU", t: "Drinking?" },
      { who: "MARGO", t: "Clothing." }] },
    { hearts: 3, lines: [
      { who: "NARRATION", t: "Margo silently pushes a drink toward you." },
      { who: "YOU", t: "What's this?" },
      { who: "MARGO", t: "You looked tired." },
      { who: "YOU", t: "That's sweet." },
      { who: "MARGO", t: "Give it back." }] },
  ],
  1: [ // Juniper
    { lines: [
      { who: "YOU", t: "Is that plant allowed in here?" },
      { who: "JUNIPER", t: "Nobody has stopped it yet." }] },
    { lines: [
      { who: "YOU", t: "What are you reading?" },
      { who: "JUNIPER", t: "A gardening book." },
      { who: "YOU", t: "Useful?" },
      { who: "JUNIPER", t: "Completely wrong." }] },
    { after: [8], lines: [
      { who: "YOU", t: "Where's Margo?" },
      { who: "JUNIPER", t: "Garden Circle." },
      { who: "YOU", t: "You're not going?" },
      { who: "JUNIPER", t: "I was asked to leave." },
      { who: "YOU", t: "What did you do?" },
      { who: "JUNIPER", t: "Experiment." }] },
    { hearts: 2, lines: [
      { who: "NARRATION", t: "Juniper slides a tiny flower toward you." },
      { who: "YOU", t: "Is it safe?" },
      { who: "JUNIPER", t: "Probably." },
      { who: "YOU", t: "Probably?!" },
      { who: "JUNIPER", t: "It's progress." }] },
    { hearts: 3, lines: [
      { who: "YOU", t: "You saved me a seat?" },
      { who: "JUNIPER", t: "No." },
      { who: "NARRATION", t: "You sit." },
      { who: "JUNIPER", t: "I saved you tea." }] },
  ],
  2: [ // Ivy
    { lines: [
      { who: "IVY", t: "You're in my seat." },
      { who: "YOU", t: "There's no name on it." },
      { who: "IVY", t: "Check underneath." },
      { who: "NARRATION", t: "You do." },
      { who: "IVY", t: "Can't believe that worked." }] },
    { after: [3], lines: [
      { who: "YOU", t: "Where's the bike?" },
      { who: "IVY", t: "Outside." },
      { who: "YOU", t: "Alone?" },
      { who: "IVY", t: "She's a big girl." }] },
    { hearts: 1.5, lines: [
      { who: "IVY", t: "You going out?" },
      { who: "YOU", t: "Maybe." },
      { who: "IVY", t: "Don't follow anyone wearing a silver mask." },
      { who: "YOU", t: "Why?" },
      { who: "IVY", t: "See you tomorrow." }] },
    { hearts: 2, lines: [
      { who: "NARRATION", t: "Ivy arrives soaking wet." },
      { who: "YOU", t: "It's not raining." },
      { who: "IVY", t: "Here." }] },
    { hearts: 3, lines: [
      { who: "NARRATION", t: "Ivy puts a key on the table." },
      { who: "YOU", t: "What's that?" },
      { who: "IVY", t: "Nothing." },
      { who: "YOU", t: "It's a key." },
      { who: "IVY", t: "Very observant. Don't lose it." }] },
  ],
  3: [ // Holly
    { lines: [
      { who: "YOU", t: "Didn't expect to see you here." },
      { who: "HOLLY", t: "Why?" },
      { who: "YOU", t: "You don't seem like a bar person." },
      { who: "HOLLY", t: "Neither do you. Yet here we are." }] },
    { lines: [
      { who: "NARRATION", t: "Holly is staring suspiciously at a cocktail." },
      { who: "YOU", t: "Problem?" },
      { who: "HOLLY", t: "There is a flower in my drink." },
      { who: "YOU", t: "Decoration." },
      { who: "HOLLY", t: "Wasteful." }] },
    { hearts: 1.5, lines: [
      { who: "YOU", t: "What are you reading?" },
      { who: "HOLLY", t: "Nothing." },
      { who: "YOU", t: "That's a gossip sheet." },
      { who: "NARRATION", t: "Holly folds it immediately." },
      { who: "HOLLY", t: "Nothing." }] },
    { season: ["winter"], lines: [
      { who: "HOLLY", t: "Your window light is out." },
      { who: "YOU", t: "Everyone keeps telling me." },
      { who: "HOLLY", t: "Then perhaps listen." },
      { who: "YOU", t: "Do you believe in frost creatures?" },
      { who: "HOLLY", t: "I believe in locked doors." }] },
    { hearts: 3, lines: [
      { who: "NARRATION", t: "Holly quietly sits beside you." },
      { who: "YOU", t: "Everything okay?" },
      { who: "HOLLY", t: "Yes." },
      { who: "YOU", t: "Want to talk?" },
      { who: "HOLLY", t: "No." },
      { who: "HOLLY", t: "Stay anyway." }] },
  ],
};

// Bible "Multi-character Night Café scenes", verbatim.
const CAFE_SOLSTICE_GROUP_LINES = [
  { who: "IVY", t: "Royal Quarter route is closed next week." },
  { who: "HOLLY", t: "Take another one." },
  { who: "IVY", t: "Adds twenty minutes." },
  { who: "HOLLY", t: "Take another one." },
  { who: "IVY", t: "Holly—" },
  { who: "HOLLY", t: "Take. Another. One." },
  { who: "YOU", t: "What's happening next week?" },
  { who: "IVY", t: "Solstice preparations." },
  { who: "YOU", t: "And?" },
  { who: "IVY", t: "And apparently Holly is afraid of bunting." },
  { who: "HOLLY", t: "Leave it, Ivy." },
];
const CAFE_DEAD_DAY_GROUP_LINES = [
  { who: "NARRATION", t: "The four women occupy the same table. Even Ivy is quiet." },
  { who: "YOU", t: "Everyone's quiet." },
  { who: "MARGO", t: "It happens." },
  { who: "YOU", t: "Do you think about it?" },
  { who: "MARGO", t: "Dying?" },
  { who: "YOU", t: "Yeah." },
  { who: "MARGO", t: "Less than you'd think." },
  { who: "MARGO", t: "Living, though." },
  { who: "NARRATION", t: "Margo looks away." },
  { who: "MARGO", t: "That's harder." },
  { who: "HOLLY", t: "Some things are easier to remember when nobody asks." },
  { who: "JUNIPER", t: "And some disappear anyway." },
  { who: "IVY", t: "Great. We're cheerful tonight." },
  { who: "NARRATION", t: "No one laughs." },
];

// Bible "Year One Armor reveal", verbatim: a walk home in the autumn of
// Year One, then Holly at her next job.
const ARMOUR_SIGHTING_LINES = [
  { who: "NARRATION", t: "The streets are almost empty." },
  { who: "NARRATION", t: "Someone passes you." },
  { who: "NARRATION", t: "Black coat." },
  { who: "NARRATION", t: "Heavy boots." },
  { who: "NARRATION", t: "Something silver underneath." },
  { who: "YOU", t: "..." },
  { who: "NARRATION", t: "You look again." },
  { who: "NARRATION", t: "Metal plates overlap beneath the coat." },
  { who: "YOU", t: "Is that armour?" },
  { who: "NARRATION", t: "The stranger disappears around the corner." },
];
const ARMOUR_HOLLY_LINES = [
  { who: "YOU", t: "Holly." },
  { who: "HOLLY", t: "You're staring." },
  { who: "YOU", t: "I saw someone wearing armour." },
  { who: "NARRATION", t: "Holly's expression changes almost imperceptibly." },
  { who: "HOLLY", t: "Did you." },
  { who: "YOU", t: "That's all?" },
  { who: "HOLLY", t: "What would you like me to say?" },
  { who: "YOU", t: "That it's normal." },
  { who: "HOLLY", t: "Would you believe me?" },
  { who: "YOU", t: "No." },
  { who: "HOLLY", t: "Good." },
];

/* ===========================================================================
   ACTION CARDS -- DRAFT (system and lines written by Claude for review).
   While you style, a client may slide in a black action card that changes
   the brief mid-job: EXCLUDE something ("No red"), ADD a requirement
   ("+ Red"), SWAP one ("Red, not Black"), or ban Basics ("No Basics").
   They're always solvable with the cards in play: added or swapped-in
   values are taken from your hand, and an exclusion never removes so much
   that fewer than four usable cards remain.
   How often: never on the very first job, then now and then from January
   on, more as the cycle goes on (ACTION_CARD_CHANCE, by overall job
   number); from summer she may play a second card, and later a third
   (second / third: chance of each extra card, given the one before). If none has come up by
   ACTION_CARD_GUARANTEE_BY, one is guaranteed, so every player meets them
   early.
   Lines: {v} = noun ("red", "romantic pieces", "regular cuts"),
          {a} = adjective ("red", "romantic", "regular"), {A} = capitalised,
          {old} = what it replaces.
   =========================================================================== */
const ACTION_CARD_CHANCE = [
  { beforeJob: 1, chance: 0, second: 0, third: 0 },          // the very first job: just learn to style
  { beforeJob: 15, chance: 0.3, second: 0, third: 0 },        // January-May: now and then, one at a time
  { beforeJob: 27, chance: 0.5, second: 0.25, third: 0 },     // summer: she may change her mind twice
  { beforeJob: 36, chance: 0.65, second: 0.35, third: 0.1 },  // autumn/winter: sometimes three times
  { beforeJob: 54, chance: 0.8, second: 0.45, third: 0.15 },
  { beforeJob: 9999, chance: 0.85, second: 0.55, third: 0.25 },
];
const ACTION_CARD_GUARANTEE_BY = 4; // job number (0 = first job)
const ACTION_EXCLUDE_PENALTY = 15; // per worn piece that ignores an exclusion

// Which kinds each character tends to play.
const ACTION_CARD_WEIGHTS = {
  0: { exclude: 5, swap: 2.5, add: 1.5, noBasics: 1 },   // Margo: vetoes
  1: { exclude: 2.5, swap: 3, add: 4.5, noBasics: 0.5 }, // Juniper: second thoughts
  2: { exclude: 2.5, swap: 4, add: 3.5, noBasics: 1 },   // Ivy: changes of plan
  3: { exclude: 4.5, swap: 2.5, add: 3, noBasics: 1 },   // Holly: practical vetoes
};

const ACTION_CARD_LINES = {
  0: {
    exclude: ["No {v}. I won't explain.", "Take the {v} off. I've changed my mind about {v}.", "I've decided I'm against {v} today."],
    noBasics: ["Nothing Basic. I've seen what Basic does to people."],
    add: ["It needs {v}. Don't argue. Find some.", "Something {a}. Then it will work."],
    swap: ["Forget {old}. {A}. I was wrong, which is rare, so enjoy it."],
    replies: ["Of course.", "Naturally.", "Fine."],
  },
  1: {
    exclude: ["Could we not do {v}? It's making me itchy.", "Sorry. Not {v}. I don't know why. Just not {v}."],
    noBasics: ["Could it be less plain? I want to feel a bit special. Sorry."],
    add: ["Hey stylist. I think we need something {a} to make this work.", "Sorry, could there be something {a}? It feels like a {a} day."],
    swap: ["Actually, {a} instead of {old}? Sorry. Sorry."],
    replies: ["Okay.", "Of course.", "No, it's fine."],
  },
  2: {
    exclude: ["No {v}. Can't ride in it. Won't.", "Scratch the {v}. Bad luck tonight."],
    noBasics: ["Nothing Basic. Someone important might see me."],
    add: ["Hey stylist. Needs something {a}. Trust me.", "Throw something {a} in there. For luck."],
    swap: ["Change of plan: {a}, not {old}."],
    replies: ["Sure.", "Fine.", "Of course it is."],
  },
  3: {
    exclude: ["Nothing {a}. It impedes.", "Remove the {v}. That is not a request."],
    noBasics: ["Nothing Basic. I will be inspected."],
    add: ["Add something {a}. It is necessary.", "Something {a}. I will not explain."],
    swap: ["Not {old}. {A}. Circumstances have changed."],
    replies: ["Understood.", "Of course.", "Fine."],
  },
};


/* ---------------- BURNING CARDS (the Vendor) ----------------
   Burn 1-5 cards you no longer want. BURN_REWARDS[n-1] = mooncoins for n.
   Your collection never goes below BURN_MIN_COLLECTION, and one-of-a-kind
   cards (friendship gifts, story pieces, keys, Jokers) can't be burned. */
const BURN_REWARDS = [0, 0, 2, 3, 5];
const BURN_MIN_COLLECTION = 15;
// DRAFT (written by Claude for review).
const BURN_VENDOR_LINES = {
  open: "\u201CThings you don't need anymore? I'll take them. I always do.\u201D",
  done: "\u201CGone. Don't ask where.\u201D",
};


/* ============================================================
   LIFE & DEATH (late Year 2 → Year 3 content pass)
   Texts marked [brief] are Theresa's, verbatim from the late-Year-2 /
   Angels / Year 3 brief. Everything marked DRAFT is Claude's, for review.
   Core Four keys are the CLIENTS indices: 0 Margo, 1 Juniper, 2 Ivy, 3 Holly.
   ============================================================ */

// A failed Angel encounter costs this many hearts (one flat number, however
// many survival rules were missed). Decided after the balance simulation.
const ENCOUNTER_HIT_HEARTS = 2;

// [brief] Death screen, one per Core Four character.
const CORE_DEATH_TEXT = {
  0: ["Margo does not come back to the Studio.", "For once, there is no correction.", "No last word.", "Somewhere in the Nightgarden, a place has been made for her."],
  1: ["The greenhouse stays lit until morning.", "No one goes in.", "By afternoon, there is a new grave in the Nightgarden."],
  2: ["The bike comes back without her.", "Nobody touches it.", "A place is made for Ivy in the Nightgarden."],
  3: ["Holly does not return from the Castle.", "Her armour does.", "A place is made for her in the Nightgarden."],
};

// [brief] Graves: age at death and one fixed epitaph.
const GRAVES = {
  0: { age: 54, epitaph: "She had seen enough to know better. She came anyway." },
  1: { age: 21, epitaph: "Something is growing here." },
  2: { age: 28, epitaph: "She hated standing still." },
  3: { age: 27, epitaph: "Duty ended here. Love did not." },
};

// [brief] The first time you find the Graveyard.
const GRAVEYARD_FIRST_VISIT = [
  { who: "NARRATION", t: "The path was not here before." },
  { who: "NARRATION", t: "It runs behind the Nightgarden wall." },
  { who: "NARRATION", t: "At the end of it is one grave." },
  { who: "NARRATION", t: "There is room for more." },
];

// DRAFT (written by Claude for review). Her night in the rotation, after she
// is gone: the Studio stays empty, the night still passes.
const QUIET_NIGHT_LINES = {
  0: [
    { who: "NARRATION", t: "Her appointment is still in the book." },
    { who: "NARRATION", t: "You don't cross it out." },
    { who: "NARRATION", t: "The Studio is very quiet without anyone telling you what's wrong with it." },
  ],
  1: [
    { who: "NARRATION", t: "Her cuttings are still on the windowsill." },
    { who: "NARRATION", t: "You water them." },
    { who: "NARRATION", t: "It's the only thing that happens tonight." },
  ],
  2: [
    { who: "NARRATION", t: "Nobody knocks once and lets herself in." },
    { who: "NARRATION", t: "You keep looking at the door anyway." },
  ],
  3: [
    { who: "NARRATION", t: "At the usual hour, you find yourself standing up straighter." },
    { who: "NARRATION", t: "No one comes to notice." },
  ],
};

// End-of-year screens. Year 1 and 2 texts are the ones already in the game;
// Year 3 is a DRAFT (written by Claude for review). LAST_YEAR is where this
// content pass stops: its screen says "To be continued."
const LAST_YEAR = 3;
const YEAR_END_TEXT = {
  1: {
    heading: "One year in After City",
    lines: ["One year.", "Thirty-six jobs.", "More cards than you started with.", "More questions too.", "After City feels less unfamiliar now.", "That may not be the same thing as understanding it."],
  },
  2: {
    heading: "Two years in After City",
    lines: ["Two years.", "Seventy-two jobs.", "Faces you now recognize on sight.", "Doors that used to be walls.", "After City still isn't explaining itself.", "You've stopped expecting it to."],
  },
  3: { // DRAFT
    heading: "Three years in After City",
    lines: ["Three years.", "A hundred and eight jobs.", "Some of them mattered more than they should have.", "The city watches its edges now.", "So do you."],
  },
};


/* ---------------- ANGELS: THE RUMOUR LADDER ----------------
   [brief] §4 and §6, verbatim; stage directions became NARRATION lines.
   Before you meet them, nobody explains anything and the player never
   brings Angels up first. The word itself arrives in R6.

   Rules (see nextRumour() in index.html):
   - played strictly in this order, from March of Year 2 (RUMOURS_FROM_MONTH)
   - at most one per month, so they spread from spring to late Year 2
   - each only at its own place ("where"); a Studio beat only on her visit
   - fromMonth: not before that month of Year 2 (Year 3 is always late enough)
   R8 (Ivy's first preparation) slots in between R7 and the arrival in the
   next step. */
const RUMOURS_FROM_MONTH = 2; // March, Year 2
const ANGEL_RUMOURS = [
  { id: "r1", where: "oldquarter", lines: [
    { who: "NARRATION", t: "Two figures in white stand at the far end of the street." },
    { who: "NARRATION", t: "Nobody walks past them." },
    { who: "NARRATION", t: "When you look again, they are gone." },
  ] },
  { id: "r2", where: "cafe", lines: [
    { who: "NARRATION", t: "The Café door opens." },
    { who: "NARRATION", t: "Every conversation stops." },
    { who: "NARRATION", t: "Maya looks toward the entrance, waits, then relaxes." },
    { who: "YOU", t: "What was that?" },
    { who: "MAYA", t: "Nothing." },
    { who: "YOU", t: "Everyone stopped talking." },
    { who: "MAYA", t: "Then enjoy the quiet." },
  ] },
  { id: "r3", where: "castle", lines: [
    { who: "HELENA", t: "If you\u2019re coming to the Castle after dark, don\u2019t wear black." },
    { who: "YOU", t: "Why?" },
    { who: "HELENA", t: "Just don\u2019t." },
    { who: "YOU", t: "That\u2019s not an answer." },
    { who: "HELENA", t: "It\u2019s the one you\u2019re getting." },
  ] },
  { id: "r4", where: "studio", client: 0, lines: [
    { who: "MARGO", t: "If anyone in white asks whether you know me, you don\u2019t." },
    { who: "YOU", t: "Anyone in white?" },
    { who: "MARGO", t: "Correct." },
    { who: "YOU", t: "Margo." },
    { who: "MARGO", t: "For once, take the easy instruction." },
  ] },
  { id: "r5", where: "studio", client: 1, lines: [
    { who: "JUNIPER", t: "Can we close early?" },
    { who: "YOU", t: "Why?" },
    { who: "JUNIPER", t: "There was someone outside the Glass House." },
    { who: "YOU", t: "Someone?" },
    { who: "JUNIPER", t: "White clothes. White eyes." },
    { who: "YOU", t: "Did they say anything?" },
    { who: "JUNIPER", t: "No." },
    { who: "YOU", t: "Then what happened?" },
    { who: "JUNIPER", t: "Nothing." },
    { who: "NARRATION", t: "A pause." },
    { who: "JUNIPER", t: "That was worse." },
  ] },
  { id: "r6", where: "cafe", lines: [
    { who: "MAYA", t: "They\u2019ve been seen near the Castle again." },
    { who: "YOU", t: "The people in white?" },
    { who: "NARRATION", t: "Maya looks at you." },
    { who: "MAYA", t: "Angels." },
    { who: "YOU", t: "Angels?" },
    { who: "MAYA", t: "Quiet." },
    { who: "YOU", t: "That\u2019s what they\u2019re called?" },
    { who: "MAYA", t: "That\u2019s enough." },
  ] },
  { id: "r7", where: "cafe", lines: [
    { who: "MAYA", t: "Two of them are staying close to the Castle." },
    { who: "YOU", t: "The Angels?" },
    { who: "MAYA", t: "Lower your voice." },
    { who: "YOU", t: "Do they have names?" },
    { who: "MAYA", t: "Irina. Lucia." },
    { who: "YOU", t: "And what do they want?" },
    { who: "MAYA", t: "If I knew, I wouldn\u2019t tell you here." },
  ] },
  { id: "arrival", where: "studio-arrival", fromMonth: 9, lines: [
    { who: "NARRATION", t: "The Studio door opens." },
    { who: "NARRATION", t: "The air turns cold." },
    { who: "NARRATION", t: "Irina enters first. Lucia follows." },
    { who: "NARRATION", t: "White. Blue. Gold. No black." },
    { who: "NARRATION", t: "Their eyes are white as the moon." },
    { who: "NARRATION", t: "They scan the room. Then you." },
    { who: "IRINA", t: "So this is the stylist." },
    { who: "LUCIA", t: "Hm." },
    { who: "YOU", t: "Irina. Lucia." },
    { who: "IRINA", t: "Good. They warned you." },
    { who: "YOU", t: "About you?" },
    { who: "IRINA", t: "About many things, I imagine." },
    { who: "NARRATION", t: "Lucia picks up one of your cards. She turns it over once." },
    { who: "LUCIA", t: "Small collection." },
    { who: "YOU", t: "It does the job." },
    { who: "NARRATION", t: "Lucia looks at you now." },
    { who: "LUCIA", t: "Does it?" },
    { who: "NARRATION", t: "Irina smiles." },
    { who: "IRINA", t: "That\u2019s what we came to see." },
    { who: "NARRATION", t: "They leave the door open behind them. The cold takes longer to go." }, // DRAFT (Claude): a way out of the scene
  ] },
  { id: "r9", where: "castle", lines: [
    { who: "HELENA", t: "If Holly comes to you about the banquet, put armour on her." },
    { who: "YOU", t: "At dinner?" },
    { who: "HELENA", t: "Especially at dinner." },
    { who: "YOU", t: "Because Angels will be there?" },
    { who: "HELENA", t: "You\u2019re learning." },
    { who: "YOU", t: "That didn\u2019t sound like praise." },
    { who: "HELENA", t: "It wasn\u2019t." },
  ] },
];

// DRAFT (Claude): how Irina and Lucia appear in the Souls panel once met.
const ANGEL_SOUL_NOTE = "They came to the Studio uninvited.";
