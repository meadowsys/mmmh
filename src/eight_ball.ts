import rand_from_interval from "./rand_from_interval";

const responses = [
	// yes
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",

	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",

	// maybe
	"Reply hazy, try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",

	// no lol
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful"
];

function eight_ball(question: string): string {
	if (!question || question === "") return "What's your question?";
	if (!question.endsWith("?")) return "That doesn't look like a question. Questions end in a question mark.";
	if (question === "?") return "A question mark isn't a question!";

	return responses[rand_from_interval(0, responses.length, true)];
}

export default eight_ball;
