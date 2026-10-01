/*
================================================
 ALEX ONOME NATASHA
 BIRTHDAY WEBSITE
================================================

 Surprise unlock:

 October 7, 2026
 12:00 AM
 Nigeria time (WAT / UTC+1)

================================================
*/


/*
-----------------------------------------------
 BIRTHDAY UNLOCK TIME
-----------------------------------------------

JavaScript Date.UTC uses UTC.

Nigeria is UTC+1.

So:

October 7, 2026
00:00 Nigeria

=

October 6, 2026
23:00 UTC
*/

const NIGERIA_UNLOCK_UTC =
    Date.UTC(
        2026,
        9,
        7,
        0,
        0,
        0
    )
    -
    (60 * 60 * 1000);



/*
-----------------------------------------------
 GET TIME REMAINING
-----------------------------------------------
*/

function getTimeRemaining() {

    return (
        NIGERIA_UNLOCK_UTC -
        Date.now()
    );

}



/*
-----------------------------------------------
 FORMAT NUMBERS
-----------------------------------------------
*/

function formatNumber(number) {

    return String(
        Math.max(0, number)
    ).padStart(2, "0");

}



/*
-----------------------------------------------
 UPDATE COUNTDOWN
-----------------------------------------------
*/

function setCountdown(
    prefix,
    difference
) {


    const totalSeconds =
        Math.max(
            0,
            Math.floor(
                difference / 1000
            )
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400)
            / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600)
            / 60
        );


    const seconds =
        totalSeconds % 60;



    const daysElement =
        document.getElementById(
            prefix + "days"
        );


    const hoursElement =
        document.getElementById(
            prefix + "hours"
        );


    const minutesElement =
        document.getElementById(
            prefix + "minutes"
        );


    const secondsElement =
        document.getElementById(
            prefix + "seconds"
        );



    if (daysElement) {

        daysElement.textContent =
            formatNumber(days);

    }


    if (hoursElement) {

        hoursElement.textContent =
            formatNumber(hours);

    }


    if (minutesElement) {

        minutesElement.textContent =
            formatNumber(minutes);

    }


    if (secondsElement) {

        secondsElement.textContent =
            formatNumber(seconds);

    }

}



/*
-----------------------------------------------
 UNLOCK BIRTHDAY PAGE
-----------------------------------------------
*/

function unlockBirthdayPage() {


    const lockedPage =
        document.getElementById(
            "lockedPage"
        );


    const birthdayContent =
        document.getElementById(
            "birthdayContent"
        );


    if (lockedPage) {

        lockedPage.hidden =
            true;

    }


    if (birthdayContent) {

        birthdayContent.hidden =
            false;

    }

}



/*
-----------------------------------------------
 UPDATE EVERYTHING
-----------------------------------------------
*/

function updateSite() {


    const difference =
        getTimeRemaining();



    /*
    MAIN LANDING PAGE
    */

    setCountdown(
        "",
        difference
    );



    /*
    LOCKED SURPRISE PAGE
    */

    setCountdown(
        "lock",
        difference
    );



    /*
    CHECK WHETHER IT IS
    BIRTHDAY TIME
    */

    if (difference <= 0) {

        unlockBirthdayPage();

    }

}



/*
-----------------------------------------------
 START COUNTDOWN
-----------------------------------------------
*/

updateSite();


setInterval(
    updateSite,
    1000
);




/*
================================================
 MAKE A WISH BUTTON
================================================
*/

const wishButton =
    document.getElementById(
        "wishBtn"
    );


const wishText =
    document.getElementById(
        "wish"
    );



if (wishButton) {


    wishButton.addEventListener(
        "click",
        () => {


            wishText.textContent =
                "May this wish find its way to you. ✦";


            wishButton.textContent =
                "Wish made ♡";



            /*
            FLOATING HEARTS
            */

            for (
                let i = 0;
                i < 15;
                i++
            ) {


                const heart =
                    document.createElement(
                        "span"
                    );


                heart.textContent =
                    ["♡", "✦", "·"]
                    [i % 3];


                heart.style.position =
                    "fixed";


                heart.style.left =
                    (
                        40 +
                        Math.random() * 20
                    )
                    + "vw";


                heart.style.top =
                    (
                        55 +
                        Math.random() * 10
                    )
                    + "vh";


                heart.style.color =
                    "#e9a7b8";


                heart.style.fontSize =
                    (
                        12 +
                        Math.random() * 18
                    )
                    + "px";


                heart.style.pointerEvents =
                    "none";


                heart.style.zIndex =
                    "20";


                heart.style.transition =
                    "transform 1.5s ease, opacity 1.5s ease";



                document.body.appendChild(
                    heart
                );



                requestAnimationFrame(
                    () => {


                        heart.style.transform =
                            `translate(
                                ${(Math.random() - 0.5) * 180}px,
                                -${80 + Math.random() * 180}px
                            )
                            rotate(
                                ${Math.random() * 180 - 90}deg
                            )`;


                        heart.style.opacity =
                            "0";


                    }
                );



                setTimeout(
                    () => {

                        heart.remove();

                    },
                    1600
                );

            }

        }
    );

}
