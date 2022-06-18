var quotes = 2;
var answers = [1, 1]

function addQuote() {
    quotes++;

    const quote = document.createElement("div");
    quote.id = ("Q-" + quotes);
    document.getElementById("questions").appendChild(quote);

    const p = document.createElement("p");
    p.textContent = ("Citation " + quotes);
    quote.appendChild(p);

    const input = document.createElement("input");
    input.id = ("quote-" + quotes);
    input.placeholder = "Citation";
    quote.appendChild(input);

    const div = document.createElement("div");
    div.id = ("answers-" + quotes)
    quote.appendChild(div);

    answers.push(1);

    const answer = document.createElement("input");
    answer.id = ("answer-" + quotes + "-1");
    answer.placeholder = "Réponse 1"
    div.appendChild(answer);
    
    const addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.setAttribute("onclick", "addAnswer(" + quotes + ")")
    addButton.id = ("addAnswer-" + quotes);
    div.appendChild(addButton);

    const removeButton = document.createElement("button");
    removeButton.textContent = "-";
    removeButton.setAttribute("onclick", "removeAnswer(" + quotes + ")")
    removeButton.id = ("removeAnswer-" + quotes);
    div.appendChild(removeButton);
}

function removeQuote() {
    if (quotes <= 1) return;
    document.getElementById("Q-" + quotes).remove();
    answers.pop();
    quotes--;
}

function addAnswer(nb) {
    answers[nb-1]++;
    const answer = document.createElement("input");
    answer.id = ("answer-" + nb + "-" + answers[nb-1]);
    answer.placeholder = ("Réponse " + answers[nb-1]);
    document.getElementById("answers-" + nb).insertBefore(answer, document.getElementById("addAnswer-" + nb))
}

function removeAnswer(nb) {
    if (answers[nb-1] <= 1) return;
    document.getElementById("answer-" + nb + "-" + answers[nb-1]).remove();
    answers[nb-1]--;
}

function download() {
    window.alert("WIP")
}