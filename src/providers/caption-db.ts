import { Injectable } from '@angular/core';

@Injectable()
export class CaptionsDB {
    captions =
    ["a tall clock tower sitting under a cloudy sky",
        "a close up of an umbrella",
        "an open laptop computer sitting on a table",
        "a bag of luggage", "a sunset over a mountain",
        "a sandy beach next to the ocean", "a little boy standing in front of a vase with flowers in it",
        "a pole with clouds in the sky", "a very large rock", "a train traveling down tracks next to a bridge",
        "a large body of water with a mountain in the background", "a person standing next to a forest",
        "a traffic light in front of a building",
        "a close up of a mug", "a group of people walking down a busy city street",
        "a red vase filled with flowers", "a lamp sitting next to a glass of wine",
        "a view of a city street", "a woman posing for a picture", "a man standing on top of a grass covered field",
        "a white barn in a green field", "a bird in the water", "the sky at sunset",
        "person standing in front of a building", "a view of a snow covered mountain", "a large tree in a river", "a group of people standing around a plane", "a man standing next to a stone wall", "a fruit tree", "person sitting in front of a mountain", "a crowd of people standing on top of a building", "a close up of a person using a laptop", "a man in a grassy field with trees in the background", "a view of a lush green hillside", "a flock of birds standing on top of a grass covered field", "a view of a lake surrounded by mountains", "a little girl holding a pair of shoes", "a red neck tie", "a body of water", "a bird that is sitting in the water", "person waiting at a train station", "a red light at night", "a bowl of soup",
        "a vintage photo of a city street","a red helmet","a sunset over the ocean","a plate with a fork","a view of a plane in the mirror","a man standing in front of an old airplane","a view of an old building","a sunset in the sun","a cake made to look like a train","a man on a snow covered mountain","a large body of water with a mountain in the background","a close up of a plant","a cake made to look like a train","a yellow fire hydrant","a large body of water near a bridge","a man with a mountain in the dark","a view of a mountain","a close up of a red brick building","a woman holding a cell phone",
        "a blue and white cake","a man sits on a beach near a large body of water","a pile of carrots sitting on top of a tree","a flower arrangement in a field","a view of a large body of water","a sandwich cut in half next to a tree","a room with a large building","a plane is flying over some clouds","a cow in a body of water","a bear in the water","a vintage photo of an old building","a vase with flowers in it","a city at night","a close up of a banana","a view of a pier next to a body of water","a dog sitting in the sand","a street scene with a building in the background","a microwave oven sitting on top of a bus","a bridge over a body of water",
        "an old brick building on a rock wall","a brown and white dog laying in the grass","a man sitting at a table using a laptop computer","a palm tree in a grassy field","a man standing in front of a mountain","a large tree","a flock of birds flying over a snow covered mountain","a man with a sunset in the ocean","a train on a cloudy day","a train crossing a bridge over water","a beach with a pier in the water","a book is being pulled by two horses","a glass of water","a laptop computer on a desk","a person sitting in front of a computer screen","a group of people walking down a street next to tall buildings","a group of people standing in a room","a brown and black dog standing on top of a grass covered field"
    ];

    getRandomCaption(): string {
        return this.captions[Math.floor(Math.random() * this.captions.length)];
    }
}