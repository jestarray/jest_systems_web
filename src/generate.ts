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
    console.log(res);
    return res;

    let words = st.split("_");
    let upper_cased = words.map((item) => {
        return item.charAt(0).toLocaleUpperCase() + item.slice(1);
    });
    let result = upper_cased.reduceRight((item, acc) => {
        return acc + " " + item;
    });
    return result;
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
    }
];