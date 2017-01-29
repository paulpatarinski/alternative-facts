import { Injectable } from '@angular/core';

@Injectable()
export class CaptionsDB {
    captions =
    ["a tall clock tower sitting under a cloudy sky", "a close up of an umbrella", "an open laptop computer sitting on a table", "a bag of luggage", "a sunset over a mountain", "a sandy beach next to the ocean", "a little boy standing in front of a vase with flowers in it", "a pole with clouds in the sky", "a very large rock", "a train traveling down tracks next to a bridge", "a large body of water with a mountain in the background", "a person standing next to a forest", "a traffic light in front of a building", "a close up of a mug", "a group of people walking down a busy city street", "a red vase filled with flowers", "a lamp sitting next to a glass of wine", "a view of a city street", "a woman posing for a picture", "a man standing on top of a grass covered field", "a white barn in a green field", "a bird in the water", "the sky at sunset", "person standing in front of a building", "a view of a snow covered mountain", "a large tree in a river", "a group of people standing around a plane", "a man standing next to a stone wall", "a fruit tree", "person sitting in front of a mountain", "a crowd of people standing on top of a building", "a close up of a person using a laptop", "a man in a grassy field with trees in the background", "a view of a lush green hillside", "a flock of birds standing on top of a grass covered field", "a view of a lake surrounded by mountains", "a little girl holding a pair of shoes", "a red neck tie", "a body of water", "a bird that is sitting in the water", "person waiting at a train station", "a red light at night", "a bowl of soup", "a vintage photo of a city street", "a red helmet", "a sunset over the ocean", "a plate with a fork", "a view of a plane in the mirror", "a man standing in front of an old airplane", "a view of an old building", "a sunset in the sun", "a cake made to look like a train", "a man on a snow covered mountain", "a close up of a plant", "a yellow fire hydrant", "a large body of water near a bridge", "a man with a mountain in the dark", "a view of a mountain", "a close up of a red brick building", "a woman holding a cell phone", "a blue and white cake", "a man sits on a beach near a large body of water", "a pile of carrots sitting on top of a tree", "a flower arrangement in a field", "a view of a large body of water", "a sandwich cut in half next to a tree", "a room with a large building", "a plane is flying over some clouds", "a cow in a body of water", "a bear in the water", "a vintage photo of an old building", "a vase with flowers in it", "a city at night", "a close up of a banana", "a view of a pier next to a body of water", "a dog sitting in the sand", "a street scene with a building in the background", "a microwave oven sitting on top of a bus", "a bridge over a body of water", "an old brick building on a rock wall", "a brown and white dog laying in the grass", "a man sitting at a table using a laptop computer", "a palm tree in a grassy field", "a man standing in front of a mountain", "a large tree", "a flock of birds flying over a snow covered mountain", "a man with a sunset in the ocean", "a train on a cloudy day", "a train crossing a bridge over water", "a beach with a pier in the water", "a book is being pulled by two horses", "a glass of water", "a laptop computer on a desk", "a person sitting in front of a computer screen", "a group of people walking down a street next to tall buildings", "a group of people standing in a room", "a brown and black dog standing on top of a grass covered field", "a woman standing in front of a brick wall", "a vase filled with purple flowers", "a man standing in front of a brick house", "a close up of a bird", "a bicycle parked next to a stone wall", "a woman sitting on a couch", "a group of people on a pier next to a body of water", "a couple of people standing on a hill", "a sandy beach next to the water", "person flying through the sky on a grassy hill", "a bunch of food on a table", "a computer keyboard sitting on a wooden table", "a man standing next to a forest", "a group of people flying kites in a field", "a airplane that is sitting on a tarmac at an airport", "a man standing in front of a rocky hill", "a train covered in snow", "a train on a dry grass field", "a herd of cows laying in the snow", "a woman holding a pair of shoes", "a small boat in a large body of water", "a baby sitting in a living room", "a laptop sitting on a table", "person holding a colorful umbrella", "a colorful kite in the rain", "a group of young children flying a kite", "a wooden pier next to a body of water", "a man flying through the air", "a man walking down a dirt road", "a group of sheep", "a close up of a sofa", "there is no image on this page to describe", "a vintage photo of a group of young men sitting on a bench", "a car driving down a busy city street", "a room with a wooden floor", "a bench in front of a building", "a snow covered mountain", "a large body of water", "a man in the dark", "a group of people walking on a city street", "a red kite in a field", "a train with smoke coming from it", "a hand holding a remote control", "a view of a forest", "a truck driving down a runway", "a tree sitting in the grass", "a train traveling past a tall building", "a narrow city street under a bridge", "a flower in a tree", "a sunset in the city", "a person holding up a mountain", "a plane that is flying in the sky", "a palm tree", "a vintage photo of a lake", "an open field", "a close up of smoke in the dark", "a man riding a skateboard in a dark room", "a group of people sitting at a table", "a train is parked at night", "a picture of some sort", "a picture of a large rock", "a bench in front of a mountain", "a cloudy sky", "a person standing in the rain", "a woman standing in front of a rocky hill", "a close up of a stove", "a man sits on a beach near the ocean", "a man with a ship in the background", "a pile of rocks", "a bird is sitting on a rock wall", "a woman talking on a cell phone", "a sunset over the water", "person flying through the air while riding skis", "an old photo of a mountain", "an old church", "a red cup sitting on a table", "a pink cake", "a small boat in a harbor in front of a building", "a desk with a computer monitor", "a man holding a frisbee in the air", "a group of people on a sidewalk", "a man that is swimming in the air", "the tower of the building", "a close up of a monkey", "a man flying through the air while riding a wave", "a woman holding a flower", "a sunset over a body of water", "a plane flying high in the sky", "a group of people walking down a street", "a bird perched on a tree", "a group of people sitting in the dark", "a motorcycle parked in front of a house", "a close up of a bowl of fruit", "a man sits on a beach next to the ocean", "a brown cow standing on a beach", "a green apple", "a flock of birds floating on a large body of water", "a boat on a body of water", "a large tree in a forest", "a large ship in the ocean", "a man standing in front of the ocean", "a cake made to look like a cutting board", "a microwave oven", "a large body of water with a city in the background", "a bird is flying over some clouds", "a bridge over a large body of water", "a bridge over a wooden fence", "a person sitting in the grass", "a man on a surfboard in the ocean", "a red and white", "a close up of a tooth brush", "a vase of flowers on a table", "a close up of a rocky hill", "a car parked on the side of a snow covered road", "a man standing in front of a lake", "person sits on a beach", "a red and white food", "a green plant", "a snow covered field", "a picture of a plant", "a remote control", "a view of a sunset", "a woman standing next to a brick wall", "a man sits on a beach", "a table with a knife", "a person on a surfboard in the water", "a view of a beach", "a top view of a beach", "a man sitting on top of a car", "a tree sitting in the water", "a man in a rocky area by the water", "a picture of a mountain", "a person riding a surf board on a body of water", "a man that is standing in the grass near a body of water", "a city street", "a bird is perched on a tree", "a couple of people on a beach near a body of water", "a vintage photo of a bridge in the city", "a group of people standing on top of a grass covered field", "a black and white photo of a street", "a herd of sheep grazing on a lush green hillside", "person standing in front of a rocky hill", "a flower in it", "a man holding a cell phone", "a group of people standing in a kitchen", "a large long train on a cloudy day", "a group of people standing around each other", "a man sitting at a train station", "a tree filled forest", "a close up of a suitcase", "a close up of a book", "a small boat in a body of water", "a lake with a mountain in the background", "a view of a rocky hill", "a man riding a wave on a surfboard in the water", "a beach covered in snow", "a couple of people that are standing in front of a building", "a man flying through the sky on a grassy hill", "a man sitting on a bench next to a stone wall", "person standing in front of a mountain", "a bunch of items that are on a table", "a tall green grass", "a airplane that is flying in the sky", "a person on some skis in the grass", "a man flying through the air while riding a bicycle on a grassy field", "a group of people swimming in the ocean", "an empty road", "a yellow traffic light sitting next to a lamp", "an old photo of a building", "a man holding a laptop", "a pair of blue scissors", "a person holding a camera", "a close up of a tree", "a herd of sheep grazing in a grassy field", "two people walking on a beach", "a girl in a blue bowl", "a man sitting on a rock by the water", "a room with wooden walls", "a metal clock on the wall", "a yellow car on a city street", "a church with a red brick building", "a man standing on a sidewalk", "a baseball player wearing a red hat", "the roof of a building", "a helicopter flying in the sky", "a laptop sitting on a counter", "a group of men standing on top of a field", "a close up of a keyboard", "a woman looking at a horse", "the tower of clouds", "a tall building", "a white paper", "an image of a train station", "a close up of a person holding a cell phone", "a person holding a surf board", "person standing in front of a door", "a glass of beer", "a pair of skis", "a man riding on top of a snow covered forest", "a hand holding a cell phone", "a close up of a dog wearing a hat", "a man sitting on a bench", "a white truck parked in front of a building", "a field with a mountain in the background", "a bed with a white blanket", "a man standing in front of a sunset", "a flock of birds flying over a body of water", "a piece of bread", "a man throwing a frisbee", "a glass of orange juice", "a fire place sitting in a dark room in front of a fireplace", "a man walking in the snow", "a plane flying over a wave", "a vase filled with pink flowers on a table", "a book store", "a group of people on a city street filled with traffic at night", "a group of people on a beach near a body of water", "a close up of a house", "a man looking at the water", "a boat that is lit up at night", "a man sitting on a bench in front of a store", "a couple of men standing next to a fence", "a statue of an elephant wearing a red neck tie", "a man standing in front of a building", "a black and white photo of a dining room", "a man riding a bicycle down a street", "a man sitting on a brick wall", "a small boat in a body of water near a bridge", "a man with an orange umbrella", "a group of people walking down a street next to a train", "a small camera", "a bird walking on the side of a building", "purple flowers are in a garden", "a view of a city harbor", "a view of a mountain on a cloudy day", "a vase filled with flowers", "a view of a city skyline", "a woman sitting on the floor", "a herd of cattle grazing on a dry grass field", "a lamp post clock in a dark room", "a plant with red flowers", "an umbrella sitting on top of a tree", "a large long train on a bridge", "a flock of birds walking along a river", "a wooden bench next to a lake", "a piece of bread sitting on a rock", "the dog is playing with a frisbee", "a person in the background", "a person holding a laptop", "a bird standing on a dock near the water", "a red brick building sitting next to a stone wall", "a group of people standing on a rocky beach", "a wooden table topped with different types of food", "a person that is doing a trick on a skateboard", "a close up of a vase with flowers in it", "a group of people walking down a city street", "a man flying a kite in a body of water", "a close up of a red apple", "a statue of a tall building", "person on a cell phone", "a view of a city", "a close up of a vase in front of a building", "a bedroom with a bed and a chair", "a river running through a city park bench", "a motorcycle parked on the side of a building", "a view of a person holding a cell phone", "a close up of a cell phone", "a snow covered forest", "a black and white photo of a pier", "person walking down a street", "a traffic light on a rainy day", "a group of people standing in the dark", "a person holding a frisbee in its mouth", "a pair of shoes on a snow board", "a laptop is lit up on the desk", "a group of people standing on top of a pink cake", "a sunset in the field", "a sign in front of a brick building", "a young girl is brushing her teeth", "a man is skiing in forest", "a table topped with lots of shoes", "a boat sitting on top of a wooden bench", "a bunch of white flowers", "a black and white photo of a large body of water", "a city street filled with traffic at night", "a boat sitting on top of a sunset", "a bicycle parked on the side of a building", "a man sitting in a dark room", "a man walking across a street in front of a building", "a bicycle parked on the side of a wooden door", "a man on a surfboard in the water", "a table topped with lots of wooden cabinets", "a close up of a bird feeder", "a zebra walking on a dirt road", "a green field", "the sun sets", "a group of people sitting at a party", "person standing in front of a fireplace", "a group of people on a beach", "a man riding on top of a beach", "a view of a city street filled with traffic at night", "a herd of cattle grazing on a lush green field", "a large pair of scissors", "a wooden cutting board", "a brick wall", "a train is on the side of a mountain", "a blurry picture", "a close up of a blur", "a table with a helmet on", "a train traveling down tracks next to a forest", "a old house in the yard", "two giraffes in a fenced in area", "a laptop computer sitting on a table", "a man with a sunset in the water", "a close up of a pair of sneakers", "a train traveling over a body of water", "a view of a lush green field", "a statue of a man standing next to a tree", "a man sitting in a field", "a little boy standing in the grass", "a path next to a tree in a forest", "a picture of a building", "a bird is standing on a ledge", "a woman standing on a sidewalk", "a man is doing a trick on a skateboard at a skate park", "a train coming down the tracks in a city", "a man sitting on a table", "a flower pot", "a close up of a sunset", "person laying on a couch", "a flower garden", "a black and white photo of a cloudy sky", "a close up of a cat wearing a hat", "a truck that is sitting on the side of a river", "a girl sitting on a chair", "an image of a church", "a laptop computer sitting on a wooden table", "a view of a busy city street", "a desk with a keyboard and a mouse", "a view of a bridge", "a tall tree", "a man using a laptop computer sitting on top of a table", "a man wearing a hat", "a large red bus on a city street", "a table topped with lots of furniture", "a coffee cup sitting on a bed", "a pair of sunglasses", "a close up of a person doing a trick on a skateboard", "a man standing on a rocky hillside", "a woman holding a cat", "a clock tower", "a couple of people that are standing in the grass", "a desktop computer monitor sitting next to a keyboard", "a dirt road", "a person sitting on a table", "a group of sheep in a grassy field", "a large body of water with clouds in the sky", "a tall clock tower sitting under a cloudy blue sky", "a man standing on a beach next to the ocean", "a living room with a couch and a chair", "a harbor with a city in the background", "a person holding a cell phone", "a black and white photo of a dirt road", "a close up of a birthday cake", "a close up of a bird on a tree", "a train on a rainy night", "a man flying through the sky", "a broccoli plant", "a dog that is standing in front of a mirror", "a man sitting on a bench next to a bag of luggage", "a narrow city street", "a purple umbrella", "a harbor filled with boats", "a close up of a bowl", "a kitchen with a table and chairs", "a woman in sunglasses sitting in the grass", "a man standing on a rocky hill", "a large bridge", "a cup of coffee and a glass vase on a table", "a person on a bicycle", "a large wave in the ocean", "a parrot is looking at a bird", "a man standing next to a fence", "a herd of sheep standing on top of a horse", "a laptop computer sitting on a counter", "a man that is sitting on the seat of a car", "a view of a large crowd", "a hummingbird sitting on a branch", "a man standing on a bridge", "a cell phone", "a woman talks on her cell phone", "a man standing in front of a sunset in the field", "a truck with a mountain in the background", "a white bed", "a couple of people that are in the snow", "a chair sitting in front of a table", "a woman sitting on a toilet", "a group of people walking down the beach", "a train that is flying in the sky", "a large tall building with a clock", "person on a skateboard", "a bunch of yellow flowers next to a tree", "a dog standing next to a forest", "a large brick building with a window", "a crowd of people watching a baseball game", "a brown bear is looking at the camera", "person in a dark room", "a view of a train crossing a bridge", "a group of people standing outside of a store", "a chair sitting in front of a cake", "traffic stopped at a red light at night", "a bicycle sitting on a bench", "a man flying through the sky during the night", "a view of the ocean", "a man standing next to a bridge", "a group of people standing around a counter in a restaurant", "a woman sitting on a bench next to a stone wall", "a silhouette of a man in a dark room", "a man sitting on a sidewalk", "a harbor filled with lots of tall buildings", "a street sign on top of a grass covered field", "a black and white photo", "a man in a shirt and tie", "a room filled with furniture and a clock", "a laptop computer", "a boat is docked next to a dock", "a brown dog laying on the grass", "a group of people standing on a subway", "a flock of sheep in a large body of water", "a close up of a lush green field", "a group of people that are standing in the grass", "person sitting on a dock near the water", "a green traffic light at night", "a cup of coffee", "a black and white photo of a large hill", "a dining room table", "a close up of a dog in the snow", "a yellow flower in it", "a woman sitting on the seat of a car", "a clock that is on a bicycle", "a train on a steel track", "a close up of a brick building", "a sign hanging from the side of a building", "a sign sitting on the grass", "a desert on a rocky beach", "a plate of food with a sandwich and fruit", "a computer set up on display", "a group of men on a field playing with a kite", "a man riding a waterfall", "a view of a clock tower in the middle of a city street", "a castle with a clock at the top of a bridge", "a close up of a plastic toy", "a large screen television", "person in a field with a mountain in the background", "a stuffed animal", "a black and white photo of a building", "a piece of food", "a man holding a remote control", "a picture of a pond", "a country road", "a train on a rocky hill", "a group of men standing next to a traffic light", "a river surrounded by forest", "a motorcycle on a dirt road", "a group of people riding on the back of a bicycle", "a person in the rain", "a boat that is on a bridge", "a bridge over water", "a couple of people standing on a busy street", "a couple of people that are walking on the sidewalk", "an old photo of a store", "a close up of a piece of pizza", "a group of people on a beach next to the ocean", "a man flying a kite in front of a sunset", "a large body of water near a house", "a view of a city skyline in the background", "a blurry image of an oven", "a sandy beach", "a tree with snow", "a tree in a forest", "a view of a tree", "a small boat in a large city", "a black and white photo of a large crowd", "a person on a surfboard in the rain with umbrellas", "an old photo of a book", "a christmas tree", "a person with a remote control", "many small boats in a body of water", "a person standing in front of a computer monitor", "a busy city street with tall buildings", "a large ship in the rain", "a close up of a cow behind a fence", "a blurry picture of a pizza", "a police car parked in a parking lot", "a man carrying a surfboard out of the ocean", "person sitting on a bench overlooking the ocean", "a large ship in a body of water", "a bird sitting on a window sill", "there is a large window", "a subway station", "a lit candle", "a brown dog playing with a frisbee", "a glass of wine", "a man standing in the dark", "a person on a laptop computer", "a close up of a person holding a camera", "a person on a surf board in a skate park", "a red and white checkered floor", "a produce market", "a plane flying in a clear blue sky", "a coffee cup sitting on a table", "a close up of a plate of food", "a person holding a snow board in the water", "a book shelf filled with books", "a woman sitting at a table with a cup of coffee", "a car parked in front of an old truck with people in the background", "a bench in front of a fireplace", "a man laying on top of a grass covered field", "a bird sitting on a dock near the water", "a store filled with lots of food", "a large building", "a tree in the snow", "a group of people riding bikes down a street next to a palm tree", "a car is looking at his reflection in a mirror", "a person on a motor bike on the side of a book", "a picture of himself", "a picture of a stone wall", "a bicycle parked next to a basket", "a man on a rocky beach", "a clear blue sky", "a bunch of bananas hanging from a tree", "an image of a plane in the water", "a woman standing in front of a fruit stand", "a sunset over a bridge", "a wooden chair", "a lush green hillside", "person laying on top of a field", "a vase of flowers sitting in a dark room", "a man flying through the clouds in the ocean", "a brown bear sitting in a forest", "a white toilet sitting in a bowl", "a man riding a skateboard on a bridge", "a blurry image of a apple", "a man riding a skateboard up the side of a building", "a plate of food on a table", "a church with a mountain in the background", "a man throwing a baseball", "a banana peel", "a train that is lit up at night", "a sign in the sand", "a train that is on top of a dirt field", "a view of a mountain road", "a building with graffiti on the wall", "an open laptop computer sitting on a wooden table", "the sky in the background", "a bench next to a tree", "a boat in the ocean", "an open umbrella", "some purple flowers are in a field", "a man sitting on a rock", "a man standing on a snow covered mountain", "a herd of sheep standing on a lush green field", "a laptop computer on a wooden table", "a man floating on a body of water", "a person in a field of tall grass", "a boat docked at a pier", "a man on a rocky cliff", "a dog laying on a bench", "a woman holding a red umbrella in the rain", "a man holding a camera", "a little boy sitting in a garden", "a close up of a elephant", "a dark room", "a black and white photo of a parking lot", "a wooden cutting board next to an apple", "a man in a dress shirt and tie", "a keyboard and a mouse", "a man riding on the back of a sunset", "a view of a mountain lake", "a close up of a dry grass field", "a large tree sitting next to a lake", "a close up of a person using a laptop computer", "a bird that is sitting in a pond", "a sky view looking up at night", "a man riding a wave on top of a mountain", "a laptop is lit up at night", "a piece of cake on a wooden cutting board", "a close up of a clock tower", "many small boats in a large body of water", "a plant in a vase", "a man sitting on top of a car window", "a group of sheep in a rocky beach", "a sunset in the background", "person walking down a sidewalk holding an umbrella", "a large pair of scissors sitting on a table", "a laptop computer monitor keyboard and mouse", "a large body of water surrounded by trees", "a harbor filled with lots of snow", "a man standing in front of a mirror", "a wooden bench overlooking a beach", "Ronald Reagan et al. standing next to a man in a suit and tie", "a group of people standing in front of a crowd", "person holding a pair of skis", "a metal fence", "a group of people standing on top of a field", "a sandy beach next to a palm tree", "a man sits on a beach road", "a little girl standing in the grass", "a young girl riding a wave on a surfboard in the water", "a sky view of a body of water", "a bird that is standing in the middle of a forest", "a view of a city at sunset", "a living room filled with furniture next to a building", "a bench in front of a sunset", "a cake made to look like a bear", "a clock that is on a desk", "a group of people posing for a photo", "a garden is in the middle of a park", "an umbrella hanging from a tree", "a large tree in a grassy field", "a man sitting on a plate next to a cup of coffee", "a vintage photo of a large umbrella", "a man riding a wave on a surfboard in the rain", "a view of a church", "a bed with a mountain in the sand", "a bear in a forest", "a man riding a skateboard down a pizza", "a group of people at a train station", "a man and a truck on a beach", "a person in a kitchen", "a person in a forest", "a man standing in front of a piano keyboard", "a piece of cake with fruit in it", "a view of a desert field", "a bowl of fruit sitting on a plate", "person standing next to a window", "a close up of a remote control", "a bench near a brick wall", "a close up of a cow", "a lush green field", "a young lady is posing for a picture", "a group of people sitting at a table in a restaurant", "a woman wearing a hat talking on a cell phone", "a harbor with a train on the tracks", "a young boy cutting a piece of paper", "an old photo of a river", "a large green field", "a person on a surfboard", "a grassy field", "a bottle of wine", "a small blue car parked in front of a building", "a colorful bird standing on the side of the street", "a man standing on a rocky cliff", "a sign in front of a sunset", "a view of a mountain on a lush green hillside", "a laptop sitting on a wooden table", "a crowd of people walking down a busy street", "a man that is sitting in the middle of a city", "a group of people walking down a street next to a car", "a man in a green field", "a man sitting at a table in front of a window", "a tall mountain", "a little girl throwing a frisbee", "a boat sailing in a body of water", "a blurry photo of a train", "a mouse and keyboard", "a bird sitting on a bench", "a close up of a vase", "a train on the tracks at night in a city", "a plate of food and a cup of coffee", "a black and white photo of a woman", "a view of a building", "a white fence", "a flock of birds walking across a snow covered mountain", "person is flying a kite", "a view of a pond", "a dog standing in front of a building", "person riding a wave on top of a mountain", "a bird is perched on the branch of a tree", "a group of people standing in front of a sunset", "a large boat in the water", "a man doing a skateboard trick in front of a building", "a close up of a flower", "person standing in front of a fence looking at a horse", "a bottle of wine in front of a store", "a boy holding a baseball bat", "a man walking across a beach next to the ocean", "a car parked in a parking lot", "a train traveling under a bridge", "a plane flying through a cloudy sky", "a man walking down a dirt road holding an umbrella", "a large body of water at night", "a man with an umbrella", "a blue and white fire hydrant", "a small bird sitting on a branch", "person standing in front of a plane", "a boat sailing in the ocean", "a woman walking down a street talking on a cell phone", "an old photo of a large body of water", "a man riding a snow board on a tree", "a man and a dog running in a field", "an old photo of a large rock", "a stone path", "a large brick building with a wooden door", "a large stone building with a clock tower", "a woman sitting on a kitchen counter", "a man standing on a beach near a body of water", "a man flying a kite in a field", "a microwave is sitting on a counter", "a woman sitting on a bench", "a person jumping a skate board on a city street", "a man flying through the air while riding a skateboard", "a group of people walking across a snow covered mountain", "a man with smoke coming out of the water", "a tower with a sky in the background", "a person on a rock", "a wooded area in the middle of a forest", "a man wearing a neck tie", "a train is parked on the side of a river", "a group of people standing in a subway station", "a man riding skis down the side of a building", "a vase of flowers on a window sill", "a large body of water on a rocky hill", "a car is parked on the side of a road", "a pair of shoes", "a river surrounded by trees", "a close up of a bottle", "a herd of animals in a body of water", "a mouse sitting on a table", "a frog is set up in the sky", "a plant in a garden", "a person standing on a lush green forest", "person is flying a kite in a grassy field", "a woman sitting at a table using a laptop computer", "a tall red brick building", "a man standing on top of a snow covered sidewalk", "a woman brushing her teeth", "a man sitting at a table with a cup of water", "a cow grazing on a lush green hillside", "a man on a rocky hillside", "several boats in the water", "a man riding a motorcycle on a city street", "an image of a plane", "a desk with a monitor and a laptop computer", "a train traveling down tracks near a field", "a close up of a bunch of pink flowers", "a kite flies in the dark", "a toothbrush is sitting on a table", "a giraffe standing next to a tree in a grassy field", "a man flying through the sky on a cloudy day", "a close up of a river", "a wooden bench", "a red bird sits on a beach", "a narrow street in front of a brick building", "a vintage photo of a small town", "a pile of snow", "a giraffe sitting down in front of a building", "a subway train at a train station", "a room with a fireplace and a large window", "a close up of a pond", "person in a hat is talking on the cell phone", "a reflection of a car", "a black bird", "a close up of a stone wall", "a bench in a field", "a white plate topped with lots of food", "a pan of food", "a group of men on a rocky beach", "person walking down a dirt road", "a woman standing in front of trees", "a man holding a pair of skis", "a man on a horse in a field", "a clock tower is lit up at night", "a person holding a tennis racquet", "a store front of a brick building", "a large brick building", "a man standing next to a window", "a park bench next to a tree", "a flock of birds sitting on top of a building", "a close up of algae", "a vase with a flower garden", "a man sitting in front of a box", "a large building in the city", "a black and white photo of a stone wall", "the sky is full of clouds", "a person standing on a dry grass field", "a man riding a wave on a mountain", "person that is swimming in the water", "a beach with a mountain in the background", "a tree with snow on the ground", "a group of ware", "a man with a mountain in the background", "a view of a city at night", "a man standing on a stage", "a close up of a green light", "a mouse sitting on a wooden table", "an old photo of a train", "a large fish", "a crowd of people standing in front of a building", "a man talking on a cell phone", "person sitting at a desk", "a desk with a monitor keyboard and mouse", "a sign hanging on a wall", "person standing on top of a wooden bench", "a close up of a person holding a luggage bag", "a close up of a garden", "a narrow city street at night", "a boat that is sitting on a rocky beach", "a view of a pier", "a traffic light on a city street", "person sleeping on a blanket", "an image of a sunset", "a desert on a mountain road", "a man sitting at a table in a dark room", "a book sitting on a wooden surface", "a view of a clock tower in front of a body of water", "a man is flying a kite in a field", "a bench next to a forest", "a young boy standing on a beach", "a little girl laying on a beach", "a group of cactus", "a box that has a camera", "a bowl of fruit on a plate", "a group of people walking across a bridge", "a laptop computer sitting on a table next to a cup of coffee", "a group of people standing on a hill", "a building with graffiti on the side of a fence", "a small airplane sitting on the tarmac at an airport", "a large clock tower towering over the city of london", "a man on a rock in the middle of a lake", "a man is using his cell phone", "a beach with a surfboard", "a sign with a mountain in the background", "a man is doing a trick on a rocky hill", "a bird is standing in the grass", "a view of a river", "a woman wearing a hat and glasses", "a yellow flower in a tree", "person talking on a cell phone", "a stop light that is on top of a hill", "a man standing on a beach holding a surfboard", "a waterfall next to a forest", "a close up of a cat laying on a blanket", "a close up of a star on top", "a blurry picture of a cup", "a city street covered in snow", "a truck on a grassy field", "a large stone building with a clock", "a tall dry grass field", "a person standing in front of a cloudy sky", "a chair that is in the water", "a piece of wood next to a tree", "a narrow road next to a forest", "a yellow wall", "a man riding a skateboard down a rail", "a small vase on a table", "person holding an umbrella on a rainy night", "a herd of sheep walking across a grass covered field", "a man sitting on a rock in the ocean", "a group of people standing around waiting for a train", "a black and white photo of a beach", "a plane with smoke coming out of the water", "a woman sitting on a bed", "a woman holding a cake with candles", "a table with wine glasses", "a table full of food", "a girl flying a kite in a grassy field", "a close up of a clock", "a large pair of scissors sitting on a wooden surface", "a fire oven", "a snow covered road", "a flower hanging from a tree", "a ship is docked next to a bridge", "a group of people standing on a grill", "a brown cow standing in the sand", "a black and white photo of a wooded area", "a tall clock tower under a cloudy sky", "a car parked next to a busy street", "a group of people standing on top of a beach", "a green door", "a cake made to look like a cup", "a man standing on a grassy hill", "a large body of water in front of a house", "a close up of a black background", "a young man riding a surfboard in the water", "an empty sidewalk next to a building", "a vintage photo of a river", "a flock of birds flying over a crowd of people", "a pair of glasses sitting on a table", "a clock sits on a beach near the ocean", "a man using a laptop computer", "a building with a mountain in the background", "a display case", "a person standing on a path in the woods", "a tall clock tower towering over a city", "a close up of broccoli", "a group of young men sitting next to a body of water", "a person holding a tray of food on a table", "a knife sitting on a table"
    ];

    private defaultCaptions: Array<string> = [
        "Alternative facts are free",
        "The alternative to \"fact\" is \"fictions.\"",
        "Alternative facts are not facts. They're falsehoods",
        "Doublethink",
        "post-truth",
        "create a different understanding of reality",
        "truthiness",
        "#alternative facts",
        "#SeanSpicerSays",
        "#SeanSpicerFacts",
        "#spicerfacts"
    ];

    getRandomCaption(): string {
        return this.captions[Math.floor(Math.random() * this.captions.length)];
    }

    getRandomDefaultCaption(): string {
        return this.defaultCaptions[Math.floor(Math.random() * this.defaultCaptions.length)];
    }
}