function steveUses(endorsement) {
    var endorsements = endorsement.getAttribute("data-company-type");
    alert("Steve uses " + endorsements + " " + endorsement.innerHTML);
}