// inclusive range
export function ran_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//deci to binary
export function twos_complement(num, width) {
    // zero shift right converts the number to a signed 32 bit number?
    let binary = (num >>> 0).toString(2);
    if (binary.length < width) {
        //pad with 0s
        return binary.padStart(width, "0");
    } else if (binary.length > width) {
        return binary.slice(-width);
    } else {
        return binary;
    }
}

// binary to twos complement decimal
// 1010 -> -6
export function twos_complement_deci(binary, width) {
    let sign_weight = -(Math.pow(2, width));
    let posi = twos_complement(parseInt(binary, 2), width);
    return sign_weight + parseInt(posi, 2);
}
export function generate_twoscomp_to_deci() {
    /*  let width_options = [4, 8];
     let ran_choice = ran_int(0, width_options.length - 1);
     let bit_width = width_options[ran_choice]; */
    let bit_width = ran_int(4, 6);

    let num = ran_int(0, -((Math.pow(2, bit_width) / 2) - 1));

    let binary = twos_complement(num, bit_width);
    let signed_deci = twos_complement_deci(binary, bit_width);
    let unsigned_deci = parseInt(binary, 2);
    return {
        type: "input",
        question: `<h2>Given a bit-width of ${bit_width}, convert binary ${binary} , to both signed and unsigned decimal</h2>`,
        answer: `${signed_deci},${unsigned_deci}`,
        input_answer_hint: "ex: -30,34",
    };
}

export function generate_decimal_to_twoscomp() {
    let bit_width = ran_int(4, 6);

    let num = ran_int(0, -((Math.pow(2, bit_width) / 2) - 1));

    let binary = twos_complement(num, bit_width);
    return {
        type: "input",
        question: `<h2>Given a bit-width of ${bit_width}, convert the decimal number ${num} to two's complement binary</h2>`,
        answer: binary,
        input_answer_hint: "Answer ex: 010101",
    };
}

export function generate_hex_to_binary() {
    let ran = ran_int(0, Math.pow(2, 24));
    let binary = twos_complement(ran, 0);
    let hex = ran.toString(16);
    return {
        type: "input",
        question: `<h2>Convert ${hex} to binary?</h2>`,
        answer: binary,
        input_answer_hint: "Answer ex: 01010",
    }
}

export function generate_binary_to_hex() {
    let ran = ran_int(0, Math.pow(2, 24));
    let binary = twos_complement(ran, 0);
    let hex = ran.toString(16);
    return {
        type: "input",
        question: `<h2>Convert ${binary} to hex?</h2>`,
        answer: "0x" + hex,
        input_answer_hint: "Answer ex: 0xbfa1",
    }
}

export function generate_decimal_to_hex() {
    let ran = ran_int(0, 255);
    let hex = ran.toString(16);
    return {
        type: "input",
        question: `<h2>Convert ${ran} to hex?</h2>`,
        answer: "0x" + hex,
        input_answer_hint: "Answer ex: 0xbfa1",
    }
}

export function generate_hex_to_decimal() {
    let ran = ran_int(0, 255);
    let hex = ran.toString(16);
    return {
        type: "input",
        question: `<h2>Convert ${hex}<sub><i>16</i></sub> to decimal?</h2>`,
        answer: ran,
        input_answer_hint: "Answer ex: 2",
    }
}


export function generate_decimal_to_binary() {
    let num = ran_int(0, 255);
    return {
        type: "input",
        question: `<h2>Convert ${num} to binary?(8 bits)</h2>`,
        answer: twos_complement(num, 8),
        input_answer_hint: "Answer ex: 3",
    };
};

export function generate_binary_to_decimal() {
    let num = ran_int(0, 255);
    let binary = twos_complement(num, 8);
    return {
        type: "input",
        question: `<h2>Convert ${binary} to decimal?</h2>`,
        answer: parseInt(binary, 2).toString(),
        input_answer_hint: "Answer ex: 4",
    };
};

export function generate_bitwise_vec_operations() {
    let a = ran_int(0, 255) >>> 0;
    let b = ran_int(0, 255) >>> 0;
    let binary_a = twos_complement(a, 8);
    let binary_b = twos_complement(b, 8);
    let random_index = ran_int(0, 2);
    let ops = ["|", "&", "^"];
    let answer;
    let random_operation = ops[random_index];
    if (random_operation === "|") {
        answer = a | b;
    } else if (random_operation === "&") {
        answer = a & b;
    } else if (random_operation === "^") {
        answer = a ^ b;
    }

    return {
        type: "input",
        question: `
        <h2>Given</h2>
        <pre>
        a = ${binary_a}
        b = ${binary_b}
        </pre>
        <h2>what is a ${random_operation} b ?</h2>
        `,
        answer: twos_complement(answer, 8),
        input_answer_hint: "Answer ex: 000100",
    }
}

export function generate_bitwise_shift() {
    let a = ran_int(0, 255) >>> 0;
    let shift_amount = ran_int(1, 6);
    let hexed = a.toString(16);
    let binary_a = twos_complement(a, 8);
    let ops = ["<<", ">>", ">>>"]; //left shift, logical right, arithmetic right
    let random_index = ran_int(0, ops.length - 1);
    let answer;
    if (ops[random_index] === "<<") {
        answer = binary_a.substring(shift_amount).padEnd(binary_a.length, "0");
    } else if (ops[random_index] == ">>>") { //arithmetic on signed
        let fill = "0";
        if (binary_a.substring(0, 1) == "1") {
            fill = "1";
        }
        answer = binary_a.substring(0, binary_a.length - shift_amount).padStart(binary_a.length, fill);
    } else { // >> , logical no fill

        answer = binary_a.substring(0, binary_a.length - shift_amount).padStart(binary_a.length, "0");
    }
    return {
        type: "input",
        question: `
        <h2>What is ${hexed}<sub>16</sub> ${ops[random_index]} ${shift_amount} in binary?</h2>
        `,
        answer: answer,
        input_answer_hint: "Answer ex: 000100",
    }
}

// converts hash url to title, e.g binary_to_decimal -> Binary To Decimal
export function convert_to_title(st: string): string {
    let words = st.split("_");
    let upper_cased = words.map((item) => {
        return item.charAt(0).toLocaleUpperCase() + item.slice(1);
    });
    let result = upper_cased.reduceRight((item, acc) => {
        return acc + " " + item;
    });
    return result;
}

export function convert_to_hash(st: string): string {
    let regex = / /gi;
    let replace_spaces = st.replace(regex, "_");
    let res = replace_spaces.toLowerCase();
    return res;
}


export let TOC = [
    {
        title: "Binary To Decimal",
        id: 0.0, //for sorting TOC sequentially style 
        num_of_problems: 5,
        problem_index: 0,
        tags: [""], //array of strings for querying,
        data: [], //array of the problem data 
        progress: [], // array of results,
        gen: generate_binary_to_decimal,
    },
    {
        title: "Decimal To Binary",
        id: 0.1, //for sorting TOC sequentially style 
        num_of_problems: 5,
        problem_index: 0,
        tags: [""], //array of strings for querying,
        data: [], //array of the problem data 
        progress: [], // array of results,
        gen: generate_decimal_to_binary,
    },
    {
        title: "Binary to Hex",
        id: 2.1,
        num_of_problems: 5,
        problem_index: 0,
        tags: [""],
        data: [],
        progress: [],
        gen: generate_binary_to_hex,
    },
    {
        title: "Hex to Binary",
        id: 2.1,
        num_of_problems: 5,
        problem_index: 0,
        tags: [""],
        data: [],
        progress: [],
        gen: generate_hex_to_binary,
    },
    {
        title: "Decimal to Hex",
        id: 2.3,
        num_of_problems: 5,
        problem_index: 0,
        tags: [""],
        data: [],
        progress: [],
        gen: generate_decimal_to_hex,
    },
    {
        title: "Hex to Decimal",
        id: 2.3,
        num_of_problems: 5,
        problem_index: 0,
        tags: [""],
        data: [],
        progress: [],
        gen: generate_hex_to_decimal,
    }, {
        title: "Bitwise Operations",
        id: 2.8,
        num_of_problems: 5,
        problem_index: 0,
        tags: [""],
        data: [],
        progress: [],
        gen: generate_bitwise_vec_operations,
    }, {
        title: "Bitshifting (arithmetic and logical)",
        id: 2.16,
        num_of_problems: 20,
        problem_index: 0,
        tags: [""],
        data: [],
        progress: [],
        gen: generate_bitwise_shift,
    }, {
        title: "Decimal to Binary(two's complement)",
        id: 2.17,
        num_of_problems: 10,
        problem_index: 0,
        tags: [""],
        data: [],
        progress: [],
        gen: generate_decimal_to_twoscomp,
    },
    {
        title: "Binary(two's complement) to Decimal(unsigned)",
        id: 2.19,
        num_of_problems: 10,
        problem_index: 0,
        tags: [""],
        data: [],
        progress: [],
        gen: generate_twoscomp_to_deci,
    },
];