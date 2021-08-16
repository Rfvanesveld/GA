checkSterrenbeeld = (month, day) => {
    if ((month == 1 && day <= 19) || (month == 12 && day >= 22)) {
        return "Steenbok";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 19)) {
        return "Waterman";
    } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
        return "Vissen";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Ram";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Stier";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
        return "Tweeling";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "Kreeft";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "Leeuw";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "Maagd";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "Weegschaal";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "Schorpioen";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "Boogschutter";
    }
};