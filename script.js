// currency exchange

function currencyExchange(n, x, y, z, a, b, c) {
    let counter = 0
    for (let i = 0; i <= x; i++) {
        for (let j = 0; j <= y; j++) {
            for (let k = 0; k <= z; k++) {

                let res = i * a + j * b + k * c
                if (res === n) {
                    counter++
                }
            }
        }
    }
    console.log(counter)
}

currencyExchange(100000, 2, 1, 1, 50000, 70000, 30000)
currencyExchange(60000, 3, 3, 3, 30000, 20000, 30000)
currencyExchange(32000, 2, 1, 1, 4200, 7500, 3600)

// password string

function passwordString(n, k, str) {
    if (str.length === n) {
        let str3
        for (let j = 0; j < k; j++) {
            let arr1 = []
            str = str.toLowerCase()
            let arr = str.split('')
            let m = arr.pop()
            arr.unshift(m)
            str = arr.join('')

            for (let i = 0; i <= str.length - 1; i++) {
                let codeAsci = str.charCodeAt(i)
                if (codeAsci === 122) {
                    codeAsci = 97
                    arr1.push(String.fromCharCode(codeAsci))
                } else {
                    codeAsci = codeAsci + 1
                    arr1.push(String.fromCharCode(codeAsci))
                }
            }
            str3 = arr1.join('')
            str = str3
        }
        console.log(str3)
    } else {
        console.log("Not equal string length with n !!!")
    }
}

passwordString(3, 1, "abz")
passwordString(4, 5, "abcd")
passwordString(5, 2, "hzvwa")
passwordString(5, 1, "jas")

//subasa and friends

function goals(n, a, b, arr) {
    let firstHalf = 45 + a;
    let secondHalf = 90 + b;
    if (n === arr.length) {
        let res1
        let res2
        for (let i = 0; i < Math.round(arr.length / 2); i++) {
            if (arr[i] > 0 && arr[i] <= firstHalf) {
                res1 = "Yes"
            } else {
               res1 = "No"
            }
        }
        for (let j =Math.round(arr.length / 2); j < arr.length; j++) {
            if (arr[j] >= 45 && arr[j] <= secondHalf) {
                res2 = "Yes"
            } else {
                res2 = "No"
            }
        }
        if (res2 === "Yes" && res1 === "Yes"){
            console.log("Yes")
        }else {
            console.log("No")
        }
    } else {
        console.log("the number of input is not equal to the number of goal :|")
    }
}

goals(4, 2, 4, [4, 45, 48, 93])
goals(5, 3, 2, [4, 47, 45, 80, 91])
goals(4, 2, 2, [4, 48, 45, 80])
goals(6, 3, 2, [8, 48, 45, 70, 81, 94])