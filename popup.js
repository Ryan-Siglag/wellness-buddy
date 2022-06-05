const facts = ['The more you are on your computer, the worse your eyesight becomes',
'Apps try to make you addicted to their game',
'You should be on screens for fewer two hours per day',
'On average, people touch their phone 2,617 time a day',
'When you bend down to look at a phone, the pressure on your neck is the weight of an 8 year old child',
'Digital wellbeing is having a positive relationship with technology',
'Everything posted on the internet is there forever',
'A digital footprint is a trail of everything you do on the internet',
'Never share your information to a stranger on the internet',
'Private information can be copied and shared to anyone on the internet',
'Anything you do on the internet leaves a permanent record',
'Social medias causes mental health issues among youth',
'Face to face communication is better than online',
'Never check your phone right after you wake up',
'Social media is fake', 
'Getting off screens can help your work-life balance',
'The better your digital wellness, the better your physical wellness',
'Once you pick up your phone, you have a 50% chance of picking it up again in three minutes',
'It is easy to lose track of time while on your phone',
'If you are stressed, get off screens!',
]

document.getElementById("fact").innerHTML = facts[Math.floor(Math.random() * facts.length)];

const buddies = [
    '/assets/buddies/wellnessbuddy1.png',
    '/assets/buddies/wellnessbuddy2.png',
    '/assets/buddies/wellnessbuddy3.png',
    '/assets/buddies/wellnessbuddy4.png',
    '/assets/buddies/wellnessbuddy5.png',]
document.getElementById("buddy").src = buddies[Math.floor(Math.random() * buddies.length)];
