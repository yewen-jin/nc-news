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
