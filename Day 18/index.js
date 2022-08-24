function pre () {
    var prob = 0.6;
    var prize = 30;
    var pay = 60;
    var addUp = prob * prize - pay;
    if (prob * prize > pay)
    {
        document.write(true);
    }
    else {
        document.write(false);
    }
}