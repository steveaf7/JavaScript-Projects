function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? "You can vote!":"You are not old enough to vote";
    document.getElementById("Vote").innerHTML = Can_vote;
}