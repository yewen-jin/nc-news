export function makeErrorCat(errCode, errMsg) {
    const errorCat = [];
    errorCat.push(`
         #################################
        #                               #
       #          ${errCode}                  #
        #      ${errMsg}       #
       #                               #
       #################################
                              ####
                             ######
                              ####

                           ^ _ ^
                          ( * * )
                          ={ - }=
                            |_|

                            `);
    errorCat.push(`
         #################################
        #                               #
       #          ${errCode}                  #
        #      ${errMsg}_      #
       #                               #
       #################################
                              ####
                             ######
                              ####

                           ^ _ ^
                          ( - - )
                          ={ - }=
                            |_|

                            `);
    // console.log(errorCat, "errorCat");
    return errorCat;
}

export function makeLoadingCat() {
    const loadingCat = [];
    loadingCat.push(`
      Loading..
            /\\_/\\
           ( o.o )
           =( v )=
           /|   |\\
          \` '   ' \`
        `);
    loadingCat.push(`
      Loading...
            /\\_/\\
           ( -.- )
           =( v )=
            |\\ /|
            ' \` '
        `);
    return loadingCat;
}
