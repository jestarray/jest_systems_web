

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
    return new Problem("input",
        `<h2>Given a bit-width of ${bit_width}, convert binary ${binary} , to both signed and unsigned decimal</h2>`,
        `${signed_deci},${unsigned_deci}`,
        "ex: -30,34");
}

export function subscript(string, base) {
    return `${string}<sub>${base}</sub>`
}

export function generate_decimal_to_twoscomp() {
    let bit_width = ran_int(4, 6);

    let num = ran_int(0, -((Math.pow(2, bit_width) / 2) - 1));

    let binary = twos_complement(num, bit_width);
    return new Problem(
        "input",
        `<h2>Given a bit-width of ${bit_width}, convert the decimal number ${num} to two's complement binary</h2>`,
        binary,
        "Answer ex: 010101",
    );
}

export function generate_hex_to_binary() {
    let ran = ran_int(0, Math.pow(2, 24));
    let binary = twos_complement(ran, 0);
    let hex = ran.toString(16);
    return new Problem(
        "input",
        `<h2>Convert ${subscript(hex, 16)} to binary?</h2>`,
        binary,
        "Answer ex: 01010",
    );
}

export function generate_binary_to_hex() {
    let ran = ran_int(0, Math.pow(2, 24));
    let binary = twos_complement(ran, 0);
    let hex = ran.toString(16);
    return new Problem(
        "input",
        `<h2>Convert ${subscript(binary, 2)} to hex?</h2>`,
        "0x" + hex,
        "prefix with '0x', example: 0xbfa11",
    );
}

export function generate_decimal_to_hex() {
    let ran = ran_int(0, 255);
    let hex = ran.toString(16);
    return new Problem(
        "input",
        `<h2>Convert ${subscript(ran, 10)} to hex?</h2>`,
        "0x" + hex,
        "prefix with '0x', example: 0xbfa1",
    )
}

export function generate_hex_to_decimal() {
    let ran = ran_int(0, 255);
    let hex = ran.toString(16);
    return new Problem(
        "input",
        `<h2>Convert ${subscript(hex, 16)} to decimal?</h2>`,
        ran,
        "Answer ex: 3",
    );
}


export function generate_decimal_to_binary() {
    let num = ran_int(0, 255);
    return new Problem(
        "input",
        `<h2>Convert ${subscript(num, 10)} to binary?(8 bits)</h2>`,
        twos_complement(num, 8),
        "make sure answer is 8 bits e.g: 00010110",
    );
};

export function generate_binary_to_decimal() {
    let num = ran_int(0, 255);
    let binary = twos_complement(num, 8);
    return new Problem(
        "input",
        `<h2>Convert ${subscript(binary, 2)} to decimal?</h2>`,
        parseInt(binary, 2).toString(),
        "Answer ex: 3",
    );
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

    return new Problem(
        "input",
        `
        <h2>Given</h2>
        <pre>
        a = ${binary_a}
        b = ${binary_b}
        </pre>
        <h2>what is a ${random_operation} b ?</h2>
        `,
        twos_complement(answer, 8),
        "Answer ex: 000100",
    );
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
    return new Problem(
        "input",
        `
        <h2>What is ${hexed}<sub>16</sub> ${ops[random_index]} ${shift_amount} in binary?</h2>
        `,
        answer,
        "Answer ex: 000100",
    );
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

export class Problem {
    type: string;
    question: string;
    answer: string | number;
    input_answer_hint: string;
    result: string;
    tries: number;
    time: number;
    hints: number;
    constructor(type: string, question: string, answer: string | number, input_answer_hint: string) {
        this.type = type;
        this.question = question;
        this.answer = answer;
        this.input_answer_hint = input_answer_hint;
        this.result = "?";
        this.tries = 0;
        this.time = 0;
        this.hints = 0;
        /* type: "input",
        question: `<h2>Convert ${subscript(binary, 2)} to hex?</h2>`,
        answer: "0x" + hex,
        input_answer_hint: "prefix with '0x', example: 0xbfa11", */
    }
}

export class ProblemSet {
    title: string;
    id: number;
    problem_index: number;
    num_of_problems: number;
    tags: string[];
    data: Problem[];
    gen: Function;

    constructor(title: string, id: number, num_of_problems: number, tags: string[], gen: Function) {
        this.title = title;
        this.id = id;
        this.problem_index = 0;
        this.num_of_problems = num_of_problems;
        this.tags = tags;
        this.data = [];
        this.gen = gen;
    }
}

export let TOC = [
    new ProblemSet("Binary To Decimal", 0.0, 5, [], generate_binary_to_decimal),
    new ProblemSet(
        "Decimal To Binary",
        0.1, //for sorting TOC sequentially style 
        5,
        [], // array of results,
        generate_decimal_to_binary,
    ),
    new ProblemSet(
        "Binary to Hex",
        2.1,
        5,
        [],
        generate_binary_to_hex,
    ),
    new ProblemSet(
        "Hex to Binary",
        2.1,
        5,
        [],
        generate_hex_to_binary,
    ),
    new ProblemSet(
        "Decimal to Hex",
        2.3,
        5,
        [],
        generate_decimal_to_hex,
    ),
    new ProblemSet(
        "Hex to Decimal",
        2.3,
        5,
        [],
        generate_hex_to_decimal,
    ),
    new ProblemSet(
        "Bitwise Operations",
        2.8,
        5,
        [],
        generate_bitwise_vec_operations,
    ),
    new ProblemSet(
        "Bitshifting (arithmetic and logical)",
        2.16,
        20,
        [],
        generate_bitwise_shift,
    ),
    new ProblemSet(
        "Decimal to Binary(two's complement)",
        2.17,
        10,
        [],
        generate_decimal_to_twoscomp,
    ),
    new ProblemSet(
        "Binary(two's complement) to Decimal(unsigned and signed)",
        2.19,
        10,
        [],
        generate_twoscomp_to_deci,
    ),
    new ProblemSet(
        "Binary addition and subtraction(two's complement)",
        2.19,
        10,
        [],
        generate_twoscomp_to_deci,
    ),
];